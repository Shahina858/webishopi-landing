import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { LANGUAGES, getTranslation } from './translations'
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
import About from './components/About'
import Contact from './components/Contact'

export default function App() {
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[1]) // default English

  const handleLangChange = (lang) => {
    setSelectedLang(lang)
    document.documentElement.lang = lang.code
    // ✖ do NOT set document.documentElement.dir — that flips the navbar too
  }

  const t = getTranslation(selectedLang.code)
  const isRTL = selectedLang.dir === 'rtl'
  const contentDir = { direction: isRTL ? 'rtl' : 'ltr' }

  return (
    <>
      {/* Navbar always LTR layout — only text changes */}
      <Navbar t={t} selectedLang={selectedLang} onLangChange={handleLangChange} />

      <Routes>

        {/* ── Home page ── */}
        <Route path="/" element={
          <main style={contentDir}>
            <Hero t={t} />
            <Industries t={t} />
            <ProductMock t={t} />
            <Features t={t} />
            <HowItWorks t={t} />
            <StatsBar t={t} />
            <AIAgent t={t} />
            <Flows t={t} />
            <Pricing t={t} />
            <FAQ t={t} />
            <CTA t={t} />
          </main>
        } />

        {/* ── About page ── */}
        <Route path="/about" element={
          <main style={contentDir}>
            <About t={t} />
          </main>
        } />

        {/* ── Contact / Demo page ── */}
        <Route path="/contact" element={
          <main style={contentDir}>
            <Contact t={t} />
          </main>
        } />
        <Route path="/demo" element={
          <main style={contentDir}>
            <Contact t={t} />
          </main>
        } />

      </Routes>

      <div style={contentDir}>
        <Footer t={t} />
      </div>
    </>
  )
}
