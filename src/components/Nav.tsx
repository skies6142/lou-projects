import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { brand } from '../lib/content'
import { navigate } from '../lib/router'

type Item = { label: string; to?: string; anchor?: string; children?: Item[] }

const NAV: Item[] = [
  {
    label: 'About Us',
    children: [
      { label: 'Our Story', to: '/story' },
      { label: 'Our Team', to: '/team' },
      { label: 'Our Ethos', to: '/ethos' },
    ],
  },
  {
    label: 'Custom Homes',
    children: [
      { label: 'What We Do', to: '/what-we-do' },
      { label: 'Completed Projects', to: '/projects' },
    ],
  },
  {
    label: 'Lou Homes',
    children: [
      { label: 'How It Works', to: '/lou-homes' },
      { label: 'Our Designs', to: '/lou-homes', anchor: '#designs' },
    ],
  },
  { label: 'Knowledge', to: '/knowledge' },
]

function goTo(item: Item, close: () => void) {
  close()
  if (item.to) {
    navigate(item.to)
    if (item.anchor) setTimeout(() => document.querySelector(item.anchor!)?.scrollIntoView({ behavior: 'smooth' }), 90)
  }
}

// Header adapts to the page beneath it:
//  hero  → transparent over a dark hero, settling to a deep-olive bar on scroll
//  dark  → solid deep-olive bar (used on the warm cream pages)
//  light → cream bar with dark text (used on the dark What We Do / Contact pages)
export function Nav({ theme }: { theme: 'hero' | 'light' | 'dark' }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState<string | null>(null)
  const [acc, setAcc] = useState<string | null>(null)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const overHero = theme === 'hero' && !scrolled
  const light = theme === 'light'

  const headerBg = overHero
    ? 'bg-transparent'
    : light
      ? 'border-b border-ink/10 bg-cream/90 backdrop-blur-md'
      : 'bg-olive-deep/95 shadow-[0_12px_34px_-18px_rgba(18,19,13,0.85)] backdrop-blur-md'
  const wordmark = light ? 'text-ink' : 'text-cream-50'
  const linkTone = light ? 'text-ink/75 hover:text-ink' : 'text-cream-50/85 hover:text-cream-50'
  const ctaTone = light
    ? 'border-ink/30 text-ink hover:bg-ink hover:text-cream-50'
    : 'border-cream-50/45 text-cream-50 hover:bg-cream-50 hover:text-olive-deep'
  const toggleTone = light ? 'text-ink' : 'text-cream-50'

  const enter = (label: string) => {
    if (timer.current) clearTimeout(timer.current)
    setMenu(label)
  }
  const leave = () => {
    timer.current = setTimeout(() => setMenu(null), 120)
  }
  const getInTouch = () => {
    setOpen(false)
    navigate('/contact')
  }

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${headerBg}`}>
      <div className="u-container flex h-[68px] items-center justify-between md:h-[76px]">
        <button onClick={() => { setOpen(false); navigate('/') }} className="flex items-center gap-3" aria-label="Lou Projects — home">
          <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-[3px] bg-terracotta md:h-10 md:w-10">
            <img src={brand.monogram} alt="" className="h-full w-full object-cover" />
          </span>
          <span className={`font-serif text-[1.35rem] leading-none tracking-tight md:text-[1.5rem] ${wordmark}`}>Lou Projects</span>
        </button>

        {/* desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) =>
            item.children ? (
              <div key={item.label} className="relative" onMouseEnter={() => enter(item.label)} onMouseLeave={leave}>
                <button className={`flex items-center gap-1.5 text-[0.82rem] font-medium tracking-wide transition-colors ${linkTone}`}>
                  {item.label}
                  <ChevronDown size={14} className={`transition-transform duration-300 ${menu === item.label ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {menu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-0 top-full z-50 min-w-[230px] pt-3"
                    >
                      <div className="overflow-hidden rounded-[5px] bg-clay shadow-[0_24px_60px_-30px_rgba(18,19,13,0.7)]">
                        {item.children.map((c) => (
                          <button
                            key={c.label}
                            onClick={() => goTo(c, () => setMenu(null))}
                            className="block w-full px-5 py-3.5 text-left font-serif text-[1.05rem] text-cream-50 transition-colors duration-200 hover:bg-olive-deep"
                          >
                            {c.label}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <button
                key={item.label}
                onClick={() => goTo(item, () => setMenu(null))}
                className={`link-underline text-[0.82rem] font-medium tracking-wide transition-colors ${linkTone}`}
              >
                {item.label}
              </button>
            )
          )}
          <button onClick={getInTouch} className={`btn-ghost ${ctaTone}`}>
            Get in touch
          </button>
        </nav>

        <button onClick={() => setOpen((v) => !v)} className={`lg:hidden ${toggleTone}`} aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={`overflow-hidden lg:hidden ${light ? 'border-t border-ink/10 bg-cream-50' : 'border-t border-cream-50/10 bg-olive-deep'}`}
          >
            <div className="u-container flex flex-col py-3">
              {NAV.map((item) =>
                item.children ? (
                  <div key={item.label} className={light ? 'border-b border-ink/8' : 'border-b border-cream-50/10'}>
                    <button
                      onClick={() => setAcc(acc === item.label ? null : item.label)}
                      className={`flex w-full items-center justify-between py-3.5 font-serif text-lg ${light ? 'text-ink' : 'text-cream-50'}`}
                    >
                      {item.label}
                      <ChevronDown size={18} className={`transition-transform ${acc === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {acc === item.label && (
                        <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                          <div className="flex flex-col pb-3 pl-4">
                            {item.children.map((c) => (
                              <button key={c.label} onClick={() => goTo(c, () => setOpen(false))} className={`py-2.5 text-left text-[0.95rem] ${light ? 'text-ink/70' : 'text-cream-50/70'}`}>
                                {c.label}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <button key={item.label} onClick={() => goTo(item, () => setOpen(false))} className={`py-3.5 text-left font-serif text-lg ${light ? 'border-b border-ink/8 text-ink' : 'border-b border-cream-50/10 text-cream-50'}`}>
                    {item.label}
                  </button>
                )
              )}
              <button onClick={getInTouch} className={`py-4 text-left font-serif text-lg ${light ? 'text-terracotta' : 'text-clay-light'}`}>
                Get in touch →
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
