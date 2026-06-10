export default function Flows({ t }) {
  const f = t.flows
  return (
    <section style={s.wrap} id="flows">
      <div style={s.inner}>
        <span style={s.tag}>{f.tag}</span>
        <h2 style={s.h2}>{f.h2}</h2>
        <p style={s.p}>{f.p}</p>
        <div style={s.grid}>
          {f.items.map((item, i) => (
            <div key={i} style={s.card} className="flow-card">
              <div style={s.flabel}>{item.label}</div>
              <div style={s.fth}>{item.title}</div>
              <div style={s.ftp}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{".flow-card{transition:all .25s}.flow-card:hover{border-color:#14b8a6!important;background:#f0fdfb!important;transform:translateY(-3px);box-shadow:0 8px 32px rgba(20,184,166,.12)!important}"}</style>
    </section>
  )
}
const s={wrap:{padding:'100px 5%',background:'#f8fffe'},inner:{maxWidth:1180,margin:'0 auto'},tag:{display:'inline-block',fontSize:11.5,fontWeight:700,textTransform:'uppercase',letterSpacing:2,color:'#14b8a6',marginBottom:14},h2:{fontFamily:"'Sora',sans-serif",fontSize:'clamp(28px,3.8vw,48px)',fontWeight:700,color:'#0f172a',lineHeight:1.12,letterSpacing:-1.2,marginBottom:16},p:{fontSize:16.5,color:'#1e4d47',lineHeight:1.78,maxWidth:540},grid:{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:14,marginTop:56},card:{background:'#fff',border:'1.5px solid rgba(20,184,166,.15)',borderRadius:13,padding:28,boxShadow:'0 1px 6px rgba(0,0,0,.04)'},flabel:{fontSize:10.5,fontWeight:700,color:'#14b8a6',letterSpacing:1.6,textTransform:'uppercase',marginBottom:12},fth:{fontSize:15.5,fontWeight:600,color:'#0f172a',marginBottom:8,fontFamily:"'Sora',sans-serif",letterSpacing:-.2},ftp:{fontSize:13.5,color:'#1e4d47',lineHeight:1.68}}
