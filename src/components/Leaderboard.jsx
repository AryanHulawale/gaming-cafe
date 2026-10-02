import { LEADERBOARD } from '../data.js'
import { SectionHeading } from './ui.jsx'

export default function Leaderboard() {
  return (
    <section id="leaderboard" className="bg-slate-50 dark:bg-[#14161c] border-y border-slate-200 dark:border-white/10">
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-16 md:py-20">
        <SectionHeading eyebrow="Leaderboard" title="This week's top players" sub="Combined PC and console ladders." />
        <div className="reveal card overflow-hidden !p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[520px]">
              <caption className="sr-only">Top 5 players by points</caption>
              <thead>
                <tr className="text-left text-xs uppercase tracking-wider text-slate-500 border-b border-slate-200 dark:border-white/10">
                  <th scope="col" className="px-6 py-3.5 font-medium">Rank</th>
                  <th scope="col" className="px-6 py-3.5 font-medium">Player</th>
                  <th scope="col" className="px-6 py-3.5 text-right font-medium">Wins</th>
                  <th scope="col" className="px-6 py-3.5 text-right font-medium">Points</th>
                </tr>
              </thead>
              <tbody>
                {LEADERBOARD.map((p) => (
                  <tr key={p.tag} className="border-b border-slate-100 dark:border-white/5 last:border-0 hover:bg-slate-50 dark:hover:bg-white/5">
                    <td className="px-6 py-3.5 font-semibold">#{p.rank}</td>
                    <td className="px-6 py-3.5 font-medium">{p.tag}</td>
                    <td className="px-6 py-3.5 text-right">{p.wins}</td>
                    <td className="px-6 py-3.5 text-right font-semibold">{p.points.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
