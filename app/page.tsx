import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import CaseStudies from '@/components/CaseStudies'
import GitHubActivity from '@/components/GitHubActivity'
import HowIWork from '@/components/HowIWork'
import Skills from '@/components/Skills'
import Achievements from '@/components/Achievements'
import Contact from '@/components/Contact'
import Dock from '@/components/Dock'

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-12 sm:py-24 space-y-16">
      <Hero />
      <About />
      <Experience />
      <CaseStudies />
      <GitHubActivity />
      <HowIWork />
      <Skills />
      <Achievements />
      <Contact />
      <Dock />
    </main>
  )
}
