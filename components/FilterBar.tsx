'use client';

import { Project } from '@/types/project';
import { ActiveFilters, FilterCategory, FilterIndustry } from '@/types/project';
import {
  ALL_CATEGORIES,
  ALL_INDUSTRIES,
  CATEGORY_LABELS,
  INDUSTRY_LABELS,
  countByCategory,
  countByIndustry,
} from '@/lib/filters';

interface FilterBarProps {
  projects: Project[];
  filters: ActiveFilters;
  onChange: (filters: ActiveFilters) => void;
}

export default function FilterBar({ projects, filters, onChange }: FilterBarProps) {
  const catCounts = countByCategory(projects);
  const indCounts = countByIndustry(projects);

  const totalProjects = projects.length;

  return (
    <div
      style={{
        padding: '24px 24px 40px',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      {/* Category row */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {ALL_CATEGORIES.map((cat) => {
          const count = cat === 'all' ? totalProjects : (catCounts[cat] ?? 0);
          const isActive = filters.category === cat;
          const isDim = count === 0 && cat !== 'all';

          return (
            <button
              key={cat}
              onClick={() => onChange({ ...filters, category: cat as FilterCategory })}
              style={{
                padding: '7px 14px',
                borderRadius: '999px',
                fontSize: '13px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'background 0.15s, color 0.15s, box-shadow 0.15s',
                border: isActive
                  ? '1px solid var(--color-purple)'
                  : '1px solid var(--bg-border)',
                background: isActive ? 'var(--color-purple)' : '#ffffff',
                color: isActive ? '#ffffff' : isDim ? 'var(--text-muted)' : 'var(--text-secondary)',
                boxShadow: isActive ? '0 0 0 3px rgba(124,58,237,0.15)' : 'none',
                opacity: isDim ? 0.5 : 1,
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
              }}
            >
              {CATEGORY_LABELS[cat]}
              <span style={{ fontSize: '11px', fontWeight: 600, opacity: 0.7 }}>
                ({count})
              </span>
            </button>
          );
        })}
      </div>

      {/* Industry row */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {ALL_INDUSTRIES.map((ind) => {
          const count = ind === 'all' ? totalProjects : (indCounts[ind] ?? 0);
          const isActive = filters.industry === ind;
          const isDim = count === 0 && ind !== 'all';

          return (
            <button
              key={ind}
              onClick={() => onChange({ ...filters, industry: ind as FilterIndustry })}
              style={{
                padding: '6px 12px',
                borderRadius: '999px',
                fontSize: '12px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'background 0.15s, color 0.15s, box-shadow 0.15s',
                border: isActive
                  ? '1px solid var(--color-purple)'
                  : '1px solid var(--bg-border)',
                background: isActive ? 'var(--color-purple)' : '#ffffff',
                color: isActive ? '#ffffff' : isDim ? 'var(--text-muted)' : 'var(--text-muted)',
                boxShadow: isActive ? '0 0 0 3px rgba(124,58,237,0.12)' : 'none',
                opacity: isDim ? 0.45 : 1,
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              {INDUSTRY_LABELS[ind]}
              <span style={{ fontSize: '10px', fontWeight: 600, opacity: 0.6 }}>({count})</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
