const RESULTS = [
  {
    client: 'Dr. Mehta Dental Clinic',
    industry: '🦷 Healthcare',
    metric: '3×',
    label: 'more appointment bookings',
    detail: 'WhatsApp inquiries tripled within the first month of launch.',
    accentColor: '#1565c0',
  },
  {
    client: 'PowerZone Gym',
    industry: '🏋️ Fitness',
    metric: '2×',
    label: 'more membership sign-ups',
    detail: 'New member inquiries doubled after replacing the old static page.',
    accentColor: '#e8260a',
  },
  {
    client: 'Bright Minds Coaching',
    industry: '📚 Education',
    metric: '2×',
    label: 'admission enquiries in month one',
    detail: 'Organic student leads doubled within 30 days of going live.',
    accentColor: '#0d5c63',
  },
];

export default function ResultsStrip() {
  return (
    <section
      style={{
        background: 'var(--color-navy)',
        padding: '72px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '900px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p
            style={{
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              color: 'rgba(167,139,250,1)',
              textTransform: 'uppercase',
              margin: '0 0 12px',
            }}
          >
            Real Results
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display), sans-serif',
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            What happens after we go live
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
          className="results-grid"
        >
          {RESULTS.map((r) => (
            <div
              key={r.client}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderTop: `3px solid ${r.accentColor}`,
                borderRadius: '16px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>
                {r.industry}
              </span>
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-display), sans-serif',
                    fontSize: '48px',
                    fontWeight: 800,
                    color: '#ffffff',
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                  }}
                >
                  {r.metric}
                </span>
                <p
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.75)',
                    margin: '6px 0 0',
                  }}
                >
                  {r.label}
                </p>
              </div>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.6 }}>
                {r.detail}
              </p>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.35)',
                  marginTop: 'auto',
                  paddingTop: '8px',
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                — {r.client}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .results-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
