import { jobs } from '@/content/experience'
import SectionHeader from './ui/SectionHeader'

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-20">
      <SectionHeader label="experience" title="Where I've shipped" />

      <div className="relative mt-4">
        {/* Timeline line */}
        <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/40 via-indigo-500/20 to-transparent" />

        <div className="space-y-10">
          {jobs.map((job, i) => (
            <div key={i} className="pl-8 relative">
              {/* Dot */}
              <div className={`absolute left-0 top-1.5 w-2 h-2 rounded-full ${job.dot} -translate-x-[3px] ring-4 ring-[#070710]`} />

              <div className="card p-6">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className={`font-semibold ${job.color}`}>{job.company}</h3>
                      <span className="text-slate-600 text-sm">·</span>
                      <span className="text-slate-300 text-sm font-medium">{job.role}</span>
                    </div>
                    <div className="text-xs text-slate-600 font-mono mt-0.5">{job.period}</div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {job.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>

                <ul className="space-y-2">
                  {job.bullets.map((b, bi) => (
                    <li key={bi} className="text-sm text-slate-500 leading-relaxed flex gap-2">
                      <span className="text-indigo-500 flex-shrink-0 mt-1">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
