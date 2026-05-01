import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { ArrowUpRight } from 'lucide-react'

export default function CTABanner() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 200)
    camera.position.set(0, 0, 20)
    const resize = () => {
      const w = canvas.parentElement.offsetWidth, h = canvas.parentElement.offsetHeight
      renderer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix()
    }
    resize(); window.addEventListener('resize', resize)
    scene.add(new THREE.AmbientLight(0xffffff, 0.8))
    const pl = new THREE.PointLight(0x080808, 3, 80); pl.position.set(0, 0, 10); scene.add(pl)
    const COUNT = 1200
    const pos = new Float32Array(COUNT * 3), col = new Float32Array(COUNT * 3)
    const pColors = [new THREE.Color(0x080808), new THREE.Color(0x1a1a1a), new THREE.Color(0x333333)]
    for (let i = 0; i < COUNT; i++) {
      const r = 5 + Math.random() * 18, theta = Math.random() * Math.PI * 2, phi = Math.acos(2 * Math.random() - 1)
      pos[i*3] = r*Math.sin(phi)*Math.cos(theta); pos[i*3+1] = r*Math.sin(phi)*Math.sin(theta); pos[i*3+2] = r*Math.cos(phi)
      const c = pColors[i % 3]; col[i*3] = c.r; col[i*3+1] = c.g; col[i*3+2] = c.b
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3))
    const stars = new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.2, vertexColors: true, transparent: true, opacity: 0.6 }))
    scene.add(stars)
    const cMesh = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2.5, 1),
      new THREE.MeshPhongMaterial({ color: 0x080808, wireframe: true, transparent: true, opacity: 0.2 })
    )
    scene.add(cMesh)
    const clock = new THREE.Clock(); let rafId
    const animate = () => {
      rafId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()
      stars.rotation.y = t * 0.06; stars.rotation.x = t * 0.02
      cMesh.rotation.y = t * 0.15; cMesh.rotation.x = t * 0.1
      renderer.render(scene, camera)
    }
    animate()
    return () => { cancelAnimationFrame(rafId); window.removeEventListener('resize', resize); renderer.dispose() }
  }, [])

  return (
    <section className="cta-banner">
      <canvas ref={canvasRef} className="section-three-canvas" />
      <div className="cta-orb cta-orb-1" /><div className="cta-orb cta-orb-2" />
      <div className="container">
        <div className="cta-content reveal-up">
          <h2>Ready to build something<br />extraordinary?</h2>
          <p>Let's turn your vision into a digital reality that stands out.</p>
          <a href="#contact" className="btn btn-dark btn-lg magnetic">
            Start a Project <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
