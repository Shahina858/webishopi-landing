import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Industries from './components/Industries'
import ProductMock from './components/ProductMock'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import StatsBar from './components/StatsBar'
import AIAgent from './components/AIAgent'
import Flows from './components/Flows'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Industries />
        <ProductMock />
        <Features />
        <HowItWorks />
        <StatsBar />
        <AIAgent />
        <Flows />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
