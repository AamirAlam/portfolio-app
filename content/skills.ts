export interface SkillCategory {
  label: string
  icon: string
  color: string
  skills: string[]
}

// Regrouped for the agentic stack: Agentic & AI leads, with Backend & Data,
// Frontend, Blockchain and Infrastructure as supporting depth.
export const categories: SkillCategory[] = [
  {
    label: 'Agentic & AI',
    icon: '◆',
    color: 'text-indigo-400',
    skills: ['AI agents (CrewAI)', 'LLMs', 'Testing & evals', 'RAG', 'Python'],
  },
  {
    label: 'Backend & Data',
    icon: '⬟',
    color: 'text-emerald-400',
    skills: ['TypeScript', 'Node.js', 'Rust', 'GraphQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    label: 'Frontend',
    icon: '◈',
    color: 'text-cyan-400',
    skills: ['React', 'Next.js', 'Nuxt', 'Tailwind CSS', 'Jest', 'Playwright'],
  },
  {
    label: 'Blockchain',
    icon: '⬡',
    color: 'text-violet-400',
    skills: ['Solidity', 'Ethereum', 'Solana', 'Ethers.js', 'ERC-4626', 'ERC-7540'],
  },
  {
    label: 'Infrastructure',
    icon: '◎',
    color: 'text-amber-400',
    skills: ['Docker', 'AWS', 'GCP', 'CI/CD', 'Git'],
  },
]
