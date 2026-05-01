const items = ['WordPress', 'Shopify', 'Laravel', 'React', 'SEO', 'Mobile Responsive', 'WooCommerce', 'Next.js', 'UI/UX Design', 'E-Commerce']
const doubled = [...items, ...items]

export default function Marquee() {
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        <div className="marquee-content">
          {doubled.map((item, i) => (
            <span key={i}>{item} <span className="dot">◆</span></span>
          ))}
        </div>
      </div>
    </div>
  )
}
