import { getRecentRepos, getContributionCalendar } from '@/lib/github'
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

export default async function GitHubActivity() {
  const [repos, calendar] = await Promise.all([
    getRecentRepos(),
    getContributionCalendar(),
  ])

  if (repos.length === 0 && !calendar) return null

  return (
    <Reveal>
      <section id="shipping" className="scroll-mt-24">
        <SectionHeader
          title="Open Source"
          sub="Agent projects I'm building in the open."
        />

        {repos.length > 0 && (
          <div className="-mx-3 divide-y divide-border">
            {repos.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-4 rounded-md px-3 py-4 transition-colors hover:bg-secondary"
              >
                <div>
                  <h3 className="text-base font-medium leading-snug underline decoration-faint underline-offset-4 transition-colors group-hover:decoration-foreground">
                    {repo.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted">{repo.description}</p>
                  <p className="mt-1.5 text-xs text-muted">
                    {[repo.language, repo.stars > 0 ? `★ ${repo.stars}` : null, timeAgo(repo.pushedAt)]
                      .filter(Boolean)
                      .join(' / ')}
                  </p>
                </div>
                <span className="mt-0.5 shrink-0 text-xs text-muted opacity-0 transition-opacity group-hover:opacity-100">
                  ↗
                </span>
              </a>
            ))}
          </div>
        )}

        {calendar && (
          <div className="mt-6">
            <ContributionGraph calendar={calendar} />
          </div>
        )}
      </section>
    </Reveal>
  )
}
