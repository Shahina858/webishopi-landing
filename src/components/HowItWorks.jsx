const ICONS = [
  <><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></>,
  <><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></>,
  <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></>,
  <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>,
]
export default function HowItWorks({ t }) {
  const h = t.howItWorks
  return (
    <section style={s.wrap} id="how">
      <div style={s.inner}>
        <span style={s.tag}>{h.tag}</span>
        <h2 style={s.h2}>{h.h2}</h2>
        <p style={s.p}>{h.p}</p>
        <div style={s.row}>
          <div style={s.line}/>
          {h.steps.map((st, i) => (
            <div key={i} style={s.step}>
              <div style={s.circle}><svg viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{width:24,height:24}}>{ICONS[i]}</svg></div>
              <div style={s.sth}>{st.title}</div>
              <div style={s.stp}>{st.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
const s={wrap:{padding:'100px 5%',background:'#fff'},inner:{maxWidth:1180,margin:'0 auto'},tag:{display:'inline-block',fontSize:11.5,fontWeight:700,textTransform:'uppercase',letterSpacing:2,color:'#14b8a6',marginBottom:14},h2:{fontFamily:"'Sora',sans-serif",fontSize:'clamp(28px,3.8vw,48px)',fontWeight:700,color:'#0f172a',lineHeight:1.12,letterSpacing:-1.2,marginBottom:16},p:{fontSize:16.5,color:'#1e4d47',lineHeight:1.78,maxWidth:540},row:{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:0,marginTop:64,position:'relative'},line:{position:'absolute',top:32,left:'12%',right:'12%',height:1,background:'linear-gradient(90deg,transparent,rgba(20,184,166,.4) 20%,rgba(20,184,166,.4) 80%,transparent)'},step:{textAlign:'center',padding:'0 12px',position:'relative'},circle:{width:64,height:64,borderRadius:'50%',border:'2px solid rgba(20,184,166,.3)',background:'#fff',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 22px',position:'relative',zIndex:1,boxShadow:'0 4px 16px rgba(20,184,166,.12)'},sth:{fontSize:15,fontWeight:600,color:'#0f172a',marginBottom:8,fontFamily:"'Sora',sans-serif"},stp:{fontSize:13,color:'#1e4d47',lineHeight:1.65}}
