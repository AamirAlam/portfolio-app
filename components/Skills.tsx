import { categories } from '@/content/skills'
import SectionHeader from './ui/SectionHeader'
import Reveal from './ui/Reveal'
import { ChevronDownIcon } from './ui/icons'

export default function Skills() {
  return (
    <Reveal>
      <section id="skills" className="scroll-mt-24">
        <SectionHeader title="Skills" />
        <div>
          {categories.map((cat, i) => (
            <details key={cat.label} open={i === 0} className="group border-b border-border">
              <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-sm font-medium hover:underline [&::-webkit-details-marker]:hidden">
                {cat.label}
                <ChevronDownIcon className="shrink-0 text-muted transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <div className="flex flex-wrap gap-1 pb-4">
                {cat.skills.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </details>
          ))}
        </div>
      </section>
    </Reveal>
  )
}
