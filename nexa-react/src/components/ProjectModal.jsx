import { useEffect, useRef, useState } from 'react'
import { X, ExternalLink, ArrowRight, Monitor, Tablet, Smartphone, RefreshCw, Globe, ArrowLeft, ArrowUpRight } from 'lucide-react'

const DEVICES = [
  { id: 'desktop', Icon: Monitor,    label: 'Desktop', width: '100%' },
  { id: 'tablet',  Icon: Tablet,     label: 'Tablet',  width: '768px' },
  { id: 'mobile',  Icon: Smartphone, label: 'Mobile',  width: '390px' },
]

function LivePreview({ url }) {
  const [device, setDevice] = useState('desktop')
  const [loaded, setLoaded] = useState(false)
  const [key, setKey] = useState(0)
  const currentDevice = DEVICES.find(d => d.id === device)

  const refresh = () => { setLoaded(false); setKey(k => k + 1) }

  if (!url) return (
    <div className="pm-preview-empty">
      <Globe size={32} />
      <span>No live URL provided</span>
    </div>
  )

  return (
    <div className="pm-preview-wrap">
      <div className="pm-preview-toolbar">
        <div className="pm-preview-url">
          <span className="pm-secure-dot" />
          <span className="pm-url-text">{url}</span>
        </div>
        <div className="pm-preview-controls">
          <div className="pm-device-btns">
            {DEVICES.map(({ id, Icon, label }) => (
              <button
                key={id}
                className={`pm-device-btn${device === id ? ' active' : ''}`}
                onClick={() => setDevice(id)}
                title={label}
              >
                <Icon size={14} />
              </button>
            ))}
          </div>
          <button className="pm-ctrl-btn" onClick={refresh} title="Refresh">
            <RefreshCw size={13} className={!loaded ? 'pm-spin' : ''} />
          </button>
          <a className="pm-ctrl-btn" href={url} target="_blank" rel="noopener noreferrer" title="Open in new tab">
            <ExternalLink size={13} />
          </a>
        </div>
      </div>

      <div className="pm-iframe-outer">
        <div
          className={`pm-iframe-frame pm-frame-${device}`}
          style={{ width: currentDevice.width }}
        >
          {!loaded && (
            <div className="pm-iframe-loading">
              <div className="pm-spinner" />
              <span>Loading preview…</span>
            </div>
          )}
          <iframe
            key={key}
            src={url}
            title="Live preview"
            className="pm-iframe"
            onLoad={() => setLoaded(true)}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
            loading="lazy"
          />
        </div>
      </div>

      <p className="pm-iframe-note">
        ⚠ Some sites block embedding. If blank, open directly via the ↗ button above.
      </p>
    </div>
  )
}

