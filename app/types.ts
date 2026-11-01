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
    certifications: string;
    contact: string;
  };
  hero: {
    greeting: string;
    title: string;
    btnProjects: string;
    btnResume: string;
    resumeSubject: string;
    resumeBody: string;
    resumeNote: string;
    btnContact: string;
  };
  about: {
    title: string;
    subtitle: string;
    description1: string;
    description2: string;
    education: string;
    competencies: string;
    graduated: string;
  };
  projects: {
    title: string;
    subtitle: string;
    status: string;
    viewProject: string;
    viewCode: string;
    viewPaper: string;
    featured: string;
    details: string;
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
  achievements: {
    title: string;
    subtitle: string;
  };
  footer: {
    rights: string;
  };
  certifications: {
    title: string;
    subtitle: string;
    viewDocument: string;
    verify: string;
    close: string;
    types: Record<CertificationType, string>;
  };
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  status: string;
  type: string;
  github: string;
  demo?: string;
  paper?: string;
  highlight?: boolean;
  metrics: string;
}

export interface SkillBadge {
  name: string;
  color: string;
  logo?: string;
  logoColor?: string;
}

export interface Skill {
  icon: React.ReactNode;
  items: SkillBadge[];
}

export interface Experience {
  icon: string | null;
  // Logos oscuros con fondo transparente: se muestran sobre fondo blanco
  onLight?: boolean;
}

export interface Achievement {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface ContactInfo {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  value: string;
  href: string;
}


export type Language = 'es' | 'en';

export type CertificationType = 'degree' | 'certification' | 'honor';

export interface CertificationImage {
  src: string;
  width: number;
  height: number;
}

export interface Certification {
  type: CertificationType;
  title: Record<Language, string>;
  issuer: string;
  date: string;
  logo?: string;
  images?: CertificationImage[];
  file?: string;
  credentialUrl?: string;
}
