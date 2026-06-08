const points = [
  { title: 'Replies detected continuously', desc: 'No customer email goes unanswered. The agent monitors your inbox and acts within seconds of a reply landing.', icon: <><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></> },
  { title: 'AI-drafted, human-approved', desc: 'Every reply is drafted by AI and sent to your sales exec for one-click approval. Nothing reaches the customer without sign-off.', icon: <><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></> },
  { title: 'Quote auto-updates on request', desc: 'When a buyer asks to change quantities, the PDF is regenerated automatically and attached to the approved reply.', icon: <><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></> },
]

export default function AIAgent() {
  return (
    <section style={s.wrap} id="agent">
      <div style={s.inner}>
        <div style={s.left}>
          <span style={s.tag}>AI Email Intelligence</span>
          <h2 style={s.h2}>An agent that closes loops before you open your inbox</h2>
          <p style={s.p}>Webishopi monitors your sales inbox around the clock. When a customer replies to a quote, the agent understands the request, drafts a professional response, and routes it for approval.</p>
          <div style={s.list}>
            {points.map(pt => (
              <div key={pt.title} style={s.row}>
                <div style={s.ico}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{width:17,height:17}}>{pt.icon}</svg>
                </div>
                <div>
                  <div style={s.rh}>{pt.title}</div>
                  <div style={s.rp}>{pt.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={s.chatbox}>
          <div style={s.ctop}>
            <span style={s.ctitle}>Re: Q-2841 — Updated quantities</span>
            <span style={s.cbadge}>Live · 52s ago</span>
          </div>
          <div style={s.cbody}>
            <span style={s.clabel}>Customer reply</span>
            <div style={s.cmu}>"Please update qty to 5 units instead of 3. Keep everything else the same and resend."</div>
            <span style={{...s.clabel,color:'#14b8a6',marginTop:4}}>AI agent — pending approval</span>
            <div style={s.cma}>Updated quotation generated — item qty revised from 3 → 5. Revised total: AED 52,400. PDF attached. Awaiting your approval to send.</div>
          </div>
          <div style={s.cactions}>
            <button style={s.cap}>✓ Approve &amp; Send</button>
            <button style={s.cae}>✎ Edit First</button>
            <button style={s.car}>✕ Reject</button>
          </div>
        </div>
      </div>
    </section>
  )
}

const s = {
  wrap:{padding:'100px 5%',background:'#fff'},
  inner:{maxWidth:1180,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:80,alignItems:'center'},
  left:{},
  tag:{display:'inline-block',fontSize:11.5,fontWeight:700,textTransform:'uppercase',letterSpacing:2,color:'#14b8a6',marginBottom:14},
  h2:{fontFamily:"'Sora',sans-serif",fontSize:'clamp(26px,3.2vw,42px)',fontWeight:700,color:'#0f172a',lineHeight:1.12,letterSpacing:-1,marginBottom:16},
  p:{fontSize:15.5,color:'#1e4d47',lineHeight:1.78,marginBottom:32},
  list:{display:'flex',flexDirection:'column',gap:20},
  row:{display:'flex',gap:14,alignItems:'flex-start'},
  ico:{width:38,height:38,minWidth:38,borderRadius:9,background:'rgba(20,184,166,.08)',border:'1px solid rgba(20,184,166,.25)',display:'flex',alignItems:'center',justifyContent:'center'},
  rh:{fontSize:14.5,fontWeight:600,color:'#0f172a',marginBottom:4,fontFamily:"'Sora',sans-serif"},
  rp:{fontSize:13.5,color:'#1e4d47',lineHeight:1.68},
  chatbox:{background:'#fff',border:'1.5px solid rgba(20,184,166,.3)',borderRadius:16,overflow:'hidden',boxShadow:'0 8px 40px rgba(20,184,166,.12)'},
  ctop:{background:'#f0fdfb',padding:'14px 20px',borderBottom:'1px solid rgba(20,184,166,.18)',display:'flex',alignItems:'center',justifyContent:'space-between'},
  ctitle:{fontSize:13,fontWeight:600,color:'#0f172a'},
  cbadge:{background:'rgba(20,184,166,.1)',border:'1px solid rgba(20,184,166,.25)',color:'#14b8a6',fontSize:11,fontWeight:700,borderRadius:20,padding:'3px 11px'},
  cbody:{padding:20,display:'flex',flexDirection:'column',gap:13,background:'#fff'},
  clabel:{fontSize:11,color:'#64748b',display:'block',marginBottom:2},
  cmu:{padding:'12px 15px',borderRadius:'10px 10px 2px 10px',fontSize:13.5,lineHeight:1.6,background:'rgba(20,184,166,.08)',border:'1px solid rgba(20,184,166,.25)',color:'#0f172a',alignSelf:'flex-end'},
  cma:{padding:'12px 15px',borderRadius:'10px 10px 10px 2px',fontSize:13.5,lineHeight:1.6,background:'#f0fdfb',border:'1px solid rgba(20,184,166,.25)',color:'#1e4d47'},
  cactions:{padding:'14px 20px',borderTop:'1px solid rgba(20,184,166,.15)',display:'flex',gap:9,flexWrap:'wrap',background:'#f8fffe'},
  cap:{background:'#14b8a6',color:'#fff',border:'none',borderRadius:7,padding:'9px 16px',fontSize:13,fontWeight:700,cursor:'pointer',fontFamily:'Inter,sans-serif'},
  cae:{background:'transparent',color:'#2563eb',border:'1px solid rgba(37,99,235,.25)',borderRadius:7,padding:'9px 16px',fontSize:13,fontWeight:700,cursor:'pointer',fontFamily:'Inter,sans-serif'},
  car:{background:'transparent',color:'#dc2626',border:'1px solid rgba(220,38,38,.22)',borderRadius:7,padding:'9px 16px',fontSize:13,fontWeight:700,cursor:'pointer',fontFamily:'Inter,sans-serif'},
}
