import { profile } from '@/content/profile'

export default function Footer() {
  return (
    <footer className="border-t border-indigo-500/10 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        {/* CTA */}
        <h2 className="text-2xl font-bold text-slate-100">
          Have a repetitive workflow worth automating?
        </h2>
        {/* TODO(copy): CTA sub-line. */}
        <p className="text-slate-500 text-sm mt-3 mb-7">
          Tell me what&apos;s eating your team&apos;s week.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
        >
          {profile.email}
        </a>

        <div className="flex flex-col items-center gap-6 mt-12 md:flex-row md:justify-between md:text-left">
          {/* Identity */}
          <div className="text-center md:text-left">
            <div className="font-mono text-indigo-400 font-medium mb-1">
              {profile.name}
            </div>
            <div className="text-slate-600 text-sm">
              {profile.role} · Delhi, India
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-5 flex-wrap justify-center">
            <FooterLink href={profile.links.github} label="GitHub" />
            <FooterLink href={profile.links.x} label="Twitter / X" />
            <FooterLink href={profile.links.linkedin} label="LinkedIn" />
            <FooterLink href={profile.links.devfolio} label="DevFolio" />
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-indigo-500/5 text-xs text-slate-700 font-mono">
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
