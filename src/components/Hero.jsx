import { useState, useEffect, useRef } from 'react'
import HeroBgAnimation from './HeroBgAnimation'

const QUOTES = [
  { text: "Instant PDF quotations, zero manual work.", dir: 'left',  color: '#14b8a6' },
  { text: "BOQ uploaded. 47 items matched in 38s.",   dir: 'right', color: '#0d9488' },
  { text: "Sales exec approved. Quote sent. ✓",       dir: 'left',  color: '#14b8a6' },
  { text: "New customer whitelisted automatically.",  dir: 'right', color: '#0d9488' },
  { text: "AI draft ready — awaiting your approval.", dir: 'left',  color: '#14b8a6' },
  { text: "RFQ received. Team notified instantly.",   dir: 'right', color: '#0d9488' },
]

function FloatingQuotes() {
  const [visible, setVisible] = useState([])
  const counterRef = useRef(0)

  useEffect(() => {
    let i = 0
    const spawn = () => {
      const q = QUOTES[i % QUOTES.length]
      const id = counterRef.current++
      const top = 12 + Math.random() * 76

      setVisible(prev => [...prev, { ...q, id, top }])
      setTimeout(() => {
        setVisible(prev => prev.filter(x => x.id !== id))
      }, 4200)

      i++
      const next = 1400 + Math.random() * 900
      setTimeout(spawn, next)
    }
    const t = setTimeout(spawn, 800)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      {visible.map(q => (
        <div
          key={q.id}
          style={{
            position: 'absolute',
            top: `${q.top}%`,
            left: q.dir === 'left' ? 0 : 'auto',
            right: q.dir === 'right' ? 0 : 'auto',
            zIndex: 2,
            pointerEvents: 'none',
            animation: q.dir === 'left'
              ? 'slideInLeft 0.55s cubic-bezier(.22,1,.36,1) forwards, fadeOutSide 0.6s 3.5s ease forwards'
              : 'slideInRight 0.55s cubic-bezier(.22,1,.36,1) forwards, fadeOutSide 0.6s 3.5s ease forwards',
          }}
        >
          <div style={{
            background: 'rgba(255,255,255,0.95)',
            border: `1.5px solid ${q.color}33`,
            borderLeft: q.dir === 'left' ? `3px solid ${q.color}` : undefined,
            borderRight: q.dir === 'right' ? `3px solid ${q.color}` : undefined,
            borderRadius: q.dir === 'left' ? '0 10px 10px 0' : '10px 0 0 10px',
            padding: '10px 16px',
            fontSize: 12.5,
            fontWeight: 600,
            color: '#0f172a',
            boxShadow: `0 4px 20px rgba(20,184,166,0.12)`,
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            maxWidth: 260,
            whiteSpace: 'nowrap',
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: q.color, flexShrink: 0, display: 'inline-block' }} />
            {q.text}
          </div>
        </div>
      ))}
    </>
  )
}

function TypewriterText({ text, delay = 0 }) {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  useEffect(() => {
    if (!started) return
    let i = 0
    setDisplayed('')
    const iv = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) clearInterval(iv)
    }, 38)
    return () => clearInterval(iv)
  }, [started, text])

  return <>{displayed}<span style={{ opacity: started && displayed.length < text.length ? 1 : 0, color: '#14b8a6' }}>|</span></>
}

