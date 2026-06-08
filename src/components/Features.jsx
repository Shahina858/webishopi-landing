const features = [
  { title: 'Smart Product Search', desc: 'Customers search your catalogue by product name, category, or reference number — with instant results, no login required for browsing.', icon: <><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></> },
  { title: 'Instant PDF Quotations', desc: 'A branded, professional PDF quote is generated and emailed the moment a customer submits. Your sales exec is automatically in CC — zero manual effort.', icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></> },
  { title: 'BOQ Upload & AI Matching', desc: 'Customers upload any Bill of Quantities. The AI reads the document, identifies every line item, and matches products from your catalogue in seconds.', icon: <><path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"/><polyline points="14 2 14 7 19 7"/><path d="M3 15h6"/><path d="m2 12 3 3-3 3"/></> },
  { title: 'Autonomous Email Agent', desc: 'Every customer reply is monitored continuously. The AI understands the request, drafts a professional response, and routes it to your team for one-click approval.', icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/> },
  { title: 'Sales Routing & Approvals', desc: 'Enquiries are routed to the right sales executive automatically. Every outgoing reply awaits human approval — full control, zero missed messages.', icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></> },
  { title: 'White-Label Ready', desc: 'Fully customisable with your brand, logo and domain. Your customers experience a seamless procurement portal that feels entirely like yours.', icon: <><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></> },
]

export default function Features() {
  return (
    <section style={s.wrap} id="features">
      <div style={s.inner}>
        <span style={s.tag}>Platform Capabilities</span>
        <h2 style={s.h2}>Everything your customers need.<br />Nothing your team does manually.</h2>
        <p style={s.p}>Webishopi handles the full procurement journey — from catalogue browsing and BOQ upload to PDF generation and email replies — autonomously.</p>
        <div style={s.grid}>
          {features.map(f => (
            <div key={f.title} style={s.card} className="feat-card">
              <div style={s.ico}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{width:21,height:21}}>{f.icon}</svg>
              </div>
              <div style={s.fh}>{f.title}</div>
              <div style={s.fp}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .feat-card { transition: all .25s; }
        .feat-card:hover { background: #f0fdfb !important; box-shadow: 0 8px 32px rgba(20,184,166,.12) !important; border-color: #14b8a6 !important; transform: translateY(-2px); }
      `}</style>
    </section>
  )
}

const s = {
  wrap:{padding:'100px 5%',background:'#f8fffe'},
  inner:{maxWidth:1180,margin:'0 auto'},
  tag:{display:'inline-block',fontSize:11.5,fontWeight:700,textTransform:'uppercase',letterSpacing:2,color:'#14b8a6',marginBottom:14},
  h2:{fontFamily:"'Sora',sans-serif",fontSize:'clamp(28px,3.8vw,48px)',fontWeight:700,color:'#0f172a',lineHeight:1.12,letterSpacing:-1.2,marginBottom:16},
  p:{fontSize:16.5,color:'#1e4d47',lineHeight:1.78,maxWidth:540,marginBottom:0},
  grid:{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginTop:56},
  card:{background:'#fff',border:'1.5px solid rgba(20,184,166,.15)',borderRadius:14,padding:'36px 28px',boxShadow:'0 1px 4px rgba(0,0,0,.04)'},
  ico:{width:46,height:46,borderRadius:11,background:'rgba(20,184,166,.08)',border:'1px solid rgba(20,184,166,.25)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:20},
  fh:{fontFamily:"'Sora',sans-serif",fontSize:16.5,fontWeight:600,color:'#0f172a',marginBottom:9,letterSpacing:-.2},
  fp:{fontSize:13.5,color:'#1e4d47',lineHeight:1.72},
}
