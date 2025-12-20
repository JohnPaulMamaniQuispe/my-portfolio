// =================================
// 📝 TIPOS Y INTERFACES
// =================================

export interface Translation {
  nav: {
    home: string;
    about: string;
    projects: string;
    skills: string;
    experience: string;
    contact: string;
  };
  hero: {
    greeting: string;
    title: string;
    btnProjects: string;
    btnResume: string;
    btnContact: string;
  };
  about: {
    title: string;
    subtitle: string;
    description1: string;
    description2: string;
  };
  projects: {
    title: string;
    subtitle: string;
    status: string;
    viewProject: string;
    viewCode: string;
    viewPaper: string;
  };
  skills: {
    title: string;
    subtitle: string;
  };
  experience: {
    title: string;
    subtitle: string;
    achievements: string;
    items: {
      company: string;
      role: string;
      period: string;
      description: string;
      achievements: string[];
    }[];
  };
  contact: {
    title: string;
    subtitle: string;
    sendMessage: string;
  };
  companies: {
    title: string;
    subtitle: string;
  };
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  status: string;
  type: string;
  github: string;
  demo: string;
  paper?: string;
  highlight?: boolean;
  metrics: string;
}

export interface Skill {
  icon: React.ReactNode;
  badges: string[];
  level: number;
  color: string;
}

export interface Experience {
  icon: string | null;
}

export interface Achievement {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}

export interface ContactInfo {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  value: string;
  href: string;
  color: string;
  hoverColor: string;
}

export interface Stat {
  value: string;
  label: string;
  color: string;
}

export type Language = 'es' | 'en';
