const particles = [
  { top: '12%', left: '8%', size: 3, opacity: 0.6 },
  { top: '25%', left: '15%', size: 2, opacity: 0.4 },
  { top: '45%', left: '5%', size: 4, opacity: 0.5 },
  { top: '60%', left: '12%', size: 2, opacity: 0.3 },
  { top: '18%', left: '55%', size: 2, opacity: 0.35 },
  { top: '35%', left: '72%', size: 3, opacity: 0.45 },
  { top: '55%', left: '68%', size: 2, opacity: 0.4 },
  { top: '70%', left: '45%', size: 3, opacity: 0.35 },
  { top: '80%', left: '25%', size: 2, opacity: 0.3 },
  { top: '8%', left: '85%', size: 2, opacity: 0.25 },
]

export function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  )
}
