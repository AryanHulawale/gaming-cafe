import { ZONES } from '../data.js'
import { SectionHeading } from './ui.jsx'

const IMAGES = {
  'PC Zone': {
    src: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=700&q=70&auto=format&fit=crop',
    alt: 'High-end gaming PCs lined up with monitors and mechanical keyboards',
  },
  'Console Lounge': {
    src: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=700&q=70&auto=format&fit=crop',
    alt: 'PS5 DualSense controllers ready in console lounge',
  },
  'VIP Squad Room': {
    src: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=700&q=70&auto=format&fit=crop',
    alt: 'Private squad room with multiple gaming setups and ambient lighting',
  },
  'Streaming Pod': {
    src: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=700&q=70&auto=format&fit=crop',
    alt: 'Studio microphone and streaming setup in quiet pod',
  },
}

export default function Zones() {
  return (
    <section id="zones" className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <SectionHeading eyebrow="Zones" title="Four spaces, one standard" sub="Clean equipment, comfortable seating and staff who keep everything running." />
      <div className="grid sm:grid-cols-2 gap-5">
        {ZONES.map((z) => {
          const img = IMAGES[z.title]
          return (
            <article key={z.title} className="reveal card overflow-hidden !p-0 hover:shadow-lift transition-shadow">
              {img && <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-52 object-cover" />}
              <div className="p-6">
                <h3 className="font-semibold text-lg">{z.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{z.desc}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {z.specs.map((s) => (
                    <li key={s} className="text-xs font-medium bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-200 px-2.5 py-1.5 rounded-md">{s}</li>
                  ))}
                </ul>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
