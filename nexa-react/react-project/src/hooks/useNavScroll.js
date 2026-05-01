import { useEffect } from 'react'

export function useNavScroll() {
  useEffect(() => {
    const nav = document.getElementById('nav')
    const navLinks = document.querySelectorAll('.nav-link')
    if (!nav) return

    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id')
          navLinks.forEach(link =>
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`)
          )
        }
      })
    }, { rootMargin: '-40% 0px -55% 0px' })

    sections.forEach(s => observer.observe(s))
    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])
}
