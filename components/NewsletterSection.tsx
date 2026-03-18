const NEWSLETTER_URL = 'https://programmerjokes.com/newsletter/';

export default function NewsletterSection() {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 50%, #f0f4ff 100%)',
        padding: '72px 24px',
        borderTop: '1px solid rgba(124,58,237,0.1)',
        borderBottom: '1px solid rgba(124,58,237,0.1)',
      }}
    >
      <div
        style={{
          maxWidth: '640px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(124,58,237,0.1)',
            border: '1px solid rgba(124,58,237,0.2)',
            borderRadius: '999px',
            padding: '4px 14px',
            marginBottom: '20px',
          }}
        >
          <span style={{ fontSize: '14px' }}>✉️</span>
          <span
            style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              color: 'var(--color-purple)',
              textTransform: 'uppercase',
            }}
          >
            Free Weekly Newsletter
          </span>
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-display), sans-serif',
            fontSize: 'clamp(24px, 3.5vw, 36px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: 'var(--color-navy)',
            margin: '0 0 16px',
            lineHeight: 1.2,
          }}
        >
          Build better. Ship faster.{' '}
          <span style={{ color: 'var(--color-purple)' }}>Grow smarter.</span>
        </h2>

        <p
          style={{
            fontSize: '16px',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            margin: '0 0 36px',
          }}
        >
          Every Wednesday, Niraj sends a short <strong>Tech + Growth</strong> newsletter — real experiments, AI tools, and growth
          tactics from building projects in the wild. No fluff.
        </p>

        <a
          href={NEWSLETTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '14px 32px',
            borderRadius: '10px',
            background: 'var(--color-purple)',
            color: '#ffffff',
            fontSize: '15px',
            fontWeight: 700,
            textDecoration: 'none',
            marginBottom: '16px',
          }}
        >
          ✉️ Subscribe free →
        </a>

        <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0 }}>
          Join 1,000+ readers · No spam · Unsubscribe any time
        </p>
      </div>

    </section>
  );
}
