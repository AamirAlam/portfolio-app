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
    title: 'ETHGlobal Istanbul 2023',
    subtitle: 'Most Refined Project — Winner',
    description:
      'Built Amca, a payments app that protects savings from currency drops.',
    badge: '🏆',
    color: 'from-amber-500/10 to-orange-500/5',
    border: 'border-amber-500/20',
    textColor: 'text-amber-400',
  },
  {
    title: 'ETHIndia 2024',
    subtitle: 'Finalist',
    description:
      'Built Flow3, a full-stack Web3 app.',
    badge: '🎯',
    color: 'from-violet-500/10 to-indigo-500/5',
    border: 'border-violet-500/20',
    textColor: 'text-violet-400',
  },
  {
    title: "Master's in Software Engineering",
    subtitle: 'Zakir Husain College of Engineering & Technology',
    description:
      '2018 – 2020 · Aligarh, India. Also B.Tech. in Computer Engineering (2018) from the same college.',
    badge: '🎓',
    color: 'from-emerald-500/10 to-cyan-500/5',
    border: 'border-emerald-500/20',
    textColor: 'text-emerald-400',
  },
]
