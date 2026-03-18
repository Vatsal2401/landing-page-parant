'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const CALENDLY = 'https://calendly.com/nirajsheladiya/15min';

const NAV_LINKS = [
  { label: 'Services', href: '/#services' },
  { label: 'Our Work', href: '/work' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Pricing', href: '/#pricing' },
];

const PRODUCTS = [
  {
    name: 'AutoReels',
    tagline: 'AI-powered faceless video generator',
    href: 'https://autoreels.in/',
    emoji: '🎬',
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: '#ffffff',
        borderBottom: scrolled ? '1px solid var(--bg-border)' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 16px rgba(14,39,59,0.06)' : 'none',
        transition: 'border-color 0.2s, box-shadow 0.2s',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 24px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'var(--font-display), sans-serif',
            fontSize: '22px',
            fontWeight: 800,
            color: 'var(--color-navy)',
            textDecoration: 'none',
            letterSpacing: '-0.02em',
          }}
        >
          <span
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '8px',
              background: 'var(--color-purple)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              color: '#fff',
              flexShrink: 0,
            }}
          >
            ✦
          </span>
          Sparq
        </Link>

        {/* Desktop nav links */}
        <div
          style={{ display: 'flex', alignItems: 'center', gap: '32px' }}
          className="desktop-nav"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.15s',
              }}
            >
              {link.label}
            </Link>
          ))}

          {/* Products dropdown */}
          <div ref={productsRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setProductsOpen((o) => !o)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '14px',
                fontWeight: 500,
                color: productsOpen ? 'var(--color-purple)' : 'var(--text-secondary)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'color 0.15s',
              }}
            >
              Products
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                style={{ transition: 'transform 0.2s', transform: productsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {productsOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 12px)',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#ffffff',
                  border: '1px solid var(--bg-border)',
                  borderRadius: '14px',
                  boxShadow: '0 16px 48px rgba(14,39,59,0.12)',
                  padding: '8px',
                  minWidth: '220px',
                  zIndex: 200,
                }}
              >
                {PRODUCTS.map((p) => (
                  <a
                    key={p.name}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setProductsOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px 12px',
                      borderRadius: '10px',
                      textDecoration: 'none',
                      transition: 'background 0.15s',
                    }}
                    className="product-item"
                  >
                    <span
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        background: 'rgba(124,58,237,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '18px',
                        flexShrink: 0,
                      }}
                    >
                      {p.emoji}
                    </span>
                    <span>
                      <span style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: 'var(--color-navy)' }}>
                        {p.name}
                      </span>
                      <span style={{ display: 'block', fontSize: '11px', color: 'var(--text-secondary)', marginTop: '1px' }}>
                        {p.tagline}
                      </span>
                    </span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" style={{ marginLeft: 'auto', flexShrink: 0 }}>
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* CTAs + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Book a Service — Calendly */}
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="book-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '9px 18px',
              borderRadius: '8px',
              background: 'transparent',
              border: '1.5px solid var(--color-purple)',
              color: 'var(--color-purple)',
              fontSize: '14px',
              fontWeight: 600,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              transition: 'background 0.15s, color 0.15s',
            }}
          >
            📅 Book a Call
          </a>

          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '9px 20px',
              borderRadius: '8px',
              background: 'var(--color-purple)',
              color: '#ffffff',
              fontSize: '14px',
              fontWeight: 600,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            Get Started
          </a>

          {/* Hamburger — mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              color: 'var(--color-navy)',
            }}
            className="hamburger-btn"
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: '#ffffff',
            borderTop: '1px solid var(--bg-border)',
            padding: '16px 24px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: '15px',
                fontWeight: 500,
                color: 'var(--text-primary)',
                textDecoration: 'none',
                padding: '10px 0',
                borderBottom: '1px solid var(--bg-border)',
              }}
            >
              {link.label}
            </Link>
          ))}
          {/* Products in mobile menu */}
          {PRODUCTS.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '15px',
                fontWeight: 500,
                color: 'var(--text-primary)',
                textDecoration: 'none',
                padding: '10px 0',
                borderBottom: '1px solid var(--bg-border)',
              }}
            >
              <span>{p.emoji}</span> {p.name}
              <span style={{ fontSize: '11px', color: 'var(--text-muted)', marginLeft: '4px' }}>↗</span>
            </a>
          ))}
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: '12px',
              display: 'inline-flex',
              justifyContent: 'center',
              padding: '12px 24px',
              borderRadius: '8px',
              border: '1.5px solid var(--color-purple)',
              background: 'transparent',
              color: 'var(--color-purple)',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            📅 Book a Service
          </a>
          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: '8px',
              display: 'inline-flex',
              justifyContent: 'center',
              padding: '12px 24px',
              borderRadius: '8px',
              background: 'var(--color-purple)',
              color: '#ffffff',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Get Started
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .book-btn { display: none !important; }
        }
        .book-btn:hover {
          background: var(--color-purple) !important;
          color: #fff !important;
        }
        .product-item:hover {
          background: rgba(124,58,237,0.06) !important;
        }
      `}</style>
    </nav>
  );
}
