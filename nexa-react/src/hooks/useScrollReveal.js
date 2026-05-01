import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right')
    if (!els.length) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target
          const delay = parseFloat(el.dataset.delay || 0)
          el.style.transitionDelay = delay + 's'
          el.classList.add('revealed')
          observer.unobserve(el)
        }
      })
    }, { threshold: 0.2 })

    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
