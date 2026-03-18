'use client';

import { useState } from 'react';

const FAQS = [
  {
    q: 'How long does a project take?',
    a: 'Most websites are live within 5–7 days. Complex SaaS products or custom web apps typically take 3–6 weeks. We give you a firm timeline before we start.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes — we work fully remotely and have delivered projects for clients in the US, UK, UAE, and across Asia. Time zones have never been a blocker.',
  },
  {
    q: 'What do I need to provide to get started?',
    a: "Just a rough brief — your business name, what you do, and who your customers are. We handle research, copy, design, and development. You don't need to be technical.",
  },
  {
    q: 'Can I see the code and own it?',
    a: 'Absolutely. Full source code ownership is included with every project. No monthly lock-in, no proprietary CMS you can never leave. It\'s your website.',
  },
  {
    q: 'Do you offer post-launch support?',
    a: '14–30 days of post-launch support is included in every plan. Ongoing maintenance retainers are also available if you want us to handle updates, hosting, and monitoring.',
  },
  {
    q: 'Can you redesign an existing website?',
    a: "Yes — bring your URL and we'll audit it, identify what's hurting your conversions, and rebuild it from the ground up. Redesigns follow the same fast turnaround as new builds.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section style={{ background: '#ffffff', padding: '80px 0' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
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
            FAQ
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
            Questions we get a lot
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', margin: 0 }}>
            Everything you need to know before reaching out.
          </p>
        </div>

        {/* Accordion */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  borderBottom: '1px solid var(--bg-border)',
                  borderTop: i === 0 ? '1px solid var(--bg-border)' : 'none',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    padding: '20px 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display), sans-serif',
                      fontSize: '16px',
                      fontWeight: 600,
                      color: isOpen ? 'var(--color-purple)' : 'var(--text-primary)',
                      lineHeight: 1.4,
                      textDecoration: isOpen ? 'underline var(--color-purple)' : 'none',
                      textUnderlineOffset: '3px',
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      flexShrink: 0,
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      border: '1.5px solid var(--color-purple)',
                      color: 'var(--color-purple)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '18px',
                      fontWeight: 400,
                      lineHeight: 1,
                    }}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <div
                  style={{
                    maxHeight: isOpen ? '300px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease',
                  }}
                >
                  <p
                    style={{
                      fontSize: '15px',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.75,
                      margin: '0 0 20px',
                      paddingRight: '44px',
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
