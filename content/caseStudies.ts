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
    period: 'Apr 2025 – present',
    kind: ['agentic', 'DeFi', 'live'],
    problem:
      'Vault rebalancing needed constant manual judgement across volatile markets, which does not scale as deposits grow.',
    approach:
      'Async ERC-7540 deposits on-chain, plus off-chain CrewAI agents that propose rebalances under hard policy limits with a human approving irreversible moves.',
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
    name: 'Context Sanitizer · SLM data pipeline',
    period: '2026 · in progress',
    kind: ['agentic', 'data'],
    problem:
      'Raw dumps cannot be viewed or trained on safely because secrets and PII leak into prompts and datasets.',
    approach:
      'A deterministic detect-then-redact pipeline sanitizes raw inputs before anything reaches a model. The first POC is live; work now is preparing training and test data for small-language-model training and evaluation.',
    architecture: ['raw dump', 'detect', 'redact', 'SLM train/eval set'],
    impact: ['First POC shipped', 'Building SLM train & eval datasets'],
    stack: ['Python', 'LLMs', 'SLMs', 'evals'],
    links: { repo: 'https://github.com/AamirAlam/context-sanitizer' },
  },
  {
    slug: 'linkedin-scam-agent',
    name: 'LinkedIn Scam Detection Agent',
    period: '2026 · in progress',
    kind: ['agentic', 'safety'],
    problem:
      'LinkedIn job DMs and recruiter emails are a common vector for scams, and vetting each one by hand is slow and error-prone.',
    approach:
      'An agent reads an incoming LinkedIn job message or email, reviews the job description and sender signals, and flags likely scams with its reasoning, keeping a human in the loop on the final call.',
    architecture: ['job DM / email', 'agent review', 'risk signals', 'scam verdict'],
    impact: ['In active development'],
    stack: ['TypeScript', 'LLMs', 'agents', 'evals'],
    links: { repo: 'https://github.com/AamirAlam/LinkedInJobScamAgent' },
  },
]