export default function Hero() {
  const [btnPhover, setBtnPhover] = useState(false)
  const [btnShover, setBtnShover] = useState(false)
  const [kpiHover, setKpiHover] = useState(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setTimeout(() => setMounted(true), 100) }, [])

  return (
    <section style={s.hero}>
      <HeroBgAnimation />
      <div style={s.orb1} /><div style={s.orb2} /><div style={s.orb3} />
      <div style={s.grid} />

      {/* FLOATING QUOTES FROM SIDES */}
      <FloatingQuotes />

      <div style={s.inner}>

        {/* BADGE */}
        <div style={{...s.tag, ...(mounted ? s.tagIn : s.tagOut)}}>
          <div style={s.pulseWrap}>
            <div style={s.pulseRing} />
            <div style={s.pulseDot} />
          </div>
          AI-Powered Procurement &amp; Quotation Platform
        </div>

        {/* HEADLINE — line 1 slides from left, line 2 from right */}
        <h1 style={s.h1}>
          <span style={{display:'block', ...(mounted ? s.slideL : s.slideOut)}}>
            Stop quoting manually.
          </span>
          <span style={{display:'block', color:'#14b8a6', ...(mounted ? s.slideR : s.slideOut)}}>
            Every quote. Automated.
          </span>
        </h1>

        {/* SUBTEXT */}
        <p style={{...s.sub, ...(mounted ? s.fadeIn3 : s.fadeOut)}}>
          Webishopi gives any product-based business an intelligent procurement portal — instant PDF quotations, AI-driven BOQ matching, and autonomous email handling, out of the box.
        </p>

        {/* BUTTONS */}
        <div style={{...s.btns, ...(mounted ? s.fadeIn4 : s.fadeOut)}}>
          <a
            href="https://webishopi.com"
            style={btnPhover ? {...s.btnP, ...s.btnPh} : s.btnP}
            onMouseEnter={() => setBtnPhover(true)}
            onMouseLeave={() => setBtnPhover(false)}
          >
            Start Free Trial
            <span style={{ display:'inline-block', transform: btnPhover ? 'translateX(5px)' : 'translateX(0)', transition:'transform .25s ease' }}>→</span>
          </a>
          <a
            href="#how"
            style={btnShover ? {...s.btnS, ...s.btnSh} : s.btnS}
            onMouseEnter={() => setBtnShover(true)}
            onMouseLeave={() => setBtnShover(false)}
          >
            See How It Works
          </a>
        </div>

        {/* KPI BAR */}
        <div style={{...s.kpiBar, ...(mounted ? s.fadeIn5 : s.fadeOut)}}>
          {[
            ['<60s', 'Quote turnaround'],
            ['9',    'Autonomous flows'],
            ['100%', 'White-label ready'],
            ['0',    'Manual quote steps'],
          ].map(([n, l], i) => (
            <div
              key={l}
              style={{
                ...s.kpi,
                ...(i === 3 ? {borderRight:'none'} : {}),
                ...(kpiHover === i ? s.kpiH : {}),
              }}
              onMouseEnter={() => setKpiHover(i)}
              onMouseLeave={() => setKpiHover(null)}
            >
              <span style={s.kn}>
                {n === '<60s' && <><span style={s.kdim}>&lt;</span><em style={s.em}>60s</em></>}
                {n === '9'   && <span style={kpiHover===i ? s.em : {color:'#14b8a6'}}>{n}</span>}
                {n === '100%'&& <><em style={s.em}>100</em><span style={s.kdim}>%</span></>}
                {n === '0'   && <em style={s.em}>{n}</em>}
              </span>
              <span style={{ ...s.kl, ...(kpiHover===i ? {color:'#14b8a6'} : {}), transition:'color .2s' }}>{l}</span>
            </div>
          ))}
        </div>

        {/* TYPEWRITER TICKER */}
        <div style={{...s.ticker, ...(mounted ? s.fadeIn5 : s.fadeOut)}}>
          <span style={s.tickerDot} />
          <span style={s.tickerTxt}>
            <TypewriterText text="Trusted by product-based businesses across the GCC — IT resellers, medical, industrial, furniture & more." delay={2200} />
          </span>
        </div>

        {/* SCROLL HINT */}
        <div style={{...s.scroll, ...(mounted ? s.fadeIn5 : s.fadeOut)}}>
          <div style={s.scrollDot} />
          <span style={s.scrollTxt}>Scroll to explore</span>
        </div>

      </div>

      <style>{`
        @keyframes pulseRing   { 0%{transform:scale(1);opacity:.6} 100%{transform:scale(2.4);opacity:0} }
        @keyframes pulseDot    { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.45;transform:scale(.75)} }
        @keyframes scrollBounce{ 0%,100%{transform:translateY(0)} 50%{transform:translateY(7px)} }
        @keyframes slideInLeft {
          from { opacity:0; transform:translateX(-120%); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity:0; transform:translateX(120%); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes fadeOutSide { from{opacity:1} to{opacity:0} }
      `}</style>
    </section>
  )
}

const transition = (delay='0s') => ({
  transition: `opacity .7s ${delay} ease, transform .7s ${delay} cubic-bezier(.22,1,.36,1)`,
})

