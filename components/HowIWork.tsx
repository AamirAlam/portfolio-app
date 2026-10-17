import { approach } from '@/content/approach'
import { principles } from '@/content/principles'
import SectionHeader from './ui/SectionHeader'
import Reveal from './ui/Reveal'

export default function HowIWork() {
  return (
    <Reveal>
      <section id="approach" className="scroll-mt-24">
        <SectionHeader
          title="How I Work"
          sub="The same steps every time, whatever the problem."
        />

        <ol className="space-y-2 text-sm">
          {approach.map((step, i) => (
            <li key={step.id} className="flex gap-3">
              <span className="w-5 shrink-0 tabular-nums text-muted">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p>
                <span className="font-semibold">{step.title}.</span>{' '}
                <span className="text-muted">{step.body}</span>
              </p>
            </li>
          ))}
        </ol>

        <h3 className="mt-10 text-base font-semibold">
          Rules I follow when building AI agents
        </h3>
        <ul className="mt-3 divide-y divide-border">
          {principles.map((p) => (
            <li key={p.title} className="py-3">
              <p className="text-sm font-medium">{p.title}</p>
              <p className="mt-0.5 text-sm text-muted">{p.body}</p>
            </li>
          ))}
        </ul>
      </section>
    </Reveal>
  )
}
