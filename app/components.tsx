import React, { useEffect } from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, ChevronDown, Menu, X, Download, Play, Rocket } from 'lucide-react';
import { Translation, Language, Project, Stat } from './types';
import { PERSONAL_INFO, COMPANIES } from './data';

// =================================
// 🎨 COMPONENTES REUTILIZABLES
// =================================

// Componente: Efecto Matrix Background
export const MatrixRain: React.FC = () => {
  useEffect(() => {
    const canvas = document.getElementById('matrix-canvas') as HTMLCanvasElement | null;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?/~`';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = Array.from({ length: columns }, () => Math.random() * -100);
    
    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#0F0';
      ctx.font = `${fontSize}px monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };
    
    const interval = setInterval(draw, 33);
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas id="matrix-canvas" className="fixed top-0 left-0 w-full h-full opacity-5 pointer-events-none z-0" />;
};

// Componente: Botón flotante de WhatsApp
export const WhatsAppButton: React.FC = () => (
  <>
    <style>{`
      .btn-whatsapp {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: linear-gradient(135deg, #25D366, #128C7E);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
        z-index: 100;
        transition: all 0.3s ease;
        cursor: pointer;
      }
      .btn-whatsapp:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
      }
      .btn-whatsapp::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: rgba(37, 211, 102, 0.3);
        animation: onda 2s infinite;
      }
      @keyframes onda {
        0% {
          transform: translate(-50%, -50%) scale(0);
        }
        15% {
          opacity: 1;
        }
        100% {
          opacity: 0;
          transform: translate(-50%, -50%) scale(2.5);
        }
      }
    `}</style>
    <a 
      href={`https://wa.me/${PERSONAL_INFO.phone.replace(/[\s+]/g, '')}?text=${encodeURIComponent(PERSONAL_INFO.whatsappMessage)}`}
      className="btn-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      title="Contactar por WhatsApp"
      aria-label="Contactar por WhatsApp"
    >
      <Image 
        src={PERSONAL_INFO.whatsappLogo}
        alt="WhatsApp"
        width={50}
        height={50}
      />
    </a>
  </>
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
  const menuItems: Array<keyof Translation['nav']> = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md border-b-2 border-cyan-500/50 shadow-lg shadow-cyan-500/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold font-mono relative group cursor-pointer">
            <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]">&lt;</span>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">JP</span>
            <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]">/&gt;</span>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`px-3 py-2 text-sm font-mono uppercase tracking-wider transition-all relative group ${
                    activeSection === item ? 'text-cyan-400' : 'text-gray-400 hover:text-cyan-400'
                  }`}
                  aria-label={`Ir a ${t.nav[item]}`}
                >
                  <span className="relative z-10">{t.nav[item]}</span>
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  {activeSection === item && (
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-cyan-500 animate-pulse"></span>
                  )}
                </button>
              ))}
            </div>
            
            {/* Language Toggle */}
            <div className="flex items-center space-x-2 border-l border-cyan-500/30 pl-6">
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 text-xs font-mono uppercase tracking-wider transition-all border border-cyan-500/50 ${
                  language === 'es' 
                    ? 'bg-cyan-500 text-black shadow-[0_0_10px_rgba(0,255,255,0.5)]' 
                    : 'text-cyan-400 hover:bg-cyan-500/20'
                }`}
                aria-label="Cambiar a español"
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-xs font-mono uppercase tracking-wider transition-all border border-cyan-500/50 ${
                  language === 'en' 
                    ? 'bg-cyan-500 text-black shadow-[0_0_10px_rgba(0,255,255,0.5)]' 
                    : 'text-cyan-400 hover:bg-cyan-500/20'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Language Toggle */}
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setLanguage('es')}
                className={`px-2 py-1 text-xs font-mono border border-cyan-500/50 ${
                  language === 'es' ? 'bg-cyan-500 text-black' : 'text-cyan-400'
                }`}
                aria-label="Español"
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-xs font-mono border border-cyan-500/50 ${
                  language === 'en' ? 'bg-cyan-500 text-black' : 'text-cyan-400'
                }`}
                aria-label="English"
              >
                EN
              </button>
            </div>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-cyan-400 hover:text-cyan-300 transition-colors p-2"
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/98 border-b-2 border-cyan-500/50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 text-base font-mono uppercase tracking-wider ${
                  activeSection === item ? 'text-cyan-400 bg-cyan-500/10' : 'text-gray-400'
                }`}
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

