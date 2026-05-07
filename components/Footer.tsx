export default function Footer() {
  return (
    <footer className="border-t border-indigo-500/10 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:items-center">

          {/* Identity */}
          <div className="text-center md:text-left">
            <div className="font-mono text-indigo-400 font-medium mb-1">Aamir Alam</div>
            <div className="text-slate-600 text-sm">Senior Full Stack & Web3 Engineer · Delhi, India</div>
          </div>

          {/* Links + CTA */}
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
            <div className="flex items-center gap-5 flex-wrap justify-center">
              <FooterLink href="https://github.com/AamirAlam" label="GitHub" />
              <FooterLink href="https://x.com/AamirAlam201096" label="Twitter / X" />
              <FooterLink href="https://www.linkedin.com/in/aamir2alam/" label="LinkedIn" />
              <FooterLink href="https://devfolio.co/projects/flow-bd3f" label="DevFolio" />
            </div>
            <a
              href="mailto:aamiralam1991@gmail.com"
              className="text-sm px-5 py-2 rounded-lg bg-violet-600/90 hover:bg-violet-600 text-white transition-colors whitespace-nowrap"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-indigo-500/5 text-center text-xs text-slate-700 font-mono">
          Built with Next.js 14 · Deployed on Vercel
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
    >
      {label}
    </a>
  )
}
