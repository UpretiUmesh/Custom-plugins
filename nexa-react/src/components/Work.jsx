import { useState } from 'react'
import { ExternalLink, FolderOpen } from 'lucide-react'
import ProjectModal from './ProjectModal'

const projects = [
  {
    category: 'web', c1: '#6366f1', c2: '#8b5cf6', mock: 'default',
    cat: 'WordPress Development',
    title: 'TechCorp India — Business Website',
    desc: 'Custom WordPress website with advanced SEO, contact forms, and a fully responsive layout optimised for mobile users.',
    fullDesc: 'TechCorp India needed a professional online presence that could generate leads and rank on Google. We built a fully custom WordPress theme from scratch — no page builders — with structured data, Core Web Vitals optimisation, and a CMS the client can manage themselves. Organic traffic grew 3x within 4 months.',
    year: '2024', client: 'TechCorp India', role: 'WordPress + SEO',
    tags: ['WordPress', 'Custom Theme', 'SEO', 'Responsive Design'],
    techStack: ['WordPress', 'PHP', 'MySQL', 'GSAP', 'Yoast SEO'],
    liveUrl: 'https://example.com',
    results: [
      { value: '3x',   label: 'Organic traffic' },
      { value: '#1',   label: 'Google ranking' },
      { value: '1.8s', label: 'Load time' },
    ],
  },
  {
    category: 'web', c1: '#f59e0b', c2: '#ef4444', mock: 'brand', letter: 'S',
    cat: 'Shopify E-Commerce',
    title: 'StyleHub — Fashion Store',
    desc: 'Full Shopify store setup with custom theme, product catalogue, payment gateway integration, and mobile-first design.',
    fullDesc: 'StyleHub wanted to move their offline fashion business online. We designed and built a custom Shopify storefront with a clean, mobile-first UI, Razorpay payment integration, automated order notifications, and a product catalogue of 200+ SKUs. Sales crossed Rs 5L in the first month.',
    year: '2024', client: 'StyleHub Fashion', role: 'Shopify Design + Setup',
    tags: ['Shopify', 'E-Commerce', 'Custom Theme', 'Payment Integration'],
    techStack: ['Shopify', 'Liquid', 'JavaScript', 'Razorpay'],
    liveUrl: '',
    results: [
      { value: 'Rs 5L+', label: 'First month sales' },
      { value: '200+',   label: 'Products listed' },
      { value: '4.8★',   label: 'Customer rating' },
    ],
  },
  {
    category: 'web', c1: '#10b981', c2: '#06b6d4', mock: 'wide', wide: true,
    cat: 'Laravel Web Application',
    title: 'Verdant ERP — Business Management System',
    desc: 'Custom Laravel ERP with inventory management, invoicing, staff roles, and a real-time dashboard for a Mohali-based manufacturer.',
    fullDesc: 'A Mohali-based manufacturing company needed to replace their spreadsheet-based workflow with a proper system. We built a full Laravel ERP covering inventory, purchase orders, invoicing, staff management, and a live analytics dashboard. The system reduced manual work by 70% and is now used by 15 staff daily.',
    year: '2023', client: 'Verdant Manufacturing', role: 'Full-Stack Laravel',
    tags: ['Laravel', 'ERP', 'Dashboard', 'REST API'],
    techStack: ['Laravel', 'PHP', 'MySQL', 'Vue.js', 'Chart.js'],
    liveUrl: 'https://wikipedia.org',
    results: [
      { value: '70%',  label: 'Less manual work' },
      { value: '15',   label: 'Daily active users' },
      { value: '3 mo', label: 'Delivery time' },
    ],
  },
  {
    category: 'mobile', c1: '#ec4899', c2: '#8b5cf6', mock: 'mobile',
    cat: 'Mobile Responsive Design',
    title: 'Bloom Clinic — Healthcare Website',
    desc: 'Fully responsive healthcare website with appointment booking, doctor profiles, and Google Maps integration.',
    fullDesc: 'Bloom Clinic needed a website that worked flawlessly on mobile — over 80% of their patients browse on phones. We redesigned their entire site with a mobile-first approach, added an online appointment booking system, integrated Google Maps, and optimised for local SEO. Appointment bookings increased by 60% in 2 months.',
    year: '2023', client: 'Bloom Clinic, Mohali', role: 'Responsive Design + SEO',
    tags: ['Responsive Design', 'WordPress', 'Local SEO', 'Booking System'],
    techStack: ['WordPress', 'PHP', 'Google Maps API', 'CSS Grid'],
    liveUrl: '',
    results: [
      { value: '60%',  label: 'More bookings' },
      { value: '80%+', label: 'Mobile traffic' },
      { value: 'Top 3', label: 'Local search rank' },
    ],
  },
  {
    category: 'web', c1: '#f97316', c2: '#facc15', mock: 'brand', letter: 'R',
    cat: 'React Frontend',
    title: 'RealEstate Pro — Property Listing Portal',
    desc: 'React-powered property listing portal with advanced filters, map view, and a Laravel backend API.',
    fullDesc: 'A real estate startup in Chandigarh needed a fast, modern property portal to compete with established players. We built a React frontend with dynamic filters, map-based search, saved listings, and a Laravel REST API backend. The portal launched with 500+ listings and saw 2,000 unique visitors in the first week.',
    year: '2024', client: 'RealEstate Pro', role: 'React + Laravel',
    tags: ['React', 'Laravel API', 'Maps', 'Property Portal'],
    techStack: ['React', 'Laravel', 'MySQL', 'Google Maps API', 'Tailwind CSS'],
    liveUrl: '',
    results: [
      { value: '500+', label: 'Listings at launch' },
      { value: '2K',   label: 'Week-1 visitors' },
      { value: '0.9s', label: 'Page load speed' },
    ],
  },
]

