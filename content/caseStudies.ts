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

// TODO(copy): narrative case studies. Problem/approach/impact are drafts for
// the owner to rewrite. Impact pills use only figures already on the site; any
// missing metric is left as a `draft: …` placeholder rather than invented.
export const caseStudies: CaseStudy[] = [
  {
    slug: 'neura-vaults',
    name: 'Neura Vaults',
    period: 'Apr – Sep 2025',
    kind: ['agentic', 'DeFi'],
    // TODO(copy)
    problem:
      'Vault rebalancing needed constant manual judgement across volatile markets.',
    // TODO(copy)
    approach:
      'Async ERC-7540 deposits on-chain, plus off-chain CrewAI agents that propose rebalances under hard policy limits with a human approving irreversible moves.',
    architecture: [
      'market data',
      'CrewAI analyst',
      'policy guard',
      'ERC-4626 vault',
    ],
    // TODO(copy): no public figures for this project yet — placeholders only.
    impact: ['draft: impact metric', 'draft: impact metric'],
    stack: ['Solidity', 'ERC-4626', 'ERC-7540', 'CrewAI', 'LLMs', 'TypeScript'],
    links: { live: 'https://neuravaults.xyz/' },
  },
  {
    slug: 'context-sanitizer',
    name: 'Context Sanitizer · SLM data pipeline',
    period: '2026',
    kind: ['agentic', 'data'],
    // TODO(copy)
    problem:
      'Raw dumps cannot be viewed or trained on safely because secrets and PII leak into prompts and datasets.',
    // TODO(copy)
    approach:
      'A deterministic detect-then-redact pipeline sanitizes raw inputs before anything reaches a model, producing a clean dataset for small-language-model fine-tuning.',
    architecture: ['raw dump', 'detect', 'redact', 'SLM dataset'],
    // TODO(copy): placeholders until real figures exist.
    impact: ['draft: impact metric'],
    stack: ['Python', 'LLMs', 'SLMs', 'evals'],
    links: { repo: 'https://github.com/AamirAlam/context-sanitizer' },
  },
  {
    slug: 'caliber',
    name: 'Caliber',
    period: '2026',
    kind: ['agentic', 'tooling'],
    // TODO(copy)
    problem: 'draft: the repetitive workflow caliber removes.',
    // TODO(copy)
    approach: 'draft: how the agent is scoped, guarded, and evaluated.',
    // TODO(copy)
    architecture: ['input', 'agent', 'guardrails', 'output'],
    // TODO(copy): placeholders until real figures exist.
    impact: ['draft: impact metric'],
    stack: ['TypeScript', 'LLMs', 'evals'],
    links: { repo: 'https://github.com/AamirAlam/caliber' },
  },
]
