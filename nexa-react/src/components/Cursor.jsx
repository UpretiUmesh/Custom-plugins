import { useEffect, useRef } from 'react'

const lerp = (a, b, t) => a + (b - a) * t

export default function Cursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    if (window.matchMedia('(hover: none)').matches) {
      cursor.style.display = 'none'
      follower.style.display = 'none'
      return
    }

    let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`
    }

    const animate = () => {
      followerX = lerp(followerX, mouseX, 0.1)
      followerY = lerp(followerY, mouseY, 0.1)
      follower.style.transform = `translate(${followerX}px, ${followerY}px) translate(-50%, -50%)`
      requestAnimationFrame(animate)
    }
    animate()

    const sel = 'a, button, .filter-btn, .slider-btn, .work-card, .service-card, input, textarea, select, label'
    const onOver = (e) => { if (e.target.closest(sel)) document.body.classList.add('cursor-hover') }
    const onOut  = (e) => { if (e.target.closest(sel)) document.body.classList.remove('cursor-hover') }
    const onLeave = () => { cursor.style.opacity = '0'; follower.style.opacity = '0' }
    const onEnter = () => { cursor.style.opacity = '1'; follower.style.opacity = '1' }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-follower" ref={followerRef}></div>
    </>
  )
}
