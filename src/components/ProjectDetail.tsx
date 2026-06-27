import { Fragment } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Award } from 'lucide-react'
import { projects, projectBySlug } from '../lib/projects'
import { testimonials } from '../lib/content'
import { Reveal } from './Reveal'
import { Slideshow } from './Slideshow'
import { navigate } from '../lib/router'

// Case study — light cream body for readability, with the photo hero + next-project
// as the only dark "bookends" and one warm accent band (balanced, not a wall of green).
export function ProjectDetail({ slug }: { slug: string }) {
  const reduce = useReducedMotion()
  const project = projectBySlug(slug)

  if (!project) {
    return (
      <main className="grid min-h-dvh place-items-center bg-cream text-ink">
        <div className="text-center">
          <p className="font-serif text-2xl">Project not found.</p>
          <button onClick={() => navigate('/projects')} className="btn-ghost mt-6 border-ink/30 text-ink hover:bg-ink hover:text-cream-50">
            All projects
          </button>
        </div>
      </main>
    )
  }

  const idx = projects.findIndex((p) => p.slug === slug)
  const next = projects[(idx + 1) % projects.length]
  const quote = testimonials.find((t) => t.slug === slug)
  const meta = [
    project.architect ? { label: 'Architect', value: project.architect } : null,
    { label: 'Builder', value: 'Lou Projects' },
    { label: 'Location', value: project.location },
    { label: 'Scope', value: project.specs },
  ].filter(Boolean) as { label: string; value: string }[]

  return (
    <main className="bg-cream text-ink">
      {/* hero (dark photo bookend) */}
      <section className="relative h-[82svh] min-h-[560px] w-full overflow-hidden bg-olive-deep text-cream-50">
        <img src={project.hero} alt={`${project.name} by Lou Projects`} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-olive-deep via-olive-deep/30 to-olive-deep/40" />
        <div className="u-container relative flex h-full flex-col justify-between pt-28 pb-12 md:pb-16">
          <button
            onClick={() => navigate('/projects')}
            className="flex w-fit items-center gap-2 text-[0.8rem] font-medium uppercase tracking-[0.14em] text-cream-50/80 hover:text-cream-50"
          >
            <ArrowLeft size={16} /> All projects
          </button>
          <div>
            {project.award && (
              <span className="mb-5 inline-flex items-center gap-1.5 rounded-full bg-cream-50/95 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-terracotta">
                <Award size={12} /> Award winner
              </span>
            )}
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[clamp(3rem,9vw,7rem)] font-light italic leading-[0.92]"
            >
              {project.name}
            </motion.h1>
            <p className="mt-4 max-w-xl text-pretty text-[1.05rem] leading-relaxed text-cream-50/85">{project.blurb}</p>
          </div>
        </div>
      </section>

      {/* meta rails (light) */}
      <section className="border-b border-ink/10 bg-cream-50">
        <div className="u-container grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {meta.map((m) => (
            <div key={m.label} className="py-7 lg:px-6 lg:first:pl-0">
              <p className="eyebrow text-[0.6rem] text-terracotta">{m.label}</p>
              <p className="mt-2.5 font-serif text-lg leading-snug text-ink">{m.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* synopsis — lead statement + two-column body flow (100% copy, fills the page evenly) */}
      <section className="u-container py-20 md:py-28">
        <Reveal>
          <p className="eyebrow text-terracotta">Project synopsis</p>
          {project.awards.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {project.awards.map((a) => (
                <span key={a} className="inline-flex items-center gap-1.5 rounded-full border border-terracotta/35 px-3.5 py-1.5 text-[0.72rem] font-medium text-terracotta">
                  <Award size={12} /> {a}
                </span>
              ))}
            </div>
          )}
          <p className="mt-7 max-w-4xl text-balance font-serif text-[clamp(1.4rem,2.5vw,1.95rem)] font-light leading-[1.42] text-ink">
            {project.synopsis[0]}
          </p>
        </Reveal>

        {project.synopsis.length > 1 && (
          <Reveal delay={0.06}>
            <div className="mt-12 h-px max-w-4xl bg-terracotta/25" />
            <div className="mt-10 gap-x-16 [&>p]:mb-5 [&>p]:break-inside-avoid [&>p]:text-[1.02rem] [&>p]:leading-[1.8] [&>p]:text-ink/76 [&>p:first-child]:first-letter:float-left [&>p:first-child]:first-letter:mr-3 [&>p:first-child]:first-letter:mt-1.5 [&>p:first-child]:first-letter:font-serif [&>p:first-child]:first-letter:text-[3.4rem] [&>p:first-child]:first-letter:font-light [&>p:first-child]:first-letter:leading-[0.7] [&>p:first-child]:first-letter:text-terracotta md:columns-2">
              {project.synopsis.slice(1).map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </Reveal>
        )}
      </section>

      {/* full gallery slideshow (light) */}
      <section className="border-t border-ink/10 bg-cream-100">
        <div className="u-container py-16 md:py-20">
          <Reveal>
            <div className="mb-5 flex items-end justify-between">
              <p className="eyebrow text-terracotta">The full gallery</p>
              <p className="text-[0.8rem] text-ink/45">{project.gallery.length} photos</p>
            </div>
            <Slideshow key={project.slug} images={project.gallery} name={project.name} />
          </Reveal>
        </div>
      </section>

      {/* project film (light) */}
      {project.video && (
        <section className="border-t border-ink/10 bg-cream-100">
          <div className="u-container py-20 md:py-24">
            <Reveal>
              <p className="eyebrow mb-6 text-terracotta">Watch the build</p>
              <div className="relative aspect-video w-full overflow-hidden rounded-[6px] bg-olive-deep shadow-[0_30px_80px_-44px_rgba(35,36,27,0.5)]">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${project.video}?rel=0&modestbranding=1`}
                  title={`${project.name} — Lou Projects`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* testimonial — warm accent card (light) */}
      {quote && (
        <section className={project.video ? 'bg-cream-100 pb-20 md:pb-24' : 'border-t border-ink/10 bg-cream-100 py-20 md:py-24'}>
          <div className="u-container">
            <Reveal>
              <figure className="mx-auto max-w-3xl rounded-[6px] border-l-2 border-terracotta bg-cream-50 p-9 text-center md:p-12">
                <span className="font-serif text-5xl leading-none text-terracotta">“</span>
                <blockquote className="-mt-2 text-balance font-serif text-[clamp(1.4rem,2.8vw,2.1rem)] font-light leading-[1.3] text-ink">
                  {quote.quote}
                </blockquote>
                <figcaption className="eyebrow mt-7 text-[0.62rem] text-clay">
                  {quote.name} · {project.name}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>
      )}

      {/* next project (dark photo bookend) */}
      <section onClick={() => navigate(`/project/${next.slug}`)} className="group relative cursor-pointer overflow-hidden">
        <div className="aspect-[21/9] w-full overflow-hidden md:aspect-[3/1]">
          <img
            src={next.thumb}
            alt=""
            className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-olive-deep/55 transition-colors duration-500 group-hover:bg-olive-deep/40" />
        <div className="u-container absolute inset-0 flex flex-col items-center justify-center text-center text-cream-50">
          <p className="eyebrow text-cream-50/75">Next project</p>
          <p className="mt-3 flex items-center gap-3 font-serif text-[clamp(2rem,5vw,4rem)] font-light italic">
            {next.name}
            <ArrowRight size={34} className="transition-transform duration-500 group-hover:translate-x-2" />
          </p>
        </div>
      </section>
    </main>
  )
}
