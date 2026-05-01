import { Linkedin, Twitter, Instagram, Dribbble, Github, ChevronRight, MapPin } from 'lucide-react'

const socials = [
  { Icon: Linkedin,  href: 'https://linkedin.com',  label: 'LinkedIn' },
  { Icon: Twitter,   href: 'https://twitter.com',   label: 'Twitter' },
  { Icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { Icon: Dribbble,  href: 'https://dribbble.com',  label: 'Dribbble' },
  { Icon: Github,    href: 'https://github.com',    label: 'GitHub' },
]

const company = [
  { label: 'About Us',  href: '#about' },
  { label: 'Our Team',  href: '#team' },
  { label: 'Portfolio', href: '#work' },
  { label: 'Contact',   href: '#contact' },
  { label: 'Careers',   href: '#', badge: '3 Open' },
]

const services = ['Brand Identity', 'Web Design & Dev', 'Mobile Apps', 'Motion & 3D', 'E-Commerce']

const offices = [
  { city: 'Mohali',  addr: 'Phase 8B, Industrial Area, Punjab 160071' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="nav-logo">NEXA<span>STUDIO</span></div>
            <p>Crafting digital experiences that inspire, connect, and convert — since 2019.</p>
            <div className="footer-socials">
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener" aria-label={label}><Icon size={15} /></a>
              ))}
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                {company.map(({ label, href, badge }) => (
                  <li key={label}>
                    <a href={href}><ChevronRight size={12} />{label}{badge && <span className="footer-badge">{badge}</span>}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                {services.map(s => (
                  <li key={s}><a href="#services"><ChevronRight size={12} />{s}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Offices</h4>
              <ul className="footer-offices">
                {offices.map(({ city, addr }) => (
                  <li key={city}>
                    <MapPin size={14} />
                    <div><strong>{city}</strong><span>{addr}</span></div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Your Studio. All rights reserved. Based in Mohali, Punjab.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
