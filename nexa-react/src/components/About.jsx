import { ArrowRight } from 'lucide-react'

const features = [
  'WordPress', 'Shopify', 'Laravel', 'React',
  'SEO', 'Mobile Responsive', 'WooCommerce', 'Next.js',
]

const highlights = [
  { name: '5+ Years Experience',    year: '2019 – Present', badge: 'Est. Mohali' },
  { name: '80+ Projects Delivered', year: 'Across India',   badge: 'Proven Track Record' },
  { name: '98% Client Retention',   year: 'Repeat Clients', badge: 'Trusted Partner' },
  { name: 'Full-Service Studio',    year: 'End-to-End',     badge: 'Design to Deploy' },
]

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-inner">
          <div className="about-left">
            <div className="section-num about-num reveal-up">01</div>
            <div className="section-label reveal-up">About Us</div>
            <h2 className="about-heading reveal-up">
              Mohali's most<br />trusted digital<br /><span className="text-accent">studio.</span>
            </h2>
            <a href="#contact" className="btn btn-primary magnetic reveal-up" style={{ marginTop: '2rem' }}>
              Work With Us <ArrowRight size={15} />
            </a>
          </div>

          <div className="about-right">
            <p className="about-text reveal-up">
              We are a full-service digital agency based in Mohali, Punjab, with over 5 years of hands-on experience building websites, mobile apps, and digital brands. Since 2019, we have partnered with startups, SMEs, and established businesses across India to deliver products that look great and perform even better.
            </p>
            <p className="about-text reveal-up">
              Our team of designers, developers, and strategists works closely with every client — from the first wireframe to the final launch. We don't just deliver projects; we build long-term digital partnerships that grow with your business.
            </p>

            <div className="about-features reveal-up">
              {features.map(f => (
                <span className="feature-pill" key={f}>{f}</span>
              ))}
            </div>

            <div className="about-awards reveal-up">
              {highlights.map(({ name, year, badge }) => (
                <div className="award-row" key={name}>
                  <span className="award-name">{name}</span>
                  <span className="award-year">{year}</span>
                  <span className="award-badge">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
