import { credentials, stats } from '../lib/content'
import { Reveal } from './Reveal'

// Quiet credibility — greyscale credential row + oversized stat trio.
// inspo: greyscale accreditation row (bwg #27, rhycohomes #86) + oversized stat band (omnibuilt #97)
export function Proof() {
  return (
    <section className="border-y border-ink/10 bg-cream-50">
      {/* credential row */}
      <div className="u-container py-9">
        <Reveal>
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-3.5 gap-y-2.5 text-center">
            {credentials.map((c, i) => (
              <span key={c} className="flex items-center gap-x-3.5">
                {i > 0 && <span aria-hidden className="h-1 w-1 rounded-full bg-clay/70" />}
                <span className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-ink/45">{c}</span>
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      {/* stat trio */}
      <div className="border-t border-ink/10">
        <div className="u-container grid divide-y divide-ink/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="flex flex-col items-center px-6 py-10 text-center md:py-14">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif text-[clamp(3rem,7vw,5.2rem)] font-light leading-none text-terracotta">{s.value}</span>
                  {s.unit && <span className="font-serif text-xl text-ink/45">{s.unit}</span>}
                </div>
                <p className="mt-4 max-w-[16rem] text-pretty text-[0.92rem] leading-relaxed text-ink/65">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
