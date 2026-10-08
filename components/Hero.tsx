import { profile } from '@/content/profile'

export default function Hero() {
  // Gradient-highlight the final three words of the headline (mockup: "agents that ship.").
  const words = profile.headline.split(' ')
  const plain = words.slice(0, -3).join(' ')
  const grad = words.slice(-3).join(' ')

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center grid-bg overflow-hidden"
    >
      {/* Glow blobs */}
      <div className="absolute top-1/4 left-[10%] w-[26rem] h-[26rem] bg-violet-600/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-32 w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-12 lg:gap-14 items-center">
          {/* Text */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow inline-block" />
              {`// ${profile.role} · ${profile.focus}`}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-100 leading-[1.05] tracking-tight">
              {plain && <>{plain} </>}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                {grad}
              </span>
            </h1>

            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              {profile.lead}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#approach"
                className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition-colors"
              >
                See how I work →
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-sm font-medium transition-colors"
              >
                <GitHubIcon />
                GitHub
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-sm font-medium transition-colors"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Terminal agent-run card */}
          <TerminalCard lines={profile.agentRun} />
        </div>

        {/* Metrics strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12">
          {profile.metrics.map((m) => (
            <div key={m.label} className="card p-4">
              <div className="text-2xl font-bold text-slate-100">{m.value}</div>
              <div className="text-xs text-slate-500 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-slate-600 text-xs hidden md:flex">
        <span className="font-mono">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  )
}

function TerminalCard({ lines }: { lines: string[] }) {
  return (
    <div className="card p-5 font-mono text-[12.5px] leading-relaxed glow-violet">
      <div className="flex gap-1.5 mb-3">
        <span className="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block" />
        <span className="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block" />
        <span className="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block" />
      </div>
      <div className="space-y-1">
        {lines.map((line, i) => (
          <div
            key={i}
            className={
              i === 0
                ? 'text-slate-500'
                : i === lines.length - 1
                  ? 'text-emerald-400'
                  : 'text-slate-300'
            }
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  )
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
