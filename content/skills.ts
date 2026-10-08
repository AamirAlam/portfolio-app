export interface SkillCategory {
  label: string
  icon: string
  color: string
  skills: string[]
}

// Regrouped for the agentic stack: Agentic & AI leads, with Backend & Data,
// Frontend, Smart Contracts and Infrastructure as supporting depth.
export const categories: SkillCategory[] = [
  {
    // TODO(copy): expand the agentic toolkit as the case studies firm up.
    label: 'Agentic & AI',
    icon: '◆',
    color: 'text-indigo-400',
    skills: ['CrewAI', 'LLMs', 'Evals', 'RAG', 'Prompt Engineering', 'Python'],
  },
  {
    label: 'Backend & Data',
    icon: '⬟',
    color: 'text-emerald-400',
    skills: ['Node.js', 'Express.js', 'Kafka', 'Postgres', 'MongoDB', 'Temporal'],
  },
  {
    label: 'Frontend',
    icon: '◈',
    color: 'text-cyan-400',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'GraphQL'],
  },
  {
    label: 'Smart Contracts',
    icon: '⬡',
    color: 'text-violet-400',
    skills: ['Solidity', 'Foundry', 'Hardhat', 'Ethers.js', 'ERC-4626', 'ERC-7540'],
  },
  {
    label: 'Infrastructure',
    icon: '◎',
    color: 'text-amber-400',
    skills: ['Docker', 'AWS', 'GCP', 'CI/CD', 'Git', 'Nuxt3'],
  },
]
