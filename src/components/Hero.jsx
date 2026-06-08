export default function Hero() {
  return (
    <section style={s.hero}>
      <div style={s.orb1} /><div style={s.orb2} /><div style={s.orb3} />
      <div style={s.grid} />
      <div style={s.inner}>
        <div style={s.tag} className="fade-up">
          <div style={s.pulse} />
          AI-Powered Procurement &amp; Quotation Platform
        </div>
        <h1 style={s.h1} className="fade-up-1">
          Stop quoting manually.<br />
          <span style={{color:'#14b8a6'}}>Every quote. Automated.</span>
        </h1>
        <p style={s.sub} className="fade-up-2">
          Webishopi gives any product-based business an intelligent procurement portal — instant PDF quotations, AI-driven BOQ matching, and autonomous email handling, out of the box.
        </p>
        <div style={s.btns} className="fade-up-3">
          <a href="https://webishopi.com" style={s.btnP}>Start Free Trial →</a>
          <a href="#how" style={s.btnS}>See How It Works</a>
        </div>
        <div style={s.kpiBar} className="fade-up-4">
          {[
            ['<60s','Quote turnaround'],
            ['9','Autonomous flows'],
            ['100%','White-label ready'],
            ['0','Manual quote steps'],
          ].map(([n,l]) => (
            <div key={l} style={s.kpi}>
              <span style={s.kn}>{n.includes('<') ? <>{`<`}<em style={{color:'#14b8a6',fontStyle:'normal'}}>60s</em></> : n.includes('%') ? <>{100}<em style={{color:'#14b8a6',fontStyle:'normal'}}>%</em></> : <span style={{color: n==='0' ? '#14b8a6' : '#0f172a'}}>{n}</span>}</span>
              <span style={s.kl}>{l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const s = {
  hero:{minHeight:'100svh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'110px 5% 80px',position:'relative',overflow:'hidden',background:'#fff'},
  orb1:{position:'absolute',width:900,height:900,borderRadius:'50%',background:'radial-gradient(circle,rgba(20,184,166,0.07) 0%,transparent 62%)',top:-280,left:'50%',transform:'translateX(-50%)',pointerEvents:'none'},
  orb2:{position:'absolute',width:500,height:500,borderRadius:'50%',background:'radial-gradient(circle,rgba(20,184,166,0.05) 0%,transparent 70%)',bottom:-60,right:-80,pointerEvents:'none'},
  orb3:{position:'absolute',width:300,height:300,borderRadius:'50%',background:'radial-gradient(circle,rgba(20,184,166,0.04) 0%,transparent 70%)',bottom:80,left:-50,pointerEvents:'none'},
  grid:{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(20,184,166,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(20,184,166,0.06) 1px,transparent 1px)',backgroundSize:'68px 68px',maskImage:'radial-gradient(ellipse 75% 65% at 50% 38%,black 20%,transparent 100%)',WebkitMaskImage:'radial-gradient(ellipse 75% 65% at 50% 38%,black 20%,transparent 100%)'},
  inner:{position:'relative',zIndex:1,display:'flex',flexDirection:'column',alignItems:'center',maxWidth:960,margin:'0 auto',width:'100%'},
  tag:{display:'inline-flex',alignItems:'center',gap:8,background:'rgba(20,184,166,0.08)',border:'1px solid rgba(20,184,166,0.25)',borderRadius:40,padding:'5px 16px 5px 8px',fontSize:12.5,color:'#14b8a6',fontWeight:600,marginBottom:32,letterSpacing:.3},
  pulse:{width:22,height:22,borderRadius:'50%',background:'rgba(20,184,166,0.12)',border:'1px solid rgba(20,184,166,0.25)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,position:'relative'},
  h1:{fontFamily:"'Sora',sans-serif",fontSize:'clamp(38px,5.8vw,72px)',fontWeight:800,lineHeight:1.08,letterSpacing:-2.5,color:'#0f172a',marginBottom:6},
  sub:{fontSize:'clamp(15px,1.8vw,19px)',color:'#1e4d47',maxWidth:580,margin:'20px auto 44px',fontWeight:400,lineHeight:1.75},
  btns:{display:'flex',gap:12,flexWrap:'wrap',justifyContent:'center',marginBottom:64},
  btnP:{background:'#14b8a6',color:'#fff',padding:'14px 30px',borderRadius:8,fontSize:15,fontWeight:700,textDecoration:'none',display:'inline-flex',alignItems:'center',gap:7,transition:'all .2s'},
  btnS:{background:'transparent',color:'#0f172a',padding:'14px 30px',borderRadius:8,fontSize:15,fontWeight:600,textDecoration:'none',border:'1.5px solid rgba(20,184,166,.4)',display:'inline-flex',alignItems:'center',gap:7,transition:'all .2s'},
  kpiBar:{display:'flex',background:'rgba(255,255,255,0.9)',border:'1px solid rgba(20,184,166,0.2)',borderRadius:14,overflow:'hidden',boxShadow:'0 4px 24px rgba(20,184,166,.08)'},
  kpi:{padding:'20px 38px',textAlign:'center',borderRight:'1px solid rgba(20,184,166,0.15)'},
  kn:{fontFamily:"'Sora',sans-serif",fontSize:26,fontWeight:700,color:'#0f172a',display:'block',letterSpacing:-.5},
  kl:{fontSize:12,color:'#64748b',fontWeight:500,marginTop:2,display:'block'},
}
