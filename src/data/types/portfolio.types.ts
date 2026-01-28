// TypeScript interfaces and types for the portfolio

export interface TechBadge {
  name: string;
  icon: string;
  color: string;
}

export interface AppScreenshot {
  url: string;
  alt: string;
}

export interface AppDownload {
  playStore?: string;
  appStore?: string;
  apk?: string;
}

export interface App {
  id: string;
  name: string;
  tagline: string;
  description: string;
  screenshots: AppScreenshot[];
  features: string[];
  techStack: TechBadge[];
  downloads: AppDownload;
  category: 'Free' | 'Paid' | 'Premium';
  isPremium: boolean;
}

export interface BackendProject {
  id: string;
  name: string;
  description: string;
  techStack: TechBadge[];
  apis: string[];
  features: string[];
  github?: string;
  liveDemo?: string;
}

export interface Experience {
  year: string;
  title: string;
  description: string;
}

export interface TechCategory {
  category: string;
  technologies: TechBadge[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PortfolioData {
  about: {
    name: string;
    title: string;
    introduction: string;
    experience: Experience[];
    skills: string[];
  };
  apps: App[];
  backendProjects: BackendProject[];
  techStack: TechCategory[];
  social: SocialLink[];
  contact: {
    email: string;
  };
}
