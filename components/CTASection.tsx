export default function CTASection() {
  return (
    <section
      style={{
        position: 'relative',
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--bg-border)',
        overflow: 'hidden',
      }}
    >
      {/* Purple glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '-40px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '300px',
          background: 'radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '80px 24px',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          alignItems: 'center',
          gap: '48px',
        }}
      >
        <div>
          <p
            style={{
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              color: 'var(--color-purple)',
              textTransform: 'uppercase',
              margin: '0 0 16px',
            }}
          >
            Let&apos;s collaborate
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display), sans-serif',
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              margin: '0 0 16px',
              lineHeight: 1.1,
            }}
          >
            Ready to build something great?
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              margin: 0,
              maxWidth: '500px',
            }}
          >
            Tell us about your project. We&apos;ll get back to you within 24 hours with a clear
            plan and honest pricing.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-end' }}>
          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 32px',
              borderRadius: '10px',
              background: 'var(--color-purple)',
              color: '#ffffff',
              fontSize: '15px',
              fontWeight: 700,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            Start a Project →
          </a>
          <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
            hello@sparq.studio
          </span>
        </div>
      </div>
    </section>
  );
}
