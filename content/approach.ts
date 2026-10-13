export interface ApproachStep {
  id: string
  title: string
  body: string
}

// The problem-solving loop — Research · Plan · Build · Evaluate · Fix.
export const approach: ApproachStep[] = [
  {
    id: 'research',
    title: 'Research',
    body: 'Talk to users and find the real problem, not just the stated one.',
  },
  {
    id: 'plan',
    title: 'Plan',
    body: "Break the work into steps and agree on how we'll measure success.",
  },
  {
    id: 'build',
    title: 'Build',
    body: 'Ship a small working version fast, then grow it.',
  },
  {
    id: 'evaluate',
    title: 'Evaluate',
    body: 'Test against real examples before every release.',
  },
  {
    id: 'fix',
    title: 'Fix',
    body: 'Watch it in production, fix what breaks, and keep improving.',
  },
]
