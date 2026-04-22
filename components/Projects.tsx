const projects = [
  {
    name: 'Neura Vaults',
    period: 'Apr – Sep 2025',
    description:
      'AI-powered DeFi vault system with ERC-4626/ERC-7540 async deposits. Off-chain automation via CrewAI agents using LLMs for rebalancing decisions.',
    tags: ['Solidity', 'ERC-4626', 'ERC-7540', 'CrewAI', 'LLMs', 'TypeScript'],
    link: 'https://neuravaults.xyz/',
    github: null,
    featured: true,
  },
  {
    name: 'Flow3',
    period: 'Nov – Dec 2024',
    description:
      'Backend system built with Kafka and Express.js for real-time data streaming. Full backend integration with composable components, shipped in 1 day at ETH hackathon.',
    tags: ['Kafka', 'Express.js', 'TypeScript', 'Node.js'],
    link: 'https://devfolio.co/projects/flow-bd3f',
    github: null,
    featured: false,
  },
  {
    name: 'QuickSwap V3',
    period: '2022 – 2023',
    description:
      'React components for QuickSwap V3 DEX. Optimized performance with lazy loading and re-render minimization — achieved 80% faster load times and 35% speed boost.',
    tags: ['React', 'TypeScript', 'DeFi', 'Polygon'],
    link: null,
    github: 'https://github.com/AamirAlam',
    featured: false,
  },
  {
    name: 'Polkabridge AMM',
    period: '2021 – 2022',
    description:
      'Multichain AMM and yield systems serving 20K+ users. Wallet adapters and subgraph integration across Polygon, BSC, and Ethereum. 200K+ trading volume.',
    tags: ['Solidity', 'React', 'Subgraph', 'Multichain'],
    link: null,
    github: 'https://github.com/AamirAlam',
    featured: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <SectionLabel>// projects</SectionLabel>
      <div className="flex items-end justify-between mt-2 mb-8">
        <h2 className="text-2xl font-bold text-slate-100">Featured Work</h2>
        <a
          href="https://github.com/AamirAlam"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-slate-500 hover:text-indigo-400 transition-colors"
        >
          all repos →
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <div
            key={p.name}
            className={`card p-6 flex flex-col gap-4 ${p.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  {p.featured && (
                    <span className="text-[10px] font-mono bg-violet-500/15 text-violet-400 border border-violet-500/20 rounded px-2 py-0.5">
                      featured
                    </span>
                  )}
                </div>
                <h3 className="text-slate-100 font-semibold">{p.name}</h3>
                <span className="text-xs text-slate-600 font-mono">{p.period}</span>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-slate-300 transition-colors"
                    title="Live site"
                  >
                    <ExternalLinkIcon />
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-slate-300 transition-colors"
                    title="GitHub"
                  >
                    <GitHubIcon />
                  </a>
                )}
              </div>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed flex-1">{p.description}</p>

            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
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

function ExternalLinkIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}
