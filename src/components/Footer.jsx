import { useState } from 'react'
import { Instagram, Youtube, MessageCircle } from 'lucide-react'
import { NAV_LINKS, BUSINESS } from '../data.js'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [ok, setOk] = useState(false)
  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#0f1115]">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 grid gap-10 md:grid-cols-[1.2fr_.8fr_1fr]">
        <div>
          <p className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="w-8 h-8 rounded-lg grid place-items-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold">PF</span>
            PixelForge Arena
          </p>
          <p className="mt-3 text-sm text-slate-500 max-w-xs leading-relaxed">{BUSINESS.address}<br />{BUSINESS.hours}</p>
          <div className="mt-4 flex gap-2">
            {[
              { label: 'Instagram', Icon: Instagram },
              { label: 'Discord', Icon: MessageCircle },
              { label: 'YouTube', Icon: Youtube },
            ].map(({ label, Icon }) => (
              <a key={label} href="#" aria-label={label} className="w-9 h-9 grid place-items-center rounded-lg border border-slate-200 dark:border-white/15 hover:bg-slate-50 dark:hover:bg-white/10"><Icon className="w-4 h-4" /></a>
            ))}
          </div>
        </div>
        <nav aria-label="Footer">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Explore</h3>
          <ul className="mt-4 grid grid-cols-2 md:grid-cols-1 gap-2 text-sm">
            {NAV_LINKS.map((l) => <li key={l.href}><a href={l.href} className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">{l.label}</a></li>)}
          </ul>
        </nav>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Updates</h3>
          <p className="text-sm text-slate-500 mt-4">Tournaments and new games, once a month.</p>
          <form className="mt-3 flex gap-2" onSubmit={(e) => { e.preventDefault(); if (email) setOk(true) }}>
            <label htmlFor="newsletter-email" className="sr-only">Email for newsletter</label>
            <input id="newsletter-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="flex-1 border border-slate-300 dark:border-white/15 rounded-lg px-3.5 py-2.5 text-sm bg-white dark:bg-white/5 placeholder:text-slate-400 outline-none" />
            <button className="px-4 py-2.5 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-sm font-medium">Join</button>
          </form>
          {ok && <p role="status" className="text-xs text-emerald-600 mt-2">Subscribed (demo).</p>}
          <p className="text-xs text-slate-500 mt-3">{BUSINESS.phone} • {BUSINESS.email}</p>
        </div>
      </div>
      <div className="border-t border-slate-200 dark:border-white/10">
        <p className="max-w-6xl mx-auto px-4 md:px-6 py-5 text-xs text-slate-500 flex flex-col sm:flex-row justify-between gap-2">
          <span>© 2026 PixelForge Arena (fictional demo).</span>
          <span>PC • PS5 • Squad Room</span>
        </p>
      </div>
    </footer>
  )
}
