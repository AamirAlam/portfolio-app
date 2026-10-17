export interface SkillCategory {
  label: string
  skills: string[]
}

// Regrouped for the agentic stack: Agentic & AI leads, with Backend & Data,
// Frontend, Blockchain and Infrastructure as supporting depth.
export const categories: SkillCategory[] = [
  {
    label: 'Agentic & AI',
    skills: ['AI agents (CrewAI)', 'LLMs', 'Testing & evals', 'RAG', 'Python'],
  },
  {
    label: 'Backend & Data',
    skills: ['TypeScript', 'Node.js', 'Rust', 'GraphQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    label: 'Frontend',
    skills: ['React', 'Next.js', 'Nuxt', 'Tailwind CSS', 'Jest', 'Playwright'],
  },
  {
    label: 'Blockchain',
    skills: ['Solidity', 'Ethereum', 'Solana', 'Ethers.js', 'ERC-4626', 'ERC-7540'],
  },
  {
    label: 'Infrastructure',
    skills: ['Docker', 'AWS', 'GCP', 'CI/CD', 'Git'],
  },
]
