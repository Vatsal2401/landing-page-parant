'use client';

import { useState, useEffect, useRef } from 'react';

const VISIBLE = 3;

const RAW = [
  {
    name: 'Dharmesh Shah',
    role: 'CEO — HubSpot',
    initials: 'DS',
    color: '#ff7a59',
    quote:
      'Love to see that you\'re into coding and just getting products out there.',
    stars: 5,
  },
  {
    name: 'Andrew Gazdecki',
    role: 'CEO — MicroAcquire',
    initials: 'AG',
    color: '#5865f2',
    quote:
      'Thanks Niraj, really appreciate you supporting the book.',
    stars: 5,
  },
  {
    name: 'Suraj Venkat',
    role: 'CEO, Aten Ventures LLC · Founder, Bitbaza.io',
    initials: 'SV',
    color: '#7c3aed',
    quote:
      'Niraj is great. Creative and knows the art of distribution. I would highly recommend Niraj.',
    stars: 5,
  },
  {
    name: 'Badal Pandey',
    role: 'Founder — XLR Media',
    initials: 'BP',
    color: '#0891b2',
    quote:
      'Niraj is really great to work with. He is creative & doesn\'t need much involvement to get the work done smoothly. I would highly recommend Niraj.',
    stars: 5,
  },
  {
    name: 'Rahul Mehta',
    role: 'Owner, Dr. Mehta Dental Clinic',
    initials: 'RM',
    color: '#1565c0',
    quote:
      'Our website was up in 5 days and the WhatsApp bookings started coming in that same week. The team really understood what a local clinic needs.',
    stars: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Director, Bright Minds Coaching',
    initials: 'PS',
    color: '#0d5c63',
    quote:
      'They built exactly what we needed — clean, professional, and it converts. Our admission enquiries doubled in the first month.',
    stars: 5,
  },
  {
    name: 'Arjun Singh',
    role: 'Founder, PowerZone Gym',
    initials: 'AS',
    color: '#e8260a',
    quote:
      'The landing page is fire. It looks exactly like those big gym chains but we paid a fraction of the price. Worth every rupee.',
    stars: 5,
  },
];

// Clone first VISIBLE items at end for seamless infinite loop
const ITEMS = [...RAW, ...RAW.slice(0, VISIBLE)];
const TOTAL = ITEMS.length;

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [animated, setAnimated] = useState(true);
  const [paused, setPaused] = useState(false);
  const resetPending = useRef(false);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setAnimated(true);
      setIndex((i) => i + 1);
    }, 3800);
    return () => clearInterval(id);
  }, [paused]);

  // Seamless loop: once we land on the clone zone, jump back without animation
  useEffect(() => {
    if (index >= RAW.length) {
      resetPending.current = true;
      const id = setTimeout(() => {
        setAnimated(false);
        setIndex(0);
        resetPending.current = false;
      }, 520); // just after CSS transition (500ms)
      return () => clearTimeout(id);
    }
  }, [index]);

  const goTo = (i: number) => {
    setAnimated(true);
    setIndex(i);
  };

  const prev = () => {
    setAnimated(true);
    setIndex((i) => (i <= 0 ? RAW.length - 1 : i - 1));
  };

  const next = () => {
    setAnimated(true);
    setIndex((i) => i + 1);
  };

  // translateX: each card = 1/TOTAL of track; move by index cards
  const translatePct = -(index / TOTAL) * 100;

  const activeIndex = index % RAW.length;

  return (
    <section style={{ background: 'var(--bg-base)', padding: '80px 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
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
            Testimonials
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
            Trusted by founders &amp; CEOs worldwide
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', margin: 0 }}>
            From global SaaS leaders to local business owners — here's what they say.
          </p>
        </div>

        {/* Carousel */}
        <div
          style={{ overflow: 'hidden', margin: '0 -12px' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            style={{
              display: 'flex',
              width: `${(TOTAL / VISIBLE) * 100}%`,
              transform: `translateX(${translatePct}%)`,
              transition: animated ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
            }}
          >
            {ITEMS.map((t, i) => (
              <div
                key={i}
                style={{
                  width: `${100 / TOTAL}%`,
                  padding: '0 12px',
                  boxSizing: 'border-box',
                }}
              >
                <div
                  style={{
                    background: '#ffffff',
                    border: '1px solid var(--bg-border)',
                    borderRadius: 'var(--card-r)',
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '18px',
                    height: '100%',
                    boxSizing: 'border-box',
                    borderTop: '3px solid var(--color-purple)',
                    boxShadow: '0 2px 12px rgba(14,39,59,0.06)',
                  }}
                >
                  {/* Stars */}
                  <div style={{ display: 'flex', gap: '3px' }}>
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <span key={j} style={{ color: '#f59e0b', fontSize: '15px' }}>★</span>
                    ))}
                  </div>

                  {/* Quote */}
                  <p
                    style={{
                      fontSize: '15px',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.75,
                      margin: 0,
                      flex: 1,
                      fontStyle: 'italic',
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        background: t.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px',
                        fontWeight: 700,
                        color: '#fff',
                        flexShrink: 0,
                        letterSpacing: '0.02em',
                      }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {t.name}
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginTop: '36px',
          }}
        >
          {/* Prev arrow */}
          <button
            onClick={prev}
            aria-label="Previous"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: '1px solid var(--bg-border)',
              background: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              color: 'var(--text-secondary)',
              flexShrink: 0,
            }}
          >
            ‹
          </button>

          {/* Dot indicators */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {RAW.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to ${i + 1}`}
                style={{
                  width: i === activeIndex ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '999px',
                  background: i === activeIndex ? 'var(--color-purple)' : 'var(--bg-border)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'width 0.3s ease, background 0.3s ease',
                }}
              />
            ))}
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            aria-label="Next"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: '1px solid var(--bg-border)',
              background: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              color: 'var(--text-secondary)',
              flexShrink: 0,
            }}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
