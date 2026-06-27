import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'

// User-controlled project slideshow: big image + arrows + counter + thumbnail rail.
// Click the image to enlarge; arrows sit at the bottom in the enlarged viewer.
// Keyboard (←/→/Esc), swipe, auto-scrolling rail, scroll-locked fullscreen.
export function Slideshow({ images, name }: { images: string[]; name: string }) {
  const reduce = useReducedMotion()
  const [i, setI] = useState(0)
  const [full, setFull] = useState(false)
  const n = images.length
  const activeThumb = useRef<HTMLButtonElement>(null)
  const startX = useRef<number | null>(null)
  const moved = useRef(false)

  const go = useCallback((d: number) => setI((p) => (p + d + n) % n), [n])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1)
      else if (e.key === 'ArrowLeft') go(-1)
      else if (e.key === 'Escape') setFull(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  // keep the active thumbnail in view as you advance past the visible strip
  useEffect(() => {
    activeThumb.current?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [i])

  // lock page scrolling while the enlarged viewer is open
  useEffect(() => {
    if (!full) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [full])

  if (!n) return null
  const pad = (x: number) => String(x).padStart(2, '0')

  // swipe via pointer events — never translates the image out of frame
  const swipe = {
    onPointerDown: (e: ReactPointerEvent) => {
      startX.current = e.clientX
      moved.current = false
    },
    onPointerMove: (e: ReactPointerEvent) => {
      if (startX.current != null && Math.abs(e.clientX - startX.current) > 10) moved.current = true
    },
    onPointerUp: (e: ReactPointerEvent, onTap?: () => void) => {
      if (startX.current == null) return
      const dx = e.clientX - startX.current
      if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
      else if (!moved.current) onTap?.()
      startX.current = null
    },
  }

  return (
    <div>
      {/* main stage — natural-size image, letterboxed (never cropped) */}
      <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-[5px] bg-ink md:aspect-[16/9]">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.img
            key={i}
            src={images[i]}
            alt={`${name} — photo ${i + 1} of ${n}`}
            initial={reduce ? false : { opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            onPointerDown={swipe.onPointerDown}
            onPointerMove={swipe.onPointerMove}
            onPointerUp={(e) => swipe.onPointerUp(e, () => setFull(true))}
            className="absolute inset-0 h-full w-full cursor-zoom-in touch-pan-y select-none object-contain"
            draggable={false}
          />
        </AnimatePresence>

        {n > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-cream-50/90 text-ink backdrop-blur transition-transform hover:scale-105 focus:outline-none md:left-5"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-cream-50/90 text-ink backdrop-blur transition-transform hover:scale-105 focus:outline-none md:right-5"
            >
              <ChevronRight size={22} />
            </button>
          </>
        )}

        <button
          onClick={() => setFull(true)}
          aria-label="View full screen"
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-olive-deep/55 text-cream-50 opacity-0 backdrop-blur transition-opacity duration-300 focus:outline-none group-hover:opacity-100"
        >
          <Maximize2 size={16} />
        </button>

        <div className="pointer-events-none absolute bottom-4 right-4 z-10 rounded-full bg-olive-deep/60 px-3 py-1 text-[0.78rem] font-medium tabular-nums text-cream-50 backdrop-blur">
          {pad(i + 1)} <span className="text-cream-50/55">/ {pad(n)}</span>
        </div>
      </div>

      {/* thumbnail rail */}
      {n > 1 && (
        <div className="mt-3 flex gap-2.5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {images.map((src, idx) => (
            <button
              key={src}
              ref={idx === i ? activeThumb : undefined}
              onClick={() => setI(idx)}
              aria-label={`Go to photo ${idx + 1}`}
              className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-[3px] outline-none transition-all duration-300 focus:outline-none md:h-[72px] md:w-28 ${
                idx === i ? 'opacity-100 ring-2 ring-terracotta ring-offset-2 ring-offset-cream-100' : 'opacity-50 hover:opacity-90'
              }`}
            >
              <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      )}

      {/* enlarged viewer — arrows along the bottom, page scroll locked */}
      <AnimatePresence>
        {full && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFull(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`${name} gallery, photo ${i + 1} of ${n}`}
            className="fixed inset-0 z-[100] flex flex-col bg-ink backdrop-blur-md"
          >
            <button
              onClick={() => setFull(false)}
              className="absolute right-5 top-5 z-20 text-cream-50/80 transition-colors hover:text-cream-50 focus:outline-none"
              aria-label="Close"
            >
              <X size={30} />
            </button>

            {/* image */}
            <div className="flex flex-1 items-center justify-center overflow-hidden p-4 pt-16 md:p-12">
              <AnimatePresence initial={false} mode="popLayout">
                <motion.img
                  key={i}
                  src={images[i]}
                  alt={`${name} — photo ${i + 1} of ${n}`}
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={reduce ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  onClick={(e) => e.stopPropagation()}
                  className="max-h-full max-w-full rounded-[4px] object-contain"
                />
              </AnimatePresence>
            </div>

            {/* bottom control bar */}
            <div className="flex shrink-0 items-center justify-center gap-6 pb-8 pt-2" onClick={(e) => e.stopPropagation()}>
              {n > 1 && (
                <button
                  onClick={() => go(-1)}
                  aria-label="Previous photo"
                  className="grid h-12 w-12 place-items-center rounded-full bg-cream-50/95 text-ink transition-transform hover:scale-105 focus:outline-none"
                >
                  <ChevronLeft size={22} />
                </button>
              )}
              <span className="min-w-[64px] text-center text-[0.9rem] font-medium tabular-nums text-cream-50">
                {pad(i + 1)} <span className="text-cream-50/55">/ {pad(n)}</span>
              </span>
              {n > 1 && (
                <button
                  onClick={() => go(1)}
                  aria-label="Next photo"
                  className="grid h-12 w-12 place-items-center rounded-full bg-cream-50/95 text-ink transition-transform hover:scale-105 focus:outline-none"
                >
                  <ChevronRight size={22} />
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
