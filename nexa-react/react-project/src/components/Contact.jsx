import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Instagram, Dribbble, Github, User, Building2, DollarSign, Layers, MessageSquare, Send, CheckCircle2 } from 'lucide-react'

const contactItems = [
  { Icon: Mail,    label: 'Email',         content: <a href="mailto:hello@yourstudio.com">hello@yourstudio.com</a> },
  { Icon: Phone,   label: 'Phone',         content: <a href="tel:+919876543210">+91 98765 43210</a> },
  { Icon: MapPin,  label: 'Office',        content: <span>Phase 8B, Industrial Area<br />Mohali, Punjab 160071</span> },
  { Icon: Clock,   label: 'Working Hours', content: <span>Mon – Sat, 9:00 AM – 6:00 PM IST</span> },
]

const socials = [
  { Icon: Linkedin,  href: 'https://linkedin.com',  label: 'LinkedIn' },
  { Icon: Twitter,   href: 'https://twitter.com',   label: 'Twitter' },
  { Icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { Icon: Dribbble,  href: 'https://dribbble.com',  label: 'Dribbble' },
  { Icon: Github,    href: 'https://github.com',    label: 'GitHub' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', budget: '', service: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return
    setSubmitted(true)
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="section-tag reveal-up">Get In Touch</div>
            <h2 className="section-title reveal-up">Let's create something <span className="text-gradient">great</span></h2>
            <p className="about-text reveal-up">Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you within 24 hours.</p>
            <div className="contact-details reveal-up">
              {contactItems.map(({ Icon, label, content }) => (
                <div className="contact-item" key={label}>
                  <div className="contact-icon-wrap"><Icon size={18} /></div>
                  <div><strong>{label}</strong>{content}</div>
                </div>
              ))}
            </div>
            <div className="social-links reveal-up">
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener" className="social-link magnetic" aria-label={label}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-wrap reveal-right">
            {submitted ? (
              <div className="form-success">
                <div className="success-icon"><CheckCircle2 size={56} stroke="#22c55e" /></div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name"><User size={14} /> Your Name</label>
                    <input type="text" id="name" placeholder="John Doe" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email"><Mail size={14} /> Email Address</label>
                    <input type="email" id="email" placeholder="john@company.com" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="company"><Building2 size={14} /> Company Name</label>
                  <input type="text" id="company" placeholder="Acme Inc." value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))} />
                </div>
                <div className="form-group">
                  <label htmlFor="budget"><DollarSign size={14} /> Project Budget</label>
                  <select id="budget" value={form.budget} onChange={e => setForm(f => ({ ...f, budget: e.target.value }))}>
                    <option value="">Select your budget range</option>
                    <option>$5,000 – $15,000</option>
                    <option>$15,000 – $50,000</option>
                    <option>$50,000 – $150,000</option>
                    <option>$150,000+</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="service"><Layers size={14} /> Service Interested In</label>
                  <select id="service" value={form.service} onChange={e => setForm(f => ({ ...f, service: e.target.value }))}>
                    <option value="">Select a service</option>
                    <option>Brand Identity</option>
                    <option>Web Design & Development</option>
                    <option>Mobile App</option>
                    <option>Motion & 3D</option>
                    <option>Digital Strategy</option>
                    <option>E-Commerce</option>
                    <option>Full-Service Partnership</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message"><MessageSquare size={14} /> Tell Us About Your Project</label>
                  <textarea id="message" rows="5" placeholder="Describe your project, goals, timeline..." required value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-full magnetic">
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
