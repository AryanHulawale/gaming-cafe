import { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { NAV_LINKS, BUSINESS } from '../data.js'

export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 bg-white/90 dark:bg-[#0f1115]/90 backdrop-blur border-b border-slate-200 dark:border-white/10 ${scrolled ? 'shadow-card' : ''}`}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:p-2 focus:bg-white focus:text-slate-900">Skip to content</a>
      <nav aria-label="Primary" className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6 h-16">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-lg grid place-items-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold">PF</span>
          <span className="font-semibold tracking-tight text-[15px]">PixelForge Arena</span>
        </a>
        <ul className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          {NAV_LINKS.slice(0, 6).map((l) => (
            <li key={l.href}><a className="hover:text-slate-900 dark:hover:text-white" href={l.href}>{l.label}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="w-9 h-9 grid place-items-center rounded-lg border border-slate-200 dark:border-white/15 hover:bg-slate-50 dark:hover:bg-white/10"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <a href="#booking" className="hidden sm:inline-flex items-center font-semibold text-sm px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
            Book a Seat
          </a>
          <button className="lg:hidden w-9 h-9 grid place-items-center rounded-lg border border-slate-200 dark:border-white/15" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="lg:hidden border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#0f1115] mx-0 px-4 py-3">
          <ul className="grid gap-1">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 text-sm font-medium">{l.label}</a>
              </li>
            ))}
            <li className="text-xs text-slate-500 px-3 pt-2">{BUSINESS.phone} • {BUSINESS.hours}</li>
          </ul>
        </div>
      )}
    </header>
  )
}
