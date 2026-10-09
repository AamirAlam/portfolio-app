export interface Metric {
  value: string
  label: string
}

export interface Profile {
  name: string
  role: string
  focus: string
  headline: string
  lead: string
  status: string
  metrics: Metric[]
  agentRun: string[]
  email: string
  links: { github: string; linkedin: string; x: string; devfolio: string }
  avatar: string
  siteUrl: string
  seo: { title: string; description: string; keywords: string[] }
}

export const profile: Profile = {
  name: 'Aamir Alam',
  role: 'Forward Deployed Engineer',
  focus: 'Agentic systems & workflow automation',
  // TODO(copy): headline — the gradient span wraps the final two words.
  headline: 'I turn messy workflows into agents that ship.',
  // TODO(copy): lead — uses only existing figures (6+ yrs, 20K+ users).
  lead: "I embed with teams, map the repetitive work that eats their week, and deliver production agentic apps with evals, guardrails, and humans in the loop. I've spent 6+ years shipping full-stack and on-chain systems used by 20K+ people.",
  status: 'Open to FDE roles',
  // Only impact figures already present on the site — never invented.
  metrics: [
    { value: '6+ yrs', label: 'shipping production systems' },
    { value: '20K+', label: 'users on systems I led' },
    { value: '2–3h → <1m', label: 'workflow time I automated away' },
    { value: '🏆 ETH Istanbul', label: 'winner · ETH India finalist' },
  ],
  // TODO(copy): agentRun — lines rendered in the hero "terminal" card.
  agentRun: [
    '$ agent run --workflow "triage-ci-failures"',
    'plan   → classify · fetch logs · propose fix',
    'tools  → github, ci, slack',
    'guard  → human approval on write',
    'eval   → 42/45 golden cases ✓',
    '✔ shipped · 3h/day → 10 min/day',
  ],
  email: 'aamiralam1991@gmail.com',
  links: {
    github: 'https://github.com/AamirAlam',
    linkedin: 'https://www.linkedin.com/in/aamir2alam/',
    x: 'https://x.com/AamirAlam201096',
    devfolio: 'https://devfolio.co/projects/flow-bd3f',
  },
  avatar: 'https://avatars.githubusercontent.com/u/56264430',
  siteUrl: 'https://aamir-alam.vercel.app',
  seo: {
    // TODO(copy): SEO wording.
    title: 'Aamir Alam — Forward Deployed Engineer',
    description:
      'Forward Deployed Engineer building production agentic systems and automating repetitive workflows. 6+ years shipping full-stack and on-chain systems used by 20K+ people. ETH Istanbul winner, ETH India finalist.',
    keywords: [
      'Forward Deployed Engineer',
      'Agentic systems',
      'Workflow automation',
      'LLM agents',
      'Full Stack',
      'Web3',
      'Next.js',
    ],
  },
}
