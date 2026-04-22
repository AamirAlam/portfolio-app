const achievements = [
  {
    title: 'ETH Istanbul 2023',
    subtitle: 'Most Refined Project — Winner',
    description: 'ETH Global Istanbul hackathon. Recognized for the most refined and production-quality decentralized interface.',
    badge: '🏆',
    color: 'from-amber-500/10 to-orange-500/5',
    border: 'border-amber-500/20',
    textColor: 'text-amber-400',
  },
  {
    title: 'ETH India 2024',
    subtitle: 'Finalist',
    description: 'Selected as a finalist at ETH India 2024 for innovative project development in the Ethereum ecosystem.',
    badge: '🎯',
    color: 'from-violet-500/10 to-indigo-500/5',
    border: 'border-violet-500/20',
    textColor: 'text-violet-400',
  },
  {
    title: "Master's in Software Engineering",
    subtitle: 'Zakir Husain College of Engineering & Technology',
    description: '2018 – 2020 · Aligarh, India. Specialized in software systems design and engineering.',
    badge: '🎓',
    color: 'from-emerald-500/10 to-cyan-500/5',
    border: 'border-emerald-500/20',
    textColor: 'text-emerald-400',
  },
]

export default function Achievements() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <SectionLabel>// recognition</SectionLabel>
      <h2 className="text-2xl font-bold text-slate-100 mb-8 mt-2">Achievements & Education</h2>

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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs font-mono text-indigo-400 tracking-widest uppercase">{children}</div>
  )
}
