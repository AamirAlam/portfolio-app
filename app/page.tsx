import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import GitHubActivity from '@/components/GitHubActivity'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Achievements from '@/components/Achievements'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-[#070710] text-slate-100 min-h-screen">
      <Nav />
      <Hero />
      <GitHubActivity />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Footer />
    </main>
  )
}
