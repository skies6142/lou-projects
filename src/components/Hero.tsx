import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { hero } from '../lib/content'
import { navigate } from '../lib/router'
import { Seal } from './Seal'

const POSTER = '/img/proj/sorrento/00-WWA3965-2-scaled.jpg'

// Full-bleed cinematic video hero, low-left serif headline, single ghost CTA.
// inspo: warm full-bleed photo hero + ghost CTA (accomholidays #31, havenwood #107)
//        + overlapping circular craft seal (haveitfranksway #64)
export function Hero() {
  const reduce = useReducedMotion()
  const ease = [0.16, 1, 0.3, 1] as const
  const [isMobile, setIsMobile] = useState(false)

  // serve the portrait reel on phones, the landscape film on larger screens
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  const videoSrc = isMobile ? '/video/hero-mobile.mp4' : '/video/hero.mp4'

  const go = (href: string) => {
    if (href.startsWith('#/')) navigate(href.slice(1))
    else document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-olive-deep">
      {/* video (or static poster when reduced-motion is requested) */}
      {reduce ? (
        <img src={POSTER} alt="" className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <video key={videoSrc} className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline poster={POSTER}>
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* legibility gradients — stronger at bottom-left where the headline sits */}
      <div className="absolute inset-0 bg-gradient-to-t from-olive-deep/90 via-olive-deep/40 to-olive-deep/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-olive-deep/70 via-olive-deep/15 to-transparent" />

      {/* content */}
      <div className="u-container relative flex h-full flex-col justify-end pb-16 md:pb-20">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
          className="eyebrow mb-5 text-clay-light"
        >
          {hero.eyebrow}
        </motion.p>

        <h1 className="font-serif text-[clamp(2.9rem,9vw,7rem)] font-light leading-[0.95] text-cream-50">
          {hero.headline.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={reduce ? false : { y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.05, ease, delay: 0.34 + i * 0.12 }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.7 }}
          className="mt-6 max-w-xl text-pretty text-[1.02rem] leading-relaxed text-cream-50/85"
        >
          {hero.sub}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.85 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <button onClick={() => go(hero.primaryCta.href)} className="btn-solid">
            {hero.primaryCta.label}
          </button>
          <button
            onClick={() => go(hero.secondaryCta.href)}
            className="btn-ghost border-cream-50/55 text-cream-50 hover:bg-cream-50 hover:text-ink"
          >
            {hero.secondaryCta.label}
          </button>
        </motion.div>
      </div>

      {/* rotating craft seal */}
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease, delay: 1 }}
        className="absolute right-6 top-24 hidden md:right-12 md:top-28 lg:block"
      >
        <Seal text={hero.seal} />
      </motion.div>

      {/* scroll hint */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-7 right-6 hidden items-center gap-2 text-cream-50/70 md:right-12 md:flex"
      >
        <span className="eyebrow text-[0.62rem]">Scroll</span>
        <motion.span animate={reduce ? undefined : { y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ArrowDown size={15} />
        </motion.span>
      </motion.div>
    </section>
  )
}
