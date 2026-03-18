'use client';

import { useState } from 'react';
import { Project, ActiveFilters } from '@/types/project';
import Navbar from '@/components/Navbar';
import FilterBar from '@/components/FilterBar';
import ProjectGrid from '@/components/ProjectGrid';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

interface WorkClientProps {
  projects: Project[];
}

const DEFAULT_FILTERS: ActiveFilters = { category: 'all', industry: 'all' };

export default function WorkClient({ projects }: WorkClientProps) {
  const [filters, setFilters] = useState<ActiveFilters>(DEFAULT_FILTERS);

  const industryCount = new Set(projects.map((p) => p.industry)).size;

  return (
    <>
      <Navbar />

      {/* Section header */}
      <section id="work" style={{ background: 'var(--bg-base)', paddingTop: '80px' }}>
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '64px 24px 0',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '16px',
            borderBottom: '1px solid var(--bg-border)',
            paddingBottom: '28px',
          }}
        >
          <div>
            <p
              style={{
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                color: 'var(--color-purple)',
                textTransform: 'uppercase',
                margin: '0 0 8px',
              }}
            >
              Portfolio
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-display), sans-serif',
                fontSize: 'clamp(22px, 3vw, 32px)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Our Work
            </h2>
          </div>
          <span style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>
            {projects.length} projects across {industryCount} industries
          </span>
        </div>

        <FilterBar projects={projects} filters={filters} onChange={setFilters} />
        <ProjectGrid
          projects={projects}
          filters={filters}
          onResetFilters={() => setFilters(DEFAULT_FILTERS)}
        />
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
