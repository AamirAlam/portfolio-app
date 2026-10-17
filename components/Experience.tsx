import { jobs } from '@/content/experience'
import SectionHeader from './ui/SectionHeader'
import Reveal from './ui/Reveal'

export default function Experience() {
  return (
    <Reveal>
      <section id="experience" className="scroll-mt-24">
        <SectionHeader title="Work Experience" />
        <ol className="space-y-8">
          {jobs.map((job) => (
            <li key={job.company}>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-semibold">{job.company}</h3>
                <span className="shrink-0 text-xs tabular-nums text-muted">
                  {job.period}
                </span>
              </div>
              <p className="text-sm">{job.role}</p>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-relaxed text-muted marker:text-neutral-300">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div className="mt-2 flex flex-wrap gap-1">
                {job.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </section>
    </Reveal>
  )
}
