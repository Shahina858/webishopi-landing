export default function CTA() {
  return (
    <section style={s.wrap} id="contact">
      <div style={s.orb} />
      <div style={s.grid} />
      <div style={s.inner}>
        <span style={s.tag}>Get Started</span>
        <h2 style={s.h2}>Your customers deserve quotes in 60 seconds.</h2>
        <p style={s.p}>Set up your branded procurement portal, upload your catalogue, and start sending professional quotations automatically — no development required.</p>
        <div style={s.btns}>
          <a href="https://webishopi.com" style={s.btnP}>Start Free Trial →</a>
          <a href="mailto:sales@techbee.ae" style={s.btnS}>Talk to Sales</a>
        </div>
        <p style={s.note}>Powered by TechBee IT &amp; Designs LLC · Dubai, UAE · <a href="mailto:sales@techbee.ae" style={{color:'#14b8a6',textDecoration:'none'}}>sales@techbee.ae</a></p>
      </div>
    </section>
  )
}

const s = {
  wrap:{padding:'120px 5%',textAlign:'center',position:'relative',overflow:'hidden',background:'#f0fdfb'},
  orb:{position:'absolute',width:700,height:500,borderRadius:'50%',background:'radial-gradient(ellipse,rgba(20,184,166,.1) 0%,transparent 70%)',top:'50%',left:'50%',transform:'translate(-50%,-50%)',pointerEvents:'none'},
  grid:{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(20,184,166,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(20,184,166,.06) 1px,transparent 1px)',backgroundSize:'64px 64px'},
  inner:{position:'relative',zIndex:1,maxWidth:660,margin:'0 auto'},
  tag:{display:'inline-block',fontSize:11.5,fontWeight:700,textTransform:'uppercase',letterSpacing:2,color:'#14b8a6',marginBottom:14},
  h2:{fontFamily:"'Sora',sans-serif",fontSize:'clamp(30px,4vw,52px)',fontWeight:700,color:'#0f172a',letterSpacing:-1.5,lineHeight:1.1,marginBottom:18},
  p:{fontSize:17,color:'#1e4d47',lineHeight:1.72,marginBottom:44},
  btns:{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'},
  btnP:{background:'#14b8a6',color:'#fff',padding:'15px 32px',borderRadius:8,fontSize:16,fontWeight:700,textDecoration:'none',display:'inline-flex',alignItems:'center',gap:7},
  btnS:{background:'transparent',color:'#0f172a',padding:'15px 32px',borderRadius:8,fontSize:16,fontWeight:600,textDecoration:'none',border:'1.5px solid rgba(20,184,166,.4)',display:'inline-flex',alignItems:'center',gap:7},
  note:{marginTop:20,fontSize:13,color:'#64748b'},
}
