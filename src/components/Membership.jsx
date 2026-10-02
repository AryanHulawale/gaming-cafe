import { Check } from 'lucide-react'
import { MEMBERSHIPS } from '../data.js'
import { SectionHeading, NeonButton } from './ui.jsx'

export default function Membership() {
  return (
    <section id="membership" className="bg-slate-50 dark:bg-[#14161c] border-y border-slate-200 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <SectionHeading eyebrow="Membership" title="Save if you play weekly" sub="Free hours and priority booking each month." />
        <div className="grid md:grid-cols-3 gap-5">
          {MEMBERSHIPS.map((m) => (
            <article key={m.tier} className={`reveal card p-7 text-center ${m.popular ? '!border-slate-900 dark:!border-white border-2' : ''}`}>
              {m.popular && <span className="inline-block bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3">Best Value</span>}
              <h3 className="font-semibold text-lg">{m.tier}</h3>
              <p className="text-xl font-semibold mt-1">{m.price}</p>
              <ul className="mt-5 space-y-2.5 text-sm text-left text-slate-600 dark:text-slate-300">
                {m.perks.map((p) => (
                  <li key={p} className="flex gap-2"><Check className="w-4 h-4 mt-0.5 shrink-0" /> {p}</li>
                ))}
              </ul>
              <a href="#contact" className="block mt-6"><NeonButton variant={m.popular ? 'primary' : 'ghost'} className="w-full">Get {m.tier}</NeonButton></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
