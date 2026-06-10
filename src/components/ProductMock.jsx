export default function ProductMock({ t }) {
  const pm = t.productMock
  return (
    <section style={s.wrap}>
      <div style={s.inner}>
        <div style={s.glow}/>
        <div style={s.mock}>
          <div style={s.bar}>
            <div style={{...s.dot,background:'#ff5f57'}}/><div style={{...s.dot,background:'#febc2e'}}/><div style={{...s.dot,background:'#28c840'}}/>
            <div style={s.url}>webishopi.com / search</div>
          </div>
          <div style={s.body}>
            <div style={s.searchRow}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:15,height:15,flexShrink:0}}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              <input readOnly placeholder={pm.placeholder} style={s.input}/>
              <button style={s.sbtn}>{pm.search}</button>
            </div>
            <div style={s.grid}>
              {pm.products.map(p => (
                <div key={p.ref} style={s.card} className="mock-card">
                  <div style={s.pcat}>{p.cat}</div>
                  <div style={s.pname}>{p.name}</div>
                  <div style={s.pref}>REF: {p.ref} · {pm.inStock}</div>
                  <button style={s.padd} className="mock-add">{pm.addToQuote}</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{".mock-card{transition:all .2s}.mock-card:hover{border-color:#14b8a6!important;box-shadow:0 4px 16px rgba(20,184,166,.1)}.mock-add:hover{background:#14b8a6!important;color:#fff!important}"}</style>
    </section>
  )
}
const s={wrap:{padding:'20px 5% 80px',background:'#fff'},inner:{maxWidth:1040,margin:'0 auto',position:'relative'},glow:{position:'absolute',inset:-60,background:'radial-gradient(ellipse 55% 35% at 50% 0%,rgba(20,184,166,.1) 0%,transparent 70%)',pointerEvents:'none'},mock:{position:'relative',zIndex:1,background:'#fff',border:'1.5px solid rgba(20,184,166,.3)',borderRadius:18,overflow:'hidden',boxShadow:'0 8px 60px rgba(20,184,166,.15),0 2px 20px rgba(0,0,0,.08)'},bar:{background:'#f0fdfb',padding:'11px 18px',display:'flex',alignItems:'center',gap:8,borderBottom:'1px solid rgba(20,184,166,.18)'},dot:{width:11,height:11,borderRadius:'50%'},url:{background:'#fff',border:'1px solid rgba(20,184,166,.2)',borderRadius:20,padding:'3px 16px',fontSize:11.5,color:'#4b7a74',marginLeft:12,letterSpacing:.2},body:{padding:26,background:'#fff'},searchRow:{background:'#f8fffe',border:'1.5px solid rgba(20,184,166,.25)',borderRadius:10,padding:'13px 18px',display:'flex',alignItems:'center',gap:11,marginBottom:20},input:{background:'none',border:'none',outline:'none',color:'#0f172a',fontSize:13.5,flex:1,fontFamily:'Inter,sans-serif'},sbtn:{background:'#14b8a6',color:'#fff',border:'none',borderRadius:7,padding:'8px 20px',fontSize:13,fontWeight:700,cursor:'pointer',whiteSpace:'nowrap'},grid:{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:13},card:{background:'#f8fffe',border:'1.5px solid rgba(20,184,166,.15)',borderRadius:10,padding:15},pcat:{fontSize:10.5,color:'#14b8a6',fontWeight:700,textTransform:'uppercase',letterSpacing:.9,marginBottom:5},pname:{fontSize:13,color:'#0f172a',fontWeight:500,marginBottom:5,lineHeight:1.4},pref:{fontSize:11,color:'#64748b',marginBottom:12},padd:{background:'rgba(20,184,166,.08)',border:'1.5px solid rgba(20,184,166,.25)',color:'#14b8a6',fontSize:12,fontWeight:700,borderRadius:6,padding:'6px 0',cursor:'pointer',width:'100%',transition:'all .2s'}}
