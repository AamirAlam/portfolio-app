const categories = [
  {
    label: 'Smart Contracts',
    icon: '⬡',
    color: 'text-violet-400',
    skills: ['Solidity', 'Foundry', 'Hardhat', 'Ethers.js', 'ERC-4626', 'ERC-7540'],
  },
  {
    label: 'Frontend',
    icon: '◈',
    color: 'text-cyan-400',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'GraphQL'],
  },
  {
    label: 'Backend',
    icon: '⬟',
    color: 'text-emerald-400',
    skills: ['Node.js', 'Express.js', 'Kafka', 'Postgres', 'MongoDB', 'Python'],
  },
  {
    label: 'Infrastructure',
    icon: '◎',
    color: 'text-amber-400',
    skills: ['Docker', 'AWS', 'GCP', 'CI/CD', 'Temporal', 'Git'],
  },
  {
    label: 'Web3 & DeFi',
    icon: '⬡',
    color: 'text-pink-400',
    skills: ['DeFi Protocols', 'AMM', 'Subgraph', 'Wallet Adapters', 'Nuxt3', 'CrewAI'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
      <SectionLabel>// skills</SectionLabel>
      <h2 className="text-2xl font-bold text-slate-100 mb-8 mt-2">Technical Stack</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <div key={cat.label} className="card p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className={`text-lg ${cat.color}`}>{cat.icon}</span>
              <h3 className={`text-sm font-semibold font-mono ${cat.color}`}>{cat.label}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
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
