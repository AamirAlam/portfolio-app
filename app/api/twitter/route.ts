import { NextResponse } from 'next/server'

const USERNAME = 'AamirAlam201096'
const BEARER = process.env.TWITTER_BEARER_TOKEN

export async function GET() {
  if (!BEARER) {
    return NextResponse.json({ followers: null, reason: 'no_token' })
  }

  try {
    const res = await fetch(
      `https://api.twitter.com/2/users/by/username/${USERNAME}?user.fields=public_metrics`,
      {
        headers: { Authorization: `Bearer ${BEARER}` },
        next: { revalidate: 3600 },
      }
    )
    const data = await res.json()
    const followers = data?.data?.public_metrics?.followers_count ?? null

    return NextResponse.json({ followers })
  } catch {
    return NextResponse.json({ followers: null, reason: 'fetch_failed' })
  }
}
