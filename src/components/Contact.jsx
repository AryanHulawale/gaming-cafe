import { useState } from 'react'
import { BUSINESS } from '../data.js'
import { SectionHeading, NeonButton } from './ui.jsx'

const inputCls = 'w-full bg-white dark:bg-white/5 border border-slate-300 dark:border-white/15 rounded-lg px-3.5 py-2.5 text-sm placeholder:text-slate-400 focus:border-slate-900 dark:focus:border-white outline-none'

export default function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <SectionHeading eyebrow="Visit" title="Find us in Nova Mall" sub="2 minutes from Lakeview station. Street parking + mall parking available." />
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="reveal card p-6 md:p-8">
          <dl className="space-y-3 text-sm">
            <div><dt className="text-slate-500 text-xs uppercase tracking-wider">Address</dt><dd className="font-medium mt-0.5">{BUSINESS.address}</dd></div>
            <div className="grid grid-cols-2 gap-3">
              <div><dt className="text-slate-500 text-xs uppercase tracking-wider">Phone</dt><dd><a href="tel:+919000012345" className="font-medium hover:underline">{BUSINESS.phone}</a></dd></div>
              <div><dt className="text-slate-500 text-xs uppercase tracking-wider">Email</dt><dd><a href="mailto:play@pixelforgearena.example" className="font-medium hover:underline break-all">{BUSINESS.email}</a></dd></div>
            </div>
            <div><dt className="text-slate-500 text-xs uppercase tracking-wider">Hours</dt><dd className="font-medium mt-0.5">{BUSINESS.hours}</dd></div>
          </dl>
          <form className="mt-6 grid gap-3" onSubmit={(e) => { e.preventDefault(); setSent(true) }} aria-label="Contact form">
            <div className="grid sm:grid-cols-2 gap-3">
              <input required placeholder="Your name" aria-label="Your name" className={inputCls} />
              <input required type="email" placeholder="Email" aria-label="Email" className={inputCls} />
            </div>
            <textarea required placeholder="How can we help? Group booking, birthday, tournament..." aria-label="Message" rows={4} className={`${inputCls} resize-none`} />
            <NeonButton type="submit">{sent ? 'Message Sent' : 'Send Message'}</NeonButton>
            {sent && <p role="status" className="text-sm text-emerald-600">Thanks — we'll reply within a few hours (demo).</p>}
          </form>
        </div>
        <div className="reveal card overflow-hidden !p-0 min-h-[380px] relative">
          <img src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=900&q=70&auto=format&fit=crop" alt="Clean gaming PC stations inside PixelForge Arena" className="w-full h-52 object-cover" loading="lazy" />
          <iframe
            title="Map placeholder — PixelForge Arena location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=72.82%2C19.07%2C72.90%2C19.14&layer=mapnik&marker=19.11%2C72.86"
            className="w-full h-[280px] grayscale opacity-90"
            loading="lazy"
          />
          <p className="px-5 py-3 text-xs text-slate-500 border-t border-slate-200 dark:border-white/10">Nova Mall, Lakeview Road — map placeholder</p>
        </div>
      </div>
    </section>
  )
}
