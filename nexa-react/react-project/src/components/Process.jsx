import { Search, Figma, Code2, Rocket } from 'lucide-react'

const steps = [
  { Icon: Search, num: '01', title: 'Discovery',     desc: 'Deep-dive workshops to understand your brand, audience, competitors, and goals before a single pixel is drawn.' },
  { Icon: Figma,  num: '02', title: 'Design',        desc: 'High-fidelity Figma prototypes, iterating until every interaction, animation, and layout feels exactly right.' },
  { Icon: Code2,  num: '03', title: 'Build',         desc: 'Clean, tested, documented code — optimized for performance, accessibility, and long-term maintainability.' },
  { Icon: Rocket, num: '04', title: 'Launch & Grow', desc: 'Zero-downtime deployment, post-launch monitoring, and ongoing support as your product scales.' },
]

export default function Process() {
  return (
    <section className="process section">
      <div className="container">
        <div className="section-label reveal-up">How We Work</div>
        <h2 className="display-title reveal-up">Our <span className="text-accent">Process.</span></h2>
        <div className="process-steps" style={{ marginTop: '5rem' }}>
          {steps.map(({ Icon, num, title, desc }, i) => (
            <>
              <div className="process-step reveal-up" data-delay={i * 0.1} key={title}>
                <div className="step-num">{num}</div>
                <div className="step-icon"><Icon size={22} /></div>
                <div className="step-content">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
              {i < steps.length - 1 && <div className="process-connector" key={`c${i}`} />}
            </>
          ))}
        </div>
      </div>
    </section>
  )
}
