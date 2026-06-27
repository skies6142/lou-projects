import { intro } from '../lib/content'
import { Reveal } from './Reveal'

// Opening statement — generous negative space, serif lede, hairline rule.
export function Intro() {
  return (
    <section id="about" className="relative bg-cream">
      <div className="u-container py-14 md:py-20">
        <Reveal>
          <p className="eyebrow text-terracotta">{intro.eyebrow}</p>
        </Reveal>
        <div className="mt-7 grid items-start gap-7 md:mt-8 md:grid-cols-[1.5fr_1fr] md:gap-12">
          <Reveal delay={0.05}>
            <h2 className="text-balance font-serif text-[clamp(1.5rem,2.8vw,2.3rem)] font-light leading-[1.18] text-ink">
              {intro.statement}
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            {/* hairline rule sits flush with the top of the heading, aligning the columns */}
            <div className="rule mb-5 bg-terracotta/35" />
            <div className="space-y-4 text-[0.97rem] leading-relaxed text-ink/72">
              {intro.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
