import Lenis from 'lenis'

// Single shared Lenis instance for buttery inertia scrolling (premium feel).
// Reduced-motion users get native scrolling — Lenis is never created for them.
let lenis: Lenis | null = null

export function getLenis() {
  return lenis
}

// Boot Lenis once (from App on mount). Returns a teardown for cleanup.
export function initSmoothScroll(): () => void {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce || lenis) return () => {}

  lenis = new Lenis({
    duration: 1.05,
    // expo-out: quick start, long graceful settle
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.6,
  })

  let frame = 0
  const loop = (time: number) => {
    lenis?.raf(time)
    frame = requestAnimationFrame(loop)
  }
  frame = requestAnimationFrame(loop)

  return () => {
    cancelAnimationFrame(frame)
    lenis?.destroy()
    lenis = null
  }
}

// Jump to top on route change (immediate — no smooth crawl between pages).
export function scrollTop() {
  if (lenis) lenis.scrollTo(0, { immediate: true })
  else window.scrollTo(0, 0)
}

// Smoothly scroll to an in-page anchor (home #sections, footer links).
export function scrollToEl(el: Element) {
  if (lenis) lenis.scrollTo(el as HTMLElement, { offset: -8 })
  else el.scrollIntoView({ behavior: 'smooth' })
}

// Pause/resume the wheel hijack while a fullscreen overlay owns the screen.
export function pauseScroll() {
  lenis?.stop()
}
export function resumeScroll() {
  lenis?.start()
}
