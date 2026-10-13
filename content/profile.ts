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
  focus: 'Agentic systems & full stack',
  // The gradient span wraps the final three words.
  headline: 'I build AI agents that people can trust.',
  lead: "I've spent 6+ years building real products for fintech, Web3, and medical imaging startups. I work closely with users to find what's actually slowing them down, then build and improve the fix until the results show. Lately I've been building AI agents that are tested, safe, and keep a person in charge of important decisions.",
  status: 'Open to FDE roles',
  // Only figures from the resume — never invented.
  metrics: [
    { value: '6+ yrs', label: 'shipping production systems' },
    { value: '20K+', label: 'users on products I led' },
    { value: '$150K+', label: 'managed in Neura Vaults' },
    { value: '🏆 ETH Istanbul', label: 'winner · ETH India finalist' },
  ],
  // Lines rendered in the hero "terminal" card — the Neura Vaults flow.
  agentRun: [
    '$ neura-vaults rebalance',
    'read   → market data',
    'agent  → suggest a rebalance',
    'rules  → check strict limits',
    'human  → approve the move',
    '✔ live · 200+ users · $150K+ managed',
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
      'Forward Deployed Engineer with 6+ years building real products for fintech, Web3, and medical imaging startups. Now building AI agents that are tested, safe, and keep a person in charge. ETHGlobal Istanbul winner, ETHIndia finalist.',
    keywords: [
      'Forward Deployed Engineer',
      'Agentic systems',
      'AI agents',
      'LLM agents',
      'Full Stack',
      'Web3',
      'Next.js',
    ],
  },
}
