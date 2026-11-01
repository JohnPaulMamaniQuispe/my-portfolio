import React from 'react';
import Image from 'next/image';
import { MapPin, Mail, Phone, FileText, ArrowRight, Code, Brain, Cloud, Network } from 'lucide-react';
import { Translation, SkillBadge } from './types';
import { PERSONAL_INFO, PROJECTS, SKILLS, EXPERIENCE, ACHIEVEMENTS, CONTACT_INFO, COMPANIES } from './data';
import { Section, Tag, SocialLinks, ProjectCard } from './components';

// =================================
// 🧱 SECCIONES DE LA PÁGINA
// =================================

type SectionProps = { t: Translation };

// "Senior Software Engineer | Backend & ... | Java" → rol + áreas de enfoque
const [ROLE, ...FOCUS_AREAS] = PERSONAL_INFO.title.split(' | ');

const EDUCATION = [
  { logo: '/images/logo-upc.png', school: 'Universidad Peruana de Ciencias Aplicadas', degree: 'B.Sc. Software Engineering', years: '2019 — 2025', graduated: true },
  { logo: '/images/logo-utp.png', school: 'Universidad Tecnológica del Perú', degree: 'Electronic Engineering', years: '2014 — 2018', graduated: false }
];

const COMPETENCIES = [
  { icon: Code, text: 'Backend & APIs' },
  { icon: Network, text: 'Microservices' },
  { icon: Cloud, text: 'Cloud-Native / AKS' },
  { icon: Brain, text: 'AI Backend' }
];

