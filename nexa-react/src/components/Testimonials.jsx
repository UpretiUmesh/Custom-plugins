import { useState, useEffect, useRef } from 'react'
import { Quote, Star, ArrowLeft, ArrowRight } from 'lucide-react'

const testimonials = [
  {
    quote: '"NexaStudio completely transformed our digital presence. Within 3 months of launch, our conversion rate increased by 340% and organic traffic doubled. The attention to detail and creative vision they brought was beyond anything we expected."',
    name: 'James Mitchell', title: 'CEO, Luminary Finance — New York', initials: 'JM', c1: '#6366f1', c2: '#8b5cf6',
  },
  {
    quote: '"Working with NexaStudio on our rebrand was a game-changer. They delivered a stunning brand identity that perfectly captures our company\'s spirit. The new brand helped us close a $50M Series B round — investors loved the professionalism."',
    name: 'Emma Laurent', title: 'Founder & CEO, Solaris Energy — Paris', initials: 'EL', c1: '#10b981', c2: '#06b6d4',
  },
  {
    quote: '"The team\'s technical expertise combined with their design sensibility is genuinely rare. Our Bloom app launched to 500K downloads in the first month, was featured by Apple, and has a 4.9-star rating. NexaStudio delivered beyond every KPI."',
    name: 'Ryan Chen', title: 'CTO, Bloom Health — San Francisco', initials: 'RC', c1: '#f59e0b', c2: '#ef4444',
  },
  {
    quote: '"We\'ve worked with many agencies over 20 years. NexaStudio is in a different league. They think like business partners, not just service providers. The Verdant platform they built won a Webby Award and is now used by 200+ enterprise clients."',
    name: 'Diana Walsh', title: 'VP Product, Verdant Technologies — London', initials: 'DW', c1: '#ec4899', c2: '#8b5cf6',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)

  const goTo = (i) => {
    setCurrent((i + testimonials.length) % testimonials.length)
    resetAuto()
  }

  const resetAuto = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % testimonials.length), 5000)
  }

  useEffect(() => {
    resetAuto()
    return () => clearInterval(timerRef.current)
  }, [])

  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag reveal-up">Client Love</div>
          <h2 className="section-title reveal-up">What clients <span className="text-gradient">say</span></h2>
        </div>
        <div className="testimonials-slider"
          onMouseEnter={() => clearInterval(timerRef.current)}
          onMouseLeave={resetAuto}
        >
          <div className="testimonial-track" style={{ transform: `translateX(-${current * 100}%)` }}>
            {testimonials.map(({ quote, name, title, initials, c1, c2 }) => (
              <div className="testimonial-card" key={name}>
                <Quote size={36} className="quote-icon" />
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#f59e0b" stroke="#f59e0b" />)}
                </div>
                <p>{quote}</p>
                <div className="testimonial-author">
                  <div className="author-avatar" style={{ '--c1': c1, '--c2': c2 }}>{initials}</div>
                  <div><strong>{name}</strong><span>{title}</span></div>
                </div>
              </div>
            ))}
          </div>
          <div className="slider-controls">
            <button className="slider-btn" onClick={() => goTo(current - 1)} aria-label="Previous slide">
              <ArrowLeft size={18} />
            </button>
            <div className="slider-dots">
              {testimonials.map((_, i) => (
                <button key={i} className={`slider-dot${i === current ? ' active' : ''}`} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`} />
              ))}
            </div>
            <button className="slider-btn" onClick={() => goTo(current + 1)} aria-label="Next slide">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
