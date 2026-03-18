import { notFound } from 'next/navigation';
import Image from 'next/image';
import { projects, getProjectBySlug } from '@/data/projects';
import BrowserFrame from '@/components/BrowserFrame';
import ThumbnailFallback from '@/components/ThumbnailFallback';
import ScreenshotGallery from '@/components/ScreenshotGallery';
import PhoneFrame from '@/components/PhoneFrame';
import TechBadge from '@/components/TechBadge';
import BackButton from '@/components/BackButton';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

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

const CATEGORY_LABELS: Record<string, string> = {
  'landing-page': 'Landing Page',
  saas: 'SaaS',
  'mobile-app': 'Mobile App',
  'desktop-app': 'Desktop App',
  ecommerce: 'E-commerce',
  website: 'Website',
};

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
      {/* Header band */}
      <header
        style={{
          background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
          padding: '32px 24px 48px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Noise overlay */}
        <div className="noise-overlay" />

        <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '24px' }}>
            <BackButton />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '3rem', lineHeight: 1 }}>{project.emoji}</span>
            <div>
              <h1
                style={{
                  fontFamily: 'var(--font-display), sans-serif',
                  fontSize: 'clamp(28px, 5vw, 48px)',
                  fontWeight: 800,
                  margin: '0 0 6px',
                  color: 'rgba(255,255,255,0.95)',
                  letterSpacing: '-0.02em',
                }}
              >
                {project.title}
              </h1>
              <p style={{ margin: 0, fontSize: '15px', color: 'rgba(255,255,255,0.7)' }}>
                {project.tagline}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 3fr) minmax(0, 2fr)',
            gap: '48px',
            alignItems: 'start',
          }}
        >
          {/* Left: preview + tech stack */}
          <div className="animate-fade-up" style={{ animationDelay: '0ms' }}>
            {project.category === 'mobile-app' && project.thumbnail ? (
              /* Mobile app — show composite mockup in a styled container */
              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid var(--bg-border)',
                  background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
                  boxShadow: `0 8px 40px ${project.accentColor}30`,
                  position: 'relative',
                  aspectRatio: '16/9',
                }}
              >
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ) : project.screenshots && project.screenshots.length > 0 ? (
              <ScreenshotGallery
                screenshots={project.screenshots}
                accentColor={project.accentColor}
                title={project.title}
              />
            ) : project.demoPath ? (
              <BrowserFrame
                url={project.liveUrl ?? `sparq.studio/${project.slug}`}
                variant={project.category === 'desktop-app' ? 'window' : 'browser'}
                title={project.title}
                src={project.demoPath}
                interactive
                height={620}
              />
            ) : (
              <BrowserFrame
                url={project.liveUrl ?? `sparq.studio/${project.slug}`}
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

            <div style={{ marginTop: '24px' }}>
              <p
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  color: 'var(--color-purple)',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                }}
              >
                Tech Stack
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.techStack.map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>
            </div>
          </div>

          {/* Right: description, highlights, CTA, metadata */}
          <div
            className="animate-fade-up"
            style={{ display: 'flex', flexDirection: 'column', gap: '28px', animationDelay: '80ms' }}
          >
            {/* Description */}
            <div>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.75,
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}
              >
                {project.description}
              </p>
            </div>

            {/* Highlights */}
            <div
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--bg-border)',
                borderRadius: '12px',
                padding: '20px',
              }}
            >
              <p
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  color: 'var(--color-purple)',
                  textTransform: 'uppercase',
                  margin: '0 0 14px',
                }}
              >
                Highlights
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {project.highlights.map((h, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      gap: '10px',
                      fontSize: '14px',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: project.accentColor, fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* View Live button */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  borderRadius: '10px',
                  background: project.accentColor,
                  color: '#fff',
                  fontSize: '14px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                  alignSelf: 'flex-start',
                }}
              >
                View Live ↗
              </a>
            )}

            {/* Metadata chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {[
                { label: 'Year', value: String(project.year) },
                { label: 'Category', value: CATEGORY_LABELS[project.category] ?? project.category },
                { label: 'Industry', value: INDUSTRY_LABELS[project.industry] ?? project.industry },
                { label: 'Status', value: project.status, accent: STATUS_COLORS[project.status] },
              ].map((chip) => (
                <div
                  key={chip.label}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '8px',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--bg-border)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px',
                  }}
                >
                  <span style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                    {chip.label}
                  </span>
                  <span
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: chip.accent ?? 'var(--text-primary)',
                      textTransform: chip.label === 'Status' ? 'capitalize' : undefined,
                    }}
                  >
                    {chip.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related projects */}
        {related.length > 0 && (
          <div style={{ marginTop: '72px' }}>
            <h2
              style={{
                fontFamily: 'var(--font-display), sans-serif',
                fontSize: '24px',
                fontWeight: 700,
                color: 'var(--text-primary)',
                margin: '0 0 28px',
                letterSpacing: '-0.01em',
              }}
            >
              More Projects
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '24px',
              }}
            >
              {related.map((p, i) => (
                <ProjectCard key={p.id} project={p} animationDelay={i * 80} />
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
