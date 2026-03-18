import { Project, ActiveFilters, ProjectCategory, ProjectIndustry } from '@/types/project';

export function applyFilters(projects: Project[], filters: ActiveFilters): Project[] {
  return projects.filter((p) => {
    const categoryMatch = filters.category === 'all' || p.category === filters.category;
    const industryMatch = filters.industry === 'all' || p.industry === filters.industry;
    return categoryMatch && industryMatch;
  });
}

export function countByCategory(projects: Project[]): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const p of projects) {
    counts[p.category] = (counts[p.category] ?? 0) + 1;
  }
  return counts;
}

export function countByIndustry(projects: Project[]): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const p of projects) {
    counts[p.industry] = (counts[p.industry] ?? 0) + 1;
  }
  return counts;
}

export const CATEGORY_LABELS: Record<string, string> = {
  'all': 'All',
  'landing-page': 'Landing Page',
  'saas': 'SaaS',
  'mobile-app': 'Mobile App',
  'desktop-app': 'Desktop App',
  'ecommerce': 'E-commerce',
  'website': 'Website',
};

export const INDUSTRY_LABELS: Record<string, string> = {
  'all': 'All Industries',
  'healthcare': 'Healthcare',
  'fitness': 'Fitness',
  'education': 'Education',
  'food-beverage': 'Food & Beverage',
  'tech': 'Tech',
  'finance': 'Finance',
  'retail': 'Retail',
};

export const ALL_CATEGORIES: Array<'all' | ProjectCategory> = [
  'all', 'landing-page', 'saas', 'mobile-app', 'desktop-app', 'ecommerce', 'website',
];

export const ALL_INDUSTRIES: Array<'all' | ProjectIndustry> = [
  'all', 'healthcare', 'fitness', 'education', 'food-beverage', 'tech', 'finance', 'retail',
];
