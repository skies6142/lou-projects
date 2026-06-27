import { team } from '../lib/content'
import { Reveal } from './Reveal'

// The people. Portrait cards with a typographic fallback tile where no photo exists.
export function Team() {
  return (
    <section id="team" className="bg-cream">
      <div className="u-container py-24 md:py-32">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-terracotta">Our team</p>
              <h2 className="mt-5 max-w-2xl text-balance font-serif text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.08] text-ink">
                A team that loves what they do
              </h2>
            </div>
            <p className="max-w-sm text-pretty text-[0.97rem] leading-relaxed text-ink/65">
              Culture is our top priority. Andrew leads a tight-knit crew of project managers, carpenters and apprentices who
              take pride in every detail.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-5 gap-y-10 min-[440px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={(i % 4) * 0.06}>
              <div className="group">
                <div className="aspect-[4/5] w-full overflow-hidden rounded-[4px] bg-olive">
                  {m.photo ? (
                    <img
                      src={m.photo}
                      alt={`${m.name}, ${m.role} at Lou Projects`}
                      loading="lazy"
                      className="h-full w-full object-cover object-[center_22%] grayscale-[0.15] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] group-hover:grayscale-0"
                    />
                  ) : (
                    <div className="grid h-full w-full place-items-center bg-olive text-cream-50/90">
                      <span className="font-serif text-5xl">{m.name[0]}</span>
                    </div>
                  )}
                </div>
                <h3 className="mt-4 font-serif text-xl text-ink">{m.name}</h3>
                <p className="eyebrow mt-1 text-[0.62rem] text-clay">{m.role}</p>
                <p className="mt-2.5 text-[0.85rem] leading-relaxed text-ink/60">{m.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
