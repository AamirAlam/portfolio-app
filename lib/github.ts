// Server-only GitHub data access + pure repo selection.
// selectRepos is kept separate from the fetch so it can be unit-tested
// without mocking `fetch`.

const USERNAME = 'AamirAlam'
const API = 'https://api.github.com'
const TOKEN = process.env.GITHUB_TOKEN

export interface Repo {
  name: string
  description: string
  url: string // html_url
  homepage: string | null
  language: string | null
  stars: number
  pushedAt: string // ISO
  topics: string[]
}

export interface ContributionCalendar {
  totalContributions: number
  weeks: { contributionDays: { contributionCount: number; date: string }[] }[]
}

export const EXCLUDE = ['AamirAlam', 'portfolio-app']
export const FEATURED: string[] = []

// Shape of a raw GitHub REST repo, narrowed to the fields we read.
interface RawRepo {
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  pushed_at: string
  topics?: string[]
  fork: boolean
  archived: boolean
}

function isRawRepo(value: unknown): value is RawRepo {
  if (typeof value !== 'object' || value === null) return false
  const r = value as Record<string, unknown>
  return typeof r.name === 'string' && typeof r.html_url === 'string'
}

export function selectRepos(
  raw: unknown,
  opts: { exclude: string[]; featured: string[]; limit: number }
): Repo[] {
  if (!Array.isArray(raw)) return []

  const kept = raw.filter(isRawRepo).filter(
    (r) =>
      !r.fork &&
      !r.archived &&
      !!r.description &&
      !opts.exclude.includes(r.name)
  )

  const featuredRank = (name: string) => {
    const i = opts.featured.indexOf(name)
    return i === -1 ? Number.MAX_SAFE_INTEGER : i
  }

  kept.sort((a, b) => {
    const fa = featuredRank(a.name)
    const fb = featuredRank(b.name)
    if (fa !== fb) return fa - fb
    // both featured (same rank impossible) or both non-featured → pushed desc
    return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
  })

  return kept.slice(0, opts.limit).map((r) => ({
    name: r.name,
    description: r.description as string,
    url: r.html_url,
    homepage: r.homepage ?? null,
    language: r.language ?? null,
    stars: r.stargazers_count ?? 0,
    pushedAt: r.pushed_at,
    topics: Array.isArray(r.topics) ? r.topics : [],
  }))
}

// The public REST repos endpoint needs no auth — and sending a stale/invalid
// token would turn an otherwise-public 200 into a 401. ISR revalidates hourly,
// well within the unauthenticated rate limit, so we fetch it tokenless. Only
// the contribution calendar (GraphQL) is token-gated.
export async function getRecentRepos(limit = 6): Promise<Repo[]> {
  try {
    const res = await fetch(
      `${API}/users/${USERNAME}/repos?per_page=100&sort=pushed`,
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) return []
    return selectRepos(await res.json(), {
      exclude: EXCLUDE,
      featured: FEATURED,
      limit,
    })
  } catch {
    return []
  }
}

export async function getContributionCalendar(): Promise<ContributionCalendar | null> {
  if (!TOKEN) return null
  try {
    const res = await fetch(`${API}/graphql`, {
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
    if (!res.ok) return null
    const gql = await res.json()
    return (
      gql?.data?.user?.contributionsCollection?.contributionCalendar ?? null
    )
  } catch {
    return null
  }
}
