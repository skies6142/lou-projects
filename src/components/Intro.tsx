import { intro } from '../lib/content'
import { Reveal } from './Reveal'

// Opening statement — generous negative space, serif lede, hairline rule.
export function Intro() {
  return (
    <section id="about" className="relative bg-cream">
      <div className="u-container py-24 md:py-32">
        <Reveal>
          <p className="eyebrow text-terracotta">{intro.eyebrow}</p>
        </Reveal>
        <div className="mt-10 grid items-start gap-10 md:grid-cols-[1.55fr_1fr] md:gap-16">
          <Reveal delay={0.05}>
            <h2 className="text-balance font-serif text-[clamp(1.8rem,3.6vw,3rem)] font-light leading-[1.12] text-ink">
              {intro.statement}
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            {/* hairline rule sits flush with the top of the heading, aligning the columns */}
            <div className="rule mb-6 bg-terracotta/35" />
            <div className="space-y-5 text-[1rem] leading-relaxed text-ink/72">
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
