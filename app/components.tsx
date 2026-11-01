import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, Menu, X, ArrowUpRight } from 'lucide-react';
import { Translation, Language, Project } from './types';
import { PERSONAL_INFO } from './data';

// =================================
// 🎨 COMPONENTES REUTILIZABLES
// =================================

export const SHORT_NAME = PERSONAL_INFO.name.split(' ').slice(0, 3).join(' ');

// Icono de TikTok (lucide no lo incluye)
export const TikTokIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

// Componente: Lluvia de código de fondo (números y símbolos cayendo)
export const CodeRain: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const chars = '0123456789{}[]<>/=;:+*#$01';
    const fontSize = 14;
    const frameInterval = 1000 / 20; // ~20 fps: suficiente y ligero
    let drops: number[] = [];
    let width = 0;
    let height = 0;
    let frameId = 0;
    let lastFrame = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = `${fontSize}px ui-monospace, monospace`;
      drops = Array.from({ length: Math.ceil(width / fontSize) }, () => Math.random() * (height / fontSize));
    };

    const draw = (time: number) => {
      frameId = requestAnimationFrame(draw);
      if (time - lastFrame < frameInterval) return;
      lastFrame = time;

      // Estela: se borra poco a poco con el color del fondo
      ctx.fillStyle = 'rgba(11, 13, 16, 0.12)';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(0, 255, 65, 0.85)'; // verde terminal

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    frameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={`pointer-events-none ${className}`} />;
};

// Componente: Contenedor de sección con título
export const Section: React.FC<{ id?: string; title: string; subtitle?: string; children: React.ReactNode }> = ({ id, title, subtitle, children }) => (
  <section id={id} className="py-20 md:py-28 border-t border-line">
    <div className="mx-auto max-w-5xl px-4 sm:px-6">
      <div className="mb-12 max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-fg">{title}</h2>
        {subtitle && <p className="mt-3 text-muted">{subtitle}</p>}
      </div>
      {children}
    </div>
  </section>
);

// Componente: Etiqueta pequeña (tecnologías, logros)
export const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-block text-xs font-mono text-muted border border-line rounded-full px-2.5 py-1">
    {children}
  </span>
);

// Componente: Botón flotante de WhatsApp
export const WhatsAppButton: React.FC = () => (
  <a
    href={`https://wa.me/${PERSONAL_INFO.phone.replace(/[\s+]/g, '')}?text=${encodeURIComponent(PERSONAL_INFO.whatsappMessage)}`}
    className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-black/40 hover:brightness-110 transition"
    target="_blank"
    rel="noopener noreferrer"
    title="WhatsApp"
    aria-label="WhatsApp"
  >
    <Image src={PERSONAL_INFO.whatsappLogo} alt="" width={40} height={40} />
  </a>
);

