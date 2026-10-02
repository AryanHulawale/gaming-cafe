import { useState } from 'react'
import { EVENTS } from '../data.js'
import { SectionHeading, NeonButton } from './ui.jsx'

export default function Tournaments() {
  const [joined, setJoined] = useState({})
  return (
    <section id="events" className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <SectionHeading eyebrow="Events" title="Tournaments & community nights" sub="Weekly brackets. Fair rules, on-time starts." />
      <div className="grid md:grid-cols-2 gap-4">
        {EVENTS.map((e) => (
          <article key={e.title} className="reveal card p-6">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 dark:bg-white/10 dark:text-slate-300 px-2.5 py-1 rounded-md">{e.tag}</span>
            <h3 className="font-semibold text-lg mt-3">{e.title}</h3>
            <p className="text-sm text-slate-500 mt-1">{e.game} • {e.when} • {e.prize}</p>
            <div className="mt-4">
              <NeonButton variant={joined[e.title] ? 'accent' : 'primary'} onClick={() => setJoined((j) => ({ ...j, [e.title]: true }))} disabled={!!joined[e.title]} className="disabled:opacity-60">
                {joined[e.title] ? 'Registered' : 'Register'}
              </NeonButton>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
