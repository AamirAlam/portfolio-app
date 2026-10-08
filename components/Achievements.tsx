import { achievements } from '@/content/achievements'
import SectionHeader from './ui/SectionHeader'

export default function Achievements() {
  return (
    <section id="recognition" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-20">
      <SectionHeader label="recognition" title="Achievements & Education" />

      <div className="grid md:grid-cols-3 gap-4">
        {achievements.map((a) => (
          <div
            key={a.title}
            className={`card p-6 bg-gradient-to-br ${a.color} border ${a.border}`}
          >
            <div className="text-3xl mb-4">{a.badge}</div>
            <div className={`text-sm font-semibold ${a.textColor} font-mono mb-1`}>{a.title}</div>
            <div className="text-slate-300 font-medium text-sm mb-3">{a.subtitle}</div>
            <p className="text-slate-500 text-sm leading-relaxed">{a.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
