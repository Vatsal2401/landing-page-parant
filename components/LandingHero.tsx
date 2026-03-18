import Image from 'next/image';

export default function LandingHero() {
  return (
    <section
      style={{
        position: 'relative',
        background: 'var(--color-navy)',
        overflow: 'hidden',
        paddingTop: '64px', /* navbar height */
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(ellipse, rgba(124,58,237,0.25) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="hero-grid"
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '80px 24px 0',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
          alignItems: 'center',
        }}
      >
        {/* Left: copy */}
        <div style={{ minWidth: 0 }}>
          {/* Badge */}
          <div
            className="animate-fade-up"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '999px',
              background: 'rgba(124,58,237,0.15)',
              border: '1px solid rgba(124,58,237,0.3)',
              fontSize: '12px',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.85)',
              marginBottom: '24px',
              animationDelay: '0ms',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'var(--status-live)',
                display: 'inline-block',
                boxShadow: '0 0 6px rgba(34,197,94,0.8)',
              }}
            />
            Web Design & Development Studio
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-up"
            style={{
              fontFamily: 'var(--font-display), sans-serif',
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              margin: '0 0 24px',
              animationDelay: '60ms',
            }}
          >
            A simpler, smarter way to{' '}
            <span style={{ color: 'rgba(167,139,250,1)' }}>grow your business</span>{' '}
            online
          </h1>

          {/* Description */}
          <p
            className="animate-fade-up"
            style={{
              fontSize: '17px',
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.7,
              margin: '0 0 36px',
              maxWidth: '480px',
              animationDelay: '120ms',
            }}
          >
            We build stunning landing pages, mobile apps, and full-stack products that
            turn visitors into customers — for ambitious businesses worldwide.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-up"
            style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', animationDelay: '180ms' }}
          >
            <a
              href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                borderRadius: '10px',
                background: 'var(--color-purple)',
                color: '#ffffff',
                fontSize: '15px',
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              Get a Free Quote →
            </a>
            <a
              href="/work"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                borderRadius: '10px',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#ffffff',
                fontSize: '15px',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              View Our Work
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="animate-fade-up"
            style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '20px', animationDelay: '240ms' }}
          >
            {['No agency overhead', 'Fixed pricing', 'Delivered in days'].map((item) => (
              <span
                key={item}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontSize: '12px',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.75)',
                  background: 'rgba(34,197,94,0.12)',
                  border: '1px solid rgba(34,197,94,0.25)',
                  borderRadius: '999px',
                  padding: '4px 12px',
                }}
              >
                <span style={{ color: '#22c55e', fontWeight: 700 }}>✓</span> {item}
              </span>
            ))}
          </div>

          {/* Trusted by — scrolling marquee */}
          <div className="animate-fade-up" style={{ marginTop: '32px', animationDelay: '300ms' }}>
            <p style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', margin: '0 0 12px' }}>
              Recognised by
            </p>
            <div style={{ overflow: 'hidden', maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
              <div className="marquee-track">
                {[
                  { name: 'HubSpot', color: '#ff7a59' },
                  { name: 'MicroAcquire', color: '#5865f2' },
                  { name: 'Bitbaza.io', color: '#7c3aed' },
                  { name: 'AutoReels', color: '#a78bfa' },
                  { name: 'HubSpot', color: '#ff7a59' },
                  { name: 'MicroAcquire', color: '#5865f2' },
                  { name: 'Bitbaza.io', color: '#7c3aed' },
                  { name: 'AutoReels', color: '#a78bfa' },
                ].map((brand, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '13px',
                      fontWeight: 700,
                      color: brand.color,
                      opacity: 0.8,
                      letterSpacing: '-0.01em',
                      padding: '0 24px',
                      flexShrink: 0,
                    }}
                  >
                    {brand.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: real project screenshot in browser frame */}
        <div
          className="animate-fade-up hero-visual"
          style={{
            width: '100%',
            minWidth: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            animationDelay: '100ms',
            position: 'relative',
          }}
        >
          {/* Browser chrome + screenshot */}
          <div style={{
            width: '100%',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.12)',
            boxShadow: '0 24px 64px rgba(0,0,0,0.55)',
          }}>
            {/* Title bar */}
            <div style={{
              background: '#1e2235',
              padding: '9px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}>
              <div style={{ display: 'flex', gap: '5px', flexShrink: 0 }}>
                <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#ff5f57', display: 'block' }} />
                <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#febc2e', display: 'block' }} />
                <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#28c840', display: 'block' }} />
              </div>
              <div style={{
                flex: 1,
                background: 'rgba(255,255,255,0.07)',
                borderRadius: '5px',
                padding: '3px 10px',
                fontSize: '11px',
                color: 'rgba(255,255,255,0.35)',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}>
                sparq.studio/dr-mehta-dental
              </div>
            </div>

            {/* Screenshot image */}
            <div style={{ overflow: 'hidden', lineHeight: 0 }}>
              <Image
                src="/screenshots/programmer-jokes/thumb-v2.png"
                alt="Sample project — Programmer Jokes"
                width={1536}
                height={900}
                style={{ width: '100%', height: 'auto', display: 'block', objectPosition: 'top' }}
                priority
              />
            </div>
          </div>

          {/* Inline trust pills below frame */}
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { icon: '🚀', text: 'Launched in 7 days' },
              { icon: '⭐', text: '5.0 client rating' },
              { icon: '✅', text: 'Full code ownership' },
            ].map((p) => (
              <span
                key={p.text}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  fontSize: '12px',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.75)',
                  whiteSpace: 'nowrap',
                }}
              >
                {p.icon} {p.text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave fade */}
      <div
        style={{
          height: '80px',
          background: 'linear-gradient(to bottom, transparent, var(--bg-base))',
          marginTop: '80px',
        }}
      />

      <style>{`
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 18s linear infinite;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (max-width: 860px) {
          .hero-visual { display: none !important; }
          .hero-grid   { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
