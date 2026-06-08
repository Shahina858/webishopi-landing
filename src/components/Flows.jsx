const flows = [
  { label: 'Catalogue Quoting',   title: 'Instant Product Quotation',   desc: 'Customer searches, selects products and submits. A branded PDF is generated and emailed instantly — sales exec auto-copied, quote saved to your records.' },
  { label: 'Sourcing Request',    title: 'Request for Quotation (RFQ)', desc: 'Product not listed? Customer submits an RFQ with optional attachments. They get an instant acknowledgment; your team receives the full brief to source manually.' },
  { label: 'Requirement Capture', title: 'Notes-Driven Requirements',   desc: 'Customers describe their needs in free text. Requirements are highlighted and structured in the team notification for clear, fast review.' },
  { label: 'Document Intelligence',title: 'Full BOQ Quotation',         desc: 'Customer uploads a Bill of Quantities. AI reads every line, matches to your catalogue, and delivers a complete PDF quote in under 60 seconds.' },
  { label: 'Partial Fulfilment',  title: 'Partial BOQ Quote',           desc: 'When only some items match, the customer receives a partial PDF for available products. Sales is alerted with a list of unmatched items to source.' },
  { label: 'Manual Sourcing',     title: 'Complete Quote Request',      desc: 'Buyer requests a full quote beyond catalogue. Customer gets an acknowledgment; your team receives a structured sourcing task for all items.' },
  { label: 'Email Intelligence',  title: 'Autonomous Reply Agent',      desc: 'Replies to active quote threads are detected instantly. The AI updates quotes or drafts responses — routed to your exec for approval before anything is sent.' },
  { label: 'Outreach Automation', title: 'Campaign Reply Handling',     desc: 'Customers replying to sales campaign emails receive the same intelligent draft-and-approve treatment — no lead goes cold.' },
  { label: 'Access Control',      title: 'New Customer Approval',       desc: 'First-time buyers trigger a one-click exec decision. Approve: PDF sent, account activated. Reject: a professional response is sent automatically.' },
]

export default function Flows() {
  return (
    <section style={s.wrap} id="flows">
      <div style={s.inner}>
        <span style={s.tag}>Procurement Flows</span>
        <h2 style={s.h2}>Every scenario. Fully automated.</h2>
        <p style={s.p}>Nine end-to-end flows map every customer procurement path — from first visit to closed deal — without a single manual touchpoint.</p>
        <div style={s.grid}>
          {flows.map(f => (
            <div key={f.title} style={s.card} className="flow-card">
              <div style={s.flabel}>{f.label}</div>
              <div style={s.fth}>{f.title}</div>
              <div style={s.ftp}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .flow-card { transition: all .25s; }
        .flow-card:hover { border-color: #14b8a6 !important; background: #f0fdfb !important; transform: translateY(-3px); box-shadow: 0 8px 32px rgba(20,184,166,.12) !important; }
      `}</style>
    </section>
  )
}

const s = {
  wrap:{padding:'100px 5%',background:'#f8fffe'},
  inner:{maxWidth:1180,margin:'0 auto'},
  tag:{display:'inline-block',fontSize:11.5,fontWeight:700,textTransform:'uppercase',letterSpacing:2,color:'#14b8a6',marginBottom:14},
  h2:{fontFamily:"'Sora',sans-serif",fontSize:'clamp(28px,3.8vw,48px)',fontWeight:700,color:'#0f172a',lineHeight:1.12,letterSpacing:-1.2,marginBottom:16},
  p:{fontSize:16.5,color:'#1e4d47',lineHeight:1.78,maxWidth:540},
  grid:{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:14,marginTop:56},
  card:{background:'#fff',border:'1.5px solid rgba(20,184,166,.15)',borderRadius:13,padding:28,boxShadow:'0 1px 6px rgba(0,0,0,.04)'},
  flabel:{fontSize:10.5,fontWeight:700,color:'#14b8a6',letterSpacing:1.6,textTransform:'uppercase',marginBottom:12},
  fth:{fontSize:15.5,fontWeight:600,color:'#0f172a',marginBottom:8,fontFamily:"'Sora',sans-serif",letterSpacing:-.2},
  ftp:{fontSize:13.5,color:'#1e4d47',lineHeight:1.68},
}
