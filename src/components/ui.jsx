import { useEffect } from 'react'

export function useReveal(dep) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.visible)')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [dep])
}

export function SectionHeading({ eyebrow, title, sub, align = 'center' }) {
  return (
    <div className={`${align === 'center' ? 'text-center mx-auto' : 'text-left'} max-w-2xl mb-10 reveal`}>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-semibold mt-2 leading-tight">{title}</h2>
      {sub && <p className="mt-3 text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">{sub}</p>}
    </div>
  )
}

export function NeonButton({ children, variant = 'primary', className = '', ...props }) {
  const styles =
    variant === 'primary'
      ? 'bg-slate-900 text-white hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200'
      : variant === 'ghost'
        ? 'bg-white text-slate-900 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 dark:bg-transparent dark:text-white dark:border-white/20 dark:hover:bg-white/10'
        : 'bg-brand-50 text-brand-700 border border-brand-600/20 hover:bg-brand-600 hover:text-white dark:bg-white/10 dark:text-white dark:border-white/20'
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 font-semibold text-sm px-6 py-3 rounded-lg transition-colors ${styles} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export function GlassCard({ children, className = '' }) {
  return <div className={`card p-6 ${className}`}>{children}</div>
}
