import { ArrowRight } from 'lucide-react'
import { projects } from '../lib/projects'
import { ProjectTile } from './ProjectTile'
import { Reveal } from './Reveal'
import { navigate } from '../lib/router'

// Home teaser — asymmetric mosaic: one large feature + stacked supporting tiles.
// inspo: asymmetric category mosaic, one large + smaller stacked (domainpropertygroup #16)
export function FeaturedProjects() {
  const [feature, b, c, d] = projects // ahara (feature), charlton, sorrento, lurline
  return (
    <section id="projects" className="bg-cream">
      <div className="u-container py-24 md:py-32">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-terracotta">Completed projects</p>
              <h2 className="mt-5 max-w-2xl text-balance font-serif text-[clamp(2rem,4.4vw,3.4rem)] font-light leading-[1.06] text-ink">
                Healthy, high-performing homes we’re proud of
              </h2>
            </div>
            <button
              onClick={() => navigate('/projects')}
              className="group inline-flex items-center gap-2 text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-ink hover:text-terracotta"
            >
              View all projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {/* large feature */}
          <Reveal className="lg:col-span-7" delay={0.05}>
            <ProjectTile project={feature} ratio="aspect-[4/3] lg:aspect-[16/13]" size="lg" className="h-full" />
          </Reveal>
          {/* stacked supporting */}
          <div className="grid gap-5 lg:col-span-5">
            <Reveal delay={0.1}>
              <ProjectTile project={b} ratio="aspect-[16/10]" />
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              <Reveal delay={0.15}>
                <ProjectTile project={c} ratio="aspect-[4/3] sm:aspect-square" />
              </Reveal>
              <Reveal delay={0.2}>
                <ProjectTile project={d} ratio="aspect-[4/3] sm:aspect-square" />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
