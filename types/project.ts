export type ProjectCategory = 'landing-page' | 'saas' | 'mobile-app' | 'desktop-app' | 'ecommerce' | 'website';
export type ProjectIndustry  = 'healthcare' | 'fitness' | 'education' | 'food-beverage' | 'tech' | 'finance' | 'retail';
export type ProjectStatus    = 'live' | 'demo' | 'concept';

export interface Project {
  id:           string;
  slug:         string;
  title:        string;
  tagline:      string;
  description:  string;
  category:     ProjectCategory;
  industry:     ProjectIndustry;
  tags:         string[];
  featured:     boolean;
  accentColor:  string;
  gradientFrom: string;
  gradientTo:   string;
  emoji:        string;
  thumbnail?:   string;
  screenshots?: string[];        // multiple views shown in detail page gallery
  demoPath?:    string;          // "/demos/[slug]/" — served from public/demos/
  liveUrl?:     string;
  techStack:    string[];
  year:         number;
  highlights:   [string, string, string];
  status:       ProjectStatus;
}

export type FilterCategory = ProjectCategory | 'all';
export type FilterIndustry = ProjectIndustry | 'all';

export interface ActiveFilters {
  category: FilterCategory;
  industry: FilterIndustry;
}
