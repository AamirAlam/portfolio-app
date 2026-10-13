export interface CaseStudy {
  slug: string // keeps /work/[slug] possible later
  name: string
  period: string
  kind: string[] // chips, e.g. ['agentic', 'DeFi']
  problem: string
  approach: string
  architecture: string[] // ordered flow nodes
  impact: string[] // existing figures or TODO(copy) placeholders, never invented
  stack: string[]
  links: { live?: string; repo?: string }
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'neura-vaults',
    name: 'Neura Vaults',
    period: '2025 – present',
    kind: ['agentic', 'DeFi', 'live'],
    problem:
      'Rebalancing a vault by hand takes constant attention in fast-moving markets, and that does not scale as deposits grow.',
    approach:
      'AI agents (CrewAI) suggest how to rebalance funds within strict rules, and a person approves each move. Deposits run on-chain through ERC-7540 vaults.',
    architecture: [
      'market data',
      'CrewAI analyst',
      'policy guard',
      'ERC-4626 vault',
    ],
    impact: ['200+ users', '$150K+ in funds managed', 'live in production'],
    stack: ['Solidity', 'ERC-4626', 'ERC-7540', 'CrewAI', 'LLMs', 'TypeScript'],
    links: { live: 'https://neuravaults.xyz/' },
  },
  {
    slug: 'context-sanitizer',
    name: 'Context Sanitizer',
    period: '2026 · in progress',
    kind: ['agentic', 'data'],
    problem:
      'Raw files often contain passwords and personal data, so they cannot safely be used to train or test AI models.',
    approach:
      'A pipeline that finds and removes passwords and personal data from raw files, so the cleaned data can be used to train and test small AI models.',
    architecture: ['raw dump', 'detect', 'redact', 'SLM train/eval set'],
    impact: ['First version working', 'Preparing train & test data for small models'],
    stack: ['Python', 'LLMs', 'SLMs', 'evals'],
    links: { repo: 'https://github.com/AamirAlam/context-sanitizer' },
  },
  {
    slug: 'linkedin-scam-agent',
    name: 'LinkedIn Scam Detection Agent',
    period: '2026 · in progress',
    kind: ['agentic', 'safety'],
    problem:
      'Fake recruiter messages and job posts are common on LinkedIn, and checking each one by hand is slow and easy to get wrong.',
    approach:
      'An AI agent reads recruiter messages and job posts and warns you about likely scams, explaining why. You make the final call.',
    architecture: ['job DM / email', 'agent review', 'risk signals', 'scam verdict'],
    impact: ['In active development'],
    stack: ['TypeScript', 'LLMs', 'agents', 'evals'],
    links: { repo: 'https://github.com/AamirAlam/LinkedInJobScamAgent' },
  },
  {
    slug: 'caliber',
    name: 'Caliber',
    period: '2026',
    kind: ['agentic', 'treasury'],
    problem:
      'Letting AI agents manage funds is risky unless every action stays inside clear limits and can be reviewed later.',
    approach:
      'AI agents manage funds held as digital assets, but only within clear rules, and every action is logged for review.',
    architecture: ['treasury funds', 'agent', 'rules check', 'logged action'],
    impact: ['In development'],
    stack: ['TypeScript', 'LLMs', 'agents'],
    links: {},
  },
]
