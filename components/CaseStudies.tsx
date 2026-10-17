import { caseStudies, type CaseStudy } from '@/content/caseStudies'
import SectionHeader from './ui/SectionHeader'
import Reveal from './ui/Reveal'
import { GitHubIcon, GlobeIcon } from './ui/icons'

function LinkBadge({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 rounded-md bg-foreground px-2 py-1 text-[11px] font-medium text-background transition-opacity hover:opacity-80"
    >
      {icon}
      {label}
    </a>
  )
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-border p-4 transition-shadow duration-300 hover:shadow-lg">
      <h3 className="text-base font-semibold tracking-tight">{study.name}</h3>
      <time className="text-xs text-muted">{study.period}</time>

      <div className="mt-3 space-y-2 text-xs leading-relaxed text-muted">
        <p>
          <span className="font-semibold text-foreground">Problem. </span>
          {study.problem}
        </p>
        <p>
          <span className="font-semibold text-foreground">Approach. </span>
          {study.approach}
        </p>
      </div>

      <p className="mt-3 font-mono text-[11px] text-muted">
        {study.architecture.join(' → ')}
      </p>

      {study.impact.length > 0 && (
        <p className="mt-3 text-xs font-medium">{study.impact.join(' · ')}</p>
      )}

      <div className="mt-auto pt-4">
        <div className="flex flex-wrap gap-1">
          {study.stack.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
        {(study.links.live || study.links.repo) && (
          <div className="mt-3 flex gap-1.5">
            {study.links.live && (
              <LinkBadge href={study.links.live} label="Website" icon={<GlobeIcon />} />
            )}
            {study.links.repo && (
              <LinkBadge href={study.links.repo} label="GitHub" icon={<GitHubIcon size={12} />} />
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export default function CaseStudies() {
  return (
    <Reveal>
      <section id="work" className="scroll-mt-24">
        <SectionHeader
          title="Selected Work"
          sub="Agentic systems I've built: the problem, the approach, and what it changed."
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </section>
    </Reveal>
  )
}
