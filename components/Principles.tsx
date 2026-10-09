import { principles } from '@/content/principles'
import SectionHeader from './ui/SectionHeader'
import Reveal from './ui/Reveal'

export default function Principles() {
  return (
    <section
      id="principles"
      className="max-w-6xl mx-auto px-6 py-20 scroll-mt-20"
    >
      <SectionHeader
        label="principles"
        title="How I design agentic systems"
        sub="Opinions I've earned by putting agents in front of real users."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {principles.map((p, i) => (
          <Reveal
            key={p.title}
            delay={(i % 3) * 80}
            className="card p-6 flex flex-col gap-2"
          >
            <p className="text-xs font-mono text-cyan-400 mb-1">
              {`${String(i + 1).padStart(2, '0')} · ${p.tag}`}
            </p>
            <h3 className="text-slate-100 font-semibold text-base">
              {p.title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">{p.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
