import { NextResponse } from 'next/server'

const USERNAME = 'AamirAlam'
const TOKEN = process.env.GITHUB_TOKEN

const headers = (): HeadersInit =>
  TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}

export async function GET() {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${USERNAME}`, {
        headers: headers(),
        next: { revalidate: 3600 },
      }),
      fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`, {
        headers: headers(),
        next: { revalidate: 3600 },
      }),
    ])

    const user = await userRes.json()
    const repos = await reposRes.json()

    const totalStars = Array.isArray(repos)
      ? repos.reduce((sum: number, r: { stargazers_count: number }) => sum + r.stargazers_count, 0)
      : 0

    const topRepos = Array.isArray(repos)
      ? repos
          .filter((r: { fork: boolean }) => !r.fork)
          .sort(
            (a: { stargazers_count: number }, b: { stargazers_count: number }) =>
              b.stargazers_count - a.stargazers_count
          )
          .slice(0, 6)
          .map((r: {
            name: string
            description: string | null
            html_url: string
            language: string | null
            stargazers_count: number
            fork: boolean
          }) => ({
            name: r.name,
            description: r.description,
            url: r.html_url,
            language: r.language,
            stars: r.stargazers_count,
          }))
      : []

    let contributions = null
    if (TOKEN) {
      const gqlRes = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            query {
              user(login: "${USERNAME}") {
                contributionsCollection {
                  contributionCalendar {
                    totalContributions
                    weeks {
                      contributionDays {
                        contributionCount
                        date
                      }
                    }
                  }
                }
              }
            }
          `,
        }),
        next: { revalidate: 3600 },
      })
      const gql = await gqlRes.json()
      contributions =
        gql?.data?.user?.contributionsCollection?.contributionCalendar ?? null
    }

    return NextResponse.json({
      followers: user.followers ?? 0,
      following: user.following ?? 0,
      publicRepos: user.public_repos ?? 0,
      totalStars,
      avatar: user.avatar_url ?? null,
      topRepos,
      contributions,
    })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch GitHub data' }, { status: 500 })
  }
}
