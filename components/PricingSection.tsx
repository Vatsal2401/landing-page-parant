'use client';

import { useState } from 'react';

const PLANS = [
  {
    name: 'Starter',
    priceINR: '₹2,999',
    priceUSD: '$39',
    description: 'Perfect for local businesses that need a professional online presence fast.',
    features: [
      '5-section landing page',
      'Mobile-first responsive design',
      'WhatsApp & call CTA integration',
      'Basic SEO setup',
      'Delivered in 5 days',
      '14-day support included',
    ],
    cta: 'Get a Free Quote →',
    highlighted: false,
  },
  {
    name: 'Business',
    priceINR: '₹4,999',
    priceUSD: '$59',
    description: 'For businesses that want more pages, more polish, and a higher-converting site.',
    features: [
      'Up to 10 sections / multi-page',
      'Custom animations & interactions',
      'Google Analytics + Search Console',
      'Advanced SEO & performance audit',
      'Delivered in 7 days',
      '30-day support included',
    ],
    cta: 'Get a Free Quote →',
    highlighted: true,
  },
  {
    name: 'Custom',
    priceINR: 'Let\'s talk',
    priceUSD: 'Let\'s talk',
    description: 'SaaS products, mobile apps, e-commerce, or anything that needs a full build.',
    features: [
      'Full-stack web or mobile app',
      'Custom AI integrations',
      'Auth, payments & dashboards',
      'Dedicated project manager',
      'Timeline based on scope',
      'Ongoing retainer available',
    ],
    cta: 'Book a Discovery Call →',
    highlighted: false,
    isCustom: true,
  },
];

const TRUST = [
  '✓ One-time fixed price — no hidden fees',
  '✓ Full source code ownership',
  '✓ Free revisions until you\'re happy',
  '✓ Hosting guidance included',
];

export default function PricingSection() {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  return (
    <section id="pricing" style={{ background: 'var(--bg-surface)', padding: '80px 0' }}>
      <div style={{ maxWidth: '1060px', margin: '0 auto', padding: '0 24px' }}>
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
            Pricing
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
            Simple, honest pricing
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', margin: '0 0 28px' }}>
            No subscriptions. No surprises. Pay once, own it forever.
          </p>

          {/* Currency toggle */}
          <div style={{ display: 'inline-flex', background: 'var(--bg-base)', border: '1px solid var(--bg-border)', borderRadius: '10px', padding: '4px', gap: '4px' }}>
            {(['INR', 'USD'] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                style={{
                  padding: '7px 20px',
                  borderRadius: '7px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: 700,
                  background: currency === c ? 'var(--color-purple)' : 'transparent',
                  color: currency === c ? '#fff' : 'var(--text-secondary)',
                  transition: 'all 0.2s',
                }}
              >
                {c === 'INR' ? '₹ INR' : '$ USD'}
              </button>
            ))}
          </div>
        </div>

        {/* Plans */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            marginBottom: '40px',
          }}
          className="pricing-grid"
        >
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              style={{
                background: plan.highlighted ? 'var(--color-navy)' : '#ffffff',
                border: plan.highlighted
                  ? '2px solid var(--color-purple)'
                  : plan.isCustom
                  ? '2px dashed var(--bg-border)'
                  : '1px solid var(--bg-border)',
                borderRadius: 'var(--card-r)',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                position: 'relative',
              }}
            >
              {plan.highlighted && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-13px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    padding: '4px 16px',
                    borderRadius: '999px',
                    background: 'var(--color-purple)',
                    color: '#ffffff',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Most Popular
                </div>
              )}

              <div>
                <p
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: plan.highlighted ? 'rgba(167,139,250,1)' : 'var(--color-purple)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    margin: '0 0 8px',
                  }}
                >
                  {plan.name}
                </p>
                <div
                  style={{
                    fontFamily: 'var(--font-display), sans-serif',
                    fontSize: plan.isCustom ? '28px' : '40px',
                    fontWeight: 800,
                    color: plan.highlighted ? '#ffffff' : 'var(--text-primary)',
                    lineHeight: 1,
                    marginBottom: '10px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {currency === 'INR' ? plan.priceINR : plan.priceUSD}
                </div>
                <p
                  style={{
                    fontSize: '14px',
                    color: plan.highlighted ? 'rgba(255,255,255,0.6)' : 'var(--text-secondary)',
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {plan.description}
                </p>
              </div>

              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                {plan.features.map((feat) => (
                  <li
                    key={feat}
                    style={{
                      display: 'flex',
                      gap: '10px',
                      fontSize: '14px',
                      color: plan.highlighted ? 'rgba(255,255,255,0.8)' : 'var(--text-secondary)',
                      lineHeight: 1.4,
                    }}
                  >
                    <span style={{ color: 'var(--status-live)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href={
                  plan.isCustom
                    ? 'https://calendly.com/nirajsheladiya/15min'
                    : 'https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%27d%20like%20to%20get%20a%20free%20quote'
                }
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '13px 24px',
                  borderRadius: '10px',
                  background: plan.highlighted ? 'var(--color-purple)' : 'transparent',
                  border: plan.highlighted
                    ? 'none'
                    : plan.isCustom
                    ? '2px solid var(--color-navy)'
                    : '2px solid var(--color-purple)',
                  color: plan.highlighted
                    ? '#ffffff'
                    : plan.isCustom
                    ? 'var(--color-navy)'
                    : 'var(--color-purple)',
                  fontSize: '14px',
                  fontWeight: 700,
                  textDecoration: 'none',
                }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Trust bullets */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '16px 32px',
          }}
        >
          {TRUST.map((item) => (
            <span key={item} style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: 500 }}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
