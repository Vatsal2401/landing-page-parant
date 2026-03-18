const ROWS = [
  {
    feature: 'Price',
    sparq: '₹3k–5k fixed',
    agency: '₹50k–5L+',
    freelancer: 'Variable / unclear',
    diy: '₹1k/yr + your time',
  },
  {
    feature: 'Delivery time',
    sparq: '5–7 days',
    agency: '4–12 weeks',
    freelancer: '2–6 weeks',
    diy: 'Weeks of learning',
  },
  {
    feature: 'Custom design',
    sparq: '✓ Yes',
    agency: '✓ Yes',
    freelancer: '~ Sometimes',
    diy: '✗ Templates only',
  },
  {
    feature: 'Full code ownership',
    sparq: '✓ Always',
    agency: '~ Often extra cost',
    freelancer: '~ Depends',
    diy: '✗ Locked in',
  },
  {
    feature: 'Post-launch support',
    sparq: '✓ 14–30 days free',
    agency: '✗ Paid retainer',
    freelancer: '✗ Usually none',
    diy: '✗ Community forums',
  },
  {
    feature: 'Single point of contact',
    sparq: '✓ Direct founder',
    agency: '✗ Account manager',
    freelancer: '✓ Yes',
    diy: 'N/A',
  },
  {
    feature: 'Free revisions',
    sparq: '✓ Until happy',
    agency: '✗ Charged per round',
    freelancer: '~ Limited',
    diy: 'N/A',
  },
];

const HEADERS = ['', 'Sparq ✦', 'Agency', 'Freelancer', 'DIY (Wix / Squarespace)'];

export default function ComparisonSection() {
  return (
    <section style={{ background: 'var(--bg-base)', padding: '80px 0' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p
            style={{
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              color: 'var(--color-purple)',
              textTransform: 'uppercase',
              margin: '0 0 12px',
            }}
          >
            Why Sparq
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display), sans-serif',
              fontSize: 'clamp(26px, 3.5vw, 40px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              margin: '0 0 16px',
              lineHeight: 1.15,
            }}
          >
            How we stack up against the alternatives
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', margin: 0 }}>
            Spoiler: you get agency quality without the agency price or timeline.
          </p>
        </div>

        {/* Table */}
        <div
          style={{
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid var(--bg-border)',
            boxShadow: '0 4px 24px rgba(14,39,59,0.07)',
          }}
          className="comparison-scroll"
        >
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '640px' }}>
            <thead>
              <tr>
                {HEADERS.map((h, i) => (
                  <th
                    key={i}
                    style={{
                      padding: i === 0 ? '16px 20px' : '16px 12px',
                      textAlign: i === 0 ? 'left' : 'center',
                      fontSize: i === 1 ? '13px' : '12px',
                      fontWeight: 700,
                      color: i === 1 ? '#ffffff' : 'var(--text-secondary)',
                      background: i === 1 ? 'var(--color-purple)' : 'var(--bg-surface)',
                      borderBottom: '1px solid var(--bg-border)',
                      letterSpacing: i === 1 ? '0.01em' : '0.02em',
                      textTransform: i === 0 ? 'uppercase' : 'none',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, ri) => (
                <tr key={ri} style={{ background: ri % 2 === 0 ? '#ffffff' : 'var(--bg-surface)' }}>
                  <td
                    style={{
                      padding: '14px 20px',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      borderBottom: ri < ROWS.length - 1 ? '1px solid var(--bg-border)' : 'none',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {row.feature}
                  </td>
                  {[row.sparq, row.agency, row.freelancer, row.diy].map((val, ci) => (
                    <td
                      key={ci}
                      style={{
                        padding: '14px 12px',
                        textAlign: 'center',
                        fontSize: '13px',
                        fontWeight: ci === 0 ? 600 : 400,
                        color: ci === 0
                          ? 'var(--color-purple)'
                          : val.startsWith('✗')
                          ? '#ef4444'
                          : val.startsWith('~')
                          ? '#f59e0b'
                          : 'var(--text-secondary)',
                        background: ci === 0 ? 'rgba(124,58,237,0.05)' : 'transparent',
                        borderBottom: ri < ROWS.length - 1 ? '1px solid var(--bg-border)' : 'none',
                        borderLeft: ci === 0 ? '2px solid rgba(124,58,237,0.2)' : 'none',
                      }}
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style>{`
        .comparison-scroll { overflow-x: auto; }
      `}</style>
    </section>
  );
}
