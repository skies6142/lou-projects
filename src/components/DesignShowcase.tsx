import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { designs } from '../lib/content'
import { Reveal } from './Reveal'
import { navigate } from '../lib/router'

function DesignRow({ design, flip }: { design: (typeof designs)[number]; flip: boolean }) {
  const [active, setActive] = useState(0)
  return (
    <div className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
      {/* media */}
      <div className={flip ? 'md:order-2' : ''}>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[5px] bg-cream-50 p-3 ring-1 ring-ink/10 shadow-[0_24px_60px_-44px_rgba(35,36,27,0.45)]">
          <AnimatePresence initial={false} mode="popLayout">
            <motion.img
              key={active}
              src={design.images[active]}
              alt={`${design.name} — view ${active + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] object-contain"
            />
          </AnimatePresence>
        </div>
        <div className="mt-3 flex gap-2.5">
          {design.images.map((src, idx) => (
            <button
              key={src}
              onClick={() => setActive(idx)}
              aria-label={`${design.name} view ${idx + 1}`}
              className={`h-14 w-20 shrink-0 overflow-hidden rounded-[3px] outline-none transition-all duration-300 focus:outline-none ${
                idx === active ? 'opacity-100 ring-2 ring-terracotta ring-offset-2 ring-offset-cream' : 'opacity-45 hover:opacity-80'
              }`}
            >
              <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {/* copy */}
      <div className={flip ? 'md:order-1' : ''}>
        <h3 className="font-serif text-[clamp(2rem,3.4vw,2.8rem)] font-light text-ink">{design.name}</h3>
        <p className="mt-1.5 text-[0.95rem] italic text-ink/55">{design.meaning}</p>
        <p className="eyebrow mt-4 text-[0.62rem] text-terracotta">{design.specs}</p>
        <p className="mt-5 max-w-prose text-pretty text-[1rem] leading-relaxed text-ink/72">{design.blurb}</p>
        <button
          onClick={() => navigate('/contact')}
          className="group mt-7 inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-ink hover:text-terracotta"
        >
          Enquire about {design.name}
          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </div>
  )
}

// In-depth pre-designed homes — multiple renders + floor plans per design.
export function DesignShowcase() {
  return (
    <div id="designs" className="scroll-mt-28">
      <Reveal>
        <div className="flex items-end justify-between border-t border-ink/12 pt-12">
          <div>
            <p className="eyebrow text-terracotta">Our designs</p>
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,3.6vw,3rem)] font-light leading-tight text-ink">
              Five pre-designed homes, ready to make your own
            </h2>
          </div>
        </div>
      </Reveal>
      <div className="mt-14 space-y-20 md:space-y-28">
        {designs.map((d, i) => (
          <Reveal key={d.name} delay={0.04}>
            <DesignRow design={d} flip={i % 2 === 1} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
