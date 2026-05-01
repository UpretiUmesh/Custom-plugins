import { Linkedin, Twitter, Dribbble, Github, Instagram } from 'lucide-react'

const members = [
  {
    initials: 'AK', c1: '#6366f1', c2: '#8b5cf6',
    name: 'Alex Kim', role: 'CEO & Creative Director',
    bio: '15 years shaping digital brands. Former Creative Lead at Pentagram. Speaker at SXSW and Awwwards Conference.',
    socials: [{ Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' }, { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter' }, { Icon: Dribbble, href: 'https://dribbble.com', label: 'Dribbble' }],
    delay: '0.1',
  },
  {
    initials: 'SR', c1: '#f59e0b', c2: '#ef4444',
    name: 'Sofia Reyes', role: 'Co-Founder & Design Lead',
    bio: 'Award-winning UX designer with 12 years of experience. Previously at Apple Design Team and IDEO. Figma Community Ambassador.',
    socials: [{ Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' }, { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter' }, { Icon: Dribbble, href: 'https://dribbble.com', label: 'Dribbble' }],
    delay: '0.2',
  },
  {
    initials: 'MP', c1: '#10b981', c2: '#06b6d4',
    name: 'Marcus Park', role: 'Head of Engineering',
    bio: 'Full-stack architect with deep expertise in React, Node.js, and cloud infrastructure. Ex-Google SWE. Open-source contributor with 8K+ GitHub stars.',
    socials: [{ Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' }, { Icon: Github, href: 'https://github.com', label: 'GitHub' }, { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter' }],
    delay: '0.3',
  },
  {
    initials: 'LN', c1: '#ec4899', c2: '#8b5cf6',
    name: 'Luna Nakamura', role: 'Motion & 3D Director',
    bio: 'Specialist in WebGL, Three.js, and cinematic motion design. Her work has been featured in Motionographer and Stash Magazine.',
    socials: [{ Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' }, { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter' }, { Icon: Instagram, href: 'https://instagram.com', label: 'Instagram' }],
    delay: '0.4',
  },
]

export default function Team() {
  return (
    <section className="team section" id="team">
      <div className="container">
        <div className="section-header">
          <div className="section-tag reveal-up">The People</div>
          <h2 className="section-title reveal-up">Meet the <span className="text-gradient">Team</span></h2>
          <p className="section-subtitle reveal-up">60 talented humans across New York, London, and Singapore.</p>
        </div>
        <div className="team-grid">
          {members.map(({ initials, c1, c2, name, role, bio, socials, delay }) => (
            <div className="team-card reveal-up" data-delay={delay} key={name}>
              <div className="team-avatar" style={{ '--c1': c1, '--c2': c2 }}>{initials}</div>
              <div className="team-info">
                <h3>{name}</h3>
                <span className="team-role">{role}</span>
                <p className="team-bio">{bio}</p>
                <div className="team-socials">
                  {socials.map(({ Icon, href, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener" aria-label={label}>
                      <Icon size={14} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
