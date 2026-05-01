import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { ArrowDownRight, Play } from 'lucide-react'

const stats = [
  { count: 80,  suffix: '+', label: 'Projects Delivered' },
  { count: 98,  suffix: '%', label: 'Client Satisfaction' },
  { count: 5,   suffix: '+', label: 'Years of Excellence' },
  { count: 30,  suffix: '+', label: 'Happy Clients' },
]

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 200)
    camera.position.set(0, 0, 30)

    const resize = () => {
      const w = canvas.parentElement.offsetWidth
      const h = canvas.parentElement.offsetHeight
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    resize()
    window.addEventListener('resize', resize)

    scene.add(new THREE.AmbientLight(0xffffff, 0.4))
    const pl1 = new THREE.PointLight(0xc8f135, 2.5, 80)
    pl1.position.set(-15, 10, 10)
    scene.add(pl1)
    const pl2 = new THREE.PointLight(0x6366f1, 1.5, 60)
    pl2.position.set(15, -10, 5)
    scene.add(pl2)

    const meshGroup = new THREE.Group()
    scene.add(meshGroup)

    const geoList = [
      new THREE.IcosahedronGeometry(3.5, 1),
      new THREE.OctahedronGeometry(2.2, 0),
      new THREE.TetrahedronGeometry(1.8, 0),
      new THREE.IcosahedronGeometry(1.4, 0),
      new THREE.OctahedronGeometry(1.0, 0),
      new THREE.IcosahedronGeometry(0.8, 0),
      new THREE.TetrahedronGeometry(1.2, 0),
      new THREE.OctahedronGeometry(0.7, 0),
    ]
    const colors = [0xc8f135, 0x6366f1, 0xc8f135, 0x8b5cf6, 0xc8f135, 0x6366f1, 0xec4899, 0xc8f135]

    const meshes = geoList.map((geo, i) => {
      const mat = new THREE.MeshPhongMaterial({
        color: colors[i], wireframe: i % 2 === 0,
        transparent: true, opacity: i % 2 === 0 ? 0.45 : 0.12, shininess: 80,
      })
      const mesh = new THREE.Mesh(geo, mat)
      const angle = (i / geoList.length) * Math.PI * 2
      const radius = 8 + (i % 3) * 4
      mesh.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius * 0.5 + (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 12
      )
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0)
      mesh.userData = {
        rotSpeed: new THREE.Vector3((Math.random() - 0.5) * 0.008, (Math.random() - 0.5) * 0.012, (Math.random() - 0.5) * 0.006),
        floatSpeed: 0.3 + Math.random() * 0.5,
        floatAmp: 0.8 + Math.random() * 1.2,
        floatOffset: Math.random() * Math.PI * 2,
        baseY: mesh.position.y,
      }
      meshGroup.add(mesh)
      return mesh
    })

    const heroMesh = new THREE.Mesh(
      new THREE.IcosahedronGeometry(6, 2),
      new THREE.MeshPhongMaterial({ color: 0xc8f135, wireframe: true, transparent: true, opacity: 0.05 })
    )
    heroMesh.position.set(0, 0, -5)
    scene.add(heroMesh)

    const PARTICLE_COUNT = 2000
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const pColorsArr = new Float32Array(PARTICLE_COUNT * 3)
    const pColors = [new THREE.Color(0xc8f135), new THREE.Color(0x6366f1), new THREE.Color(0x8b5cf6)]
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40 - 10
      const c = pColors[Math.floor(Math.random() * pColors.length)]
      pColorsArr[i * 3] = c.r; pColorsArr[i * 3 + 1] = c.g; pColorsArr[i * 3 + 2] = c.b
    }
    const particleGeo = new THREE.BufferGeometry()
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particleGeo.setAttribute('color', new THREE.BufferAttribute(pColorsArr, 3))
    const particleMat = new THREE.PointsMaterial({ size: 0.15, vertexColors: true, transparent: true, opacity: 0.6 })
    const particles = new THREE.Points(particleGeo, particleMat)
    scene.add(particles)

    const targetRot = new THREE.Vector2(0, 0)
    const currentRot = new THREE.Vector2(0, 0)
    const onMouseMove = e => {
      targetRot.x = ((e.clientY / window.innerHeight) * 2 - 1) * 0.3
      targetRot.y = ((e.clientX / window.innerWidth) * 2 - 1) * 0.5
    }
    document.addEventListener('mousemove', onMouseMove)

    const clock = new THREE.Clock()
    let rafId
    const animate = () => {
      rafId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()
      currentRot.x += (targetRot.x - currentRot.x) * 0.05
      currentRot.y += (targetRot.y - currentRot.y) * 0.05
      meshGroup.rotation.x = currentRot.x * 0.4
      meshGroup.rotation.y = currentRot.y * 0.4 + t * 0.04
      heroMesh.rotation.x = t * 0.05
      heroMesh.rotation.y = t * 0.08
      meshes.forEach(m => {
        m.rotation.x += m.userData.rotSpeed.x
        m.rotation.y += m.userData.rotSpeed.y
        m.rotation.z += m.userData.rotSpeed.z
        m.position.y = m.userData.baseY + Math.sin(t * m.userData.floatSpeed + m.userData.floatOffset) * m.userData.floatAmp
      })
      const pos = particleGeo.attributes.position
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        pos.setY(i, Math.sin(pos.getX(i) * 0.15 + t * 0.4) * 2.5 + Math.cos(pos.getZ(i) * 0.1 + t * 0.3) * 1.5)
      }
      pos.needsUpdate = true
      particles.rotation.y = t * 0.015
      pl1.position.x = Math.sin(t * 0.4) * 20
      pl1.position.y = Math.cos(t * 0.3) * 15
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
      document.removeEventListener('mousemove', onMouseMove)
      renderer.dispose()
    }
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <canvas ref={canvasRef} className="three-canvas" />
        <div className="hero-noise" />
      </div>

      <div className="hero-container">
        <div className="hero-eyebrow reveal-up">
          <span className="hero-dot" />
          Now accepting new projects — 2025
        </div>

        <h1 className="hero-title">
          <span className="hero-title-line reveal-up" data-delay="0.05">
            <span>WE BUILD</span>
          </span>
          <span className="hero-title-line reveal-up" data-delay="0.1">
            <span className="hero-title-accent">DIGITAL</span>
          </span>
          <span className="hero-title-line reveal-up" data-delay="0.15">
            <span>PRODUCTS</span>
          </span>
        </h1>

        <div className="hero-bottom">
          <div>
            <p className="hero-desc reveal-up" data-delay="0.2">
              Mohali-based digital agency crafting bold brands,<br />
              high-performance websites and apps since 2019.
            </p>
            <div className="hero-cta reveal-up" data-delay="0.25" style={{ marginTop: '2rem' }}>
              <a href="#work" className="btn btn-primary btn-lg magnetic">
                View Our Work <ArrowDownRight size={16} />
              </a>
              <a href="#about" className="btn btn-ghost btn-lg magnetic">
                <Play size={14} /> Our Story
              </a>
            </div>
          </div>

          <div className="hero-stats reveal-up" data-delay="0.3">
            {stats.map(s => (
              <div className="stat" key={s.label}>
                <div className="stat-row">
                  <span className="stat-num" data-count={s.count}>0</span>
                  <span className="stat-suffix">{s.suffix}</span>
                </div>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}
