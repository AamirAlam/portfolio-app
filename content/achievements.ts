export interface Achievement {
  title: string
  subtitle: string
  description: string
  badge: string
  color: string
  border: string
  textColor: string
}

// Moved verbatim from Achievements.tsx.
export const achievements: Achievement[] = [
  {
    title: 'ETH Istanbul 2023',
    subtitle: 'Most Refined Project — Winner',
    description:
      'ETH Global Istanbul hackathon. Recognized for the most refined and production-quality decentralized interface.',
    badge: '🏆',
    color: 'from-amber-500/10 to-orange-500/5',
    border: 'border-amber-500/20',
    textColor: 'text-amber-400',
  },
  {
    title: 'ETH India 2024',
    subtitle: 'Finalist',
    description:
      'Selected as a finalist at ETH India 2024 for innovative project development in the Ethereum ecosystem.',
    badge: '🎯',
    color: 'from-violet-500/10 to-indigo-500/5',
    border: 'border-violet-500/20',
    textColor: 'text-violet-400',
  },
  {
    title: "Master's in Software Engineering",
    subtitle: 'Zakir Husain College of Engineering & Technology',
    description:
      '2018 – 2020 · Aligarh, India. Specialized in software systems design and engineering.',
    badge: '🎓',
    color: 'from-emerald-500/10 to-cyan-500/5',
    border: 'border-emerald-500/20',
    textColor: 'text-emerald-400',
  },
]
