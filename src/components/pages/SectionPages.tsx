import { Team } from '../Team'
import { Ethos } from '../Ethos'
import { WhatWeDo } from '../WhatWeDo'
import { LouHomes } from '../LouHomes'
import { Contact } from '../Contact'
import { Reveal } from '../Reveal'
import { navigate } from '../../lib/router'

// Dedicated pages built from existing sections, with nav-clearing top padding
// in the section's own background colour (so there's no seam under the fixed nav).

export function TeamPage() {
  return (
    <main className="bg-cream pt-16 md:pt-20">
      <Team />
      <section className="border-t border-ink/10 bg-cream-100">
        <div className="u-container py-16 text-center md:py-20">
          <Reveal>
            <p className="mx-auto max-w-xl text-balance font-serif text-[clamp(1.5rem,2.6vw,2.1rem)] font-light leading-snug text-ink">
              The culture within our team is our top priority — we make space for our people to grow.
            </p>
            <button onClick={() => navigate('/ethos')} className="btn-ghost mt-8 border-ink/30 text-ink hover:bg-ink hover:text-cream-50">
              Read our ethos
            </button>
          </Reveal>
        </div>
      </section>
    </main>
  )
}

export function EthosPage() {
  return (
    <main className="bg-cream-100 pt-16 md:pt-20">
      <Ethos />
    </main>
  )
}

export function WhatWeDoPage() {
  return (
    <main className="bg-olive pt-16 md:pt-20">
      <WhatWeDo />
      <section className="bg-olive-deep">
        <div className="u-container flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <p className="max-w-xl text-pretty font-serif text-[clamp(1.4rem,2.4vw,2rem)] font-light leading-snug text-cream-50">
            Better building principles, better project management — documented, communicated, and delivered on time.
          </p>
          <button
            onClick={() => navigate('/projects')}
            className="btn-ghost shrink-0 border-cream-50/45 text-cream-50 hover:bg-cream-50 hover:text-olive-deep"
          >
            View completed projects
          </button>
        </div>
      </section>
    </main>
  )
}

export function LouHomesPage() {
  return (
    <main className="bg-cream pt-16 md:pt-20">
      <LouHomes />
    </main>
  )
}

export function ContactPage() {
  return (
    <main className="bg-terracotta pt-[68px] md:pt-[76px]">
      <Contact />
    </main>
  )
}
