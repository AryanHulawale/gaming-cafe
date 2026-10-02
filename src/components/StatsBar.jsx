import { useEffect, useRef, useState } from 'react'
import { STATS } from '../data.js'

function CountUp({ target }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      const t0 = performance.now()
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / 1000)
        setVal(Math.round(target * (1 - Math.pow(1 - p, 3))))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
      io.disconnect()
    }, { threshold: 0.4 })
    if (el) io.observe(el)
    return () => io.disconnect()
  }, [target])
  return <span ref={ref}>{val}</span>
}

export default function StatsBar() {
  return (
    <section id="stats" aria-label="Arena stats" className="bg-white dark:bg-[#0f1115]">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6 border-b border-slate-200 dark:border-white/10">
        {STATS.map((s) => (
          <div key={s.label} className="reveal text-center lg:text-left">
            <p className="text-3xl font-semibold tracking-tight">
              <CountUp target={s.value} />{s.suffix}
            </p>
            <p className="text-sm text-slate-500 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
