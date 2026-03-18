'use client';

import { Project, ActiveFilters } from '@/types/project';
import ProjectCard from './ProjectCard';
import ComingSoonCard from './ComingSoonCard';
import EmptyState from './EmptyState';
import { applyFilters } from '@/lib/filters';

interface ProjectGridProps {
  projects: Project[];
  filters: ActiveFilters;
  onResetFilters: () => void;
}

const COMING_SOON = [
  { category: 'saas' as const, label: 'SaaS', emoji: '🚀', description: 'Full-featured SaaS dashboard demos coming soon' },
  { category: 'mobile-app' as const, label: 'Mobile App', emoji: '📱', description: 'iOS & Android app showcase demos coming soon' },
  { category: 'desktop-app' as const, label: 'Desktop App', emoji: '🖥️', description: 'Desktop application demos coming soon' },
];

export default function ProjectGrid({ projects, filters, onResetFilters }: ProjectGridProps) {
  const filtered = applyFilters(projects, filters);

  // Categories that already have real projects — hide their Coming Soon card
  const populatedCategories = new Set(projects.map((p) => p.category));

  const comingSoonToShow = COMING_SOON.filter(
    (c) =>
      !populatedCategories.has(c.category) &&
      (filters.category === 'all' || filters.category === c.category)
  );

  const showEmpty = filtered.length === 0 && comingSoonToShow.length === 0;

  return (
    <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 80px' }}>
      {showEmpty ? (
        <EmptyState onReset={onResetFilters} />
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} animationDelay={i * 80} />
          ))}
          {comingSoonToShow.map((c) => (
            <ComingSoonCard
              key={c.category}
              label={c.label}
              emoji={c.emoji}
              description={c.description}
            />
          ))}
        </div>
      )}
    </section>
  );
}
