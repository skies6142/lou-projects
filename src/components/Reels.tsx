import { useRef, useState } from 'react'
import { Instagram, Volume2, VolumeX } from 'lucide-react'
import { Reveal } from './Reveal'
import { brand } from '../lib/content'

const REELS = ['/video/reel-1.mp4', '/video/reel-2.mp4']

function ReelCard({ src, className = '' }: { src: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(true)
  return (
    <div className={`group relative aspect-[9/16] overflow-hidden rounded-2xl bg-olive-deep shadow-[0_40px_80px_-30px_rgba(35,36,27,0.55)] ring-1 ring-ink/5 ${className}`}>
      <video ref={ref} className="h-full w-full object-cover" autoPlay muted={muted} loop playsInline>
        <source src={src} type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-olive-deep/35 to-transparent" />
      <button
        onClick={() => setMuted((m) => !m)}
        className="absolute bottom-3.5 right-3.5 grid h-9 w-9 place-items-center rounded-full bg-cream-50/90 text-ink backdrop-blur transition-transform hover:scale-105 focus:outline-none"
        aria-label={muted ? 'Unmute video' : 'Mute video'}
      >
        {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
      </button>
    </div>
  )
}

// On-site reels — a staggered, shadowed pair gives the videos depth.
export function Reels() {
  return (
    <section className="overflow-hidden bg-cream-100">
      <div className="u-container py-24 md:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <Reveal>
            <div>
              <p className="eyebrow text-terracotta">In motion</p>
              <h2 className="mt-5 text-balance font-serif text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.08] text-ink">
                Craft, on site and on film
              </h2>
              <p className="mt-6 max-w-md text-pretty text-[1rem] leading-relaxed text-ink/70">
                From the first sketch to the finishing touches, we document the journey. Follow along on Instagram for the
                builds, the details and the people behind every Lou Projects home.
              </p>
              <a
                href={brand.instagram}
                target="_blank"
                rel="noreferrer"
                className="btn-solid mt-8 inline-flex"
              >
                <Instagram size={16} /> Follow @lou.projects
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mx-auto grid max-w-lg grid-cols-2 items-start gap-5 sm:gap-7">
              <ReelCard src={REELS[0]} className="translate-y-0 lg:-translate-y-4" />
              <ReelCard src={REELS[1]} className="translate-y-8 lg:translate-y-10" />
              {/* decorative seal accent */}
              <div className="pointer-events-none absolute -left-6 top-1/2 hidden h-px w-12 bg-clay/60 lg:block" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
