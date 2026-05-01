import { useState, useRef } from 'react'
import { Plus, X, Monitor, Tablet, Smartphone, RefreshCw, ExternalLink, Globe } from 'lucide-react'

const DEVICES = [
  { id: 'desktop',  Icon: Monitor,    label: 'Desktop', width: '100%',  height: '600px' },
  { id: 'tablet',   Icon: Tablet,     label: 'Tablet',  width: '768px', height: '600px' },
  { id: 'mobile',   Icon: Smartphone, label: 'Mobile',  width: '390px', height: '600px' },
]

const DEFAULT_TABS = [
  { id: 1, label: 'Tab 1', url: '' },
  { id: 2, label: 'Tab 2', url: '' },
]

let nextId = 3

function normalizeUrl(raw) {
  const trimmed = raw.trim()
  if (!trimmed) return ''
  if (/^https?:\/\//i.test(trimmed)) return trimmed
  return 'https://' + trimmed
}

export default function TabPreview() {
  const [tabs, setTabs] = useState(DEFAULT_TABS)
  const [activeId, setActiveId] = useState(1)
  const [device, setDevice] = useState('desktop')
  const [inputValues, setInputValues] = useState({ 1: '', 2: '' })
  const [loadedUrls, setLoadedUrls] = useState({ 1: '', 2: '' })
  const [loading, setLoading] = useState({})
  const [editingLabel, setEditingLabel] = useState(null)
  const iframeRefs = useRef({})

  const activeTab = tabs.find(t => t.id === activeId)
  const currentDevice = DEVICES.find(d => d.id === device)

  /* ── Tab management ── */
  const addTab = () => {
    const id = nextId++
    setTabs(prev => [...prev, { id, label: `Tab ${id}`, url: '' }])
    setInputValues(prev => ({ ...prev, [id]: '' }))
    setLoadedUrls(prev => ({ ...prev, [id]: '' }))
    setActiveId(id)
  }

  const removeTab = (id, e) => {
    e.stopPropagation()
    const remaining = tabs.filter(t => t.id !== id)
    if (!remaining.length) return
    setTabs(remaining)
    if (activeId === id) setActiveId(remaining[remaining.length - 1].id)
    setInputValues(prev => { const n = { ...prev }; delete n[id]; return n })
    setLoadedUrls(prev => { const n = { ...prev }; delete n[id]; return n })
  }

  const updateLabel = (id, val) => {
    setTabs(prev => prev.map(t => t.id === id ? { ...t, label: val } : t))
  }

  /* ── URL / load ── */
  const loadUrl = (id) => {
    const url = normalizeUrl(inputValues[id] || '')
    if (!url) return
    setLoadedUrls(prev => ({ ...prev, [id]: url }))
    setLoading(prev => ({ ...prev, [id]: true }))
  }

  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter') loadUrl(id)
  }

  const refresh = (id) => {
    const url = loadedUrls[id]
    if (!url) return
    setLoadedUrls(prev => ({ ...prev, [id]: '' }))
    setLoading(prev => ({ ...prev, [id]: true }))
    setTimeout(() => setLoadedUrls(prev => ({ ...prev, [id]: url })), 50)
  }

  const onIframeLoad = (id) => {
    setLoading(prev => ({ ...prev, [id]: false }))
  }

  return (
    <section className="tab-preview-section">
      <div className="tab-preview-wrapper">

        {/* ── Header ── */}
        <div className="tp-header">
          <div className="tp-title-block">
            <Globe size={18} className="tp-title-icon" />
            <span className="tp-title">Live Preview</span>
          </div>
          <div className="tp-device-switcher">
            {DEVICES.map(({ id, Icon, label }) => (
              <button
                key={id}
                className={`tp-device-btn${device === id ? ' active' : ''}`}
                onClick={() => setDevice(id)}
                title={label}
              >
                <Icon size={16} />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Tab bar ── */}
        <div className="tp-tabbar">
          <div className="tp-tabs">
            {tabs.map(tab => (
              <div
                key={tab.id}
                className={`tp-tab${activeId === tab.id ? ' active' : ''}`}
                onClick={() => setActiveId(tab.id)}
              >
                {editingLabel === tab.id ? (
                  <input
                    className="tp-tab-label-input"
                    value={tab.label}
                    autoFocus
                    onChange={e => updateLabel(tab.id, e.target.value)}
                    onBlur={() => setEditingLabel(null)}
                    onKeyDown={e => e.key === 'Enter' && setEditingLabel(null)}
                    onClick={e => e.stopPropagation()}
                  />
                ) : (
                  <span
                    className="tp-tab-label"
                    onDoubleClick={e => { e.stopPropagation(); setEditingLabel(tab.id) }}
                    title="Double-click to rename"
                  >
                    {tab.label}
                  </span>
                )}
                {tabs.length > 1 && (
                  <button className="tp-tab-close" onClick={e => removeTab(tab.id, e)} aria-label="Close tab">
                    <X size={12} />
                  </button>
                )}
              </div>
            ))}
          </div>
          <button className="tp-add-tab" onClick={addTab} title="New tab">
            <Plus size={16} />
          </button>
        </div>

        {/* ── URL bar ── */}
        {activeTab && (
          <div className="tp-urlbar">
            <div className="tp-url-indicator">
              {loadedUrls[activeTab.id]
                ? <span className="tp-secure-dot" title="Loaded" />
                : <Globe size={13} className="tp-url-globe" />
              }
            </div>
            <input
              className="tp-url-input"
              type="text"
              placeholder="Enter URL (e.g. example.com)"
              value={inputValues[activeTab.id] || ''}
              onChange={e => setInputValues(prev => ({ ...prev, [activeTab.id]: e.target.value }))}
              onKeyDown={e => handleKeyDown(e, activeTab.id)}
              spellCheck={false}
            />
            <div className="tp-url-actions">
              <button
                className="tp-url-btn"
                onClick={() => refresh(activeTab.id)}
                disabled={!loadedUrls[activeTab.id]}
                title="Refresh"
              >
                <RefreshCw size={14} className={loading[activeTab.id] ? 'tp-spin' : ''} />
              </button>
              {loadedUrls[activeTab.id] && (
                <a
                  className="tp-url-btn"
                  href={loadedUrls[activeTab.id]}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open in new tab"
                >
                  <ExternalLink size={14} />
                </a>
              )}
              <button
                className="tp-url-go"
                onClick={() => loadUrl(activeTab.id)}
              >
                Go
              </button>
            </div>
          </div>
        )}

        {/* ── Preview area ── */}
        <div className="tp-preview-area">
          {activeTab && (
            <div
              className={`tp-device-frame tp-device-${device}`}
              style={{
                width: currentDevice.width,
                height: currentDevice.height,
              }}
            >
              {/* Device chrome for mobile/tablet */}
              {device !== 'desktop' && (
                <div className="tp-device-chrome">
                  <div className="tp-chrome-bar">
                    <div className="tp-chrome-dot" />
                    <div className="tp-chrome-dot" />
                    <div className="tp-chrome-dot" />
                  </div>
                </div>
              )}

              <div className="tp-iframe-wrap">
                {loading[activeTab.id] && (
                  <div className="tp-loading">
                    <div className="tp-spinner" />
                    <span>Loading preview…</span>
                  </div>
                )}

                {!loadedUrls[activeTab.id] ? (
                  <div className="tp-empty">
                    <Globe size={40} className="tp-empty-icon" />
                    <p>Enter a URL above and press <kbd>Enter</kbd> or click <strong>Go</strong></p>
                    <button className="btn btn-primary" onClick={() => loadUrl(activeTab.id)}>
                      Load Preview
                    </button>
                  </div>
                ) : (
                  <iframe
                    key={loadedUrls[activeTab.id]}
                    ref={el => iframeRefs.current[activeTab.id] = el}
                    src={loadedUrls[activeTab.id]}
                    title={activeTab.label}
                    className="tp-iframe"
                    onLoad={() => onIframeLoad(activeTab.id)}
                    onError={() => onIframeLoad(activeTab.id)}
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          )}
        </div>

        {/* ── Footer note ── */}
        <div className="tp-footer-note">
          <span>⚠ Some sites block embedding via <code>X-Frame-Options</code>. Try sites like <strong>example.com</strong>, <strong>wikipedia.org</strong>, or your own projects.</span>
        </div>

      </div>
    </section>
  )
}
