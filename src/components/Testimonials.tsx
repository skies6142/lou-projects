import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Star } from 'lucide-react'
import { testimonials } from '../lib/content'
import { projectBySlug } from '../lib/projects'
import { Reveal } from './Reveal'
import { navigate } from '../lib/router'

// Kind words — an interactive featured testimonial paired with the home it's about.
// inspo: founder/pull-quote treatment + a real project image anchoring the words.
export function Testimonials() {
  const [i, setI] = useState(0)
  const n = testimonials.length
  const t = testimonials[i]
  const project = projectBySlug(t.slug)
  const go = (d: number) => setI((p) => (p + d + n) % n)
  // the longest quote reserves a fixed height so the controls never shift
  const longest = testimonials.reduce((a, b) => (b.quote.length > a.quote.length ? b : a), testimonials[0])
  const quoteClass = 'text-balance font-serif text-[clamp(1.2rem,2.1vw,1.65rem)] font-light leading-[1.34] text-cream-50'

  return (
    <section className="relative overflow-hidden bg-olive-deep text-cream-50">
      <div className="u-container py-16 md:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="eyebrow text-clay-light">Kind words</p>
              <h2 className="mt-3.5 max-w-xl text-balance font-serif text-[clamp(1.8rem,3.2vw,2.6rem)] font-light leading-tight">
                From the people we’ve built for
              </h2>
            </div>
            <div className="flex items-center gap-1.5 text-clay-light">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} size={15} className="fill-clay-light text-clay-light" />
              ))}
              <span className="ml-2 text-[0.82rem] text-cream-50/70">Five-star rated by homeowners</span>
            </div>
          </div>
        </Reveal>

        <div className="mt-9 grid items-start gap-7 md:grid-cols-[0.74fr_1.26fr] md:gap-10">
          {/* project image */}
          <Reveal>
            <button
              onClick={() => project && navigate(`/project/${t.slug}`)}
              className="group relative block aspect-[4/5] w-full overflow-hidden rounded-[6px] bg-olive sm:aspect-[5/4] md:aspect-[4/5]"
            >
              <AnimatePresence initial={false} mode="popLayout">
                <motion.img
                  key={t.slug}
                  src={project?.thumb}
                  alt={`${t.project} by Lou Projects`}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-olive-deep/80 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                <div>
                  <p className="font-serif text-xl text-cream-50">{t.project}</p>
                  {project && <p className="eyebrow mt-1 text-[0.55rem] text-cream-50/70">{project.location}</p>}
                </div>
                <span className="translate-x-1 text-cream-50 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                  <ArrowRight size={20} />
                </span>
              </div>
            </button>
          </Reveal>

          {/* quote */}
          <Reveal delay={0.08}>
            <div>
              <span className="font-serif text-6xl leading-none text-terracotta-400">“</span>
              {/* invisible tallest quote reserves the height; visible quote overlays it → controls never move */}
              <div className="relative -mt-3">
                <div aria-hidden className="invisible">
                  <p className={quoteClass}>{longest.quote}</p>
                  <div className="mt-6">
                    <span className="block text-[0.95rem] font-medium">{longest.name}</span>
                    <span className="eyebrow mt-1.5 block text-[0.6rem]">Project: {longest.project}</span>
                  </div>
                </div>
                <div className="absolute inset-0">
                  <AnimatePresence initial={false} mode="wait">
                    <motion.blockquote
                      key={t.slug}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className={quoteClass}
                    >
                      {t.quote}
                      <footer className="mt-6 not-italic">
                        <span className="block text-[0.95rem] font-medium text-cream-50">{t.name}</span>
                        <button
                          onClick={() => navigate(`/project/${t.slug}`)}
                          className="eyebrow mt-1.5 text-[0.6rem] text-clay-light underline-offset-4 hover:underline"
                        >
                          Project: {t.project}
                        </button>
                      </footer>
                    </motion.blockquote>
                  </AnimatePresence>
                </div>
              </div>

              {/* controls */}
              <div className="mt-7 flex items-center justify-between border-t border-cream-50/15 pt-5">
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  {testimonials.map((q, idx) => (
                    <button
                      key={q.slug}
                      onClick={() => setI(idx)}
                      className={`text-[0.82rem] transition-colors ${idx === i ? 'text-cream-50' : 'text-cream-50/40 hover:text-cream-50/70'}`}
                    >
                      {q.name.split(' ')[0]}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[0.8rem] tabular-nums text-cream-50/55">
                    {String(i + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
                  </span>
                  <button onClick={() => go(-1)} aria-label="Previous" className="grid h-10 w-10 place-items-center rounded-full border border-cream-50/25 transition-colors hover:bg-cream-50 hover:text-olive-deep">
                    <ArrowLeft size={16} />
                  </button>
                  <button onClick={() => go(1)} aria-label="Next" className="grid h-10 w-10 place-items-center rounded-full border border-cream-50/25 transition-colors hover:bg-cream-50 hover:text-olive-deep">
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
