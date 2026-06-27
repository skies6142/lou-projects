import { ArrowUpRight } from 'lucide-react'
import { paths } from '../lib/content'
import { Reveal } from './Reveal'
import { navigate } from '../lib/router'

// Two ways to build — real-photo split tiles, no stock glyphs.
// inspo: dual-path fork (hentyfarm #63) + capability tiles (omnibuilt #97)
const PATH_IMG: Record<string, string> = {
  custom: '/img/projects/charlton/charlton-house-9165.jpg',
  'lou-homes': '/img/projects/ahara/ahara-house-main.jpg',
}

export function Paths() {
  const go = (href: string) => {
    if (href.startsWith('#/')) navigate(href.slice(1))
    else document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <section className="bg-cream">
      <div className="u-container pb-24 md:pb-32">
        <Reveal>
          <p className="eyebrow text-terracotta">Two ways to build with us</p>
        </Reveal>
        <div className="mt-9 grid gap-5 md:grid-cols-2 md:gap-7">
          {paths.map((p, i) => (
            <Reveal key={p.key} delay={i * 0.08}>
              <button
                onClick={() => go(p.cta.href)}
                className="group relative block w-full overflow-hidden rounded-[4px] text-left"
              >
                <div className="aspect-[4/3] w-full overflow-hidden md:aspect-[5/4]">
                  <img
                    src={PATH_IMG[p.key]}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-olive-deep/90 via-olive-deep/35 to-olive-deep/10" />
                <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-9">
                  <span className="font-serif text-base text-cream-50/70">{p.index}</span>
                  <h3 className="mt-1 flex items-center gap-2 font-serif text-[clamp(1.7rem,3vw,2.4rem)] font-light text-cream-50">
                    {p.title}
                    <ArrowUpRight
                      size={26}
                      className="translate-y-1 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                    />
                  </h3>
                  <p className="mt-3 max-w-md text-pretty text-[0.95rem] leading-relaxed text-cream-50/80">{p.blurb}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