export const Hero: React.FC<SectionProps & { scrollToSection: (section: string) => void }> = ({ t, scrollToSection }) => (
  <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28">
    <div className="mx-auto max-w-5xl px-4 sm:px-6 grid md:grid-cols-[1fr_auto] gap-12 items-center">
      <div>
        <p className="font-mono text-sm text-accent mb-5">{ROLE}</p>
        <h1 className="whitespace-nowrap text-[clamp(1.6rem,7vw,3rem)] md:text-[clamp(2.25rem,4.6vw,3.5rem)] font-semibold tracking-tight text-fg">
          {PERSONAL_INFO.name}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">{t.hero.title}</p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {FOCUS_AREAS.map((area) => (
            <li key={area}><Tag>{area}</Tag></li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <button
            onClick={() => scrollToSection('projects')}
            className="min-h-11 px-5 py-2.5 rounded-lg bg-accent text-canvas text-sm font-medium hover:brightness-110 transition"
          >
            {t.hero.btnProjects}
          </button>
          <a
            href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(t.hero.resumeSubject)}&body=${encodeURIComponent(t.hero.resumeBody)}`}
            title={PERSONAL_INFO.email}
            className="inline-flex items-center gap-2 min-h-11 px-5 py-2.5 rounded-lg border border-line text-sm text-fg hover:border-muted transition-colors"
          >
            <FileText className="w-4 h-4" />
            {t.hero.btnResume}
          </a>
          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center gap-1.5 min-h-11 px-2 py-2.5 text-sm text-muted hover:text-fg transition-colors"
          >
            {t.hero.btnContact}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <p className="mt-5 text-sm text-muted">
          {t.hero.resumeNote}{' '}
          <a href={`mailto:${PERSONAL_INFO.email}`} className="text-fg underline decoration-line underline-offset-4 hover:decoration-fg transition-colors">
            {PERSONAL_INFO.email}
          </a>
        </p>

        <SocialLinks className="mt-6" />
      </div>

      {/* Avatar: la foto completa encaja dentro del círculo */}
      <div className="order-first md:order-none justify-self-start md:justify-self-end">
        <div className="relative w-36 h-36 md:w-48 md:h-48 lg:w-60 lg:h-60 rounded-full overflow-hidden ring-1 ring-line bg-surface">
          <Image
            src={PERSONAL_INFO.photo}
            alt={PERSONAL_INFO.name}
            fill
            sizes="(min-width: 1024px) 240px, (min-width: 768px) 192px, 144px"
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>
    </div>
  </section>
);

export const Companies: React.FC<SectionProps> = ({ t }) => (
  <section id="companies" className="py-14 border-t border-line">
    <div className="mx-auto max-w-5xl px-4 sm:px-6">
      <p className="text-xs font-mono uppercase tracking-widest text-muted mb-8">{t.companies.title}</p>
      <ul className="flex flex-wrap gap-3">
        {COMPANIES.map((company) => (
          <li
            key={company.name}
            className={`relative w-28 h-14 rounded-lg overflow-hidden border border-line flex items-center justify-center ${'onLight' in company && company.onLight ? 'bg-white' : 'bg-raised'}`}
            title={company.alt}
          >
            {company.logo ? (
              <Image
                src={company.logo}
                alt={company.alt}
                fill
                sizes="112px"
                className={'cover' in company && company.cover ? 'object-cover' : 'object-contain p-2.5'}
              />
            ) : (
              <span className="text-sm font-semibold tracking-wide text-fg">{company.name}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export const Achievements: React.FC<SectionProps> = ({ t }) => (
  <Section title={t.achievements.title} subtitle={t.achievements.subtitle}>
    <div className="grid sm:grid-cols-2 gap-px bg-line border border-line rounded-xl overflow-hidden">
      {ACHIEVEMENTS.map(({ icon: Icon, title, description }) => (
        <div key={title} className="bg-canvas p-6">
          <Icon className="w-5 h-5 text-accent" />
          <h3 className="mt-4 font-medium text-fg">{title}</h3>
          <p className="mt-2 text-sm text-muted leading-relaxed">{description}</p>
        </div>
      ))}
    </div>
  </Section>
);

export const About: React.FC<SectionProps> = ({ t }) => (
  <Section id="about" title={t.about.title}>
    <div className="grid md:grid-cols-[3fr_2fr] gap-12">
      <div className="space-y-5 text-muted leading-relaxed">
        <p>{t.about.description1}</p>
        <p>{t.about.description2}</p>
        <ul className="pt-2 space-y-2 text-sm">
          {[
            { icon: MapPin, text: PERSONAL_INFO.location },
            { icon: Mail, text: PERSONAL_INFO.email },
            { icon: Phone, text: PERSONAL_INFO.phone }
          ].map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-3">
              <Icon className="w-4 h-4" />
              <span className="text-fg">{text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-10">
        <div>
          <h3 className="text-xs font-mono uppercase tracking-widest text-muted mb-5">{t.about.education}</h3>
          <ul className="space-y-5">
            {EDUCATION.map((edu) => (
              <li key={edu.school} className="flex gap-4">
                <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-raised p-1.5 flex items-center justify-center">
                  <Image src={edu.logo} alt="" width={32} height={32} className="object-contain w-full h-full" />
                </div>
                <div>
                  <p className="text-sm font-medium text-fg">{edu.school}</p>
                  <p className="text-sm text-muted">{edu.degree}</p>
                  <p className="mt-1 text-xs font-mono text-muted">
                    {edu.years}
                    {edu.graduated && <span className="text-accent"> · {t.about.graduated}</span>}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-mono uppercase tracking-widest text-muted mb-5">{t.about.competencies}</h3>
          <ul className="grid grid-cols-2 gap-3">
            {COMPETENCIES.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2 text-sm text-fg">
                <Icon className="w-4 h-4 text-muted" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </Section>
);

export const Projects: React.FC<SectionProps> = ({ t }) => (
  <Section id="projects" title={t.projects.title} subtitle={t.projects.subtitle}>
    <div className="grid md:grid-cols-2 gap-6">
      {PROJECTS.map((project) => (
        <ProjectCard key={project.title} project={project} t={t} />
      ))}
    </div>
  </Section>
);

// URL del badge de shields.io ("-" y "_" se escapan duplicándolos)
const badgeUrl = ({ name, color, logo, logoColor = 'white' }: SkillBadge) => {
  const label = encodeURIComponent(name.replace(/-/g, '--').replace(/_/g, '__'));
  const logoParams = logo ? `&logo=${logo}&logoColor=${logoColor}` : '';
  return `https://img.shields.io/badge/${label}-${color}?style=flat${logoParams}`;
};

