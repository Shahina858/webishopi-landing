export default function Footer() {
  return (
    <footer style={s.wrap}>
      <div style={s.inner}>
        <div style={s.top}>
          <div style={s.brand}>
            <a href="#" style={s.logo}>
              <div style={s.lm}>
                <svg viewBox="0 0 24 24" fill="none" style={{width:14,height:14}}>
                  <circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2"/>
                  <path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="12" r="1.5" fill="#fff"/>
                </svg>
              </div>
              Webishopi
            </a>
            <p style={s.bp}>The AI-powered procurement and quotation platform for product-based businesses — built for the B2B market by TechBee IT &amp; Designs LLC, Dubai.</p>
          </div>
          {[
            { h:'Platform', links:[['Features','#features'],['How It Works','#how'],['Automation Flows','#flows'],['Launch App','https://webishopi.com']] },
            { h:'Company', links:[['TechBee IT','https://techbee.ae']]},
            { h:'Contact', links:[['sales@techbee.ae','mailto:sales@techbee.ae'],['info@techbee.ae','mailto:info@techbee.ae'],['techbee.ae','https://techbee.ae'],['Dubai, UAE','#']] },
          ].map(col => (
            <div key={col.h} style={s.col}>
              <h4 style={s.colH}>{col.h}</h4>
              <ul style={s.colList}>
                {col.links.map(([label, href]) => (
                  <li key={label}><a href={href} style={s.colA}>{label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={s.bot}>
          <p style={s.copy}>© 2025 Webishopi · TechBee IT &amp; Designs LLC. All rights reserved.</p>
          <p style={s.tl}>Built for the B2B · <span style={{color:'#14b8a6'}}>UAE B2B Verified</span></p>
        </div>
      </div>
    </footer>
  )
}

const s = {
  wrap:{background:'#f0fdfb',borderTop:'1px solid rgba(20,184,166,.2)',padding:'64px 5% 32px'},
  inner:{maxWidth:1180,margin:'0 auto'},
  top:{display:'grid',gridTemplateColumns:'2.2fr 1fr 1fr 1fr',gap:48,marginBottom:48},
  brand:{},
  logo:{fontFamily:"'Sora',sans-serif",fontSize:19,fontWeight:700,color:'#0f172a',textDecoration:'none',display:'flex',alignItems:'center',gap:8},
  lm:{width:26,height:26,borderRadius:7,background:'#14b8a6',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0},
  bp:{fontSize:13.5,color:'#1e4d47',marginTop:14,lineHeight:1.78,maxWidth:260},
  col:{},
  colH:{fontSize:11.5,fontWeight:700,color:'#0f172a',textTransform:'uppercase',letterSpacing:1.3,marginBottom:18},
  colList:{listStyle:'none',display:'flex',flexDirection:'column',gap:12},
  colA:{color:'#1e4d47',textDecoration:'none',fontSize:13.5,transition:'color .2s'},
  bot:{borderTop:'1px solid rgba(20,184,166,.18)',paddingTop:24,display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:14},
  copy:{fontSize:13,color:'#64748b'},
  tl:{fontSize:13,color:'#64748b'},
}
