import { ArrowUpRight } from 'lucide-react'

const links = ['About', 'Services', 'Work', 'Team', 'Contact']

export default function Navbar({ onMenuOpen }) {
  return (
    <nav className="nav" id="nav">
      <div className="nav-container">
        <a href="#" className="nav-logo">NEXA<span>STUDIO</span></a>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l}><a href={`#${l.toLowerCase()}`} className="nav-link">{l}</a></li>
          ))}
        </ul>
        <div className="nav-actions">
          <a href="#contact" className="btn btn-primary">
            Start a Project <ArrowUpRight size={14} />
          </a>
        </div>
        <button className="nav-hamburger" onClick={onMenuOpen} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  )
}
