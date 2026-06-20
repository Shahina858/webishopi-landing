import { useState } from 'react'

export default function Contact({ t }) {
  const c = t.contact
  const [form, setForm] = useState({ name:'', company:'', email:'', phone:'', industry:'', message:'' })
  const [status, setStatus] = useState('idle')

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formsubmit.co/ajax/sales@techbee.ae', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject: `Webishopi Demo Request — ${form.company}`,
          _replyto: form.email,
          Name: form.name,
          Company: form.company,
          Email: form.email,
          Phone: form.phone || 'Not provided',
          Industry: form.industry,
          Message: form.message || 'No message provided',
          _template: 'table',
        })
      })
      const data = await res.json()
      if (data.success === 'true' || data.success === true) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section style={s.wrap}>
      <div style={s.orb1}/><div style={s.orb2}/>
      <div style={s.grid}/>
      <div style={s.inner}>

        {/* LEFT */}
        <div style={s.left}>
          <span style={s.tag}>{c.tag}</span>
          <h1 style={s.h1}>{c.h1}</h1>
          <p style={s.desc}>{c.desc}</p>
          <div style={s.infoList}>
            <a href="mailto:sales@techbee.ae" style={s.infoRow}>
              <div style={s.infoIco}>{emailIcon}</div>
              <div><div style={s.infoLabel}>{c.emailLabel}</div><div style={s.infoVal}>sales@techbee.ae</div></div>
            </a>
            <a href="tel:+97142434882" style={s.infoRow}>
              <div style={s.infoIco}>{phoneIcon}</div>
              <div><div style={s.infoLabel}>{c.phoneLabel}</div><div style={s.infoVal}>+971 4 2434 882</div></div>
            </a>
            <a href="#" style={s.infoRow}>
              <div style={s.infoIco}>{pinIcon}</div>
              <div><div style={s.infoLabel}>{c.locationLabel}</div><div style={s.infoVal}>{c.locationVal}</div></div>
            </a>
          </div>
          <div style={s.badge}><span style={s.badgeDot}/>{c.badge}</div>
        </div>

        {/* RIGHT FORM */}
        <div style={s.card}>
          {status === 'success' ? (
            <div style={s.success}>
              <div style={s.successIco}>✓</div>
              <h3 style={s.successH}>{c.successH}</h3>
              <p style={s.successP}>{c.successP1} <strong>{form.name}</strong>{c.successP2} <strong>{form.email}</strong>{c.successP3}</p>
              <a href="/" style={s.backBtn}>{c.backBtn}</a>
            </div>
          ) : (
            <form onSubmit={submit} style={s.form}>
              <h2 style={s.formH}>{c.formH}</h2>
              <p style={s.formSub}>{c.formSub}</p>
              <div style={s.row2}>
                <div style={s.field}><label style={s.label}>{c.nameLabel}</label><input name="name" required placeholder={c.namePlaceholder} value={form.name} onChange={handle} style={s.input}/></div>
                <div style={s.field}><label style={s.label}>{c.companyLabel}</label><input name="company" required placeholder={c.companyPlaceholder} value={form.company} onChange={handle} style={s.input}/></div>
              </div>
              <div style={s.row2}>
                <div style={s.field}><label style={s.label}>{c.emailInputLabel}</label><input name="email" type="email" required placeholder={c.emailPlaceholder} value={form.email} onChange={handle} style={s.input}/></div>
                <div style={s.field}><label style={s.label}>{c.phoneInputLabel}</label><input name="phone" placeholder={c.phonePlaceholder} value={form.phone} onChange={handle} style={s.input}/></div>
              </div>
              <div style={s.field}>
                <label style={s.label}>{c.industryLabel}</label>
                <select name="industry" required value={form.industry} onChange={handle} style={{...s.input, color: form.industry ? '#0f172a' : '#94a3b8'}}>
                  <option value="" disabled>{c.industryPlaceholder}</option>
                  {c.industries.map(i => <option key={i} value={i}>{i}</option>)}
                </select>
              </div>
              <div style={s.field}><label style={s.label}>{c.messageLabel}</label><textarea name="message" rows={4} placeholder={c.messagePlaceholder} value={form.message} onChange={handle} style={{...s.input, resize:'vertical', minHeight:100}}/></div>
              {status === 'error' && <div style={s.errBox}>{c.errorMsg} <a href="mailto:sales@techbee.ae" style={{color:'#14b8a6'}}>sales@techbee.ae</a></div>}
              <button type="submit" disabled={status==='sending'} style={{...s.submitBtn, opacity: status==='sending' ? 0.7 : 1}}>
                {status === 'sending' ? c.sending : c.submitBtn}
              </button>
              <p style={s.disclaimer}>{c.disclaimer}</p>
            </form>
          )}
        </div>

      </div>
      <style>{`
        input::placeholder,textarea::placeholder{color:#94a3b8}
        input:focus,textarea:focus,select:focus{outline:none;border-color:#14b8a6!important;box-shadow:0 0 0 3px rgba(20,184,166,.12)}
        select option{color:#0f172a;background:#fff}
        @keyframes pulseDot{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(.75)}}
      `}</style>
    </section>
  )
}

