import { Star, BadgeCheck, Quote } from 'lucide-react'
import { TESTIMONIALS } from '../data.js'

function Stars({ n }) {
  return (
    <div className="flex gap-0.5" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`w-3.5 h-3.5 ${i < n ? 'fill-amber-400 text-amber-400' : 'text-slate-300 dark:text-white/20'}`} aria-hidden />
      ))}
    </div>
  )
}

const AVATAR_BG = [
  'bg-slate-900 text-white dark:bg-white dark:text-slate-900',
  'bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-white',
  'bg-slate-200 text-slate-800 dark:bg-white/15 dark:text-white',
  'bg-slate-900 text-white dark:bg-white dark:text-slate-900',
]

export default function Testimonials() {
  return (
    <section id="reviews" aria-label="Customer reviews" className="bg-white dark:bg-[#0f1115] border-y border-slate-200 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:items-start">
          {/* Left summary panel */}
          <div className="reveal lg:sticky lg:top-20">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Reviews</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-2">Rated by regulars</h2>
            <div className="mt-5 flex items-end gap-2">
              <span className="text-5xl font-semibold tracking-tight">4.9</span>
              <span className="text-sm text-slate-500 pb-1.5">/ 5<br />500+ visits</span>
            </div>
            <div className="mt-2"><Stars n={5} /></div>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed">
              Clean systems, stable ping and staff that actually play. Here's what a few regulars say.
            </p>
            <a href="#booking" className="mt-6 inline-flex items-center font-semibold text-sm px-5 py-2.5 rounded-lg bg-slate-900 text-white hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
              Try a session
            </a>
            <div className="mt-6 space-y-2 text-xs text-slate-500">
              {[
                ['5', 92],
                ['4', 6],
                ['3', 2],
              ].map(([star, pct]) => (
                <div key={star} className="flex items-center gap-2">
                  <span className="w-3">{star}</span>
                  <div className="flex-1 h-1.5 rounded-full bg-slate-100 dark:bg-white/10 overflow-hidden">
                    <div className="h-full rounded-full bg-slate-900 dark:bg-white" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="w-8 text-right">{pct}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right review grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {TESTIMONIALS.map((r, i) => (
              <figure key={r.author} className={`reveal card p-6 flex flex-col ${i === 0 ? 'sm:col-span-2 sm:flex-row sm:gap-6 sm:items-start' : ''}`}>
                <Quote className={`w-7 h-7 shrink-0 ${i === 0 ? 'text-slate-900 dark:text-white' : 'text-slate-300 dark:text-white/20'}`} aria-hidden />
                <div className="flex-1">
                  <Stars n={r.stars} />
                  <blockquote className={`${i === 0 ? 'text-xl md:text-2xl' : 'text-[15px]'} font-medium leading-relaxed text-slate-900 dark:text-white mt-3`}>
                    “{r.quote}”
                  </blockquote>
                  <figcaption className="mt-5 pt-4 border-t border-slate-100 dark:border-white/10 flex items-center gap-3">
                    <span className={`w-9 h-9 rounded-full grid place-items-center text-xs font-bold ${AVATAR_BG[i % AVATAR_BG.length]}`} aria-hidden>
                      {r.author.charAt(0)}
                    </span>
                    <span>
                      <span className="flex items-center gap-1.5 text-sm font-semibold">
                        {r.author} <BadgeCheck className="w-3.5 h-3.5 text-sky-600" aria-label="Verified visitor" />
                      </span>
                      <span className="text-xs text-slate-500">Plays {r.game} • Verified visit</span>
                    </span>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
