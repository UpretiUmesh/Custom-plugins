import { useEffect, useState } from 'react'

const easeOutQuad = t => 1 - (1 - t) * (1 - t)

export default function Loader() {
  const [progress, setProgress] = useState(0)
  const [hidden, setHidden] = useState(false)
  const [removed, setRemoved] = useState(false)

  useEffect(() => {
    const duration = 1800
    const start = performance.now()
    const tick = now => {
      const t = Math.min((now - start) / duration, 1)
      setProgress(Math.round(easeOutQuad(t) * 100))
      if (t < 1) requestAnimationFrame(tick)
      else {
        setHidden(true)
        document.body.classList.add('loaded')
        setTimeout(() => setRemoved(true), 700)
      }
    }
    requestAnimationFrame(tick)
  }, [])

  if (removed) return null
  return (
    <div className={`loader${hidden ? ' hidden' : ''}`}>
      <div className="loader-inner">
        <div className="loader-logo">NEXA<span>STUDIO</span></div>
        <div className="loader-bar">
          <div className="loader-progress" style={{ width: progress + '%' }} />
        </div>
        <div className="loader-count">{progress}%</div>
      </div>
    </div>
  )
}
