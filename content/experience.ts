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

// Moved verbatim from Experience.tsx.
// TODO(copy): rewrite bullets with an FDE lean — lead with the workflow that was
// automated and the hours/errors saved, keep the Web3 context as proof of depth.
export const jobs: Job[] = [
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
