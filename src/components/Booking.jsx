import { useMemo, useState } from 'react'
import { X } from 'lucide-react'
import { TIME_SLOTS, PRICING } from '../data.js'
import { SectionHeading, NeonButton } from './ui.jsx'
import { priceFor } from './Pricing.jsx'

const ZONE_OPTIONS = [
  { id: 'pc', label: 'PC Zone' },
  { id: 'console', label: 'Console Lounge' },
  { id: 'vip', label: 'VIP Squad Room' },
]

const inputCls = 'w-full bg-white dark:bg-white/5 border border-slate-300 dark:border-white/15 rounded-lg px-3.5 py-2.5 text-sm placeholder:text-slate-400 focus:border-slate-900 dark:focus:border-white outline-none'

export default function Booking() {
  const [form, setForm] = useState({ name: '', phone: '', zone: 'pc', plan: 0, date: '', slot: TIME_SLOTS[0], players: 1 })
  const [toast, setToast] = useState(null)

  const plans = PRICING[form.zone]
  const safePlan = plans[Math.min(form.plan, plans.length - 1)]
  const estimate = useMemo(() => priceFor(form.zone, Math.min(form.plan, plans.length - 1), Number(form.players) || 1), [form])

  const submit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim() || !form.date) {
      setToast({ error: true, msg: 'Please add your name, phone and date to confirm your seat.' })
      return
    }
    setToast({ error: false, msg: `Thanks ${form.name.split(' ')[0]} — ${safePlan.name} in ${ZONE_OPTIONS.find((z) => z.id === form.zone)?.label} on ${form.date} at ${form.slot} for ${form.players} player(s). Estimated ₹${estimate}. We'll confirm by SMS.` })
  }

  return (
    <section id="booking" className="bg-slate-50 dark:bg-[#14161c] border-y border-slate-200 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <SectionHeading eyebrow="Booking" title="Reserve your seat" sub="Live price estimate. No advance payment needed for this demo." />
        <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-5 items-start">
          <form onSubmit={submit} className="reveal card p-6 md:p-8 grid sm:grid-cols-2 gap-4" aria-label="Seat booking form">
            <label className="grid gap-1.5 text-sm font-medium">Full name
              <input required value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} placeholder="e.g. Aarav Kapoor" className={inputCls} />
            </label>
            <label className="grid gap-1.5 text-sm font-medium">Phone
              <input required value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} placeholder="+91 ..." inputMode="tel" className={inputCls} />
            </label>
            <label className="grid gap-1.5 text-sm font-medium">Zone
              <select value={form.zone} onChange={(e) => setForm((f) => ({ ...f, zone: e.target.value, plan: 0 }))} className={inputCls}>
                {ZONE_OPTIONS.map((z) => <option key={z.id} value={z.id}>{z.label}</option>)}
              </select>
            </label>
            <label className="grid gap-1.5 text-sm font-medium">Plan
              <select value={form.plan} onChange={(e) => setForm((f) => ({ ...f, plan: Number(e.target.value) }))} className={inputCls}>
                {plans.map((p, i) => <option key={p.name} value={i}>{p.name} — ₹{p.price}</option>)}
              </select>
            </label>
            <label className="grid gap-1.5 text-sm font-medium">Date
              <input type="date" required value={form.date} onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))} className={inputCls} />
            </label>
            <label className="grid gap-1.5 text-sm font-medium">Time slot
              <select value={form.slot} onChange={(e) => setForm((f) => ({ ...f, slot: e.target.value }))} className={inputCls}>
                {TIME_SLOTS.map((t) => <option key={t}>{t}</option>)}
              </select>
            </label>
            <label className="grid gap-1.5 text-sm font-medium sm:col-span-2">Number of players
              <input type="number" min={1} max={8} value={form.players} onChange={(e) => setForm((f) => ({ ...f, players: e.target.value }))} className={`${inputCls} max-w-xs`} />
            </label>
            <div className="sm:col-span-2">
              <NeonButton type="submit" className="w-full">Confirm Booking — ₹{estimate}</NeonButton>
              <p className="text-xs text-slate-500 mt-2 text-center">Student 15% off applied at counter Mon–Thu before 4 PM.</p>
            </div>
          </form>

          <aside className="reveal card p-6 md:p-7 lg:sticky lg:top-20" aria-live="polite" aria-label="Booking summary">
            <img src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=700&q=70&auto=format&fit=crop" alt="Player at PC station wearing headset" className="w-full h-40 object-cover rounded-xl mb-5" loading="lazy" />
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Summary</h3>
            <dl className="mt-3 space-y-2.5 text-sm">
              {[['Name', form.name || '—'], ['Zone', ZONE_OPTIONS.find((z) => z.id === form.zone)?.label], ['Plan', safePlan.name], ['When', `${form.date || 'Pick a date'} • ${form.slot}`], ['Players', `${form.players}`]].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 border-b border-slate-100 dark:border-white/10 pb-2"><dt className="text-slate-500">{k}</dt><dd className="font-medium text-right">{v}</dd></div>
              ))}
            </dl>
            <p className="mt-4 flex items-end justify-between"><span className="text-sm text-slate-500">Estimated total</span><span className="text-3xl font-semibold tracking-tight">₹{estimate}</span></p>
          </aside>
        </div>
      </div>

      {toast && (
        <div role={toast.error ? 'alert' : 'status'} className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[60] w-[min(92vw,480px)]">
          <div className={`card !shadow-lift p-5 flex gap-3 ${toast.error ? '!border-red-300' : '!border-emerald-300'}`}>
            <p className="text-sm flex-1">{toast.msg}</p>
            <button onClick={() => setToast(null)} aria-label="Dismiss" className="w-8 h-8 grid place-items-center rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 shrink-0"><X className="w-4 h-4" /></button>
          </div>
        </div>
      )}
    </section>
  )
}
