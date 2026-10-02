import { useState } from 'react'
import { Check, Users, Monitor, Gamepad2, Crown } from 'lucide-react'
import { PRICING } from '../data.js'
import { SectionHeading, NeonButton } from './ui.jsx'

const TABS = [
  { id: 'pc', label: 'PC', icon: Monitor },
  { id: 'console', label: 'Console', icon: Gamepad2 },
  { id: 'vip', label: 'VIP Room', icon: Users },
]

export function priceFor(zone, planIdx, players = 1) {
  const list = PRICING[zone]
  const plan = list[planIdx] ?? list[0]
  if (zone === 'vip') return plan.price
  if (zone === 'console' && plan.name.includes('Per Player')) return plan.price * players
  return plan.price
}

function PlanCard({ p }) {
  return (
    <article className={`card p-6 md:p-7 relative flex flex-col h-full ${p.popular ? 'border-slate-900 dark:border-white !border-2' : ''}`}>
      {p.popular && (
        <span className="absolute -top-3 left-6 inline-flex items-center gap-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
          <Crown className="w-3 h-3" /> Most Popular
        </span>
      )}
      <h3 className="font-semibold">{p.name}</h3>
      <p className="mt-2">
        <span className="text-3xl font-semibold tracking-tight">₹{p.price}</span>{' '}
        <span className="text-sm text-slate-500">{p.unit}</span>
      </p>
      <ul className="mt-5 space-y-2.5 text-sm text-slate-600 dark:text-slate-300 flex-1">
        {p.features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <Check className="w-4 h-4 mt-0.5 shrink-0" /> {f}
          </li>
        ))}
      </ul>
      <a href="#booking" className="block mt-6">
        <NeonButton variant={p.popular ? 'primary' : 'ghost'} className="w-full">Book {p.name}</NeonButton>
      </a>
    </article>
  )
}

export default function Pricing() {
  const [tab, setTab] = useState('pc')

  return (
    <section id="pricing" className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <SectionHeading
        eyebrow="Pricing"
        title="Simple, transparent pricing"
        sub="No hidden fees. Student discount applied at the counter."
      />

      <div className="flex justify-center mb-8" role="tablist" aria-label="Pricing categories">
        <div className="w-full sm:w-auto bg-slate-100 dark:bg-white/10 rounded-xl p-1.5 grid grid-cols-3 sm:flex gap-1">
          {TABS.map((t) => {
            const Icon = t.icon
            const active = tab === t.id
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={active}
                onClick={() => setTab(t.id)}
                className={`flex items-center justify-center gap-1.5 px-3 sm:px-6 py-2.5 rounded-lg text-[13px] sm:text-sm font-medium transition-colors whitespace-nowrap ${
                  active
                    ? 'bg-white dark:bg-slate-900 shadow-card text-slate-900 dark:text-white'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4 hidden sm:block" aria-hidden />
                {t.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* NOTE: no .reveal inside tab panels — tab switches mount new nodes
          after the scroll-observer ran, which left them invisible (empty section bug). */}
      <div key={tab}>
        {tab === 'pc' && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
            {PRICING.pc.map((p) => (
              <PlanCard key={p.name} p={p} />
            ))}
          </div>
        )}

        {tab === 'console' && (
          <div className="grid gap-5 lg:grid-cols-[1fr_1fr] items-stretch">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2 items-stretch">
              {PRICING.console.map((p) => (
                <PlanCard key={p.name} p={p} />
              ))}
            </div>
            <aside className="card overflow-hidden !p-0 flex flex-col">
              <img
                src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=900&q=70&auto=format&fit=crop"
                alt="PS5 DualSense controllers on a table in the console lounge"
                className="w-full h-52 sm:h-60 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-semibold">Console Lounge includes</h3>
                <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-sm text-slate-600 dark:text-slate-300">
                  {['PS5 + 55" 4K TV', 'Couch seating for squads', '2 controllers per TV', 'FC 25, Tekken 8 & MK ready', 'Party & 1v1 setups', 'Snack bar nearby'].map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="w-4 h-4 mt-0.5 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-slate-500">Hourly rate is per player. 4-hour pack covers 1 player — add players at booking.</p>
              </div>
            </aside>
          </div>
        )}

        {tab === 'vip' && (
          <div className="grid gap-5 lg:grid-cols-2 items-stretch">
            <aside className="card overflow-hidden !p-0 flex flex-col">
              <img
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=900&q=70&auto=format&fit=crop"
                alt="Private VIP squad room with multiple gaming PCs and ambient lighting"
                className="w-full h-52 sm:h-64 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-semibold">VIP Squad Room — why teams book it</h3>
                <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-sm text-slate-600 dark:text-slate-300">
                  {['Private room, 5–8 players', '5 PCs + 1 PS5 inside', 'No waiting, no noise', 'Own display for tactics', 'Host call button', 'Birthday & team friendly'].map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="w-4 h-4 mt-0.5 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-slate-500">Flat ₹500/hr for the whole room (up to 8). Split it — works out cheaper than solo PCs.</p>
              </div>
            </aside>
            <div className="grid gap-5 content-start">
              {PRICING.vip.map((p) => (
                <PlanCard key={p.name} p={p} />
              ))}
              <div className="card p-5 text-sm text-slate-600 dark:text-slate-300">
                <p className="font-semibold text-slate-900 dark:text-white">Good to know</p>
                <p className="mt-1.5 leading-relaxed">Book 3+ hours and get a free group photo + tournament entry for one player. Reserve 48 hrs ahead on weekends.</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <p className="mt-6 text-center text-sm text-slate-500 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-3 max-w-2xl mx-auto">
        Student discount: 15% off Mon–Thu before 4 PM with valid college ID.
      </p>
    </section>
  )
}
