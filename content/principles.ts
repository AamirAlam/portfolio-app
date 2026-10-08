export interface Principle {
  tag: string
  title: string
  body: string
}

// TODO(copy): opinionated design principles for agentic systems.
export const principles: Principle[] = [
  {
    tag: 'workflow first',
    title: 'Automate the workflow, not the demo',
    body: 'Start from a repetitive task with a measurable cost. No cost, no agent.',
  },
  {
    tag: 'determinism',
    title: 'Code where you can, model where you must',
    body: 'Use the LLM only for judgement steps. Everything else stays typed and testable.',
  },
  {
    tag: 'human-in-the-loop',
    title: 'Humans approve irreversible actions',
    body: 'Agents propose and people dispose, at least until the evals say otherwise.',
  },
  {
    tag: 'evals',
    title: 'No eval, no ship',
    body: 'Golden datasets and regression checks run before every prompt or model change.',
  },
  {
    tag: 'context hygiene',
    title: 'Clean context in, safe output out',
    body: 'Sanitize secrets and PII before anything reaches a model.',
  },
  {
    tag: 'observability',
    title: 'Every step is traceable',
    body: 'Log tool calls, inputs, and decisions so failures can be debugged, not guessed at.',
  },
]
