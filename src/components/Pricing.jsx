export default function Pricing({ t }) {
  const p = t.pricing
  return (
    <section style={s.wrap} id="pricing">
      <div style={s.inner}>
        <span style={s.tag}>{p.tag}</span>
        <h2 style={s.h2}>{p.h2}</h2>
        <p style={s.p}>{p.p}</p>
        <div style={s.grid}>
          {p.plans.map((pl, i) => (
            <div key={i} style={{...s.card,...(pl.pop?s.pop:{})}}>
              {pl.pop && <div style={s.badge}>{p.mostPopular}</div>}
              <div style={s.pname}>{pl.name}</div>
              <div style={s.psub}>{pl.sub}</div>
              {pl.ent ? <div style={s.pent}>{p.custom}</div> : <div style={s.pprice}>{pl.price}<span style={s.pper}>{pl.per}</span></div>}
              <div style={s.pannual}>{pl.annual}</div>
              <div style={s.div}/>
              <ul style={s.list}>
                {pl.features.map((f, j) => <li key={j} style={s.li}><span style={s.check}>✓</span>{f}</li>)}
              </ul>
              <a href={pl.ent?'mailto:sales@techbee.ae':'https://webishopi.com'} style={pl.pop?s.btnF:s.btnO}>
                {pl.ent?p.contactSales:p.getStarted}
              </a>
            </div>
          ))}
        </div>
        <p style={s.note}>{p.note} <a href="mailto:sales@techbee.ae" style={{color:'#14b8a6',textDecoration:'none'}}>{p.noteLink}</a></p>
      </div>
    </section>
  )
}
const s={wrap:{padding:'100px 5%',background:'#fff'},inner:{maxWidth:1180,margin:'0 auto'},tag:{display:'inline-block',fontSize:11.5,fontWeight:700,textTransform:'uppercase',letterSpacing:2,color:'#14b8a6',marginBottom:14},h2:{fontFamily:"'Sora',sans-serif",fontSize:'clamp(28px,3.8vw,48px)',fontWeight:700,color:'#0f172a',lineHeight:1.12,letterSpacing:-1.2,marginBottom:16},p:{fontSize:16.5,color:'#1e4d47',lineHeight:1.78,maxWidth:540},grid:{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16,marginTop:56,alignItems:'start'},card:{background:'#fff',border:'1.5px solid rgba(20,184,166,.15)',borderRadius:16,padding:30,position:'relative',boxShadow:'0 2px 12px rgba(0,0,0,.05)'},pop:{borderColor:'#14b8a6',background:'#f0fdfb',boxShadow:'0 8px 40px rgba(20,184,166,.15)'},badge:{position:'absolute',top:-13,left:'50%',transform:'translateX(-50%)',background:'#14b8a6',color:'#fff',fontSize:11,fontWeight:800,padding:'4px 16px',borderRadius:20,whiteSpace:'nowrap',letterSpacing:.3},pname:{fontFamily:"'Sora',sans-serif",fontSize:15,fontWeight:700,color:'#0f172a'},psub:{fontSize:12,color:'#64748b',marginTop:4},pprice:{fontFamily:"'Sora',sans-serif",fontSize:30,fontWeight:700,color:'#0f172a',letterSpacing:-1,margin:'18px 0 4px'},pper:{fontSize:14,fontWeight:400,color:'#64748b'},pent:{fontFamily:"'Sora',sans-serif",fontSize:28,fontWeight:700,color:'#0f172a',margin:'18px 0 4px'},pannual:{fontSize:12,color:'#64748b',marginBottom:20},div:{height:1,background:'rgba(20,184,166,.15)',margin:'20px 0'},list:{listStyle:'none',display:'flex',flexDirection:'column',gap:10,marginBottom:26},li:{fontSize:13,color:'#1e4d47',display:'flex',gap:9,alignItems:'flex-start',lineHeight:1.5},check:{color:'#14b8a6',fontWeight:700,flexShrink:0,marginTop:1},btnF:{display:'block',textAlign:'center',padding:12,borderRadius:9,fontSize:14,fontWeight:700,textDecoration:'none',background:'#14b8a6',color:'#fff'},btnO:{display:'block',textAlign:'center',padding:12,borderRadius:9,fontSize:14,fontWeight:700,textDecoration:'none',background:'transparent',border:'1.5px solid rgba(20,184,166,.3)',color:'#1e4d47'},note:{fontSize:13,color:'#1e4d47',textAlign:'center',marginTop:16,lineHeight:1.7}}
