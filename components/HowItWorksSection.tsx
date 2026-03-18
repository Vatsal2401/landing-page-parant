const STEPS = [
  {
    number: '01',
    title: 'Tell us what you need',
    description:
      "Drop us a WhatsApp message or fill out a quick brief. We'll understand your business, goals, and budget in a 15-minute call.",
  },
  {
    number: '02',
    title: 'We design & build',
    description:
      "Our team gets to work — design, copy, development. You'll see progress updates every step of the way. No surprises.",
  },
  {
    number: '03',
    title: 'Launch & grow',
    description:
      'We go live, hand over everything, and stay on for 30 days of free support. Your customers start finding you right away.',
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      style={{ background: 'var(--color-navy)', padding: '80px 0', position: 'relative', overflow: 'hidden' }}
    >
      {/* Subtle background glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '500px',
          background: 'radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
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
            How It Works
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display), sans-serif',
              fontSize: 'clamp(26px, 3.5vw, 40px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              margin: '0 0 16px',
              lineHeight: 1.15,
            }}
          >
            From brief to live in 3 steps
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.55)', margin: 0 }}>
            Simple process. Fast results. No agency drama.
          </p>
        </div>

        {/* Steps grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
            position: 'relative',
          }}
          className="how-it-works-grid"
        >
          {/* Dashed connector line (desktop only) */}
          <div
            className="connector-line"
            style={{
              position: 'absolute',
              top: '36px',
              left: 'calc(16.67% + 24px)',
              right: 'calc(16.67% + 24px)',
              height: '1px',
              borderTop: '2px dashed rgba(124,58,237,0.35)',
              pointerEvents: 'none',
            }}
          />

          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className="animate-fade-up"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                animationDelay: `${i * 100}ms`,
                background: 'rgba(255,255,255,0.04)',
                borderRadius: '16px',
                border: '1px solid rgba(124,58,237,0.18)',
                borderTop: '2px solid rgba(124,58,237,0.5)',
                padding: '32px 28px',
                position: 'relative',
              }}
            >
              {/* Step number circle */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  border: '2px solid rgba(124,58,237,0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(124,58,237,0.1)',
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display), sans-serif',
                    fontSize: '18px',
                    fontWeight: 800,
                    color: 'rgba(167,139,250,1)',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {step.number}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display), sans-serif',
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#ffffff',
                  margin: 0,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.55)',
                  margin: 0,
                  lineHeight: 1.7,
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .how-it-works-grid {
            grid-template-columns: 1fr !important;
          }
          .connector-line {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
