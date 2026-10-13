export interface Job {
  company: string
  role: string
  period: string
  location: string
  color: string
  dot: string
  bullets: string[]
  tags: string[]
}

// Matches the resume (FDE-1-b.pdf).
export const jobs: Job[] = [
  {
    company: 'Autonom',
    role: 'Senior Full Stack Engineer',
    period: 'Dec 2025 — Present',
    location: 'Remote',
    color: 'text-indigo-400',
    dot: 'bg-indigo-400',
    bullets: [
      'Found that liquidations failed when the network was busy because we relied on one provider; added automatic backup providers, cutting failed transactions by 70%',
      'Building Rust and TypeScript services that read Solana blockchain data and execute trades in under 300ms',
    ],
    tags: ['Rust', 'TypeScript', 'Solana', 'DeFi'],
  },
  {
    company: 'API3',
    role: 'Software Engineer',
    period: 'Sep 2023 — Sep 2025',
    location: 'Remote',
    color: 'text-violet-400',
    dot: 'bg-violet-400',
    bullets: [
      'Built analytics that help trading bots spot profitable opportunities, improving accuracy by 20%, and rebuilt the data pipeline to make it 40% faster',
      'Automated lending-protocol deployments so launches took 30% less time',
      'Built a platform showcasing partner apps that raised developer engagement by 25%, and mentored two engineers',
    ],
    tags: ['TypeScript', 'Nuxt', 'DeFi', 'Data pipelines'],
  },
  {
    company: 'QuickSwap',
    role: 'Senior Frontend Engineer',
    period: 'Aug 2022 — Sep 2023',
    location: 'Remote',
    color: 'text-cyan-400',
    dot: 'bg-cyan-400',
    bullets: [
      'Found what was slowing down the trading app and fixed it by loading pages only when needed, cutting load time by 80%',
      'Built key parts of the QuickSwap V3 interface; active users grew by 15%',
    ],
    tags: ['React', 'TypeScript', 'DEX', 'Polygon'],
  },
  {
    company: 'Polkabridge',
    role: 'Full Stack Engineer',
    period: 'Jul 2021 — Aug 2022',
    location: 'Remote',
    color: 'text-emerald-400',
    dot: 'bg-emerald-400',
    bullets: [
      'Led development of trading and earning products across three blockchains, used by 20K+ users',
      'Designed staking and token-launch products that hosted 30+ launches and $200K+ in volume',
      'Built a peer-to-peer trading platform',
    ],
    tags: ['Solidity', 'React', 'MongoDB', 'Multichain'],
  },
  {
    company: 'Endovision Hong Kong',
    role: 'Full Stack Developer',
    period: 'Jul 2020 — Jul 2021',
    location: 'Remote',
    color: 'text-amber-400',
    dot: 'bg-amber-400',
    bullets: [
      "Built tools for labeling medical video, which improved the AI model's accuracy from 45% to 87%",
      'Built an upload-and-preview tool that cut the time to test a new model from 2–3 hours to under 1 minute',
    ],
    tags: ['Python', 'PyQt5', 'ML', 'Computer Vision'],
  },
]
