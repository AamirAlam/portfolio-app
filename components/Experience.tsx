const jobs = [
  {
    company: 'API3',
    role: 'Software Engineer',
    period: 'Sep 2023 — Present',
    location: 'Remote',
    color: 'text-violet-400',
    dot: 'bg-violet-400',
    bullets: [
      'Architected ecosystem platform using Nuxt3 + Nitro to showcase dApps — boosted developer engagement 25% in 3 months',
      'Automated AAVE V2 & Compound V3 deployments via scripts and pipelines, cutting launch cycles by 30%',
      'Built liquidation profit analytics scripts for builder bots, improving DeFi strategy accuracy by 20%',
    ],
    tags: ['Nuxt3', 'Nitro', 'DeFi', 'TypeScript'],
  },
  {
    company: 'QuickSwap',
    role: 'Full Stack Engineer',
    period: 'Aug 2022 — Sep 2023',
    location: 'Remote',
    color: 'text-cyan-400',
    dot: 'bg-cyan-400',
    bullets: [
      'Optimized frontend with React Lazy Load and re-render minimization — load times improved 80%',
      'Achieved 35% application speed boost through targeted React component optimization',
      'Developed React components for QuickSwap V3, expanding functionality and growing active users 15%',
    ],
    tags: ['React', 'TypeScript', 'DEX', 'Polygon'],
  },
  {
    company: 'Polkabridge',
    role: 'Senior Full Stack Developer',
    period: 'Jul 2021 — Aug 2022',
    location: 'Remote',
    color: 'text-emerald-400',
    dot: 'bg-emerald-400',
    bullets: [
      'Led multichain AMM and yield systems for 20K+ users across Polygon, BSC, and Ethereum',
      'Built P2P platform using MongoDB and Express with reusable React components',
      'Architected Staking and Launchpad dApps — 200K+ trading volume, 30+ IDOs launched',
    ],
    tags: ['Solidity', 'React', 'MongoDB', 'Multichain'],
  },
  {
    company: 'Endovision Hong Kong',
    role: 'Fullstack Developer',
    period: 'Jul 2020 — Jul 2021',
    location: 'Remote',
    color: 'text-amber-400',
    dot: 'bg-amber-400',
    bullets: [
      'Developed frame sequence and area labeling features with PyQt5 — model accuracy from 45% to 87%',
      'Built upload feature for AI experiment visualization, cutting integration time from 2-3 hours to under 1 minute',
    ],
    tags: ['Python', 'PyQt5', 'ML', 'Computer Vision'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-20">
      <SectionLabel>// experience</SectionLabel>
      <h2 className="text-2xl font-bold text-slate-100 mb-12 mt-2">Work History</h2>

      <div className="relative">
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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs font-mono text-indigo-400 tracking-widest uppercase">{children}</div>
  )
}