export const Skills: React.FC<SectionProps> = ({ t }) => (
  <Section id="skills" title={t.skills.title} subtitle={t.skills.subtitle}>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.entries(SKILLS).map(([category, { icon, items }]) => (
        <div key={category} className="rounded-xl border border-line bg-surface p-6 hover:border-muted/50 transition-colors">
          <h3 className="flex items-center gap-3 font-medium text-fg">
            <span className="text-accent">{icon}</span>
            {category}
          </h3>
          <ul className="mt-5 flex flex-wrap gap-2">
            {items.map((item) => (
              <li key={item.name}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={badgeUrl(item)} alt={item.name} title={item.name} loading="lazy" className="h-7 rounded" />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

export const Experience: React.FC<SectionProps> = ({ t }) => (
  <Section id="experience" title={t.experience.title} subtitle={t.experience.subtitle}>
    <ol className="divide-y divide-line border-y border-line">
      {t.experience.items.map((exp, index) => (
        <li key={exp.company} className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 py-8">
          <div className="flex md:flex-col items-center md:items-start gap-3">
            {EXPERIENCE[index]?.icon ? (
              <div className={`h-10 rounded-lg p-1.5 flex items-center justify-center ${EXPERIENCE[index].onLight ? 'w-24 px-2.5 bg-white' : 'w-10 bg-raised'}`}>
                <Image src={EXPERIENCE[index].icon!} alt="" width={80} height={32} className="object-contain w-full h-full" />
              </div>
            ) : (
              <div className="w-10 h-10 rounded-lg bg-raised flex items-center justify-center text-sm font-semibold text-muted">
                {exp.company.charAt(0)}
              </div>
            )}
            <p className="text-xs font-mono text-muted">{exp.period}</p>
          </div>

          <div>
            <h3 className="font-medium text-fg">{exp.role}</h3>
            <p className="text-sm text-accent">{exp.company}</p>
            <p className="mt-3 text-sm text-muted leading-relaxed">{exp.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label={t.experience.achievements}>
              {exp.achievements.map((achievement) => (
                <li key={achievement}><Tag>{achievement}</Tag></li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  </Section>
);

export const Contact: React.FC<SectionProps> = ({ t }) => (
  <Section id="contact" title={t.contact.title} subtitle={t.contact.subtitle}>
    <a
      href={`mailto:${PERSONAL_INFO.email}`}
      className="inline-block text-2xl md:text-4xl font-semibold tracking-tight text-fg hover:text-accent transition-colors break-all"
    >
      {PERSONAL_INFO.email}
    </a>

    <div className="mt-12 grid sm:grid-cols-3 gap-4">
      {CONTACT_INFO.map(({ icon: Icon, title, value, href }) => (
        <a
          key={title}
          href={href}
          className="rounded-xl border border-line p-5 hover:border-muted/60 transition-colors"
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={`${title}: ${value}`}
        >
          <span className="text-muted"><Icon size={18} /></span>
          <p className="mt-4 text-xs font-mono text-muted">{title}</p>
          <p className="mt-1 text-sm text-fg break-all">{value}</p>
        </a>
      ))}
    </div>
  </Section>
);

export const Footer: React.FC<SectionProps> = ({ t }) => (
  <footer className="border-t border-line pt-10 pb-20 sm:pb-10">
    <div className="mx-auto max-w-5xl px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      <p className="text-sm text-muted">
        © {new Date().getFullYear()} {PERSONAL_INFO.name}. {t.footer.rights}
      </p>
      <SocialLinks />
    </div>
  </footer>
);
