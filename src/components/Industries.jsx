const industries = [
  { label: 'IT & Technology Resellers', icon: <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/> },
  { label: 'Building Material Suppliers', icon: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></> },
  { label: 'Furniture Suppliers', icon: <><path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M12 7v10"/></> },
  { label: 'Medical Equipment Suppliers', icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2"/> },
  { label: 'Industrial Equipment Suppliers', icon: <><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></> },
  { label: 'Office Equipment Suppliers', icon: <><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></> },
  { label: 'Wholesale & Distribution', icon: <><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></> },
  { label: 'Electrical & Hardware Suppliers', icon: <><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></> },
  { label: 'Safety & Security Equipment', icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/> },
]

export default function Industries() {
  return (
    <section style={s.wrap}>
      <div style={s.inner}>
        <p style={s.label}>Built for every product-based business</p>
        <p style={s.desc}>
          Any business that sells physical products and quotes customers manually can run smarter with Webishopi — from single-branch resellers to multi-location distributors across the GCC.
        </p>
        <div style={s.grid}>
          {industries.map(({ label, icon }) => (
            <div key={label} style={s.pill} className="ind-pill">
              <svg viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{width:16,height:16,flexShrink:0}}>
                {icon}
              </svg>
              <span style={s.pillTxt}>{label}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .ind-pill { transition: all .2s; cursor: default; }
        .ind-pill:hover { border-color: #14b8a6 !important; background: rgba(20,184,166,0.08) !important; box-shadow: 0 4px 16px rgba(20,184,166,.1); }
        .ind-pill:hover span { color: #14b8a6 !important; }
      `}</style>
    </section>
  )
}

const s = {
  wrap:{padding:'56px 5%',borderTop:'1px solid rgba(20,184,166,0.18)',background:'#fff'},
  inner:{maxWidth:1180,margin:'0 auto',textAlign:'center'},
  label:{fontSize:11.5,color:'#64748b',fontWeight:600,letterSpacing:1.8,textTransform:'uppercase',marginBottom:16},
  desc:{fontSize:15,color:'#1e4d47',maxWidth:620,margin:'0 auto 32px',lineHeight:1.7},
  grid:{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12,maxWidth:860,margin:'0 auto'},
  pill:{background:'#fff',border:'1.5px solid rgba(20,184,166,.2)',borderRadius:10,padding:'13px 20px',display:'flex',alignItems:'center',gap:10,boxShadow:'0 1px 4px rgba(0,0,0,.04)'},
  pillTxt:{fontSize:13.5,color:'#0f172a',fontWeight:500,textAlign:'left',lineHeight:1.3},
}
