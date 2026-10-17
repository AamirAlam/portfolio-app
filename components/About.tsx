import { profile } from '@/content/profile'
import SectionHeader from './ui/SectionHeader'
import Reveal from './ui/Reveal'

// Renders **highlighted** phrases from the content strings in bold.
function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split('**').map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="font-semibold text-foreground">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  )
}

export default function About() {
  return (
    <Reveal>
      <section id="about" className="scroll-mt-24">
        <SectionHeader title="About" />
        <div className="space-y-4 text-pretty text-sm leading-relaxed text-muted sm:text-base">
          {profile.about.map((p, i) => (
            <p key={i}>
              <RichText text={p} />
            </p>
          ))}
        </div>
      </section>
    </Reveal>
  )
}
