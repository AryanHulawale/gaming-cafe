import { GAMES } from '../data.js'
import { SectionHeading } from './ui.jsx'

export default function Games() {
  return (
    <section id="games" className="bg-slate-50 dark:bg-[#14161c] border-y border-slate-200 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-20">
        <SectionHeading eyebrow="Library" title="Games we support" sub="Installed, updated and ready. Just log in and play." />
        <ul className="flex flex-wrap justify-center gap-2.5" aria-label="Supported games">
          {GAMES.map((g) => (
            <li key={g} className="reveal text-sm font-medium bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 py-2.5 rounded-full">
              {g}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
