export default function StatsBar({ t }) {
  const stats = t.statsBar
  return (
    <div style={s.bar}>
      <div style={s.row}>
        {stats.map((st, i) => (
          <div key={i} style={{...s.item, borderRight: i < stats.length-1 ? '1px solid rgba(20,184,166,.18)' : 'none'}}>
            <span style={s.n}>
              {String(st.n).replace('<','').replace('%','').replace('ث','').replace('s','')}
              {String(st.n).includes('<') && <em style={s.em}>{String(st.n).includes('ث') ? 'ث' : 's'}</em>}
              {String(st.n).includes('%') && <em style={s.em}>%</em>}
            </span>
            <span style={s.l}>{st.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
const s={bar:{borderTop:'1px solid rgba(20,184,166,.18)',borderBottom:'1px solid rgba(20,184,166,.18)',background:'#f0fdfb'},row:{maxWidth:1180,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(4,1fr)'},item:{padding:'40px 24px',textAlign:'center'},n:{fontFamily:"'Sora',sans-serif",fontSize:36,fontWeight:700,color:'#0f172a',display:'block',letterSpacing:-1.2},em:{color:'#14b8a6',fontStyle:'normal'},l:{fontSize:13,color:'#64748b',fontWeight:500,marginTop:4,display:'block'}}
