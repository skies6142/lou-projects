import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { projects, FILTERS } from '../lib/projects'
import { ProjectTile } from './ProjectTile'

// THE standout — varied-height photographic mosaic + filter toggle.
// inspo: photographic varied-height mosaic (onlinefabricshop #42) + filter tabs (megacheap3d #52)
const RATIOS = ['aspect-[4/5]', 'aspect-[5/4]', 'aspect-[3/4]', 'aspect-[4/3]', 'aspect-square', 'aspect-[5/6]']

export function ProjectsPage() {
  const [filter, setFilter] = useState<string>('All')

  const shown = useMemo(() => {
    if (filter === 'All') return projects
    if (filter === 'Award Winners') return projects.filter((p) => p.award)
    return projects.filter((p) => p.categories.includes(filter))
  }, [filter])

  return (
    <main className="bg-cream">
      {/* header */}
      <header className="u-container pt-32 pb-10 md:pt-40 md:pb-14">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow text-terracotta"
        >
          The work · {projects.length} completed homes
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.06 }}
          className="mt-5 max-w-4xl text-balance font-serif text-[clamp(2.4rem,6vw,4.6rem)] font-light leading-[1.02] text-ink"
        >
          Completed Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
          className="mt-6 max-w-2xl text-pretty text-[1.05rem] leading-relaxed text-ink/70"
        >
          From award-winning architectural builds to off-grid eco homes — every project is a healthy, high-performing home,
          designed and built to last. Explore the homes we’ve brought to life across the Central Coast and beyond.
        </motion.p>

        {/* filter toggle */}
        <div className="mt-10 flex flex-wrap gap-2.5">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 text-[0.78rem] font-medium transition-colors duration-300 ${
                filter === f
                  ? 'border-ink bg-ink text-cream-50'
                  : 'border-ink/20 text-ink/65 hover:border-ink/45 hover:text-ink'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </header>

      {/* masonry mosaic */}
      <div className="u-container pb-28 md:pb-36">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {shown.map((p, i) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: (i % 6) * 0.05 }}
              className="mb-5 break-inside-avoid"
            >
              <ProjectTile project={p} ratio={RATIOS[i % RATIOS.length]} />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
