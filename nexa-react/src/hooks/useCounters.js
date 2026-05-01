import { useEffect } from 'react'

const easeOutQuad = (t) => 1 - (1 - t) * (1 - t)

export function useCounters() {
  useEffect(() => {
    const statEls = document.querySelectorAll('.stat-num[data-count]')
    if (!statEls.length) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const el = entry.target
        const target = parseInt(el.dataset.count, 10)
        const duration = 2000
        const startTime = performance.now()

        const tick = (now) => {
          const t = Math.min((now - startTime) / duration, 1)
          el.textContent = Math.round(easeOutQuad(t) * target)
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        observer.unobserve(el)
      })
    }, { threshold: 0.5 })

    statEls.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
