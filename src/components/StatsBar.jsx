const stats = [
  { n: '<60s', label: 'Average quote delivery time' },
  { n: '9',    label: 'End-to-end automation flows' },
  { n: '0',    label: 'Manual steps to generate a quote' },
  { n: '100%', label: 'White-label & brand-customisable' },
]

export default function StatsBar() {
  return (
    <div style={s.bar}>
      <div style={s.row}>
        {stats.map((st, i) => (
          <div key={st.label} style={{...s.item, borderRight: i < stats.length-1 ? '1px solid rgba(20,184,166,.18)' : 'none'}}>
            <span style={s.n}>{st.n.replace('<','').replace('%','').replace('s','')}{st.n.includes('<') && <em style={s.em}>s</em>}{st.n.includes('%') && <em style={s.em}>%</em>}</span>
            <span style={s.l}>{st.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const s = {
  bar:{borderTop:'1px solid rgba(20,184,166,.18)',borderBottom:'1px solid rgba(20,184,166,.18)',background:'#f0fdfb'},
  row:{maxWidth:1180,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(4,1fr)'},
  item:{padding:'40px 24px',textAlign:'center'},
  n:{fontFamily:"'Sora',sans-serif",fontSize:36,fontWeight:700,color:'#0f172a',display:'block',letterSpacing:-1.2},
  em:{color:'#14b8a6',fontStyle:'normal'},
  l:{fontSize:13,color:'#64748b',fontWeight:500,marginTop:4,display:'block'},
}
