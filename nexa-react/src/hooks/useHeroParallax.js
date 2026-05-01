import { useEffect } from 'react'

export function useHeroParallax() {
  useEffect(() => {
    const heroInner = document.querySelector('.hero-container')
    if (!heroInner) return

    const onScroll = () => {
      const scrolled = window.scrollY
      if (scrolled > window.innerHeight) return
      heroInner.style.transform = `translateY(${scrolled * 0.25}px)`
      heroInner.style.opacity = `${1 - scrolled / (window.innerHeight * 0.8)}`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}
