export interface Profile {
  name: string
  role: string
  headline: string
  // About paragraphs; **double asterisks** mark highlighted phrases.
  about: string[]
  email: string
  links: { github: string; linkedin: string; x: string; devfolio: string }
  avatar: string
  siteUrl: string
  seo: { title: string; description: string; keywords: string[] }
}

export const profile: Profile = {
  name: 'Aamir Alam',
  role: 'Forward Deployed Engineer',
  headline: 'I build AI agents that people can trust.',
  about: [
    "I'm a **Forward Deployed Engineer** with **6+ years** shipping production systems for **fintech, Web3, and medical imaging** startups. I work closely with users to find what's actually slowing them down, then build the fix and keep improving it until the results show.",
    "I'm currently at **Autonom Labs**, building a **perpetuals DEX on Solana**. I write the **off-chain services for liquidations and limit orders**, the parts that have to be **fast and must not miss**. They execute in **under 300ms**, and adding automatic fallback providers cut failed liquidation transactions by **70%**.",
    "Alongside that, I build **AI agents that reason under uncertainty**. Instead of a yes/no answer, the agent keeps a **probability that updates with every new piece of evidence** and picks between acting, **holding for a human**, or flagging. In my **LinkedIn scam detection agent**, this kept **100% precision** but cut the **cost of mistakes from 60 to 22** against a plain classifier, because unsure cases went to human review instead of being marked safe.",
    'Before Autonom, I built DeFi analytics and deployment automation at **API3**, and cut the **QuickSwap** trading app\'s load time by **80%**.',
  ],
  email: 'aamiralam1991@gmail.com',
  links: {
    github: 'https://github.com/AamirAlam',
    linkedin: 'https://www.linkedin.com/in/aamir2alam/',
    x: 'https://x.com/AamirAlam201096',
    devfolio: 'https://devfolio.co/projects/flow-bd3f',
  },
  avatar: '/avatar.jpg',
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
