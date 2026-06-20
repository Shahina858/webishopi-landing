import { useState, useRef, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { LANGUAGES } from '../translations'
import logo from "./Images/webishopi_logo.png";

export default function Navbar({ t, selectedLang, onLangChange }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()
  const n = t.nav
  const isRTL = selectedLang.dir === 'rtl'
  const isHome = location.pathname === '/'

  // Navigate to a hash section on the home page from any route in one click
  const goHomeHash = (hash) => (e) => {
    e.preventDefault()
    if (isHome) {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  // Anchor links only work on the home page; on /about they go home first
  const anchorHref = (hash) => isHome ? hash : `/${hash}`

  const links = [
    { key: 'features',   href: anchorHref('#features') },
    { key: 'howItWorks', href: anchorHref('#how') },
    { key: 'flows',      href: anchorHref('#flows') },
    { key: 'pricing',    href: anchorHref('#pricing') },
    { key: 'faq',        href: anchorHref('#faq') },
  ]

  useEffect(() => {
    function handleClickOutside(e) {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@700&family=Inter:wght@400;600;700&display=swap');
        .nav-wrap{position:fixed;top:0;left:0;right:0;width:100%;z-index:9999;background:linear-gradient(to right,#ffffff 0%,#5eead4 25%,#14b8a6 60%,#0d9488 100%);box-shadow:0 2px 16px rgba(13,148,136,0.2);}
        .nav-inner{max-width:100%;margin:0 auto;padding:0 25px;height:90px;display:flex;align-items:center;justify-content:space-between;}
        .nav-logo{display:flex;align-items:center;text-decoration:none;}
        .nav-logo img{height:65px;width:auto;object-fit:contain;}
        .nav-right-all{display:flex;align-items:center;gap:4px;}
        .nav-links{display:flex;align-items:center;gap:8px;list-style:none;margin:0;padding:0;}
        .nav-links a{color:#fff;text-decoration:none;font-family:'Inter',sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;text-transform:uppercase;padding:8px 12px;border-radius:8px;transition:background 0.2s;white-space:nowrap;}
        .nav-links a:hover{background:rgba(255,255,255,0.2);}
        .nav-links a.active-route{background:rgba(255,255,255,0.25);}
        .nav-about{color:#fff;text-decoration:none;font-family:'Inter',sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;text-transform:uppercase;padding:8px 12px;border-radius:8px;transition:background 0.2s;white-space:nowrap;}
        .nav-about:hover{background:rgba(255,255,255,0.2);}
        .nav-about.active-route{background:rgba(255,255,255,0.25);}
        .nav-talk{color:#fff;font-family:'Inter',sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;text-transform:uppercase;text-decoration:none;padding:8px 12px;border-radius:8px;white-space:nowrap;transition:background 0.2s;}
        .nav-talk:hover{background:rgba(255,255,255,0.15);}
        .nav-demo{display:inline-flex;align-items:center;gap:6px;background:#0d9488;color:#fff;font-family:'Inter',sans-serif;font-size:14px;font-weight:700;text-decoration:none;padding:10px 22px;border-radius:8px;white-space:nowrap;border:none;cursor:pointer;transition:background 0.2s,transform 0.15s;box-shadow:0 2px 10px rgb(5,45,42);}
        .nav-demo:hover{background:#0f766e;transform:translateY(-1px);}
        .nav-right{display:flex;align-items:center;gap:8px;}
        .lang-switcher{position:relative;}
        .lang-trigger{display:inline-flex;align-items:center;gap:5px;background:rgba(255,255,255,0.15);border:1.5px solid rgba(255,255,255,0.5);color:#fff;font-family:'Inter',sans-serif;font-size:13px;font-weight:700;padding:7px 12px;border-radius:8px;cursor:pointer;white-space:nowrap;transition:background 0.2s;outline:none;}
        .lang-trigger:hover{background:rgba(255,255,255,0.28);}
        .lang-chevron{transition:transform 0.2s;}
        .lang-chevron.open{transform:rotate(180deg);}
        .lang-dropdown{position:absolute;top:calc(100% + 10px);right:0;background:#fff;border-radius:14px;box-shadow:0 8px 32px rgba(13,148,136,0.18),0 2px 8px rgba(0,0,0,0.10);padding:10px 8px;min-width:180px;z-index:10000;animation:langFadeIn 0.18s ease;direction:ltr;}
        @keyframes langFadeIn{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}
        .lang-dropdown-header{display:flex;align-items:center;justify-content:space-between;padding:2px 10px 10px;border-bottom:1px solid #f0fdfa;margin-bottom:6px;}
        .lang-dropdown-title{font-family:'Inter',sans-serif;font-size:11px;font-weight:700;color:#9ca3af;letter-spacing:1px;text-transform:uppercase;}
        .lang-close{background:none;border:none;cursor:pointer;color:#9ca3af;font-size:18px;line-height:1;padding:2px 5px;border-radius:4px;transition:background 0.15s;}
        .lang-close:hover{background:#f3f4f6;color:#374151;}
        .lang-option{display:flex;align-items:center;gap:10px;width:100%;background:none;border:none;padding:9px 10px;border-radius:8px;cursor:pointer;font-family:'Inter',sans-serif;font-size:14px;font-weight:500;color:#1e293b;text-align:left;transition:background 0.15s;white-space:nowrap;}
        .lang-option:hover{background:#f0fdfa;color:#0d9488;}
        .lang-option.active{color:#0d9488;font-weight:700;background:#f0fdfa;}
        .lang-radio{width:18px;height:18px;border-radius:50%;border:2px solid #d1d5db;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
        .lang-option.active .lang-radio{border-color:#0d9488;background:#0d9488;}
        .lang-option.active .lang-radio::after{content:'';display:block;width:7px;height:7px;border-radius:50%;background:#fff;}
        .nav-hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;background:none;border:none;padding:4px;}
        .nav-hamburger span{display:block;width:22px;height:2px;background:#fff;border-radius:2px;transition:all 0.25s;}
        .nav-mobile{display:none;flex-direction:column;background:#0d9488;padding:12px 5% 16px;gap:2px;border-top:1px solid rgba(255,255,255,0.2);}
        .nav-mobile.open{display:flex;}
        .nav-mobile a{color:#fff;text-decoration:none;font-family:'Inter',sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;text-transform:uppercase;padding:10px 12px;border-radius:8px;transition:background 0.2s;}
        .nav-mobile a:hover{background:rgba(255,255,255,0.15);}
        .nav-mobile-lang{display:flex;align-items:center;gap:8px;padding:10px 12px;color:#fff;font-family:'Inter',sans-serif;font-size:13px;font-weight:700;}
        .nav-mobile-lang select{background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.4);color:#fff;font-family:'Inter',sans-serif;font-size:13px;font-weight:600;border-radius:6px;padding:4px 8px;cursor:pointer;outline:none;flex:1;}
        .nav-mobile-lang select option{background:#0d9488;color:#fff;}
        @media (max-width:768px){.nav-links{display:none}.nav-talk{display:none}.nav-demo{display:none}.lang-switcher{display:none}.nav-hamburger{display:flex}}
      `}</style>

      <header>
        <nav className="nav-wrap">
          <div className="nav-inner">
            <Link to="/" className="nav-logo"><img src={logo} alt="Webishopi" /></Link>
            <div className="nav-right-all">
              <ul className="nav-links">
                {links.map(l => (
                  <li key={l.key}>
                    <a href={l.href}>{n[l.key]}</a>
                  </li>
                ))}
                {/* About uses React Router Link for client-side navigation */}
                <li>
                  <Link
                    to="/about"
                    className={`nav-about ${location.pathname === '/about' ? 'active-route' : ''}`}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {n.about}
                  </Link>
                </li>
              </ul>
              <div className="nav-right">
                <a href="/contact" className="nav-talk">{n.talkToSales}</a>
                <div className="lang-switcher" ref={langRef}>
                  <button className="lang-trigger" onClick={() => setLangOpen(o => !o)} aria-label="Switch language">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                    {selectedLang.code.toUpperCase()}
                    <svg className={`lang-chevron ${langOpen ? 'open' : ''}`} width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </button>
                  {langOpen && (
                    <div className="lang-dropdown">
                      <div className="lang-dropdown-header">
                        <span className="lang-dropdown-title">Language</span>
                        <button className="lang-close" onClick={() => setLangOpen(false)}>×</button>
                      </div>
                      {LANGUAGES.map(lang => (
                        <button key={lang.code} className={`lang-option ${selectedLang.code === lang.code ? 'active' : ''}`} onClick={() => { onLangChange(lang); setLangOpen(false) }}>
                          <span className="lang-radio" />{lang.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <a href="/contact" className="nav-demo">{n.getDemo}</a>
                <button className="nav-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
                  <span style={menuOpen ? {transform:'rotate(45deg) translate(5px,5px)'} : {}}/>
                  <span style={menuOpen ? {opacity:0} : {}}/>
                  <span style={menuOpen ? {transform:'rotate(-45deg) translate(5px,-5px)'} : {}}/>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        <div className={`nav-mobile ${menuOpen ? 'open' : ''}`}>
          {links.map(l => (
            <a key={l.key} href={l.href} onClick={() => setMenuOpen(false)}>{n[l.key]}</a>
          ))}
          <Link to="/about" onClick={() => { setMenuOpen(false); window.scrollTo(0, 0) }} style={{color:'#fff',textDecoration:'none',fontFamily:"'Inter',sans-serif",fontSize:'13px',fontWeight:700,letterSpacing:'1px',textTransform:'uppercase',padding:'10px 12px',borderRadius:'8px'}}>
            {n.about}
          </Link>
          <a href="/contact" onClick={() => setMenuOpen(false)}>{n.talkToSales}</a>
          <a href="/contact" onClick={() => setMenuOpen(false)}>{n.getDemo}</a>
          <div className="nav-mobile-lang">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            <select value={selectedLang.code} onChange={e => { const lang = LANGUAGES.find(l => l.code === e.target.value); if(lang) onLangChange(lang) }}>
              {LANGUAGES.map(lang => <option key={lang.code} value={lang.code}>{lang.label}</option>)}
            </select>
          </div>
        </div>
      </header>
    </>
  )
}
