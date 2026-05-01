import { useEffect } from 'react'

export function useMagneticButtons() {
  useEffect(() => {
    const attach = () => {
      document.querySelectorAll('.magnetic').forEach((el) => {
        const onMove = (e) => {
          const rect = el.getBoundingClientRect()
          const offsetX = (e.clientX - rect.left - rect.width / 2) * 0.3
          const offsetY = (e.clientY - rect.top - rect.height / 2) * 0.3
          el.style.transform = `translate(${offsetX}px, ${offsetY}px)`
        }
        const onLeave = () => { el.style.transform = '' }
        el.addEventListener('mousemove', onMove)
        el.addEventListener('mouseleave', onLeave)
      })
    }
    attach()
  }, [])
}
