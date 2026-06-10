const ICONS = [
  <><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></>,
  <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></>,
  <><path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"/><polyline points="14 2 14 7 19 7"/><path d="M3 15h6"/><path d="m2 12 3 3-3 3"/></>,
  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>,
  <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
  <><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></>,
]
export default function Features({ t }) {
  const f = t.features
  return (
    <section style={s.wrap} id="features">
      <div style={s.inner}>
        <span style={s.tag}>{f.tag}</span>
        <h2 style={s.h2}>{f.h2line1}<br />{f.h2line2}</h2>
        <p style={s.p}>{f.p}</p>
        <div style={s.grid}>
          {f.items.map((item, i) => (
            <div key={i} style={s.card} className="feat-card">
              <div style={s.ico}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{width:21,height:21}}>{ICONS[i]}</svg>
              </div>
              <div style={s.fh}>{item.title}</div>
              <div style={s.fp}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{".feat-card{transition:all .25s}.feat-card:hover{background:#f0fdfb!important;box-shadow:0 8px 32px rgba(20,184,166,.12)!important;border-color:#14b8a6!important;transform:translateY(-2px)}"}</style>
    </section>
  )
}
const s={wrap:{padding:'100px 5%',background:'#f8fffe'},inner:{maxWidth:1180,margin:'0 auto'},tag:{display:'inline-block',fontSize:11.5,fontWeight:700,textTransform:'uppercase',letterSpacing:2,color:'#14b8a6',marginBottom:14},h2:{fontFamily:"'Sora',sans-serif",fontSize:'clamp(28px,3.8vw,48px)',fontWeight:700,color:'#0f172a',lineHeight:1.12,letterSpacing:-1.2,marginBottom:16},p:{fontSize:16.5,color:'#1e4d47',lineHeight:1.78,maxWidth:540,marginBottom:0},grid:{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginTop:56},card:{background:'#fff',border:'1.5px solid rgba(20,184,166,.15)',borderRadius:14,padding:'36px 28px',boxShadow:'0 1px 4px rgba(0,0,0,.04)'},ico:{width:46,height:46,borderRadius:11,background:'rgba(20,184,166,.08)',border:'1px solid rgba(20,184,166,.25)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:20},fh:{fontFamily:"'Sora',sans-serif",fontSize:16.5,fontWeight:600,color:'#0f172a',marginBottom:9,letterSpacing:-.2},fp:{fontSize:13.5,color:'#1e4d47',lineHeight:1.72}}
