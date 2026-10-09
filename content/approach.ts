export interface ApproachStep {
  id: string
  title: string
  body: string
}

// TODO(copy): the problem-solving loop — Embed · Map · Prototype · Harden · Measure.
export const approach: ApproachStep[] = [
  {
    id: 'embed',
    title: 'Embed',
    body: 'Sit with the people doing the work. Find the real bottleneck, not the stated one.',
  },
  {
    id: 'map',
    title: 'Map',
    body: 'Turn the workflow into steps, decisions, and systems of record.',
  },
  {
    id: 'prototype',
    title: 'Prototype',
    body: 'Ship a thin agent in days, deterministic where possible and with an LLM where it pays.',
  },
  {
    id: 'harden',
    title: 'Harden',
    body: 'Add evals, guardrails, observability, and a human approval step for every irreversible action.',
  },
  {
    id: 'measure',
    title: 'Measure',
    body: 'Hours saved, error rate, adoption. Iterate or kill.',
  },
]
