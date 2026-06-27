import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Plus } from 'lucide-react'
import { knowledge, faqs } from '../../lib/content'
import { articles } from '../../lib/articles'
import { Reveal } from '../Reveal'
import { navigate } from '../../lib/router'

const blog = articles.filter((a) => a.category === 'education')
const notes = articles.filter((a) => a.category === 'andrews-notes')
const media = articles.filter((a) => a.category === 'media')

export function KnowledgePage() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <main className="bg-cream">
      <header className="u-container pt-32 pb-12 md:pt-40 md:pb-14">
        <Reveal>
          <p className="eyebrow text-terracotta">{knowledge.eyebrow}</p>
          <h1 className="mt-5 max-w-3xl text-balance font-serif text-[clamp(2.4rem,5.4vw,4.2rem)] font-light leading-[1.04] text-ink">
            {knowledge.heading}
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-[1.1rem] leading-relaxed text-ink/72">{knowledge.intro}</p>
        </Reveal>
      </header>

      {/* blog */}
      <section className="u-container pb-20">
        <Reveal>
          <p className="eyebrow mb-6 text-clay">From the blog</p>
        </Reveal>
        <div className="grid gap-px overflow-hidden rounded-[4px] bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {blog.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 0.05}>
              <button
                onClick={() => navigate(`/article/${a.slug}`)}
                className="group flex h-full w-full flex-col gap-5 bg-cream-50 p-7 text-left transition-colors duration-300 hover:bg-cream-100"
              >
                {a.hero && (
                  <div className="aspect-[16/10] w-full overflow-hidden rounded-[3px]">
                    <img src={a.hero} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                )}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-balance font-serif text-[1.2rem] leading-snug text-ink">{a.title}</h3>
                  <ArrowUpRight size={18} className="mt-1 shrink-0 text-terracotta opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Andrew's notes + Media */}
      <section className="border-y border-ink/10 bg-cream-100">
        <div className="u-container grid gap-12 py-20 md:grid-cols-2 md:gap-16 md:py-24">
          <div>
            <Reveal>
              <p className="eyebrow mb-6 text-terracotta">Andrew’s notes</p>
            </Reveal>
            <div>
              {notes.map((a, i) => (
                <Reveal key={a.slug} delay={i * 0.02}>
                  <button onClick={() => navigate(`/article/${a.slug}`)} className="group flex w-full items-center justify-between gap-4 border-b border-ink/10 py-4 text-left">
                    <span className="font-serif text-[1.05rem] leading-snug text-ink/90 group-hover:text-terracotta">{a.title}</span>
                    <ArrowUpRight size={16} className="shrink-0 text-clay opacity-0 transition-opacity group-hover:opacity-100" />
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <Reveal>
              <p className="eyebrow mb-6 text-terracotta">In the media</p>
            </Reveal>
            <div>
              {media.map((a, i) => (
                <Reveal key={a.slug} delay={i * 0.02}>
                  <button onClick={() => navigate(`/article/${a.slug}`)} className="group block w-full border-b border-ink/10 py-4 text-left">
                    <span className="eyebrow text-[0.55rem] text-clay">Media</span>
                    <p className="mt-1.5 font-serif text-[1.05rem] leading-snug text-ink/90 group-hover:text-terracotta">{a.title}</p>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="u-container py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <Reveal>
            <div>
              <p className="eyebrow text-terracotta">FAQs</p>
              <h2 className="mt-5 font-serif text-[clamp(1.7rem,2.8vw,2.4rem)] font-light leading-tight text-ink">Good to know</h2>
            </div>
          </Reveal>
          <div>
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className="border-b border-ink/12">
                  <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-6 py-5 text-left">
                    <span className="font-serif text-lg text-ink md:text-xl">{f.q}</span>
                    <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.3 }} className="shrink-0 text-terracotta">
                      <Plus size={22} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-prose pb-6 text-[0.97rem] leading-relaxed text-ink/68">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
