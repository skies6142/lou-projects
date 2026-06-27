import { ArrowUpRight } from 'lucide-react'
import { story, paths } from '../../lib/content'
import { Reveal } from '../Reveal'
import { navigate } from '../../lib/router'

// Our Story — lede + owners-story video + narrative + the two paths.
export function StoryPage() {
  return (
    <main className="bg-cream">
      <header className="u-container pt-32 pb-12 md:pt-40 md:pb-16">
        <Reveal>
          <p className="eyebrow text-terracotta">{story.eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-balance font-serif text-[clamp(2.4rem,5.4vw,4.2rem)] font-light leading-[1.04] text-ink">
            {story.heading}
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-[1.15rem] leading-relaxed text-ink/72">{story.lede}</p>
        </Reveal>
      </header>

      {/* owners-story video */}
      <section className="u-container pb-16 md:pb-24">
        <Reveal>
          <figure>
            <div className="relative aspect-video w-full overflow-hidden rounded-[6px] bg-olive-deep shadow-[0_30px_80px_-40px_rgba(35,36,27,0.55)]">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${story.videoId}?rel=0&modestbranding=1`}
                title="The Lou Projects story"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <figcaption className="eyebrow mt-4 text-[0.62rem] text-clay">{story.videoCaption}</figcaption>
          </figure>
        </Reveal>
      </section>

      {/* narrative */}
      <section className="u-container pb-20 md:pb-28">
        <div className="grid gap-10 md:grid-cols-[0.5fr_1fr] md:gap-16">
          <Reveal>
            <p className="font-serif text-2xl font-light leading-snug text-terracotta md:sticky md:top-28">
              We want to build better.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="max-w-prose space-y-6 text-[1.05rem] leading-[1.75] text-ink/78">
              {story.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* two paths */}
      <section className="border-t border-ink/10 bg-cream-100">
        <div className="u-container py-20 md:py-28">
          <Reveal>
            <p className="eyebrow text-terracotta">Two ways to build with us</p>
            <h2 className="mt-5 max-w-2xl font-serif text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-tight text-ink">
              There are two paths you can take.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[4px] bg-ink/10 md:grid-cols-2">
            {paths.map((p, i) => (
              <Reveal key={p.key} delay={i * 0.08}>
                <button
                  onClick={() => navigate(p.key === 'custom' ? '/what-we-do' : '/lou-homes')}
                  className="group flex h-full w-full flex-col bg-cream-50 p-8 text-left transition-colors duration-300 hover:bg-cream md:p-10"
                >
                  <span className="font-serif text-base text-clay">{p.index}</span>
                  <h3 className="mt-2 flex items-center gap-2 font-serif text-[clamp(1.6rem,2.6vw,2.2rem)] font-light text-ink">
                    {p.title}
                    <ArrowUpRight size={22} className="opacity-0 transition-opacity group-hover:opacity-100" />
                  </h3>
                  <p className="mt-4 text-pretty text-[0.97rem] leading-relaxed text-ink/68">{p.blurb}</p>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
