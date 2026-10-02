import { useState } from 'react'
import { Plus } from 'lucide-react'
import { FAQS } from '../data.js'
import { SectionHeading } from './ui.jsx'

export default function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="max-w-2xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <SectionHeading eyebrow="FAQ" title="Common questions" sub="Can't find it? Call or message us." />
      <div className="space-y-3">
        {FAQS.map((f, i) => {
          const isOpen = open === i
          return (
            <div key={f.q} className="reveal card !rounded-xl overflow-hidden">
              <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 font-medium text-[15px]">
                {f.q}
                <span className={`w-7 h-7 shrink-0 grid place-items-center rounded-full border transition-transform ${isOpen ? 'rotate-45 bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900' : 'border-slate-300 dark:border-white/20'}`}>
                  <Plus className="w-3.5 h-3.5" />
                </span>
              </button>
              <div className={`grid transition-all ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden"><p className="px-5 pb-5 text-sm text-slate-500 leading-relaxed">{f.a}</p></div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
