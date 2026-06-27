import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus, ArrowUpRight } from 'lucide-react'
import { knowledge, faqs } from '../lib/content'
import { Reveal } from './Reveal'

export function Knowledge() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="knowledge" className="bg-cream">
      <div className="u-container py-24 md:py-32">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow text-terracotta">{knowledge.eyebrow}</p>
              <h2 className="mt-5 text-balance font-serif text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.08] text-ink">
                {knowledge.heading}
              </h2>
            </div>
            <p className="max-w-sm text-pretty text-[0.97rem] leading-relaxed text-ink/65">{knowledge.intro}</p>
          </div>
        </Reveal>

        {/* articles */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-[4px] bg-ink/10 md:grid-cols-3">
          {knowledge.articles.map((a, i) => (
            <Reveal key={a.title} delay={(i % 3) * 0.06}>
              <article className="group flex h-full flex-col justify-between gap-8 bg-cream-50 p-7 transition-colors duration-300 hover:bg-cream-100">
                <p className="eyebrow text-[0.6rem] text-clay">{a.tag}</p>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-balance font-serif text-[1.25rem] leading-snug text-ink">{a.title}</h3>
                  <ArrowUpRight
                    size={20}
                    className="mt-1 shrink-0 text-terracotta opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* FAQs */}
        <div className="mt-20 grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <Reveal>
            <h3 className="font-serif text-[clamp(1.6rem,2.6vw,2.2rem)] font-light leading-tight text-ink">
              Good to know
            </h3>
          </Reveal>
          <div>
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className="border-b border-ink/12">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
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
      </div>
    </section>
  )
}
