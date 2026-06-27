import { louHomesProcess } from '../lib/content'
import { Reveal } from './Reveal'
import { DesignShowcase } from './DesignShowcase'
import { navigate } from '../lib/router'

// Lou Homes — pre-designed range + numbered build journey.
// inspo: numbered build-journey row (galondental #110) + real-photo capability tiles (omnibuilt #97)
export function LouHomes() {
  return (
    <section id="lou-homes" className="bg-cream">
      <div className="u-container py-24 md:py-32">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow text-terracotta">{louHomesProcess.eyebrow}</p>
            <h2 className="mt-5 text-balance font-serif text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.08] text-ink">
              {louHomesProcess.heading}
            </h2>
            <p className="mt-6 text-pretty text-[1rem] leading-relaxed text-ink/70">{louHomesProcess.intro}</p>
          </div>
        </Reveal>

        {/* process row */}
        <Reveal>
          <div className="mt-16 rounded-[4px] bg-olive p-8 text-cream-50 md:p-12">
            <p className="eyebrow text-clay-light">The process is simple</p>
            <div className="mt-8 grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
              {louHomesProcess.steps.map((s) => (
                <div key={s.n} className="border-t border-cream-50/20 pt-4">
                  <span className="font-serif text-2xl text-terracotta-400">{s.n}</span>
                  <h3 className="mt-1 font-serif text-lg text-cream-50">{s.title}</h3>
                  <p className="mt-1.5 text-[0.85rem] leading-relaxed text-cream-50/70">{s.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <button onClick={() => navigate('/projects')} className="btn-ghost border-cream-50/50 text-cream-50 hover:bg-cream-50 hover:text-olive-deep">
                See the homes we’ve built
              </button>
            </div>
          </div>
        </Reveal>

        {/* in-depth pre-designed homes */}
        <div className="mt-20 md:mt-28">
          <DesignShowcase />
        </div>
      </div>
    </section>
  )
}
