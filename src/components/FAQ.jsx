import { useState } from 'react'
export default function FAQ({ t }) {
  const f = t.faq
  const [open, setOpen] = useState(0)
  return (
    <section style={s.wrap} id="faq">
      <div style={s.inner}>
        <span style={s.tag}>{f.tag}</span>
        <h2 style={s.h2}>{f.h2}</h2>
        <div style={s.list}>
          {f.items.map((item, i) => (
            <div key={i} style={{...s.item,...(open===i?s.itemOpen:{})}}>
              <button style={s.q} onClick={() => setOpen(open===i?-1:i)}>
                {item.q}
                <div style={{...s.arr,...(open===i?s.arrOpen:{})}}>
                  <svg viewBox="0 0 14 14" fill="none" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" style={{width:10,height:10}}><line x1="7" y1="2" x2="7" y2="12"/><line x1="2" y1="7" x2="12" y2="7"/></svg>
                </div>
              </button>
              {open===i && <div style={s.a}>{item.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
const s={wrap:{padding:'100px 5%',background:'#f8fffe'},inner:{maxWidth:1180,margin:'0 auto',textAlign:'center'},tag:{display:'inline-block',fontSize:11.5,fontWeight:700,textTransform:'uppercase',letterSpacing:2,color:'#14b8a6',marginBottom:14},h2:{fontFamily:"'Sora',sans-serif",fontSize:'clamp(28px,3.8vw,48px)',fontWeight:700,color:'#0f172a',lineHeight:1.12,letterSpacing:-1.2,marginBottom:0},list:{maxWidth:740,margin:'56px auto 0',display:'flex',flexDirection:'column',gap:3,textAlign:'left'},item:{border:'1.5px solid rgba(20,184,166,.15)',borderRadius:11,overflow:'hidden',boxShadow:'0 1px 4px rgba(0,0,0,.04)'},itemOpen:{borderColor:'#14b8a6'},q:{width:'100%',padding:'19px 22px',fontSize:15,fontWeight:600,color:'#0f172a',cursor:'pointer',display:'flex',justifyContent:'space-between',alignItems:'center',gap:16,userSelect:'none',background:'#fff',border:'none',fontFamily:'Inter,sans-serif',textAlign:'left'},arr:{width:20,height:20,minWidth:20,borderRadius:'50%',border:'1px solid rgba(20,184,166,.25)',display:'flex',alignItems:'center',justifyContent:'center',transition:'transform .25s',flexShrink:0},arrOpen:{transform:'rotate(45deg)',borderColor:'#14b8a6'},a:{padding:'0 22px 20px',fontSize:14,color:'#1e4d47',lineHeight:1.78,background:'#fff'}}