const Ico = ({children}) => <svg viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{width:17,height:17}}>{children}</svg>
const emailIcon = <Ico><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></Ico>
const phoneIcon = <Ico><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 1.1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 5.52 5.52l1.17-1.17a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></Ico>
const pinIcon = <Ico><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></Ico>

const s = {
  wrap:{minHeight:'80vh',background:'#fff',position:'relative',overflow:'hidden',padding:'120px 5% 80px'},
  orb1:{position:'absolute',width:700,height:700,borderRadius:'50%',background:'radial-gradient(circle,rgba(20,184,166,.06) 0%,transparent 65%)',top:-200,right:-100,pointerEvents:'none'},
  orb2:{position:'absolute',width:400,height:400,borderRadius:'50%',background:'radial-gradient(circle,rgba(20,184,166,.04) 0%,transparent 70%)',bottom:0,left:-100,pointerEvents:'none'},
  grid:{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(20,184,166,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(20,184,166,.03) 1px,transparent 1px)',backgroundSize:'68px 68px'},
  inner:{position:'relative',zIndex:1,maxWidth:1180,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:72,alignItems:'start'},
  left:{paddingTop:8},
  tag:{display:'inline-block',fontSize:11.5,fontWeight:700,textTransform:'uppercase',letterSpacing:2,color:'#14b8a6',marginBottom:16},
  h1:{fontFamily:"'Sora',sans-serif",fontSize:'clamp(26px,3.4vw,44px)',fontWeight:700,color:'#0f172a',lineHeight:1.12,letterSpacing:-1,marginBottom:18},
  desc:{fontSize:15.5,color:'#1e4d47',lineHeight:1.78,marginBottom:36},
  infoList:{display:'flex',flexDirection:'column',gap:18,marginBottom:32},
  infoRow:{display:'flex',gap:14,alignItems:'center',textDecoration:'none'},
  infoIco:{width:42,height:42,minWidth:42,borderRadius:10,background:'rgba(20,184,166,.08)',border:'1px solid rgba(20,184,166,.25)',display:'flex',alignItems:'center',justifyContent:'center'},
  infoLabel:{fontSize:11,color:'#64748b',fontWeight:600,textTransform:'uppercase',letterSpacing:.8,marginBottom:2},
  infoVal:{fontSize:14.5,color:'#0f172a',fontWeight:500},
  badge:{display:'inline-flex',alignItems:'center',gap:8,background:'rgba(20,184,166,.07)',border:'1px solid rgba(20,184,166,.2)',borderRadius:40,padding:'7px 16px 7px 10px',fontSize:13,color:'#14b8a6',fontWeight:600},
  badgeDot:{width:8,height:8,borderRadius:'50%',background:'#14b8a6',display:'inline-block',animation:'pulseDot 2s ease-in-out infinite'},
  card:{background:'#fff',border:'1.5px solid rgba(20,184,166,.2)',borderRadius:18,padding:40,boxShadow:'0 8px 48px rgba(20,184,166,.1)'},
  form:{display:'flex',flexDirection:'column',gap:20},
  formH:{fontFamily:"'Sora',sans-serif",fontSize:22,fontWeight:700,color:'#0f172a',marginBottom:4,letterSpacing:-.5},
  formSub:{fontSize:13.5,color:'#64748b',marginBottom:4},
  row2:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16},
  field:{display:'flex',flexDirection:'column',gap:6},
  label:{fontSize:13,fontWeight:600,color:'#0f172a'},
  input:{padding:'11px 14px',border:'1.5px solid rgba(20,184,166,.2)',borderRadius:8,fontSize:14,color:'#0f172a',background:'#f8fffe',fontFamily:'Inter,sans-serif',transition:'border-color .2s,box-shadow .2s',width:'100%'},
  submitBtn:{background:'#14b8a6',color:'#fff',border:'none',borderRadius:9,padding:'14px',fontSize:15.5,fontWeight:700,cursor:'pointer',fontFamily:'Inter,sans-serif',transition:'background .2s'},
  disclaimer:{fontSize:12,color:'#94a3b8',textAlign:'center',lineHeight:1.6},
  errBox:{background:'#fff5f5',border:'1px solid rgba(220,38,38,.2)',borderRadius:8,padding:'12px 16px',fontSize:13.5,color:'#dc2626'},
  success:{display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',padding:'32px 16px',gap:16},
  successIco:{width:68,height:68,borderRadius:'50%',background:'rgba(20,184,166,.1)',border:'2px solid rgba(20,184,166,.3)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:30,color:'#14b8a6',fontWeight:700},
  successH:{fontFamily:"'Sora',sans-serif",fontSize:22,fontWeight:700,color:'#0f172a'},
  successP:{fontSize:14.5,color:'#1e4d47',lineHeight:1.7,maxWidth:340},
  backBtn:{display:'inline-flex',alignItems:'center',gap:6,color:'#14b8a6',textDecoration:'none',fontWeight:600,fontSize:14,marginTop:8},
}