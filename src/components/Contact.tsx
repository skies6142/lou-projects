import { useState, type FormEvent } from 'react'
import { Check, ArrowRight } from 'lucide-react'
import { contact, brand } from '../lib/content'
import { Reveal } from './Reveal'

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&')

const FIELD = 'w-full border-0 border-b border-ink/20 bg-transparent py-3 text-ink placeholder:text-ink/35 focus:border-terracotta focus:outline-none focus:ring-0 transition-colors'

// Split enquiry — half copy, half form. Netlify-ready (data-netlify), AJAX success state.
export function Contact() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)
  const [project, setProject] = useState('Custom Home')

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(false)
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form) as any) as Record<string, string>
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'enquiry', ...data }),
    })
      .then((r) => {
        if (r.ok) setSent(true)
        else setError(true)
      })
      .catch(() => setError(true))
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-terracotta text-cream-50">
      <div className="grain absolute inset-0 opacity-[0.18]" />
      <div className="u-container relative grid gap-12 py-24 md:grid-cols-[1fr_1.1fr] md:gap-20 md:py-32">
        {/* left */}
        <Reveal>
          <div>
            <p className="eyebrow text-cream-50/70">{contact.eyebrow}</p>
            <h2 className="mt-6 text-balance font-serif text-[clamp(2.2rem,4.4vw,3.6rem)] font-light leading-[1.06]">
              {contact.heading}
            </h2>
            <p className="mt-6 max-w-md text-pretty text-[1.05rem] leading-relaxed text-cream-50/85">{contact.body}</p>
            <div className="mt-10 space-y-4 border-t border-cream-50/25 pt-8 text-[0.95rem]">
              <a href={`mailto:${brand.email}`} className="block link-underline w-fit">
                {brand.email}
              </a>
              <p className="text-cream-50/70">{brand.region}</p>
              <div className="flex gap-5 pt-2">
                <a href={brand.instagram} target="_blank" rel="noreferrer" className="link-underline">
                  Instagram
                </a>
                <a href={brand.facebook} target="_blank" rel="noreferrer" className="link-underline">
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* right: form */}
        <Reveal delay={0.1}>
          <div className="rounded-[6px] bg-cream-50 p-7 text-ink md:p-10">
            {sent ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-terracotta text-cream-50">
                  <Check size={26} />
                </span>
                <h3 className="mt-6 font-serif text-2xl text-ink">Thanks — we’ve got it.</h3>
                <p className="mt-3 max-w-xs text-pretty text-[0.95rem] leading-relaxed text-ink/65">
                  We’ll be in touch soon to talk through your project. In the meantime, have a look through our completed homes.
                </p>
              </div>
            ) : (
              <form
                name="enquiry"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={onSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="enquiry" />
                <p className="hidden">
                  <label>Don’t fill this out: <input name="bot-field" /></label>
                </p>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="eyebrow text-[0.6rem] text-ink/50">Name</label>
                    <input id="name" name="name" required className={FIELD} placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="eyebrow text-[0.6rem] text-ink/50">Phone</label>
                    <input id="phone" name="phone" type="tel" className={FIELD} placeholder="0400 000 000" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="eyebrow text-[0.6rem] text-ink/50">Email</label>
                  <input id="email" name="email" type="email" required className={FIELD} placeholder="you@email.com" />
                </div>

                <div>
                  <span className="eyebrow text-[0.6rem] text-ink/50">I’m interested in</span>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {['Custom Home', 'Lou Home', 'Renovation', 'Not sure yet'].map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setProject(opt)}
                        className={`rounded-full border px-4 py-2 text-[0.8rem] font-medium transition-colors ${
                          project === opt
                            ? 'border-terracotta bg-terracotta text-cream-50'
                            : 'border-ink/20 text-ink/70 hover:border-ink/40'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  <input type="hidden" name="project-type" value={project} />
                </div>

                <div>
                  <label htmlFor="location" className="eyebrow text-[0.6rem] text-ink/50">Location / suburb</label>
                  <input id="location" name="location" className={FIELD} placeholder="e.g. Avoca Beach" />
                </div>

                <div>
                  <label htmlFor="message" className="eyebrow text-[0.6rem] text-ink/50">Tell us about your project</label>
                  <textarea id="message" name="message" rows={3} className={`${FIELD} resize-none`} placeholder="A little about what you’re planning…" />
                </div>

                <button type="submit" className="btn-solid w-full justify-center bg-terracotta hover:bg-terracotta-600">
                  Send enquiry <ArrowRight size={16} />
                </button>
                {error && (
                  <p role="alert" className="text-center text-[0.85rem] text-terracotta">
                    Something went wrong sending your enquiry — please email us at{' '}
                    <a href={`mailto:${brand.email}`} className="underline">{brand.email}</a>.
                  </p>
                )}
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
