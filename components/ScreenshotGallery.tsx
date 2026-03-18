'use client';

import { useState } from 'react';
import Image from 'next/image';

const SCREEN_LABELS = ['Business Setup', 'Customers', 'New Invoice', 'History', 'Ledger'];

interface ScreenshotGalleryProps {
  screenshots: string[];
  accentColor: string;
  title: string;
}

export default function ScreenshotGallery({ screenshots, accentColor, title }: ScreenshotGalleryProps) {
  const [active, setActive] = useState(0);

  return (
    <div>
      {/* Main image */}
      <div
        style={{
          borderRadius: '10px',
          overflow: 'hidden',
          border: '1px solid var(--bg-border)',
          background: 'var(--chrome-bg)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
        }}
      >
        {/* Window title bar */}
        <div
          style={{
            background: 'var(--chrome-bg)',
            padding: '10px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <div style={{ display: 'flex', gap: '6px' }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57', display: 'block' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e', display: 'block' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840', display: 'block' }} />
          </div>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-muted)' }}>
              {title} — {SCREEN_LABELS[active] ?? `Screen ${active + 1}`}
            </span>
          </div>
        </div>

        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
          <Image
            key={active}
            src={screenshots[active]}
            alt={`${title} – ${SCREEN_LABELS[active] ?? active}`}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Thumbnail strip */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          marginTop: '12px',
          overflowX: 'auto',
          paddingBottom: '4px',
        }}
      >
        {screenshots.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              flexShrink: 0,
              width: '80px',
              height: '52px',
              borderRadius: '6px',
              overflow: 'hidden',
              border: `2px solid ${i === active ? accentColor : 'transparent'}`,
              cursor: 'pointer',
              padding: 0,
              position: 'relative',
              opacity: i === active ? 1 : 0.5,
              transition: 'opacity 0.2s, border-color 0.2s',
              background: 'var(--bg-surface)',
            }}
          >
            <Image
              src={src}
              alt={`Screen ${i + 1}`}
              fill
              style={{ objectFit: 'cover' }}
            />
          </button>
        ))}
      </div>

      {/* Screen label */}
      <p style={{ margin: '8px 0 0', fontSize: '12px', color: 'var(--text-muted)', textAlign: 'center' }}>
        {SCREEN_LABELS[active] ?? `Screen ${active + 1}`} · {active + 1}/{screenshots.length}
      </p>
    </div>
  );
}
