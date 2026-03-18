'use client';

import Link from 'next/link';
import { useRef, useEffect, useCallback, useState } from 'react';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

const STATS = [
  { label: 'Projects Delivered', numeric: 9, suffix: '+' },
  { label: 'Industries Served', numeric: 6, suffix: '' },
  { label: 'Happy Clients', numeric: 10, suffix: '+' },
  { label: 'Avg. Delivery', numeric: 7, suffix: ' days' },
];

const CARD_WIDTH = 320;
const GAP = 24;
const SCROLL_AMOUNT = CARD_WIDTH + GAP;
const AUTO_INTERVAL = 3200;

export default function WorkTeaser() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState(STATS.map(() => 0));
  const animatedRef = useRef(false);

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({
      left: dir === 'right' ? SCROLL_AMOUNT : -SCROLL_AMOUNT,
      behavior: 'smooth',
    });
  };

  const autoScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el || pausedRef.current) return;
    // If at end, snap back to start
    if (el.scrollLeft + el.clientWidth >= el.scrollWidth - SCROLL_AMOUNT / 2) {
      el.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      el.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const id = setInterval(autoScroll, AUTO_INTERVAL);
    return () => clearInterval(id);
  }, [autoScroll]);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          const duration = 1200;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const ease = 1 - Math.pow(1 - progress, 3);
            setCounts(STATS.map((s) => Math.round(s.numeric * ease)));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ background: 'var(--bg-base)', padding: '80px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        {/* Section header */}
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
            Our Work
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
            Recent projects
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', margin: 0 }}>
            Real businesses. Real results.
          </p>
        </div>

        {/* Stats bar */}
        <div
          ref={statsRef}
          style={{
            background: 'var(--color-stats-bg)',
            borderRadius: '16px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            marginBottom: '48px',
            overflow: 'hidden',
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                padding: '24px',
                textAlign: 'center',
                background: 'var(--color-stats-bg)',
                borderRight: i < STATS.length - 1 ? '1px solid rgba(14,39,59,0.1)' : 'none',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display), sans-serif',
                  fontSize: '28px',
                  fontWeight: 800,
                  color: 'var(--color-navy)',
                  lineHeight: 1,
                  marginBottom: '6px',
                }}
              >
                {counts[i]}{stat.suffix}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll controls header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
          }}
        >
          <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted)' }}>
            {projects.length} projects · scroll to explore
          </p>
          <div style={{ display: 'flex', gap: '8px' }}>
            {(['left', 'right'] as const).map((dir) => (
              <button
                key={dir}
                onClick={() => scroll(dir)}
                aria-label={dir === 'left' ? 'Scroll left' : 'Scroll right'}
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
                  fontSize: '18px',
                  color: 'var(--text-secondary)',
                  flexShrink: 0,
                }}
              >
                {dir === 'left' ? '‹' : '›'}
              </button>
            ))}
          </div>
        </div>

        {/* Horizontally scrollable row — wrapped for fade effect */}
        <div style={{ position: 'relative' }}>
          {/* Right fade gradient — "more to scroll" affordance */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '120px',
              height: '100%',
              background: 'linear-gradient(to right, transparent, var(--bg-base))',
              pointerEvents: 'none',
              zIndex: 2,
            }}
          />
        <div
          ref={scrollRef}
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; }}
          style={{
            display: 'flex',
            alignItems: 'stretch',
            gap: `${GAP}px`,
            overflowX: 'auto',
            paddingBottom: '16px',
            scrollSnapType: 'x mandatory',
          }}
          className="hide-scrollbar"
        >
          {projects.map((project, i) => (
            <div
              key={project.id}
              style={{
                flexShrink: 0,
                width: `${CARD_WIDTH}px`,
                scrollSnapAlign: 'start',
                display: 'flex',
              }}
            >
              <ProjectCard project={project} animationDelay={i * 60} />
            </div>
          ))}
        </div>
        </div> {/* close fade wrapper */}

        {/* View all link */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link
            href="/work"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 28px',
              borderRadius: '10px',
              background: 'var(--color-navy)',
              color: '#ffffff',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            View Full Portfolio →
          </Link>
        </div>
      </div>
    </section>
  );
}