interface NavigationProps {
  activeSection: string;
  isScrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  scrollToSection: (section: string) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

const LanguageToggle: React.FC<{ language: Language; setLanguage: (lang: Language) => void }> = ({ language, setLanguage }) => (
  <div className="flex items-center gap-1 text-xs font-mono">
    {(['es', 'en'] as const).map((lang, i) => (
      <React.Fragment key={lang}>
        {i > 0 && <span className="text-line">/</span>}
        <button
          onClick={() => setLanguage(lang)}
          className={`px-1 uppercase transition-colors ${language === lang ? 'text-fg' : 'text-muted hover:text-fg'}`}
          aria-label={lang === 'es' ? 'Español' : 'English'}
          aria-pressed={language === lang}
        >
          {lang}
        </button>
      </React.Fragment>
    ))}
  </div>
);

// Componente: Navegación
export const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  isScrolled,
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
  language,
  setLanguage,
  t
}) => {
  const menuItems: Array<keyof Translation['nav']> = ['home', 'about', 'projects', 'skills', 'experience', 'certifications', 'contact'];

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${isScrolled || isMenuOpen ? 'bg-canvas/85 backdrop-blur-md border-b border-line' : 'border-b border-transparent'}`}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-3"
          aria-label={`${PERSONAL_INFO.name} - ${t.nav.home}`}
        >
          <span className="relative w-8 h-8 rounded-full overflow-hidden ring-1 ring-line bg-surface">
            <Image
              src={PERSONAL_INFO.photo}
              alt=""
              fill
              sizes="32px"
              className="object-cover"
              style={{ objectPosition: 'center 15%' }}
            />
          </span>
          <span className="text-sm font-medium text-fg">{SHORT_NAME}</span>
        </button>

        <div className="hidden lg:flex items-center gap-7">
          {menuItems.slice(1).map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`text-sm transition-colors ${activeSection === item ? 'text-fg' : 'text-muted hover:text-fg'}`}
            >
              {t.nav[item]}
            </button>
          ))}
          <div className="pl-6 border-l border-line">
            <LanguageToggle language={language} setLanguage={setLanguage} />
          </div>
        </div>

        <div className="lg:hidden flex items-center gap-4">
          <LanguageToggle language={language} setLanguage={setLanguage} />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-muted hover:text-fg transition-colors p-1"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t border-line">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 py-3">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left py-2.5 text-sm ${activeSection === item ? 'text-fg' : 'text-muted'}`}
              >
                {t.nav[item]}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// Componente: Enlaces Sociales
export const SocialLinks: React.FC<{ className?: string }> = ({ className = '' }) => {
  const socialLinks = [
    { href: PERSONAL_INFO.github, icon: Github, label: 'GitHub' },
    { href: PERSONAL_INFO.linkedin, icon: Linkedin, label: 'LinkedIn' },
    { href: PERSONAL_INFO.tiktok, icon: TikTokIcon, label: 'TikTok' },
    { href: `mailto:${PERSONAL_INFO.email}`, icon: Mail, label: 'Email' }
  ];

  return (
    <div className={`flex items-center gap-5 ${className}`}>
      {socialLinks.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          className="text-muted hover:text-fg transition-colors"
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={label}
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
};

const ProjectLink: React.FC<{ href: string; label: string; ariaLabel: string }> = ({ href, label, ariaLabel }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1 text-sm text-fg hover:text-accent transition-colors"
    aria-label={ariaLabel}
  >
    {label}
    <ArrowUpRight className="w-3.5 h-3.5" />
  </a>
);

// Componente: Tarjeta de Proyecto
export const ProjectCard: React.FC<{ project: Project; t: Translation }> = ({ project, t }) => (
  <article className="flex flex-col rounded-xl border border-line bg-surface p-6 hover:border-muted/50 transition-colors">
    <div className="flex items-center justify-between gap-3 mb-4">
      <span className="text-xs font-mono text-muted">{project.type}</span>
      {project.highlight && (
        <span className="text-xs font-mono text-accent">{t.projects.featured}</span>
      )}
    </div>

    <h3 className="text-lg font-semibold text-fg leading-snug">{project.title}</h3>
    <p className="mt-3 text-sm text-muted leading-relaxed line-clamp-4">{project.description}</p>

    <p className="mt-4 text-xs font-mono text-muted">
      {project.tech.slice(0, 6).join(' · ')}
      {project.tech.length > 6 && ` · +${project.tech.length - 6} ${t.projects.more}`}
    </p>

    <p className="mt-4 text-xs font-mono text-accent/90">{project.metrics}</p>

    <div className="mt-auto pt-6 flex flex-wrap gap-5">
      {project.demo && (
        <ProjectLink href={project.demo} label={t.projects.viewProject} ariaLabel={`${t.projects.viewProject}: ${project.title}`} />
      )}
      <ProjectLink href={project.github} label={t.projects.viewCode} ariaLabel={`${t.projects.viewCode}: ${project.title}`} />
      {project.paper && (
        <ProjectLink href={project.paper} label={t.projects.viewPaper} ariaLabel={`${t.projects.viewPaper}: ${project.title}`} />
      )}
    </div>
  </article>
);
