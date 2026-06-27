import { ethos } from '../lib/content'
import { Reveal } from './Reveal'

// Ethos — values grid + principles. Painterly off-white wash separates the human story.
// inspo: pull-quote / values treatment (yamurrah #29) + textured wash (clearminded #96)
export function Ethos() {
  return (
    <section id="ethos" className="relative bg-cream-100">
      <div className="u-container py-24 md:py-32">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <Reveal>
            <div className="md:sticky md:top-28">
              <p className="eyebrow text-terracotta">{ethos.eyebrow}</p>
              <h2 className="mt-6 text-balance font-serif text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.08] text-ink">
                {ethos.heading}
              </h2>
              <p className="mt-6 max-w-md text-pretty text-[1rem] leading-relaxed text-ink/70">{ethos.intro}</p>

              {/* principles as a quiet feature list */}
              <div className="mt-10 space-y-5 border-l-2 border-terracotta/40 pl-6">
                {ethos.principles.map((p) => (
                  <div key={p.title}>
                    <h3 className="font-serif text-lg text-ink">{p.title}</h3>
                    <p className="mt-1 text-[0.92rem] leading-relaxed text-ink/62">{p.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* values grid */}
          <div className="grid gap-px overflow-hidden rounded-[4px] bg-ink/10 sm:grid-cols-2">
            {ethos.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="h-full bg-cream-50 p-7">
                  <span className="eyebrow text-terracotta">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-3 font-serif text-xl text-ink">{v.title}</h3>
                  <p className="mt-2.5 text-[0.92rem] leading-relaxed text-ink/65">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
