import { getRecentRepos, getContributionCalendar, type Repo } from '@/lib/github'
import SectionHeader from './ui/SectionHeader'
import ContributionGraph from './ContributionGraph'
import Reveal from './ui/Reveal'

function timeAgo(iso: string): string {
  const then = new Date(iso).getTime()
  if (Number.isNaN(then)) return ''
  const days = Math.floor((Date.now() - then) / 86_400_000)
  if (days <= 0) return 'today'
  if (days === 1) return 'yesterday'
  if (days < 30) return `${days}d ago`
  const months = Math.floor(days / 30)
  if (months < 12) return `${months}mo ago`
  return `${Math.floor(months / 12)}y ago`
}

// A small, stable palette for common languages; others fall back to indigo.
const languageColors: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572a5',
  Solidity: '#aa6746',
  Go: '#00add8',
  Rust: '#dea584',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
}

function RepoCard({ repo }: { repo: Repo }) {
  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card p-5 flex flex-col gap-3 h-full"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs text-slate-600 font-mono">
          {timeAgo(repo.pushedAt)}
        </span>
        {repo.stars > 0 && (
          <span className="flex items-center gap-1 text-xs text-slate-500 font-mono">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
            </svg>
            {repo.stars}
          </span>
        )}
      </div>

      <h3 className="text-slate-100 font-semibold text-sm font-mono break-all">
        {repo.name}
      </h3>

      <p className="text-slate-500 text-sm leading-relaxed flex-1">
        {repo.description}
      </p>

      <div className="flex items-center gap-3 flex-wrap">
        {repo.language && (
          <span className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: languageColors[repo.language] ?? '#6366f1' }}
            />
            {repo.language}
          </span>
        )}
        {repo.topics.slice(0, 3).map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </a>
  )
}

export default async function GitHubActivity() {
  const [repos, calendar] = await Promise.all([
    getRecentRepos(),
    getContributionCalendar(),
  ])

  return (
    <section id="shipping" className="max-w-6xl mx-auto px-6 py-20">
      <SectionHeader
        label="shipping now"
        title="Recently on GitHub"
        sub="Pulled from the GitHub API, refreshed hourly."
      />

      {repos.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {repos.map((repo, i) => (
            <Reveal key={repo.name} delay={i * 60} className="h-full">
              <RepoCard repo={repo} />
            </Reveal>
          ))}
        </div>
      )}

      {calendar && <ContributionGraph calendar={calendar} />}
    </section>
  )
}
