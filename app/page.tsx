import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import LiveStats from '@/components/LiveStats'
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
      <LiveStats />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Footer />
    </main>
  )
}
