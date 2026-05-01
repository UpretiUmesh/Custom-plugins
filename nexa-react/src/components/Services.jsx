import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { ArrowUpRight } from 'lucide-react'

const services = [
  {
    num: '01', title: 'WordPress Development',
    desc: 'Custom WordPress websites, themes, and plugins built for speed, security, and ease of management. From blogs to full business portals.',
    tags: ['WordPress', 'WooCommerce', 'Custom Themes', 'Plugins'],
  },
  {
    num: '02', title: 'Shopify Stores',
    desc: 'High-converting Shopify storefronts with custom design, product setup, payment integration, and ongoing store management.',
    tags: ['Shopify', 'E-Commerce', 'Payment Gateway', 'Store Setup'],
  },
  {
    num: '03', title: 'Laravel Web Apps',
    desc: 'Robust, scalable web applications built with Laravel — from admin dashboards and CRMs to custom business tools and APIs.',
    tags: ['Laravel', 'PHP', 'REST API', 'MySQL'],
  },
  {
    num: '04', title: 'React Development',
    desc: 'Fast, interactive frontends and single-page applications built with React. Clean code, component-driven architecture, and smooth UX.',
    tags: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS'],
  },
  {
    num: '05', title: 'SEO Optimization',
    desc: 'On-page and technical SEO that gets your website ranking on Google. Keyword research, site audits, speed optimization, and content strategy.',
    tags: ['On-Page SEO', 'Technical SEO', 'Google Analytics', 'Core Web Vitals'],
  },
  {
    num: '06', title: 'Mobile Responsive Design',
    desc: 'Every website we build is fully responsive — pixel-perfect on mobile, tablet, and desktop. Optimized for touch, speed, and usability.',
    tags: ['Responsive Design', 'Mobile-First', 'Cross-Browser', 'UI/UX'],
  },
]

export default function Services() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 200)
    camera.position.set(0, 0, 25)
    const resize = () => {
      const w = canvas.parentElement.offsetWidth, h = canvas.parentElement.offsetHeight
      renderer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix()
    }
    resize(); window.addEventListener('resize', resize)
    scene.add(new THREE.AmbientLight(0xffffff, 0.4))
    const pl = new THREE.PointLight(0xc8f135, 2, 60); pl.position.set(10, 10, 10); scene.add(pl)
    const group = new THREE.Group(); scene.add(group)
    const torusData = [
      { r: 5, tube: 0.12, color: 0xc8f135 }, { r: 8, tube: 0.1, color: 0x6366f1 },
      { r: 11, tube: 0.08, color: 0xc8f135 }, { r: 14, tube: 0.06, color: 0x8b5cf6 },
    ]
    const toruses = torusData.map(({ r, tube, color }, i) => {
      const mesh = new THREE.Mesh(
        new THREE.TorusGeometry(r, tube, 16, 100),
        new THREE.MeshPhongMaterial({ color, transparent: true, opacity: 0.3 })
      )
      mesh.rotation.x = 0.5 * (i + 1); mesh.rotation.y = 0.3 * (i + 1)
      group.add(mesh); return mesh
    })
    const clock = new THREE.Clock(); let rafId
    const animate = () => {
      rafId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()
      toruses.forEach((torus, i) => { torus.rotation.z += 0.003 * (i % 2 === 0 ? 1 : -1); torus.rotation.x += 0.001 })
      group.rotation.y = t * 0.05; renderer.render(scene, camera)
    }
    animate()
    return () => { cancelAnimationFrame(rafId); window.removeEventListener('resize', resize); renderer.dispose() }
  }, [])

  return (
    <section className="services section" id="services">
      <canvas ref={canvasRef} className="section-three-canvas" />
      <div className="container">
        <div className="section-label reveal-up">What We Do</div>
        <h2 className="display-title reveal-up">
          Services that<br /><span className="text-accent">move the needle.</span>
        </h2>
        <div className="services-list">
          {services.map(({ num, title, desc, tags }) => (
            <div className="service-row reveal-up" key={num}>
              <span className="service-row-num">{num}</span>
              <div className="service-row-body">
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="service-row-tags">{tags.map(t => <span key={t}>{t}</span>)}</div>
              </div>
              <div className="service-row-arrow"><ArrowUpRight size={22} /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
