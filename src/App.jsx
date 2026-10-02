import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import StatsBar from './components/StatsBar.jsx'
import Zones from './components/Zones.jsx'
import Games from './components/Games.jsx'
import Pricing from './components/Pricing.jsx'
import Booking from './components/Booking.jsx'
import Gallery from './components/Gallery.jsx'
import Testimonials from './components/Testimonials.jsx'
import Faq from './components/Faq.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import FloatingButtons from './components/FloatingButtons.jsx'
import { useReveal } from './components/ui.jsx'

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('pf-theme') || 'light')
  useReveal()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('pf-theme', theme)
  }, [theme])

  // re-run reveal observer after mount (all sections present)
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} setTheme={setTheme} />
      <main id="main">
        <Hero />
        <StatsBar />
        <Zones />
        <Games />
        <Pricing />
        <Booking />
        <Gallery />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
