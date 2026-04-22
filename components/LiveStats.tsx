'use client'

import { useEffect, useState } from 'react'
import ContributionGraph from './ContributionGraph'

interface GitHubData {
  followers: number
  publicRepos: number
  totalStars: number
  contributions: {
    totalContributions: number
    weeks: { contributionDays: { contributionCount: number; date: string }[] }[]
  } | null
}

function StatCard({
  label,
  value,
  icon,
  loading,
}: {
  label: string
  value: string | number | null
  icon: React.ReactNode
  loading: boolean
}) {
  return (
    <div className="card p-5 flex items-center gap-4">
      <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-xs text-slate-600 font-mono mb-0.5">{label}</div>
        {loading ? (
          <div className="h-6 w-16 bg-slate-800 rounded animate-pulse" />
        ) : (
          <div className="text-xl font-semibold text-slate-100">
            {value !== null ? value.toLocaleString() : '—'}
          </div>
        )}
      </div>
    </div>
  )
}

export default function LiveStats() {
  const [github, setGithub] = useState<GitHubData | null>(null)
  const [twitterFollowers, setTwitterFollowers] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch('/api/github').then((r) => r.json()),
      fetch('/api/twitter').then((r) => r.json()),
    ])
      .then(([gh, tw]) => {
        setGithub(gh)
        setTwitterFollowers(tw.followers)
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="stats" className="max-w-6xl mx-auto px-6 py-20">
      <SectionLabel>live stats</SectionLabel>
      <h2 className="text-2xl font-bold text-slate-100 mb-8 mt-2">Activity & Reach</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard
          label="GitHub Followers"
          value={github?.followers ?? null}
          loading={loading}
          icon={<GitHubIcon />}
        />
        <StatCard
          label="Public Repos"
          value={github?.publicRepos ?? null}
          loading={loading}
          icon={<RepoIcon />}
        />
        <StatCard
          label="Total Stars"
          value={github?.totalStars ?? null}
          loading={loading}
          icon={<StarIcon />}
        />
        <StatCard
          label="X Followers"
          value={twitterFollowers}
          loading={loading}
          icon={<XIcon />}
        />
      </div>

      <ContributionGraph calendar={github?.contributions ?? null} />
    </section>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs font-mono text-indigo-400 tracking-widest uppercase">
      {'// '}{children}
    </div>
  )
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function RepoIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 3h6l2 3h10a1 1 0 011 1v13a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1z" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.26 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  )
}