// Componente: Indicador de Scroll
export const ScrollIndicator: React.FC<{ scrollToSection: (section: string) => void }> = ({ scrollToSection }) => (
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <button
      onClick={() => scrollToSection('about')}
      className="text-cyan-400 hover:text-cyan-300 transition-colors"
      aria-label="Desplazarse hacia abajo"
    >
      <ChevronDown size={32} />
    </button>
  </div>
);

// Componente: Grid de Estadísticas
export const StatsGrid: React.FC<{ stats: Stat[] }> = ({ stats }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
    {stats.map((stat, index) => (
      <div key={index} className="bg-black/80 rounded-lg p-4 border border-cyan-500/30 hover:border-cyan-500 transition-all hover:scale-105 shadow-lg hover:shadow-cyan-500/50 backdrop-blur-sm relative overflow-hidden group">
        {/* Efecto de escaneo */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        
        <div className="relative z-10">
          <div className={`text-2xl font-bold font-mono ${stat.color} drop-shadow-[0_0_10px_currentColor]`}>
            {stat.value}
          </div>
          <div className="text-xs text-cyan-400/70 font-mono uppercase tracking-wider">{stat.label}</div>
        </div>
        
        {/* Decoración de esquina */}
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500/30"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500/30"></div>
      </div>
    ))}
  </div>
);

// Componente: Enlaces Sociales
// Icono personalizado de TikTok
const TikTokIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export const SocialLinks: React.FC = () => {
  const socialLinks = [
    { href: PERSONAL_INFO.github, icon: Github, color: "hover:text-purple-400", label: "GitHub", badge: null },
    { href: PERSONAL_INFO.linkedin, icon: Linkedin, color: "hover:text-cyan-400", label: "LinkedIn", badge: null },
    { href: PERSONAL_INFO.tiktok, icon: TikTokIcon, color: "hover:text-pink-400", label: "TikTok - 5K Followers", badge: "5K" },
    { href: `mailto:${PERSONAL_INFO.email}`, icon: Mail, color: "hover:text-emerald-400", label: "Email", badge: null }
  ];
  
  return (
    <div className="flex justify-center space-x-6 mb-12">
      {socialLinks.map(({ href, icon: Icon, color, label, badge }, index) => (
        <a
          key={index}
          href={href}
          className={`relative group text-gray-300 ${color} transition-all duration-300 transform hover:scale-110`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          <Icon size={28} />
          {badge && (
            <span className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity animate-pulse">
              {badge}
            </span>
          )}
        </a>
      ))}
    </div>
  );
};

// Componente: Botones de Acción
export const CTAButtons: React.FC<{ scrollToSection: (section: string) => void; t: Translation }> = ({ scrollToSection, t }) => (
  <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
    <button
      onClick={() => scrollToSection('projects')}
      className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded font-mono uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 flex items-center justify-center space-x-2 relative overflow-hidden border-2 border-cyan-400"
      aria-label={t.hero.btnProjects}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
      <Rocket className="w-5 h-5 relative z-10" />
      <span className="relative z-10">{t.hero.btnProjects}</span>
    </button>
    
    <a 
      href="/cv/John_Paul_Mamani_CV.pdf"
      download="John_Paul_Mamani_CV.pdf"
      className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded font-mono uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center space-x-2 relative overflow-hidden border-2 border-purple-400"
      aria-label={t.hero.btnResume}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
      <Download className="w-5 h-5 relative z-10" />
      <span className="relative z-10">{t.hero.btnResume}</span>
    </a>
    
    <button
      onClick={() => scrollToSection('contact')}
      className="group px-8 py-4 bg-black border-2 border-emerald-500 text-emerald-400 rounded font-mono uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:bg-emerald-500 hover:text-black flex items-center justify-center space-x-2 relative overflow-hidden"
      aria-label={t.hero.btnContact}
    >
      <div className="absolute inset-0 bg-emerald-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
      <Mail className="w-5 h-5 relative z-10" />
      <span className="relative z-10">{t.hero.btnContact}</span>
    </button>
  </div>
);

// Componente: Tarjeta de Proyecto
export const ProjectCard: React.FC<{ project: Project; t: Translation }> = ({ project, t }) => (
  <div className={`relative bg-black/90 rounded-lg overflow-hidden transition-all duration-300 border-2 ${project.highlight ? 'border-cyan-500' : 'border-cyan-500/20'} hover:border-cyan-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 backdrop-blur-sm group`}>
    {/* Decoraciones cyberpunk en esquinas */}
    <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-500 opacity-50"></div>
    <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyan-500 opacity-50"></div>
    <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-cyan-500 opacity-50"></div>
    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-500 opacity-50"></div>
    
    {/* Línea de escaneo */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    
    {project.highlight && (
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-black px-3 py-1 rounded text-xs font-bold flex items-center space-x-1 animate-pulse">
          <span className="font-mono">FEATURED</span>
        </div>
      </div>
    )}
    
    <div className="p-6 relative z-10">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full">
          {project.type}
        </span>
        <span className="text-xs text-emerald-400 font-mono">{project.status}</span>
      </div>
      
      <h3 className="text-xl font-bold text-cyan-400 mb-3 line-clamp-2">{project.title}</h3>
      <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-4">{project.description}</p>
      
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 6).map((tech, idx) => (
            <span key={idx} className="text-xs bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded border border-cyan-500/30">
              {tech}
            </span>
          ))}
          {project.tech.length > 6 && (
            <span className="text-xs text-cyan-400/50">+{project.tech.length - 6} more</span>
          )}
        </div>
      </div>
      
      <div className="bg-black/50 border border-cyan-500/30 rounded p-3 mb-4">
        <p className="text-xs text-cyan-400 font-mono">{project.metrics}</p>
      </div>
      
      <div className="flex flex-wrap gap-3">
        <a 
          href={project.demo} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 min-w-[120px] px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded text-sm font-mono hover:scale-105 transition-all flex items-center justify-center space-x-2"
          aria-label={`${t.projects.viewProject}: ${project.title}`}
        >
          <Play className="w-4 h-4" />
          <span>{t.projects.viewProject}</span>
        </a>
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 min-w-[120px] px-4 py-2 border-2 border-purple-500 text-purple-400 rounded text-sm font-mono hover:bg-purple-500 hover:text-white transition-all flex items-center justify-center space-x-2"
          aria-label={`${t.projects.viewCode}: ${project.title}`}
        >
          <Github className="w-4 h-4" />
          <span>{t.projects.viewCode}</span>
        </a>
        {project.paper && (
          <a 
            href={project.paper}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 min-w-[120px] px-4 py-2 border-2 border-emerald-500 text-emerald-400 rounded text-sm font-mono hover:bg-emerald-500 hover:text-white transition-all flex items-center justify-center space-x-2"
            aria-label={`${t.projects.viewPaper}: ${project.title}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>{t.projects.viewPaper}</span>
          </a>
        )}
      </div>
    </div>
  </div>
);

// Componente: Sección de Empresas
export const CompaniesSection: React.FC<{ t: Translation }> = ({ t }) => (
  <section id="companies" className="py-20 relative z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {t.companies.title}
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">{t.companies.subtitle}</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center py-8">
        {COMPANIES.map((company, index) => (
          <div key={index} className="group relative transition-all hover:scale-110 duration-300 flex items-center justify-center w-full h-20 bg-white/5 rounded-lg p-4">
            {company.logo ? (
              <Image 
                src={company.logo} 
                alt={company.alt}
                width={160}
                height={60}
                className="object-contain w-full h-full opacity-80 hover:opacity-100 transition-opacity max-h-[60px]"
              />
            ) : (
              <div className="text-3xl font-bold text-white/70 hover:text-white transition-all duration-300 font-mono">
                {company.name}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);