export default function ProjectModal({ project, onClose }) {
  const overlayRef = useRef(null)
  const [tab, setTab] = useState('overview') // 'overview' | 'preview'

  // Close on Escape
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  // Close on backdrop click
  const onOverlayClick = e => {
    if (e.target === overlayRef.current) onClose()
  }

  if (!project) return null

  const { title, cat, desc, fullDesc, c1, c2, mock, letter, tags, techStack, liveUrl, year, client, role, results } = project

  return (
    <div className="pm-overlay" ref={overlayRef} onClick={onOverlayClick}>
      <div className="pm-modal">

        {/* ── Top bar ── */}
        <div className="pm-topbar">
          <div className="pm-topbar-left">
            <button className="pm-back-btn" onClick={onClose}>
              <ArrowLeft size={16} /> Back to Work
            </button>
          </div>
          <div className="pm-topbar-tabs">
            <button className={`pm-tab-btn${tab === 'overview' ? ' active' : ''}`} onClick={() => setTab('overview')}>
              Overview
            </button>
            {liveUrl && (
              <button className={`pm-tab-btn${tab === 'preview' ? ' active' : ''}`} onClick={() => setTab('preview')}>
                Live Preview
              </button>
            )}
          </div>
          <button className="pm-close-btn" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        {/* ── Content ── */}
        <div className="pm-body">

          {tab === 'overview' && (
            <>
              {/* Hero banner */}
              <div className="pm-hero" style={{ '--c1': c1, '--c2': c2 }}>
                <div className="pm-hero-mock">
                  {mock === 'brand' && (
                    <div className="work-mock work-mock-brand">
                      <div className="mock-logo-big">{letter}</div>
                      <div className="mock-brand-lines"><span /><span /></div>
                    </div>
                  )}
                  {mock === 'wide' && (
                    <div className="work-mock work-mock-wide">
                      <div className="mock-sidebar" />
                      <div className="mock-main">
                        <div className="mock-chart" />
                        <div className="mock-stats-row"><span /><span /><span /></div>
                      </div>
                    </div>
                  )}
                  {mock === 'mobile' && (
                    <div className="work-mock work-mock-mobile">
                      <div className="mock-phone">
                        <div className="mock-phone-screen">
                          <div className="mock-ph-header" />
                          <div className="mock-ph-content"><span /><span /><span /></div>
                        </div>
                      </div>
                    </div>
                  )}
                  {mock === 'default' && (
                    <div className="work-mock">
                      <div className="mock-bar" />
                      <div className="mock-lines"><span /><span /><span /></div>
                      <div className="mock-card-row"><span /><span /></div>
                    </div>
                  )}
                </div>
                <div className="pm-hero-overlay">
                  <span className="pm-hero-cat">{cat}</span>
                  <h1 className="pm-hero-title">{title}</h1>
                </div>
              </div>

              {/* Meta strip */}
              <div className="pm-meta-strip">
                {year   && <div className="pm-meta-item"><span className="pm-meta-label">Year</span><span className="pm-meta-val">{year}</span></div>}
                {client && <div className="pm-meta-item"><span className="pm-meta-label">Client</span><span className="pm-meta-val">{client}</span></div>}
                {role   && <div className="pm-meta-item"><span className="pm-meta-label">Role</span><span className="pm-meta-val">{role}</span></div>}
                {liveUrl && (
                  <div className="pm-meta-item pm-meta-link">
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      Visit Live Site <ArrowUpRight size={14} />
                    </a>
                  </div>
                )}
              </div>

              {/* Main content grid */}
              <div className="pm-content-grid">
                <div className="pm-content-main">
                  <h2 className="pm-section-heading">About the Project</h2>
                  <p className="pm-desc">{fullDesc || desc}</p>

                  {results && results.length > 0 && (
                    <>
                      <h2 className="pm-section-heading" style={{ marginTop: '2.5rem' }}>Results</h2>
                      <div className="pm-results">
                        {results.map(r => (
                          <div className="pm-result-item" key={r.label}>
                            <span className="pm-result-num">{r.value}</span>
                            <span className="pm-result-label">{r.label}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className="pm-content-side">
                  {tags && tags.length > 0 && (
                    <div className="pm-side-block">
                      <h3 className="pm-side-heading">Services</h3>
                      <div className="pm-tags">
                        {tags.map(t => <span className="pm-tag" key={t}>{t}</span>)}
                      </div>
                    </div>
                  )}
                  {techStack && techStack.length > 0 && (
                    <div className="pm-side-block">
                      <h3 className="pm-side-heading">Tech Stack</h3>
                      <div className="pm-tags">
                        {techStack.map(t => <span className="pm-tag pm-tag-tech" key={t}>{t}</span>)}
                      </div>
                    </div>
                  )}
                  {liveUrl && (
                    <div className="pm-side-block">
                      <h3 className="pm-side-heading">Live Preview</h3>
                      <button className="pm-preview-cta" onClick={() => setTab('preview')}>
                        Open Preview <ArrowRight size={14} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}

          {tab === 'preview' && (
            <div className="pm-preview-tab">
              <LivePreview url={liveUrl} />
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