const s = {
  hero:{minHeight:'100svh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'110px 5% 80px',position:'relative',overflow:'hidden',background:'#fff'},
  orb1:{position:'absolute',width:900,height:900,borderRadius:'50%',background:'radial-gradient(circle,rgba(20,184,166,0.04) 0%,transparent 62%)',top:-280,left:'50%',transform:'translateX(-50%)',pointerEvents:'none'},
  orb2:{position:'absolute',width:500,height:500,borderRadius:'50%',background:'radial-gradient(circle,rgba(20,184,166,0.03) 0%,transparent 70%)',bottom:-60,right:-80,pointerEvents:'none'},
  orb3:{position:'absolute',width:300,height:300,borderRadius:'50%',background:'radial-gradient(circle,rgba(20,184,166,0.02) 0%,transparent 70%)',bottom:80,left:-50,pointerEvents:'none'},
  grid:{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(20,184,166,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(20,184,166,0.03) 1px,transparent 1px)',backgroundSize:'68px 68px',maskImage:'radial-gradient(ellipse 75% 65% at 50% 38%,black 20%,transparent 100%)',WebkitMaskImage:'radial-gradient(ellipse 75% 65% at 50% 38%,black 20%,transparent 100%)'},
  inner:{position:'relative',zIndex:3,display:'flex',flexDirection:'column',alignItems:'center',maxWidth:960,margin:'0 auto',width:'100%'},

  /* BADGE */
  tag:{display:'inline-flex',alignItems:'center',gap:10,background:'rgba(20,184,166,0.07)',border:'1px solid rgba(20,184,166,0.25)',borderRadius:40,padding:'6px 18px 6px 8px',fontSize:12.5,color:'#14b8a6',fontWeight:600,marginBottom:34,letterSpacing:.4,backdropFilter:'blur(8px)',...transition('0s')},
  tagOut:{opacity:0,transform:'translateY(-16px)'},
  tagIn :{opacity:1,transform:'translateY(0)'},

  pulseWrap:{position:'relative',width:22,height:22,flexShrink:0,display:'flex',alignItems:'center',justifyContent:'center'},
  pulseRing:{position:'absolute',width:22,height:22,borderRadius:'50%',border:'1.5px solid rgba(20,184,166,0.5)',animation:'pulseRing 2s ease-out infinite'},
  pulseDot:{width:9,height:9,borderRadius:'50%',background:'#14b8a6',animation:'pulseDot 2s ease-in-out infinite'},

  /* HEADLINE */
  h1:{fontFamily:"'Sora',sans-serif",fontSize:'clamp(38px,5.8vw,72px)',fontWeight:800,lineHeight:1.1,letterSpacing:-2.5,color:'#0f172a',marginBottom:6,overflow:'hidden'},
  slideOut:{opacity:0,transform:'translateX(-60px)',...transition('0s')},
  slideL  :{opacity:1,transform:'translateX(0)',...transition('.12s')},
  slideR  :{opacity:1,transform:'translateX(0)',...transition('.28s')},

  /* SUB */
  sub:{fontSize:'clamp(15px,1.8vw,19px)',color:'#1e4d47',maxWidth:580,margin:'20px auto 44px',fontWeight:400,lineHeight:1.75,...transition('0s')},
  fadeOut:{opacity:0,transform:'translateY(20px)'},
  fadeIn3:{opacity:1,transform:'translateY(0)',...transition('.42s')},
  fadeIn4:{opacity:1,transform:'translateY(0)',...transition('.56s')},
  fadeIn5:{opacity:1,transform:'translateY(0)',...transition('.72s')},

  /* BUTTONS */
  btns:{display:'flex',gap:14,flexWrap:'wrap',justifyContent:'center',marginBottom:64},
  btnP:{background:'#14b8a6',color:'#fff',padding:'14px 30px',borderRadius:8,fontSize:15,fontWeight:700,textDecoration:'none',display:'inline-flex',alignItems:'center',gap:8,transition:'all .25s ease',boxShadow:'0 4px 20px rgba(20,184,166,.2)'},
  btnPh:{background:'#0d9488',transform:'translateY(-2px)',boxShadow:'0 10px 32px rgba(20,184,166,.35)'},
  btnS:{background:'transparent',color:'#0f172a',padding:'14px 30px',borderRadius:8,fontSize:15,fontWeight:600,textDecoration:'none',border:'1.5px solid rgba(20,184,166,.4)',display:'inline-flex',alignItems:'center',gap:8,transition:'all .25s ease'},
  btnSh:{background:'rgba(20,184,166,.06)',borderColor:'#14b8a6',color:'#14b8a6',transform:'translateY(-2px)'},

  /* KPI */
  kpiBar:{display:'flex',background:'rgba(255,255,255,0.92)',border:'1px solid rgba(20,184,166,0.2)',borderRadius:14,overflow:'hidden',boxShadow:'0 4px 24px rgba(20,184,166,.08)',backdropFilter:'blur(12px)'},
  kpi:{padding:'20px 38px',textAlign:'center',borderRight:'1px solid rgba(20,184,166,0.15)',transition:'background .25s ease, transform .25s ease',cursor:'default'},
  kpiH:{background:'rgba(20,184,166,.05)',transform:'translateY(-2px)'},
  kn:{fontFamily:"'Sora',sans-serif",fontSize:26,fontWeight:700,color:'#0f172a',display:'block',letterSpacing:-.5},
  em:{color:'#14b8a6',fontStyle:'normal'},
  kdim:{color:'#94a3b8',fontStyle:'normal'},
  kl:{fontSize:12,color:'#64748b',fontWeight:500,marginTop:2,display:'block'},

  /* TYPEWRITER TICKER */
  ticker:{display:'flex',alignItems:'center',gap:10,marginTop:28,padding:'8px 20px',background:'rgba(20,184,166,.05)',border:'1px solid rgba(20,184,166,.15)',borderRadius:40},
  tickerDot:{width:7,height:7,borderRadius:'50%',background:'#14b8a6',flexShrink:0,animation:'pulseDot 2s ease-in-out infinite'},
  tickerTxt:{fontSize:12.5,color:'#1e4d47',fontWeight:500,fontStyle:'italic',maxWidth:480,textAlign:'left'},

  /* SCROLL */
  scroll:{display:'flex',flexDirection:'column',alignItems:'center',gap:8,marginTop:36,opacity:.45},
  scrollDot:{width:6,height:6,borderRadius:'50%',background:'#14b8a6',animation:'scrollBounce 1.8s ease-in-out infinite'},
  scrollTxt:{fontSize:11,color:'#64748b',fontWeight:500,letterSpacing:1.5,textTransform:'uppercase'},
}
