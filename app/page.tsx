import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Approach from '@/components/Approach'
import Principles from '@/components/Principles'
import CaseStudies from '@/components/CaseStudies'
import GitHubActivity from '@/components/GitHubActivity'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Achievements from '@/components/Achievements'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-[#070710] text-slate-100 min-h-screen">
      <Nav />
      <Hero />
      <Approach />
      <Principles />
      <CaseStudies />
      <GitHubActivity />
      <Experience />
      <Skills />
      <Achievements />
      <Footer />
    </main>
  )
}
