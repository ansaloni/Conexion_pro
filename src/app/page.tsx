import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ForWho from '@/components/ForWho'
import Promise from '@/components/Promise'
import ProblemSolution from '@/components/ProblemSolution'
import About from '@/components/About'
import Benefits from '@/components/Benefits'
import Modules from '@/components/Modules'
import Methodology from '@/components/Methodology'
import Bonuses from '@/components/Bonuses'
import Pricing from '@/components/Pricing'
import Closing from '@/components/Closing'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <ForWho />
      <Promise />
      <ProblemSolution />
      <About />
      <Benefits />
      <Modules />
      <Methodology />
      <Bonuses />
      <Pricing />
      <Closing />
      <FAQ />
      <Footer />
    </main>
  )
}
