import { ArrowUpRight, Award } from 'lucide-react'
import type { Project } from '../lib/projects'
import { navigate } from '../lib/router'

// Photographic tile — thin serif name over a subtle scrim, award corner badge.
// inspo: varied-height photographic mosaic w/ serif name over scrim (onlinefabricshop #42)
//        + corner "Award Winner" badge (accomholidays #31)
export function ProjectTile({
  project,
  className = '',
  ratio = 'aspect-[4/3]',
  size = 'md',
}: {
  project: Project
  className?: string
  ratio?: string
  size?: 'md' | 'lg'
}) {
  return (
    <button
      onClick={() => navigate(`/project/${project.slug}`)}
      className={`group relative block w-full overflow-hidden rounded-[4px] bg-olive text-left ${className}`}
    >
      <div className={`${ratio} w-full overflow-hidden`}>
        <img
          src={project.thumb}
          alt={`${project.name} — a Lou Projects home in ${project.location}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-olive-deep/80 via-olive-deep/10 to-olive-deep/5 transition-opacity duration-500 group-hover:from-olive-deep/90" />

      {project.award && (
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-cream-50/95 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-terracotta backdrop-blur">
          <Award size={12} /> Award winner
        </span>
      )}

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 md:p-6">
        <div>
          <h3 className={`font-serif font-light leading-none text-cream-50 ${size === 'lg' ? 'text-[clamp(1.8rem,3vw,2.6rem)]' : 'text-2xl'}`}>
            {project.name}
          </h3>
          <p className="eyebrow mt-2 text-[0.58rem] text-cream-50/75">{project.location}</p>
        </div>
        <span className="mb-1 shrink-0 translate-y-2 text-cream-50 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={size === 'lg' ? 28 : 22} />
        </span>
      </div>
    </button>
  )
}
