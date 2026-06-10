import { useState, useEffect, useRef } from 'react'

const VALUE_ICONS = [
  <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>,
  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>,
  <><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></>,
]

const SERVICE_ICONS = [
  <><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></>,
  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>,
  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>,
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>,
  <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></>,
  <><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></>,
]

function AnimatedStat({ n, label }) {
  const ref = useRef(null)
  const [triggered, setTriggered] = useState(false)
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTriggered(true) }, { threshold: 0.4 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!triggered) return
    const suffix = n.replace(/[0-9]/g, '')
    const num = parseInt(n.replace(/\D/g, ''), 10)
    let start = 0
    const duration = 1400
    const step = Math.ceil(num / (duration / 16))
    const iv = setInterval(() => {
      start = Math.min(start + step, num)
      setDisplay(start + suffix)
      if (start >= num) clearInterval(iv)
    }, 16)
    return () => clearInterval(iv)
  }, [triggered, n])

  return (
    <div ref={ref} style={s.stat}>
      <span style={s.statN}>{display}</span>
      <span style={s.statL}>{label}</span>
    </div>
  )
}

export default function About({ t }) {
  const [activeYear, setActiveYear] = useState(null)
  const ab = t.about

  const splitH2 = (text) =>
    text.split('\n').map((line, i, arr) => (
      <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
    ))

  return (
    <div style={s.page}>

      {/* HERO */}
      <section style={s.hero}>
        <div style={s.heroOrb} />
        <div style={s.heroGrid} />
        <div style={s.heroInner}>
          <span style={s.eyebrow}>{ab.heroEyebrow}</span>
          <h1 style={s.heroH1}>
            {ab.heroH1}<br />
            <span style={s.heroAccent}>{ab.heroH1Accent}</span>
          </h1>
          <p style={s.heroSub}>{ab.heroSub}</p>
          <div style={s.heroBtns}>
            <a href="mailto:sales@techbee.ae" style={s.btnP}>{ab.heroBtn1}</a>
            <a href="https://techbee.ae" target="_blank" rel="noopener noreferrer" style={s.btnS}>{ab.heroBtn2}</a>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div style={s.statsBar}>
        <div style={s.statsRow}>
          {ab.stats.map((st, i) => (
            <div key={i} style={{ ...s.statWrap, borderRight: i < ab.stats.length - 1 ? '1px solid rgba(20,184,166,.18)' : 'none' }}>
              <AnimatedStat n={st.n} label={st.label} />
            </div>
          ))}
        </div>
      </div>

      {/* WHO WE ARE */}
      <section style={s.section}>
        <div style={s.inner}>
          <div style={s.twoCol}>
            <div style={s.twoLeft}>
              <span style={s.tag}>{ab.whoTag}</span>
              <h2 style={s.h2}>{splitH2(ab.whoH2)}</h2>
              <p style={s.body}>{ab.whoP1}</p>
              <p style={{ ...s.body, marginTop: 16 }}>{ab.whoP2}</p>
              <div style={s.badges}>
                {ab.whoBadges.map((b, i) => <span key={i} style={s.badge}>{b}</span>)}
              </div>
            </div>
            <div style={s.twoRight}>
              <div style={s.infoCard}>
                {ab.infoRows.map((row, i) => (
                  <div key={i}>
                    <div style={s.infoRow}>
                      <span style={s.infoLabel}>{row.label}</span>
                      {row.href
                        ? <a href={row.href} target={row.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={s.infoLink}>{row.val}</a>
                        : <span style={s.infoVal}>{row.val}</span>
                      }
                    </div>
                    {i < ab.infoRows.length - 1 && <div style={s.infoDivider} />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ ...s.section, background: '#f8fffe' }}>
        <div style={s.inner}>
          <span style={s.tag}>{ab.servTag}</span>
          <h2 style={s.h2}>{splitH2(ab.servH2)}</h2>
          <p style={{ ...s.body, maxWidth: 560, marginBottom: 0 }}>{ab.servP}</p>
          <div style={s.servGrid}>
            {ab.services.map((sv, i) => (
              <div key={i} style={s.servCard} className="about-card">
                <div style={s.servIco}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
                    {SERVICE_ICONS[i]}
                  </svg>
                </div>
                <div style={s.servTitle}>{sv.label}</div>
                <div style={s.servDesc}>{sv.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={s.section}>
        <div style={s.inner}>
          <span style={s.tag}>{ab.valTag}</span>
          <h2 style={s.h2}>{splitH2(ab.valH2)}</h2>
          <div style={s.valGrid}>
            {ab.values.map((v, i) => (
              <div key={i} style={s.valCard} className="about-card">
                <div style={s.valIco}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}>
                    {VALUE_ICONS[i]}
                  </svg>
                </div>
                <div>
                  <div style={s.valTitle}>{v.title}</div>
                  <div style={s.valDesc}>{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ ...s.section, background: '#f8fffe' }}>
        <div style={s.inner}>
          <span style={s.tag}>{ab.tlTag}</span>
          <h2 style={s.h2}>{splitH2(ab.tlH2)}</h2>
          <div style={s.timeline}>
            {ab.timeline.map((item, i) => (
              <div
                key={i}
                style={{ ...s.tlItem, ...(i % 2 === 0 ? s.tlLeft : s.tlRight) }}
                onClick={() => setActiveYear(activeYear === i ? null : i)}
                className="tl-item"
              >
                <div style={s.tlDot} />
                <div style={{ ...s.tlCard, ...(activeYear === i ? s.tlCardActive : {}) }}>
                  <div style={s.tlYear}>{item.year}</div>
                  <div style={s.tlTitle}>{item.title}</div>
                  {activeYear === i && <div style={s.tlDesc}>{item.desc}</div>}
                </div>
              </div>
            ))}
            <div style={s.tlLine} />
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      {/* <section style={s.section}>
        <div style={s.inner}>
          <span style={s.tag}>{ab.partTag}</span>
          <h2 style={s.h2}>{splitH2(ab.partH2)}</h2>
          <p style={{ ...s.body, maxWidth: 520, marginBottom: 0 }}>{ab.partP}</p>
          <div style={s.partnerGrid}>
            {ab.partners.map((p, i) => (
              <div key={i} style={s.partnerChip} className="about-card">
                <span style={s.partnerDot} />
                {p}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* TEAM */}
      {/* <section style={{ ...s.section, background: '#f8fffe' }}>
        <div style={s.inner}>
          <span style={s.tag}>{ab.teamTag}</span>
          <h2 style={s.h2}>{splitH2(ab.teamH2)}</h2>
          <div style={s.teamGrid}>
            {ab.team.map((m, i) => (
              <div key={i} style={s.teamCard} className="about-card">
                <div style={s.teamAvatar}>
                  {m.name.split(' ').slice(0, 2).map(w => w[0]).join('')}
                </div>
                <div style={s.teamName}>{m.name}</div>
                <div style={s.teamRole}>{m.role}</div>
                <div style={s.teamDesc}>{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section style={s.cta}>
        <div style={s.ctaOrb} />
        <div style={s.ctaGrid} />
        <div style={s.ctaInner}>
          <span style={s.tag}>{ab.ctaTag}</span>
          <h2 style={s.ctaH2}>{splitH2(ab.ctaH2)}</h2>
          <p style={s.ctaSub}>{ab.ctaSub}</p>
          <div style={s.ctaBtns}>
            <a href="mailto:sales@techbee.ae" style={s.btnP}>{ab.ctaBtn1}</a>
            <a href="https://techbee.ae" target="_blank" rel="noopener noreferrer" style={s.btnS}>{ab.ctaBtn2}</a>
          </div>
          <p style={s.ctaNote}>
            {ab.ctaNote} · <a href="mailto:sales@techbee.ae" style={{ color: '#14b8a6', textDecoration: 'none' }}>sales@techbee.ae</a> · <a href="mailto:info@techbee.ae" style={{ color: '#14b8a6', textDecoration: 'none' }}>info@techbee.ae</a>
          </p>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@700;800&family=Inter:wght@400;500;600;700&display=swap');
        .about-card { transition: all .25s ease; }
        .about-card:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(20,184,166,.14) !important; border-color: #14b8a6 !important; }
        .tl-item { cursor: pointer; }
      `}</style>
    </div>
  )
}

const s = {
  page: { fontFamily: "'Inter', sans-serif", color: '#0f172a', background: '#fff', overflowX: 'hidden' },

  hero: { padding: '140px 5% 100px', position: 'relative', overflow: 'hidden', background: '#fff', textAlign: 'center' },
  heroOrb: { position: 'absolute', width: 800, height: 700, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(20,184,166,0.07) 0%, transparent 70%)', top: -200, left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none' },
  heroGrid: { position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(20,184,166,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(20,184,166,0.03) 1px,transparent 1px)', backgroundSize: '64px 64px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%,black 30%,transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%,black 30%,transparent 100%)' },
  heroInner: { position: 'relative', zIndex: 1, maxWidth: 780, margin: '0 auto' },
  eyebrow: { display: 'inline-block', fontSize: 11.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2.5, color: '#14b8a6', marginBottom: 20, background: 'rgba(20,184,166,0.08)', border: '1px solid rgba(20,184,166,0.25)', borderRadius: 40, padding: '5px 16px' },
  heroH1: { fontFamily: "'Sora', sans-serif", fontSize: 'clamp(36px,5vw,64px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: -2, color: '#0f172a', marginBottom: 24 },
  heroAccent: { color: '#14b8a6' },
  heroSub: { fontSize: 'clamp(15px,1.8vw,18px)', color: '#1e4d47', lineHeight: 1.78, maxWidth: 620, margin: '0 auto 40px' },
  heroBtns: { display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' },

  btnP: { background: '#14b8a6', color: '#fff', padding: '13px 28px', borderRadius: 8, fontSize: 15, fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'all .2s', boxShadow: '0 4px 20px rgba(20,184,166,.25)' },
  btnS: { background: 'transparent', color: '#0f172a', padding: '13px 28px', borderRadius: 8, fontSize: 15, fontWeight: 600, textDecoration: 'none', border: '1.5px solid rgba(20,184,166,.4)', display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'all .2s' },

  statsBar: { borderTop: '1px solid rgba(20,184,166,.18)', borderBottom: '1px solid rgba(20,184,166,.18)', background: '#f0fdfb' },
  statsRow: { maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' },
  statWrap: { padding: '40px 24px', textAlign: 'center' },
  stat: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 },
  statN: { fontFamily: "'Sora', sans-serif", fontSize: 38, fontWeight: 700, color: '#0f172a', letterSpacing: -1.5, lineHeight: 1 },
  statL: { fontSize: 13, color: '#64748b', fontWeight: 500 },

  section: { padding: '96px 5%', background: '#fff' },
  inner: { maxWidth: 1180, margin: '0 auto' },
  tag: { display: 'inline-block', fontSize: 11.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: '#14b8a6', marginBottom: 14 },
  h2: { fontFamily: "'Sora', sans-serif", fontSize: 'clamp(28px,3.6vw,46px)', fontWeight: 700, color: '#0f172a', lineHeight: 1.12, letterSpacing: -1.2, marginBottom: 20 },
  body: { fontSize: 16, color: '#1e4d47', lineHeight: 1.8 },

  twoCol: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'start' },
  twoLeft: {}, twoRight: {},
  badges: { display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 28 },
  badge: { background: 'rgba(20,184,166,.08)', border: '1px solid rgba(20,184,166,.25)', borderRadius: 40, padding: '6px 14px', fontSize: 12.5, fontWeight: 600, color: '#0d9488' },

  infoCard: { background: '#fff', border: '1.5px solid rgba(20,184,166,.2)', borderRadius: 16, padding: '8px 0', boxShadow: '0 4px 24px rgba(20,184,166,.08)' },
  infoRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, padding: '14px 24px' },
  infoLabel: { fontSize: 12, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: .8, flexShrink: 0 },
  infoVal: { fontSize: 13.5, color: '#0f172a', fontWeight: 500, textAlign: 'right' },
  infoLink: { fontSize: 13.5, color: '#14b8a6', fontWeight: 600, textDecoration: 'none', textAlign: 'right' },
  infoDivider: { height: 1, background: 'rgba(20,184,166,.1)', margin: '0 24px' },

  servGrid: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginTop: 52 },
  servCard: { background: '#fff', border: '1.5px solid rgba(20,184,166,.15)', borderRadius: 14, padding: '32px 26px', boxShadow: '0 2px 8px rgba(0,0,0,.04)' },
  servIco: { width: 44, height: 44, borderRadius: 10, background: 'rgba(20,184,166,.08)', border: '1px solid rgba(20,184,166,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 },
  servTitle: { fontFamily: "'Sora', sans-serif", fontSize: 15.5, fontWeight: 600, color: '#0f172a', marginBottom: 8, letterSpacing: -.2 },
  servDesc: { fontSize: 13.5, color: '#1e4d47', lineHeight: 1.7 },

  valGrid: { display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16, marginTop: 52 },
  valCard: { background: '#fff', border: '1.5px solid rgba(20,184,166,.15)', borderRadius: 14, padding: '32px 28px', display: 'flex', gap: 20, alignItems: 'flex-start', boxShadow: '0 2px 8px rgba(0,0,0,.04)' },
  valIco: { width: 46, height: 46, minWidth: 46, borderRadius: 11, background: 'rgba(20,184,166,.08)', border: '1px solid rgba(20,184,166,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  valTitle: { fontFamily: "'Sora', sans-serif", fontSize: 16, fontWeight: 600, color: '#0f172a', marginBottom: 8 },
  valDesc: { fontSize: 14, color: '#1e4d47', lineHeight: 1.7 },

  timeline: { position: 'relative', marginTop: 64, maxWidth: 900, marginLeft: 'auto', marginRight: 'auto' },
  tlLine: { position: 'absolute', top: 0, bottom: 0, left: '50%', width: 2, background: 'linear-gradient(to bottom, transparent, rgba(20,184,166,.4) 10%, rgba(20,184,166,.4) 90%, transparent)', transform: 'translateX(-50%)', zIndex: 0 },
  tlItem: { display: 'flex', position: 'relative', zIndex: 1, marginBottom: 32 },
  tlLeft: { justifyContent: 'flex-end', paddingRight: 'calc(50% + 28px)' },
  tlRight: { justifyContent: 'flex-start', paddingLeft: 'calc(50% + 28px)' },
  tlDot: { position: 'absolute', left: '50%', top: 18, transform: 'translateX(-50%)', width: 14, height: 14, borderRadius: '50%', background: '#14b8a6', border: '3px solid #fff', boxShadow: '0 0 0 3px rgba(20,184,166,.3)', zIndex: 2 },
  tlCard: { background: '#fff', border: '1.5px solid rgba(20,184,166,.2)', borderRadius: 12, padding: '16px 20px', maxWidth: 340, boxShadow: '0 2px 12px rgba(0,0,0,.05)', transition: 'all .2s' },
  tlCardActive: { borderColor: '#14b8a6', boxShadow: '0 6px 24px rgba(20,184,166,.15)' },
  tlYear: { fontSize: 12, fontWeight: 700, color: '#14b8a6', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 },
  tlTitle: { fontFamily: "'Sora', sans-serif", fontSize: 14.5, fontWeight: 600, color: '#0f172a' },
  tlDesc: { fontSize: 13, color: '#1e4d47', lineHeight: 1.65, marginTop: 8 },

  partnerGrid: { display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 52 },
  partnerChip: { background: '#fff', border: '1.5px solid rgba(20,184,166,.2)', borderRadius: 10, padding: '12px 22px', fontSize: 14, fontWeight: 600, color: '#0f172a', display: 'flex', alignItems: 'center', gap: 8, boxShadow: '0 1px 4px rgba(0,0,0,.04)' },
  partnerDot: { width: 8, height: 8, borderRadius: '50%', background: '#14b8a6', flexShrink: 0 },

  teamGrid: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginTop: 52 },
  teamCard: { background: '#fff', border: '1.5px solid rgba(20,184,166,.15)', borderRadius: 16, padding: '36px 28px', textAlign: 'center', boxShadow: '0 2px 12px rgba(0,0,0,.05)' },
  teamAvatar: { width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg, #14b8a6, #0d9488)', color: '#fff', fontFamily: "'Sora', sans-serif", fontSize: 22, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' },
  teamName: { fontFamily: "'Sora', sans-serif", fontSize: 16, fontWeight: 600, color: '#0f172a', marginBottom: 4 },
  teamRole: { fontSize: 12.5, fontWeight: 700, color: '#14b8a6', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 },
  teamDesc: { fontSize: 13.5, color: '#1e4d47', lineHeight: 1.68 },

  cta: { padding: '120px 5%', textAlign: 'center', position: 'relative', overflow: 'hidden', background: '#f0fdfb' },
  ctaOrb: { position: 'absolute', width: 700, height: 500, borderRadius: '50%', background: 'radial-gradient(ellipse,rgba(20,184,166,.1) 0%,transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' },
  ctaGrid: { position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(20,184,166,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(20,184,166,.05) 1px,transparent 1px)', backgroundSize: '64px 64px' },
  ctaInner: { position: 'relative', zIndex: 1, maxWidth: 640, margin: '0 auto' },
  ctaH2: { fontFamily: "'Sora', sans-serif", fontSize: 'clamp(30px,4vw,50px)', fontWeight: 700, color: '#0f172a', letterSpacing: -1.5, lineHeight: 1.1, marginBottom: 20 },
  ctaSub: { fontSize: 16.5, color: '#1e4d47', lineHeight: 1.75, marginBottom: 44 },
  ctaBtns: { display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 },
  ctaNote: { fontSize: 13, color: '#64748b' },
}
