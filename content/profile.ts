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
    "I'm a **Forward Deployed Engineer** with **6+ years** building real products for **fintech, Web3, and medical imaging** startups. I'm currently at **Autonom**, building **Rust and TypeScript services** that read Solana blockchain data and execute trades in **under 300ms**.",
    'Before that, I spent two years at **API3** building analytics for trading bots and **automating lending-protocol deployments**. At **QuickSwap** I found what was slowing down the trading app and cut its load time by **80%**.',
    "I work closely with users to find what's actually slowing them down, then build and improve the fix until the results show.",
    'Lately I have been building **AI agents that people can trust**: tested against real examples, kept inside **clear rules**, and with **a person in charge** of important decisions. **Neura Vaults** is the live example, with **200+ users** and **$150K+ managed**.',
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
