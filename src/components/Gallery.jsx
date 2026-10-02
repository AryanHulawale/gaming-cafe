import { useState } from 'react'
import { X } from 'lucide-react'
import { SectionHeading } from './ui.jsx'

const SHOTS = [
  { src: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&q=70&auto=format&fit=crop', alt: 'Row of gaming PCs with dual monitors in bright clean room', tall: true },
  { src: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&q=70&auto=format&fit=crop', alt: 'PS5 DualSense controller held in hands closeup' },
  { src: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&q=70&auto=format&fit=crop', alt: 'Gamer wearing headset at PC station' },
  { src: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=800&q=70&auto=format&fit=crop', alt: 'PS5 console standing vertically next to TV', tall: true },
  { src: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=800&q=70&auto=format&fit=crop', alt: 'Custom PC build with clean cable management' },
  { src: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=70&auto=format&fit=crop', alt: 'Controllers and arcade setup on desk' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)
  return (
    <section id="gallery" className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <SectionHeading eyebrow="Gallery" title="Inside the arena" sub="Actual stations — PCs, PS5 lounge and squad room." />
      <div className="masonry reveal">
        {SHOTS.map((s, i) => (
          <button key={i} onClick={() => setLightbox(s)} className="group relative w-full rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 hover:shadow-lift transition text-left" aria-label={`Expand image: ${s.alt}`}>
            <img src={s.src} alt={s.alt} loading="lazy" className={`w-full object-cover ${s.tall ? 'h-80' : 'h-56'}`} />
          </button>
        ))}
      </div>
      {lightbox && (
        <div className="fixed inset-0 z-[70] bg-black/80 grid place-items-center p-4" role="dialog" aria-modal="true" aria-label={lightbox.alt} onClick={() => setLightbox(null)}>
          <figure className="max-w-3xl w-full bg-white rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src.replace('w=800', 'w=1200')} alt={lightbox.alt} className="w-full max-h-[70vh] object-contain bg-slate-100" />
            <figcaption className="flex items-center justify-between px-5 py-3 text-sm text-slate-600">{lightbox.alt}
              <button onClick={() => setLightbox(null)} aria-label="Close lightbox" className="w-9 h-9 grid place-items-center rounded-lg border border-slate-200 hover:bg-slate-50"><X className="w-4 h-4" /></button>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}
