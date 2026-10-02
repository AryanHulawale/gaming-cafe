import { ArrowRight, MapPin, Clock } from 'lucide-react'
import { BUSINESS } from '../data.js'
import { NeonButton } from './ui.jsx'

export default function Hero() {
  return (
    <section id="top" className="pt-16 bg-slate-50 dark:bg-[#0f1115] border-b border-slate-200 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-medium bg-white dark:bg-white/10 border border-slate-200 dark:border-white/15 rounded-full px-3 py-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span aria-live="polite">18 of 40 PCs available now</span>
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-[1.08] mt-5">
            A calm, professional place to play serious games.
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
            {BUSINESS.tagline} High-spec PCs, PS5 lounge, private squad room and fast fiber — maintained daily, priced clearly.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a href="#booking"><NeonButton>Book a Seat <ArrowRight className="w-4 h-4" /></NeonButton></a>
            <a href="#pricing"><NeonButton variant="ghost">View Pricing</NeonButton></a>
          </div>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4" /> {BUSINESS.hours}</span>
            <span className="inline-flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Nova Mall, Mumbai</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <figure className="col-span-2 card overflow-hidden !p-0">
            <img
              src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=1000&q=70&auto=format&fit=crop"
              alt="Row of high-end gaming PCs with clean desk setup at PixelForge Arena"
              className="w-full h-64 md:h-72 object-cover"
              loading="eager"
            />
            <figcaption className="px-4 py-3 text-xs text-slate-500 flex justify-between">
              <span>PC Zone — RTX 4060, 165 Hz</span><span>40 stations</span>
            </figcaption>
          </figure>
          <figure className="card overflow-hidden !p-0">
            <img
              src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&q=70&auto=format&fit=crop"
              alt="PS5 DualSense controller closeup on white table"
              className="w-full h-44 object-cover"
              loading="lazy"
            />
            <figcaption className="px-4 py-2.5 text-xs text-slate-500">Console Lounge — PS5</figcaption>
          </figure>
          <figure className="card overflow-hidden !p-0">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=70&auto=format&fit=crop"
              alt="Gaming PC with keyboard and headset ready for play"
              className="w-full h-44 object-cover"
              loading="lazy"
            />
            <figcaption className="px-4 py-2.5 text-xs text-slate-500">Streaming Pod</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
