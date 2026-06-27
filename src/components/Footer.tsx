import { Instagram, Facebook, ArrowUpRight } from 'lucide-react'
import { brand, nav } from '../lib/content'
import { navigate } from '../lib/router'
import { scrollToEl } from '../lib/smoothScroll'

// Light warm footer (cream, ink text) — breaks the green stack at the page foot;
// the terracotta logo tile stays as the one warm accent.
export function Footer({ onHome }: { onHome: boolean }) {
  const go = (href: string) => {
    if (href.startsWith('#/')) navigate(href.slice(1))
    else if (href.startsWith('#')) {
      const toAnchor = () => {
        const el = document.querySelector(href)
        if (el) scrollToEl(el)
      }
      if (!onHome) {
        navigate('/')
        setTimeout(toAnchor, 60)
      } else toAnchor()
    }
  }

  return (
    <footer className="relative overflow-hidden border-t border-ink/10 bg-cream-200 text-ink/70">
      <div className="u-container relative pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-[3px] bg-terracotta">
                <img src={brand.monogram} alt="" className="h-full w-full object-cover" />
              </span>
              <span className="font-serif text-2xl text-ink">Lou Projects</span>
            </div>
            <p className="mt-5 max-w-sm text-pretty text-[0.95rem] leading-relaxed text-ink/65">
              {brand.blurb}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={brand.instagram}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-ink/20 transition-colors hover:bg-ink hover:text-cream-50"
                aria-label="Lou Projects on Instagram"
              >
                <Instagram size={17} />
              </a>
              <a
                href={brand.facebook}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-ink/20 transition-colors hover:bg-ink hover:text-cream-50"
                aria-label="Lou Projects on Facebook"
              >
                <Facebook size={17} />
              </a>
            </div>
          </div>

          {/* explore */}
          <div>
            <p className="eyebrow mb-5 text-terracotta">Explore</p>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.label}>
                  <button onClick={() => go(item.href)} className="link-underline text-[0.95rem] text-ink/70 hover:text-ink">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <p className="eyebrow mb-5 text-terracotta">Get in touch</p>
            <ul className="space-y-3 text-[0.95rem]">
              <li>
                <a href={`mailto:${brand.email}`} className="link-underline text-ink/70 hover:text-ink">
                  {brand.email}
                </a>
              </li>
              <li className="text-ink/55">{brand.region}</li>
              <li className="pt-2">
                <button onClick={() => go('#/contact')} className="inline-flex items-center gap-1.5 text-ink hover:text-terracotta">
                  Start your project <ArrowUpRight size={15} />
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-ink/12 pt-7 text-[0.8rem] text-ink/55 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Lou Projects · Sustainable home builders, Central Coast NSW</p>
          <p>
            Website by{' '}
            <a href="https://northsite.com.au" target="_blank" rel="noreferrer" className="text-ink/70 underline-offset-2 hover:underline hover:text-ink">
              Northsite
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
