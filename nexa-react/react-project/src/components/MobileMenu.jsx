import { X } from 'lucide-react'

const links = ['About', 'Services', 'Work', 'Team', 'Contact']

export default function MobileMenu({ open, onClose }) {
  return (
    <div className={`mobile-menu${open ? ' open' : ''}`}>
      <button className="mobile-close" onClick={onClose} aria-label="Close menu">
        <X size={20} />
      </button>
      <ul>
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} className="mobile-link" onClick={onClose}>{l}</a>
          </li>
        ))}
      </ul>
      <a href="#contact" className="btn btn-primary mobile-cta" onClick={onClose}>Start a Project</a>
    </div>
  )
}
