import { useState } from 'react'
import logo from "./Images/webishopi_logo.png";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how' },
    { label: 'Flows', href: '#flows' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@700&family=Inter:wght@600;700&display=swap');

        .nav-wrap {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          z-index: 9999;
          background: linear-gradient(to right, #ffffff 0%, #5eead4 25%, #14b8a6 60%, #0d9488 100%);
          box-shadow: 0 2px 16px rgba(13,148,136,0.2);
        }
        .nav-inner {
          max-width: 100%;
          margin: 0 auto;
          padding: 0 25px;
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* LOGO */
        .nav-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
        }
        .nav-logo img {
          height: 65px;
          width: auto;
          object-fit: contain;
        }

        /* RIGHT SIDE WRAPPER */
        .nav-right-all {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        /* DESKTOP LINKS */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 8px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-links a {
          color: #fff;
          text-decoration: none;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 8px 12px;
          border-radius: 8px;
          transition: background 0.2s;
          white-space: nowrap;
        }
        .nav-links a:hover {
          background: rgba(255,255,255,0.2);
        }

        /* TALK TO SALES */
        .nav-talk {
          color: #fff;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          padding: 8px 12px;
          border-radius: 8px;
          white-space: nowrap;
          transition: background 0.2s;
        }
        .nav-talk:hover {
          background: rgba(255,255,255,0.15);
        }

        /* GET A DEMO BUTTON */
        .nav-demo {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #0d9488;
          color: #fff;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          padding: 10px 22px;
          border-radius: 8px;
          white-space: nowrap;
          border: none;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          box-shadow: 0 2px 10px rgb(5, 45, 42);
        }
        .nav-demo:hover {
          background: #0f766e;
          transform: translateY(-1px);
        }

        /* RIGHT CLUSTER */
        .nav-right {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        /* MOBILE HAMBURGER */
        .nav-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 4px;
        }
        .nav-hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.25s;
        }

        /* MOBILE MENU */
        .nav-mobile {
          display: none;
          flex-direction: column;
          background: #0d9488;
          padding: 12px 5% 16px;
          gap: 2px;
          border-top: 1px solid rgba(255,255,255,0.2);
        }
        .nav-mobile.open { display: flex; }
        .nav-mobile a {
          color: #fff;
          text-decoration: none;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 10px 12px;
          border-radius: 8px;
          transition: background 0.2s;
        }
        .nav-mobile a:hover { background: rgba(255,255,255,0.15); }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .nav-talk { display: none; }
          .nav-demo { display: none; }
          .nav-hamburger { display: flex; }
        }
        @media (max-width: 480px) {
          .logo-text { font-size: 19px; }
        }
      `}</style>

      <header>
        <nav className="nav-wrap">
          <div className="nav-inner">

            {/* LOGO */}
            <a href="#" className="nav-logo">
              <img src={logo} alt="Webishopi" />
            </a>

            {/* ALL RIGHT SIDE: Links + Talk to sales + Get a Demo + Hamburger */}
            <div className="nav-right-all">

              {/* DESKTOP LINKS */}
              <ul className="nav-links">
                {links.map(l => (
                  <li key={l.label}><a href={l.href}>{l.label}</a></li>
                ))}
              </ul>

              {/* RIGHT: Talk to sales + Get a Demo + Mobile toggle */}
              <div className="nav-right">
                <a href="#contact" className="nav-talk">TALK TO SALES</a>
                <a href="#demo" className="nav-demo">Get a Demo →</a>
                <button
                  className="nav-hamburger"
                  onClick={() => setMenuOpen(o => !o)}
                  aria-label="Toggle menu"
                >
                  <span style={menuOpen ? {transform:'rotate(45deg) translate(5px,5px)'} : {}}/>
                  <span style={menuOpen ? {opacity:0} : {}}/>
                  <span style={menuOpen ? {transform:'rotate(-45deg) translate(5px,-5px)'} : {}}/>
                </button>
              </div>

            </div>

          </div>
        </nav>

        {/* MOBILE DROPDOWN */}
        <div className={`nav-mobile ${menuOpen ? 'open' : ''}`}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}>TALK TO SALES</a>
          <a href="#demo" onClick={() => setMenuOpen(false)}>Get a Demo →</a>
        </div>
      </header>
    </>
  )
}
