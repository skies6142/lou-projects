import { whatWeDo } from '../lib/content'
import { Reveal } from './Reveal'

// Deep-olive "chapter" band — the building-science story.
// inspo: alternating full-width colour bands as the page spine (accomholidays #31, yamurrah #29)
//        + material-macro image foregrounding sustainability (haveitfranksway #64)
export function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative overflow-hidden bg-olive text-cream-50">
      <div className="u-container py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* left: heading + macro image */}
          <div>
            <Reveal>
              <p className="eyebrow text-clay-light">{whatWeDo.eyebrow}</p>
              <h2 className="mt-6 text-balance font-serif text-[clamp(2rem,4vw,3.4rem)] font-light leading-[1.08]">
                {whatWeDo.heading}
              </h2>
              <p className="mt-7 max-w-md text-pretty text-[1.02rem] leading-relaxed text-cream-50/80">
                {whatWeDo.intro}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-10 overflow-hidden rounded-[4px]">
                <img
                  src="/img/projects/charlton/charlton-house-9275.jpg"
                  alt="Western Red Cedar cladding detail on a Lou Projects home"
                  className="aspect-[16/10] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>

          {/* right: numbered pillars */}
          <div className="flex flex-col justify-center divide-y divide-cream-50/15">
            {whatWeDo.pillars.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.08}>
                <div className="flex gap-6 py-7 first:pt-0">
                  <span className="font-serif text-2xl text-clay-light/90">{p.n}</span>
                  <div>
                    <h3 className="font-serif text-2xl font-light text-cream-50">{p.title}</h3>
                    <p className="mt-2.5 text-pretty text-[0.97rem] leading-relaxed text-cream-50/72">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* project management */}
        <Reveal>
          <div className="mt-16 grid gap-6 border-t border-cream-50/15 pt-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <h3 className="font-serif text-[clamp(1.6rem,2.6vw,2.2rem)] font-light leading-tight text-cream-50">
              {whatWeDo.management.title}
            </h3>
            <p className="max-w-prose text-pretty text-[1.02rem] leading-relaxed text-cream-50/80">
              {whatWeDo.management.body}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
