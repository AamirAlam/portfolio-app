import { achievements } from '@/content/achievements'
import SectionHeader from './ui/SectionHeader'
import Reveal from './ui/Reveal'

export default function Achievements() {
  return (
    <Reveal>
      <section id="recognition" className="scroll-mt-24">
        <SectionHeader title="Achievements & Education" />
        <ul className="space-y-5">
          {achievements.map((a) => (
            <li key={a.title}>
              <h3 className="font-semibold">{a.title}</h3>
              <p className="text-sm">{a.subtitle}</p>
              <p className="mt-1 text-sm text-muted">{a.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </Reveal>
  )
}
