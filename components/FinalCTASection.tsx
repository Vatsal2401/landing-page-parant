const MINI_STATS = [
  { value: '9+', label: 'Projects Delivered' },
  { value: '< 7 days', label: 'Average Delivery' },
  { value: '100%', label: 'Client Satisfaction' },
];

const CALENDLY = 'https://calendly.com/nirajsheladiya/15min';

export default function FinalCTASection() {
  return (
    <section
      style={{
        background: 'var(--color-navy)',
        padding: '80px 24px',
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
          width: '700px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(124,58,237,0.2) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          maxWidth: '700px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.12em',
            color: 'rgba(167,139,250,1)',
            textTransform: 'uppercase',
            margin: '0 0 20px',
          }}
        >
          Ready to grow?
        </p>

        <h2
          style={{
            fontFamily: 'var(--font-display), sans-serif',
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: '#ffffff',
            margin: '0 0 20px',
            lineHeight: 1.1,
          }}
        >
          Let&apos;s build something your customers will love
        </h2>

        <p
          style={{
            fontSize: '17px',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.7,
            margin: '0 0 40px',
          }}
        >
          Message us on WhatsApp right now — get a free quote within 24 hours and your
          website live within the week.
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '56px',
          }}
        >
          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%27d%20like%20to%20get%20a%20free%20quote"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '16px 36px',
              borderRadius: '12px',
              background: 'var(--color-purple)',
              color: '#ffffff',
              fontSize: '16px',
              fontWeight: 700,
              textDecoration: 'none',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Chat with us on WhatsApp
          </a>

          <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>or</span>

          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '16px 36px',
              borderRadius: '12px',
              background: 'transparent',
              border: '1.5px solid rgba(167,139,250,0.7)',
              color: 'rgba(167,139,250,1)',
              fontSize: '16px',
              fontWeight: 700,
              textDecoration: 'none',
            }}
          >
            📅 Book a free 15-min call
          </a>
        </div>

        {/* Mini stats */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '48px',
            flexWrap: 'wrap',
          }}
        >
          {MINI_STATS.map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: 'var(--font-display), sans-serif',
                  fontSize: '24px',
                  fontWeight: 800,
                  color: '#ffffff',
                  lineHeight: 1,
                  marginBottom: '4px',
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
