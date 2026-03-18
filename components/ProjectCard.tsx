'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types/project';
import BrowserFrame from './BrowserFrame';
import PhoneFrame from './PhoneFrame';
import ThumbnailFallback from './ThumbnailFallback';

const STATUS_COLORS: Record<string, string> = {
  live: 'var(--status-live)',
  demo: 'var(--status-demo)',
  concept: 'var(--status-concept)',
};

const INDUSTRY_LABELS: Record<string, string> = {
  healthcare: 'Healthcare',
  fitness: 'Fitness',
  education: 'Education',
  'food-beverage': 'Food & Beverage',
  tech: 'Tech',
  finance: 'Finance',
  retail: 'Retail',
};

interface ProjectCardProps {
  project: Project;
  animationDelay?: number;
}

export default function ProjectCard({ project, animationDelay = 0 }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const maxTags = project.tags.slice(0, 3);

  return (
    <Link
      href={`/projects/${project.slug}`}
      style={{ textDecoration: 'none', display: 'flex', height: '100%' }}
    >
      <article
        className="animate-scale-in"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          borderRadius: 'var(--card-r)',
          background: 'var(--bg-surface)',
          border: '1px solid var(--bg-border)',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
          boxShadow: hovered
            ? `0 24px 64px ${project.accentColor}40`
            : '0 2px 16px rgba(14,39,59,0.08)',
          animationDelay: `${animationDelay}ms`,
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        {/* Thumbnail */}
        <div style={{ position: 'relative' }}>
          {project.category === 'mobile-app' ? (
            <PhoneFrame label={project.title}>
              {project.thumbnail ? (
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              ) : (
                <ThumbnailFallback
                  gradientFrom={project.gradientFrom}
                  gradientTo={project.gradientTo}
                  emoji={project.emoji}
                  title={project.title}
                />
              )}
            </PhoneFrame>
          ) : project.demoPath ? (
            <BrowserFrame
              url={`sparq.studio/${project.slug}`}
              variant={project.category === 'desktop-app' ? 'window' : 'browser'}
              title={project.title}
              src={project.demoPath}
              scale={0.35}
            />
          ) : (
            <BrowserFrame
              url={`sparq.studio/${project.slug}`}
              variant={project.category === 'desktop-app' ? 'window' : 'browser'}
              title={project.title}
            >
              {project.thumbnail ? (
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              ) : (
                <ThumbnailFallback
                  gradientFrom={project.gradientFrom}
                  gradientTo={project.gradientTo}
                  emoji={project.emoji}
                  title={project.title}
                />
              )}
            </BrowserFrame>
          )}

          {/* Status badge */}
          <span
            style={{
              position: 'absolute',
              top: '48px',
              right: '10px',
              padding: '3px 10px',
              borderRadius: '999px',
              fontSize: '11px',
              fontWeight: 600,
              textTransform: 'capitalize',
              background: `${STATUS_COLORS[project.status]}20`,
              color: STATUS_COLORS[project.status],
              border: `1px solid ${STATUS_COLORS[project.status]}40`,
              letterSpacing: '0.02em',
            }}
          >
            {project.status}
          </span>
        </div>

        {/* Card body */}
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
          <h3
            style={{
              margin: '0 0 6px',
              fontSize: '16px',
              fontWeight: 700,
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-display), sans-serif',
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              margin: '0 0 14px',
              fontSize: '13px',
              color: 'var(--text-secondary)',
              lineHeight: 1.5,
            }}
          >
            {project.tagline}
          </p>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
            {maxTags.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: '2px 10px',
                  borderRadius: '999px',
                  fontSize: '11px',
                  fontWeight: 500,
                  background: `${project.accentColor}18`,
                  color: project.accentColor,
                  border: `1px solid ${project.accentColor}30`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '14px',
              borderTop: '1px solid var(--bg-border)',
              marginTop: 'auto',
            }}
          >
            <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
              {project.year} · {INDUSTRY_LABELS[project.industry] ?? project.industry}
            </span>
            <span
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: project.accentColor,
                transition: 'gap 0.2s',
              }}
            >
              View Project →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
