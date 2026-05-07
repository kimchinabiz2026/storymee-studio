// ========== Core Types ==========

export interface Dictionary {
  nav: {
    work: string;
    ips: string;
    about: string;
    press: string;
    careers: string;
    contact: string;
  };
  hero: {
    tagline: string;
    subtitle: string;
    scroll: string;
    sound_on: string;
    sound_off: string;
  };
  stats: {
    ips: string;
    projects: string;
    est: string;
  };
  three_doors: {
    label: string;
    title: string;
    brand: { label: string; title: string; desc: string; cta: string };
    partners: { label: string; title: string; desc: string; cta: string };
    fans: { label: string; title: string; desc: string; cta: string };
  };
  featured_ip: { label: string; cta: string };
  press: { label: string; title: string };
  cta: { headline: string; headline2: string; primary: string; secondary: string };
  work_page: {
    title: string;
    filters: Record<string, string>;
    load_more: string;
    view_all: string;
  };
  project: Record<string, string>;
  ip_page: {
    title: string;
    tabs: Record<string, string>;
    watch_trailer: string;
    view_episodes: string;
  };
  about: Record<string, string>;
  press_page: Record<string, string>;
  careers_page: Record<string, string>;
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    company: string;
    project_type: string;
    budget: string;
    timeline: string;
    message: string;
    send: string;
    sent: string;
    types: Record<string, string>;
    budgets: Record<string, string>;
    info: { address: string; general: string; business: string };
  };
  footer: Record<string, string>;
}

export interface Project {
  slug: string;
  title: { vi: string; en: string };
  client: string;
  year: number;
  category: string;
  services: string[];
  thumbnail: string;
  gradient: string;
  videoUrl?: string;
  externalUrl?: string;
  caseStudy: {
    challenge: { vi: string; en: string };
    approach: { vi: string; en: string };
    outcome: { vi: string; en: string };
  };
  credits: { role: string; name: string }[];
}

export interface IP {
  slug: string;
  name: { vi: string; en: string };
  tagline: { vi: string; en: string };
  status: 'development' | 'production' | 'released' | 'dormant';
  brandColor: string;
  gradient: string;
  keyVisual: string;
  videoUrl: string;
  worldDescription: { vi: string; en: string };
  characters: Character[];
  episodes: Episode[];
  licensingEnabled: boolean;
  tractionStats: { views: string; awards: string; fanBase: string };
  gallery?: string[];
}

export interface Character {
  name: { vi: string; en: string };
  role: string;
  bio: { vi: string; en: string };
  gradient: string;
  image?: string;
}

export interface Episode {
  number: number;
  title: { vi: string; en: string };
  synopsis: { vi: string; en: string };
  runtime: number;
  releaseDate: string;
  gradient: string;
  videoUrl?: string;
}

export interface TeamMember {
  name: string;
  role: { vi: string; en: string };
  bio: { vi: string; en: string };
  gradient: string;
  image?: string;
  social: { twitter?: string; linkedin?: string; instagram?: string };
}

export interface PressArticle {
  publication: string;
  headline: string;
  excerpt: string;
  date: string;
  url: string;
  lang: string;
}

export interface JobPosting {
  title: { vi: string; en: string };
  department: string;
  location: string;
  type: string;
  description: { vi: string; en: string };
}
