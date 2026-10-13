export interface Principle {
  tag: string
  title: string
  body: string
}

// Design principles for agentic systems.
export const principles: Principle[] = [
  {
    tag: 'real problems',
    title: 'Start with a real problem',
    body: 'Pick work that actually slows people down. If nothing is slow, no agent is needed.',
  },
  {
    tag: 'keep it simple',
    title: 'Use plain code where you can',
    body: 'Use the AI model only where judgement is needed. Everything else stays normal, testable code.',
  },
  {
    tag: 'human-in-the-loop',
    title: 'A person approves important moves',
    body: 'The agent suggests, a person decides. In Neura Vaults, every rebalance is approved by a human.',
  },
  {
    tag: 'evals',
    title: 'Test before every release',
    body: 'Check the agent against real examples before changing a prompt or a model.',
  },
  {
    tag: 'safe data',
    title: 'Clean data in, safe output out',
    body: 'Remove passwords and personal data before anything reaches a model.',
  },
  {
    tag: 'logging',
    title: 'Log every decision',
    body: 'Record what the agent saw and did, so problems can be traced instead of guessed at.',
  },
]