function Mock({ mock, letter }) {
  if (mock === 'brand') return <div className="work-mock work-mock-brand"><div className="mock-logo-big">{letter}</div><div className="mock-brand-lines"><span /><span /></div></div>
  if (mock === 'wide') return <div className="work-mock work-mock-wide"><div className="mock-sidebar" /><div className="mock-main"><div className="mock-chart" /><div className="mock-stats-row"><span /><span /><span /></div></div></div>
  if (mock === 'mobile') return <div className="work-mock work-mock-mobile"><div className="mock-phone"><div className="mock-phone-screen"><div className="mock-ph-header" /><div className="mock-ph-content"><span /><span /><span /></div></div></div></div>
  return <div className="work-mock"><div className="mock-bar" /><div className="mock-lines"><span /><span /><span /></div><div className="mock-card-row"><span /><span /></div></div>
}

export default function Work() {
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState(null)
  const filters = ['all', 'web', 'mobile']
  const visible = projects.filter(p => filter === 'all' || p.category === filter)

  return (
    <section className="work section" id="work">
      <div className="container">
        <div className="section-label reveal-up">Portfolio</div>
        <h2 className="display-title reveal-up">Selected <span className="text-accent">Work.</span></h2>

        <div className="work-filter reveal-up" style={{ marginTop: '2.5rem' }}>
          {filters.map(f => (
            <button
              key={f}
              className={`filter-btn${filter === f ? ' active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f === 'all' ? 'All Projects' : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className="work-grid">
          {visible.map((project) => {
            const { c1, c2, cat, title, desc, mock, letter, wide } = project
            return (
              <div
                key={title}
                className={`work-card revealed${wide && filter === 'all' ? ' work-card-wide' : ''}`}
                onClick={() => setSelected(project)}
                style={{ cursor: 'pointer' }}
              >
                <div className="work-img">
                  <div className="work-placeholder" style={{ '--c1': c1, '--c2': c2 }}>
                    <Mock mock={mock} letter={letter} />
                  </div>
                  <div className="work-overlay">
                    <span className="work-view"><ExternalLink size={14} /> View Project</span>
                  </div>
                </div>
                <div className="work-info">
                  <span className="work-cat">{cat}</span>
                  <h3>{title}</h3>
                  <p className="work-desc">{desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="work-cta reveal-up">
          <a href="#contact" className="btn btn-ghost btn-lg magnetic">
            <FolderOpen size={15} /> See All 150+ Projects
          </a>
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}
