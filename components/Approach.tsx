import { approach } from '@/content/approach'
import SectionHeader from './ui/SectionHeader'
import Reveal from './ui/Reveal'

export default function Approach() {
  return (
    <section
      id="approach"
      className="max-w-6xl mx-auto px-6 py-20 scroll-mt-20"
    >
      <SectionHeader
        label="approach"
        title="How I solve complex problems"
        sub="The same loop every time, whether the problem is a DeFi vault or a support queue."
      />

      <div className="relative grid gap-4 lg:grid-cols-5">
        {/* Connector line behind the steps on large screens */}
        <div
          aria-hidden
          className="hidden lg:block absolute top-[2.75rem] left-0 right-0 h-px bg-indigo-500/15"
        />

        {approach.map((step, i) => (
          <Reveal
            key={step.id}
            delay={i * 80}
            className="card p-5 relative flex flex-col gap-2"
          >
            <span className="text-xs font-mono text-violet-400">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="text-slate-100 font-semibold text-base">
              {step.title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              {step.body}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
