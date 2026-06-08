import { useState } from 'react'

const faqs = [
  { q: 'What kind of businesses can use Webishopi?', a: 'Any business that sells physical products and generates quotations for customers — IT resellers, building material suppliers, furniture distributors, medical equipment suppliers, industrial equipment dealers, office equipment companies and more. If you have a catalogue and quote manually today, Webishopi automates the entire process.' },
  { q: 'How fast are quotations generated?', a: 'From the moment a customer submits their selection, a branded PDF quotation is generated and emailed in under 60 seconds. BOQ uploads typically complete in 30–90 seconds depending on document length and complexity.' },
  { q: 'Can we use our own branding and domain?', a: 'Yes — Webishopi is fully white-label. Your logo, brand colours, email templates and domain are applied throughout. Your customers see a seamless procurement portal that feels entirely like your own product.' },
  { q: 'How does the BOQ matching work?', a: 'Customers upload a PDF, Excel, or Word Bill of Quantities. Our AI reads the document, extracts every product name, reference number and quantity, then cross-references against your live catalogue. Matched items go straight to a quote PDF; unmatched items trigger an RFQ alert to your team.' },
  { q: 'Does our sales team stay in control of replies?', a: 'Absolutely. Every automated email goes through a one-click approval flow. Your sales exec receives the AI-drafted message and can approve, edit or reject it. Nothing is sent to a customer without explicit human sign-off.' },
  { q: 'Is there a setup fee, and how long does onboarding take?', a: 'Each plan includes a one-time setup fee covering catalogue import, brand customisation, email configuration and team training. Most businesses are fully live within 5–10 business days.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section style={s.wrap} id="faq">
      <div style={s.inner}>
        <span style={s.tag}>FAQ</span>
        <h2 style={s.h2}>Frequently asked questions</h2>
        <div style={s.list}>
          {faqs.map((f, i) => (
            <div key={i} style={{...s.item, ...(open===i ? s.itemOpen : {})}}>
              <button style={s.q} onClick={() => setOpen(open===i ? -1 : i)}>
                {f.q}
                <div style={{...s.arr, ...(open===i ? s.arrOpen : {})}}>
                  <svg viewBox="0 0 14 14" fill="none" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" style={{width:10,height:10}}>
                    <line x1="7" y1="2" x2="7" y2="12"/><line x1="2" y1="7" x2="12" y2="7"/>
                  </svg>
                </div>
              </button>
              {open === i && <div style={s.a}>{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const s = {
  wrap:{padding:'100px 5%',background:'#f8fffe'},
  inner:{maxWidth:1180,margin:'0 auto',textAlign:'center'},
  tag:{display:'inline-block',fontSize:11.5,fontWeight:700,textTransform:'uppercase',letterSpacing:2,color:'#14b8a6',marginBottom:14},
  h2:{fontFamily:"'Sora',sans-serif",fontSize:'clamp(28px,3.8vw,48px)',fontWeight:700,color:'#0f172a',lineHeight:1.12,letterSpacing:-1.2,marginBottom:0},
  list:{maxWidth:740,margin:'56px auto 0',display:'flex',flexDirection:'column',gap:3,textAlign:'left'},
  item:{border:'1.5px solid rgba(20,184,166,.15)',borderRadius:11,overflow:'hidden',boxShadow:'0 1px 4px rgba(0,0,0,.04)'},
  itemOpen:{borderColor:'#14b8a6'},
  q:{width:'100%',padding:'19px 22px',fontSize:15,fontWeight:600,color:'#0f172a',cursor:'pointer',display:'flex',justifyContent:'space-between',alignItems:'center',gap:16,userSelect:'none',background:'#fff',border:'none',fontFamily:'Inter,sans-serif',textAlign:'left'},
  arr:{width:20,height:20,minWidth:20,borderRadius:'50%',border:'1px solid rgba(20,184,166,.25)',display:'flex',alignItems:'center',justifyContent:'center',transition:'transform .25s',flexShrink:0},
  arrOpen:{transform:'rotate(45deg)',borderColor:'#14b8a6'},
  a:{padding:'0 22px 20px',fontSize:14,color:'#1e4d47',lineHeight:1.78,background:'#fff'},
}
