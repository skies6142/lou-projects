import { useEffect } from 'react'
import { useRoute } from './lib/router'
import { initSmoothScroll, scrollTop, scrollToEl } from './lib/smoothScroll'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { Paths } from './components/Paths'
import { Proof } from './components/Proof'
import { FeaturedProjects } from './components/FeaturedProjects'
import { Reels } from './components/Reels'
import { Testimonials } from './components/Testimonials'
import { ProjectsPage } from './components/ProjectsPage'
import { ProjectDetail } from './components/ProjectDetail'
import { StoryPage } from './components/pages/StoryPage'
import { KnowledgePage } from './components/pages/KnowledgePage'
import { ArticlePage } from './components/pages/ArticlePage'
import { TeamPage, EthosPage, WhatWeDoPage, LouHomesPage, ContactPage } from './components/pages/SectionPages'

function Home() {
  useEffect(() => {
    const id = window.location.hash
    if (id && !id.startsWith('#/')) {
      setTimeout(() => {
        const el = document.querySelector(id)
        if (el) scrollToEl(el)
      }, 80)
    }
  }, [])
  return (
    <>
      <Hero />
      <Intro />
      <Paths />
      <Proof />
      <FeaturedProjects />
      <Reels />
      <Testimonials />
    </>
  )
}

const PAGES = {
  story: StoryPage,
  team: TeamPage,
  ethos: EthosPage,
  'what-we-do': WhatWeDoPage,
  'lou-homes': LouHomesPage,
  knowledge: KnowledgePage,
  contact: ContactPage,
} as const

export default function App() {
  const route = useRoute()
  const onHome = route.name === 'home'
  const PageComp = route.name === 'page' ? PAGES[route.page] : null

  // Boot Lenis smooth-scroll once (skips itself for reduced-motion users).
  useEffect(() => initSmoothScroll(), [])

  // Header adapts to the page: transparent→olive over dark hero pages (home/project),
  // a light cream bar on dark-background pages (What We Do / Contact), olive on cream pages.
  const darkTopPage = route.name === 'page' && (route.page === 'what-we-do' || route.page === 'contact')
  const navTheme: 'hero' | 'light' | 'dark' =
    route.name === 'home' || route.name === 'project' ? 'hero' : darkTopPage ? 'light' : 'dark'

  // Land at the top whenever the page/project changes (keyed on a stable route id
  // so it never fights in-page #anchor scrolling on the home page).
  const routeKey =
    route.name === 'project'
      ? `project:${route.slug}`
      : route.name === 'article'
        ? `article:${route.slug}`
        : route.name === 'page'
          ? `page:${route.page}`
          : route.name
  useEffect(() => {
    scrollTop()
    const id = requestAnimationFrame(() => scrollTop()) // counter any post-mount layout shift
    return () => cancelAnimationFrame(id)
  }, [routeKey])

  return (
    <div className="relative">
      <Nav theme={navTheme} />
      {route.name === 'home' && <Home />}
      {route.name === 'projects' && <ProjectsPage />}
      {route.name === 'project' && <ProjectDetail slug={route.slug} />}
      {route.name === 'article' && <ArticlePage slug={route.slug} />}
      {PageComp && <PageComp />}
      <Footer onHome={onHome} />
    </div>
  )
}
