import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { articles, articleBySlug } from '../../lib/articles'
import { Reveal } from '../Reveal'
import { navigate } from '../../lib/router'

const CAT_LABEL: Record<string, string> = {
  education: 'Knowledge',
  'andrews-notes': 'Andrew’s Notes',
  media: 'Media',
}

export function ArticlePage({ slug }: { slug: string }) {
  const article = articleBySlug(slug)

  if (!article) {
    return (
      <main className="grid min-h-dvh place-items-center bg-cream text-ink">
        <div className="text-center">
          <p className="font-serif text-2xl">Article not found.</p>
          <button onClick={() => navigate('/knowledge')} className="btn-ghost mt-6 border-ink/30 text-ink hover:bg-ink hover:text-cream-50">
            Knowledge hub
          </button>
        </div>
      </main>
    )
  }

  const more = articles.filter((a) => a.category === article.category && a.slug !== article.slug).slice(0, 3)

  return (
    <main className="bg-cream text-ink">
      {/* header */}
      <header className="u-container pt-32 pb-10 md:pt-40 md:pb-12">
        <Reveal>
          <button
            onClick={() => navigate('/knowledge')}
            className="mb-8 flex items-center gap-2 text-[0.8rem] font-medium uppercase tracking-[0.14em] text-ink/55 hover:text-terracotta"
          >
            <ArrowLeft size={16} /> Knowledge hub
          </button>
          <p className="eyebrow text-terracotta">{CAT_LABEL[article.category] ?? 'Article'}</p>
          <h1 className="mt-5 max-w-4xl text-balance font-serif text-[clamp(2rem,4.6vw,3.6rem)] font-light leading-[1.08] text-ink">
            {article.title}
          </h1>
        </Reveal>
      </header>

      {/* hero image */}
      {article.hero && (
        <div className="u-container">
          <Reveal>
            <div className="overflow-hidden rounded-[6px]">
              <img src={article.hero} alt={article.title} className="aspect-[16/9] w-full object-cover" />
            </div>
          </Reveal>
        </div>
      )}

      {/* body — magazine two-column flow with full-width headings (uses the width, less scrolling) */}
      <article className="u-container py-16 md:py-20">
        <Reveal>
          <div className="mx-auto max-w-5xl gap-x-16 md:columns-2 [&>h2]:[column-span:all] [&>p]:break-inside-avoid">
            {article.body.map((b, i) =>
              b.t === 'h' ? (
                <h2 key={i} className="mb-3 mt-12 font-serif text-[clamp(1.4rem,2.2vw,1.8rem)] font-light leading-snug text-ink first:mt-0">
                  {b.v}
                </h2>
              ) : (
                <p key={i} className="mb-5 text-[1.02rem] leading-[1.8] text-ink/78">{b.v}</p>
              )
            )}
          </div>
        </Reveal>
      </article>

      {/* more from the hub */}
      {more.length > 0 && (
        <section className="border-t border-ink/10 bg-cream-100">
          <div className="u-container py-16 md:py-20">
            <p className="eyebrow mb-8 text-terracotta">More from {CAT_LABEL[article.category]}</p>
            <div className="grid gap-px overflow-hidden rounded-[4px] bg-ink/10 md:grid-cols-3">
              {more.map((a) => (
                <button
                  key={a.slug}
                  onClick={() => navigate(`/article/${a.slug}`)}
                  className="group flex h-full flex-col justify-between gap-8 bg-cream-50 p-7 text-left transition-colors duration-300 hover:bg-cream-100"
                >
                  <span className="eyebrow text-[0.58rem] text-clay">{CAT_LABEL[a.category]}</span>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-balance font-serif text-[1.2rem] leading-snug text-ink">{a.title}</h3>
                    <ArrowUpRight size={18} className="mt-1 shrink-0 text-terracotta opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
