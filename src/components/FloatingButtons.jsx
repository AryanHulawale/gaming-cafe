export default function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <a
        href="#booking"
        aria-label="Book now"
        className="flex items-center font-semibold text-sm bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-5 py-3 rounded-full shadow-lift"
      >
        Book Now
      </a>
    </div>
  )
}
