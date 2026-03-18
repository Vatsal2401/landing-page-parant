export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-navy)', color: '#ffffff' }}>
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '56px 24px 40px',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: '48px',
          alignItems: 'start',
        }}
      >
        {/* Col 1: Brand */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-display), sans-serif',
              fontSize: '24px',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '12px',
              letterSpacing: '-0.02em',
            }}
          >
            Sparq
          </div>
          <p
            style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.6)',
              margin: '0 0 24px',
              maxWidth: '280px',
              lineHeight: 1.65,
            }}
          >
            Web Design & Development Studio — building digital products for ambitious businesses worldwide.
          </p>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', margin: 0 }}>
            © {new Date().getFullYear()} Sparq. All rights reserved.
          </p>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <p
            style={{
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              color: 'rgba(255,255,255,0.45)',
              textTransform: 'uppercase',
              margin: '0 0 16px',
            }}
          >
            Quick Links
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { label: 'Our Work', href: '/work' },
              { label: 'Services', href: '/#services' },
              { label: 'Pricing', href: '/#pricing' },
              { label: 'How It Works', href: '/#how-it-works' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.65)',
                  textDecoration: 'none',
                  transition: 'color 0.15s',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Col 3: Contact */}
        <div>
          <p
            style={{
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              color: 'rgba(255,255,255,0.45)',
              textTransform: 'uppercase',
              margin: '0 0 16px',
            }}
          >
            Contact
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a
              href="mailto:hello@sparq.studio"
              style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}
            >
              hello@sparq.studio
            </a>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}
            >
              WhatsApp Us
            </a>
            <a
              href="https://calendly.com/nirajsheladiya/15min"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '14px', color: 'rgba(167,139,250,0.9)', textDecoration: 'none', fontWeight: 600 }}
            >
              📅 Book a Call
            </a>
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>🇮🇳 Based in India, serving globally</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
