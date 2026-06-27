import { useEffect, useState } from 'react'

// Tiny hash router — deep-linkable, Netlify-friendly (no redirect config needed).
export type Route =
  | { name: 'home' }
  | { name: 'projects' }
  | { name: 'project'; slug: string }
  | { name: 'article'; slug: string }
  | { name: 'page'; page: PageName }

export type PageName = 'story' | 'team' | 'ethos' | 'what-we-do' | 'lou-homes' | 'knowledge' | 'contact'
const PAGES: PageName[] = ['story', 'team', 'ethos', 'what-we-do', 'lou-homes', 'knowledge', 'contact']

export function parseHash(hash: string): Route {
  const h = hash.replace(/^#/, '').split('#')[0] // ignore trailing in-page anchor
  if (h.startsWith('/project/')) return { name: 'project', slug: h.slice('/project/'.length).replace(/\/$/, '') }
  if (h.startsWith('/article/')) return { name: 'article', slug: h.slice('/article/'.length).replace(/\/$/, '') }
  if (h.startsWith('/projects')) return { name: 'projects' }
  const seg = h.replace(/^\//, '').replace(/\/$/, '') as PageName
  if (PAGES.includes(seg)) return { name: 'page', page: seg }
  return { name: 'home' }
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parseHash(window.location.hash))
  useEffect(() => {
    const onChange = () => setRoute(parseHash(window.location.hash))
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return route
}

export function navigate(to: string) {
  window.location.hash = to
}
