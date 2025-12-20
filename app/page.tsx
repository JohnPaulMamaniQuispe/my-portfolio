'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, Phone, MapPin, Code, Brain, Cloud, Smartphone, Star, Award } from 'lucide-react';

// Imports modulares
import { Language } from './types';
import { translations } from './translations';
import { 
  PERSONAL_INFO, 
  TYPING_ROLES, 
  STATS, 
  PROJECTS, 
  SKILLS, 
  EXPERIENCE, 
  ACHIEVEMENTS, 
  CONTACT_INFO 
} from './data';
import {
  MatrixRain,
  WhatsAppButton,
  Navigation,
  ScrollIndicator,
  StatsGrid,
  SocialLinks,
  CTAButtons,
  ProjectCard,
  CompaniesSection
} from './components';

// =================================
// 🎨 COMPONENTES LOCALES
// =================================

// Icono de TikTok
const TikTokIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

// Avatar de perfil con efecto holográfico
const ProfileAvatar: React.FC = () => (
  <div className="relative w-48 h-48 mx-auto mb-8 group">
    {/* Anillos orbitales */}
    <div className="absolute inset-0 rounded-full border-2 border-cyan-500/30 animate-spin" style={{animationDuration: '20s'}}></div>
    <div className="absolute inset-2 rounded-full border-2 border-purple-500/30 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
    
    {/* Contenedor de imagen */}
    <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-cyan-500 shadow-lg shadow-cyan-500/50 group-hover:shadow-cyan-500/80 transition-all">
      <Image 
        src={PERSONAL_INFO.photo} 
        alt={PERSONAL_INFO.name}
        width={160}
        height={160}
        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
        style={{ objectPosition: 'center 20%' }}
        priority
      />
    </div>
    
    {/* Efecto de pulso */}
    <div className="absolute inset-0 rounded-full bg-cyan-500/20 animate-ping"></div>
  </div>
);

// =================================
// 🏠 COMPONENTE PRINCIPAL
// =================================
export default function Portfolio() {
  // Estados con tipos estrictos
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const [typedText, setTypedText] = useState<string>('');
  const [currentRole, setCurrentRole] = useState<number>(0);
  const [language, setLanguage] = useState<Language>('en');

  const t = translations[language];

  // Efectos
  useEffect(() => {
    setMounted(true);
  }, []);

  // Animación de escritura
  useEffect(() => {
    if (!mounted) return;
    
    const currentRoleText = TYPING_ROLES[currentRole];
    let currentIndex = 0;
    setTypedText('');
    
    const typingInterval = setInterval(() => {
      if (currentIndex < currentRoleText.length) {
        setTypedText(currentRoleText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % TYPING_ROLES.length);
        }, 2000);
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, [currentRole, mounted]);

  // Detección de scroll
  useEffect(() => {
    if (!mounted) return;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  // Navegación suave
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Pantalla de carga
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-xl font-mono">Loading portfolio...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Estilos globales inyectados */}
      <style jsx global>{`
        body {
          background: linear-gradient(135deg, #0a0e27 0%, #1a1e3e 50%, #0a0e27 100%) !important;
          color: #e4e4e7 !important;
          font-family: 'Courier New', 'Consolas', 'Monaco', monospace !important;
        }
        
        /* Scanlines efecto terminal */
        body::after {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 255, 255, 0.03),
            rgba(0, 255, 255, 0.03) 1px,
            transparent 1px,
            transparent 3px
          );
          pointer-events: none;
          z-index: 9998;
        }
        
        /* Scrollbar estilo VS Code */
        ::-webkit-scrollbar {
          width: 14px;
        }
        ::-webkit-scrollbar-track {
          background: #1e1e2e;
          border-left: 1px solid #2d2d3d;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #4a9eff, #7b2cbf);
          box-shadow: 0 0 10px rgba(74, 158, 255, 0.5);
          border-radius: 7px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #5dadff, #9d4edd);
          box-shadow: 0 0 20px rgba(74, 158, 255, 0.8);
        }
        
        /* Animación de sintaxis */
        @keyframes syntax-glow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        /* Animación de gradiente para el nombre */
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .syntax-keyword { color: #c586c0; }
        .syntax-function { color: #dcdcaa; }
        .syntax-string { color: #ce9178; }
        .syntax-variable { color: #9cdcfe; }
        .syntax-comment { color: #6a9955; font-style: italic; }
      `}</style>
      
      <WhatsAppButton />
      <MatrixRain />

      {/* Fondo con código animado tipo VS Code */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Código de fondo con colores syntax highlighting */}
        <div className="absolute inset-0 opacity-25 font-mono text-sm leading-relaxed p-8" style={{
          background: 'linear-gradient(135deg, #0a0e27 0%, #1a1e3e 50%, #0a0e27 100%)',
        }}>
          <pre className="text-left select-none">
            <span style={{color: '#c586c0'}}>import</span> <span style={{color: '#4ec9b0'}}>React</span> <span style={{color: '#c586c0'}}>from</span> <span style={{color: '#ce9178'}}>&apos;react&apos;</span><span style={{color: '#d4d4d4'}}>;</span>{'\n'}
            <span style={{color: '#c586c0'}}>import</span> <span style={{color: '#d4d4d4'}}>{'{'}</span> <span style={{color: '#4ec9b0'}}>Database</span><span style={{color: '#d4d4d4'}}>,</span> <span style={{color: '#4ec9b0'}}>Cloud</span><span style={{color: '#d4d4d4'}}>,</span> <span style={{color: '#4ec9b0'}}>Code</span> <span style={{color: '#d4d4d4'}}>{'}'}</span> <span style={{color: '#c586c0'}}>from</span> <span style={{color: '#ce9178'}}>&apos;lucide-react&apos;</span><span style={{color: '#d4d4d4'}}>;</span>{'\n\n'}
            
            <span style={{color: '#c586c0'}}>const</span> <span style={{color: '#4fc1ff'}}>Portfolio</span> <span style={{color: '#d4d4d4'}}>=</span> <span style={{color: '#d4d4d4'}}>()</span> <span style={{color: '#c586c0'}}>=&gt;</span> <span style={{color: '#d4d4d4'}}>{'{'}</span>{'\n'}
            <span style={{color: '#d4d4d4'}}>  </span><span style={{color: '#c586c0'}}>const</span> <span style={{color: '#9cdcfe'}}>skills</span> <span style={{color: '#d4d4d4'}}>=</span> <span style={{color: '#d4d4d4'}}>[</span><span style={{color: '#ce9178'}}>&apos;React&apos;</span><span style={{color: '#d4d4d4'}}>,</span> <span style={{color: '#ce9178'}}>&apos;Node.js&apos;</span><span style={{color: '#d4d4d4'}}>,</span> <span style={{color: '#ce9178'}}>&apos;Python&apos;</span><span style={{color: '#d4d4d4'}}>,</span> <span style={{color: '#ce9178'}}>&apos;Kubernetes&apos;</span><span style={{color: '#d4d4d4'}}>];</span>{'\n'}
            <span style={{color: '#d4d4d4'}}>  </span><span style={{color: '#c586c0'}}>const</span> <span style={{color: '#9cdcfe'}}>experience</span> <span style={{color: '#d4d4d4'}}>=</span> <span style={{color: '#ce9178'}}>&apos;Senior Backend Developer&apos;</span><span style={{color: '#d4d4d4'}}>;</span>{'\n\n'}
            
            <span style={{color: '#d4d4d4'}}>  </span><span style={{color: '#c586c0'}}>return</span> <span style={{color: '#d4d4d4'}}>(</span>{'\n'}
            <span style={{color: '#d4d4d4'}}>    &lt;</span><span style={{color: '#4ec9b0'}}>div</span> <span style={{color: '#9cdcfe'}}>className</span><span style={{color: '#d4d4d4'}}>=</span><span style={{color: '#ce9178'}}>&quot;portfolio&quot;</span><span style={{color: '#d4d4d4'}}>&gt;</span>{'\n'}
            <span style={{color: '#d4d4d4'}}>      &lt;</span><span style={{color: '#4ec9b0'}}>header</span><span style={{color: '#d4d4d4'}}>&gt;</span>{'\n'}
            <span style={{color: '#d4d4d4'}}>        &lt;</span><span style={{color: '#4ec9b0'}}>h1</span><span style={{color: '#d4d4d4'}}>&gt;</span>John Paul Mamani<span style={{color: '#d4d4d4'}}>&lt;/</span><span style={{color: '#4ec9b0'}}>h1</span><span style={{color: '#d4d4d4'}}>&gt;</span>{'\n'}
            <span style={{color: '#d4d4d4'}}>        &lt;</span><span style={{color: '#4ec9b0'}}>span</span><span style={{color: '#d4d4d4'}}>&gt;{'{'}</span><span style={{color: '#9cdcfe'}}>experience</span><span style={{color: '#d4d4d4'}}>{'}'}&lt;/</span><span style={{color: '#4ec9b0'}}>span</span><span style={{color: '#d4d4d4'}}>&gt;</span>{'\n'}
            <span style={{color: '#d4d4d4'}}>      &lt;/</span><span style={{color: '#4ec9b0'}}>header</span><span style={{color: '#d4d4d4'}}>&gt;</span>{'\n'}
            <span style={{color: '#d4d4d4'}}>    &lt;/</span><span style={{color: '#4ec9b0'}}>div</span><span style={{color: '#d4d4d4'}}>&gt;</span>{'\n'}
            <span style={{color: '#d4d4d4'}}>  );</span>{'\n'}
            <span style={{color: '#d4d4d4'}}>{'}'}</span><span style={{color: '#d4d4d4'}}>;</span>{'\n\n'}
            
            {/* <span style={{color: '#6a9955'}}>// API Integration</span> */}{'\n'}
            <span style={{color: '#c586c0'}}>async</span> <span style={{color: '#c586c0'}}>function</span> <span style={{color: '#dcdcaa'}}>fetchData</span><span style={{color: '#d4d4d4'}}>()</span> <span style={{color: '#d4d4d4'}}>{'{'}</span>{'\n'}
            <span style={{color: '#d4d4d4'}}>  </span><span style={{color: '#c586c0'}}>const</span> <span style={{color: '#9cdcfe'}}>response</span> <span style={{color: '#d4d4d4'}}>=</span> <span style={{color: '#c586c0'}}>await</span> <span style={{color: '#dcdcaa'}}>fetch</span><span style={{color: '#d4d4d4'}}>(</span><span style={{color: '#ce9178'}}>&apos;/api/data&apos;</span><span style={{color: '#d4d4d4'}}>);</span>{'\n'}
            <span style={{color: '#d4d4d4'}}>  </span><span style={{color: '#c586c0'}}>return</span> <span style={{color: '#9cdcfe'}}>response</span><span style={{color: '#d4d4d4'}}>.</span><span style={{color: '#dcdcaa'}}>json</span><span style={{color: '#d4d4d4'}}>();</span>{'\n'}
            <span style={{color: '#d4d4d4'}}>{'}'}</span>{'\n\n'}
            
            {/* <span style={{color: '#6a9955'}}>// Microservices Architecture</span> */}{'\n'}
            <span style={{color: '#c586c0'}}>class</span> <span style={{color: '#4ec9b0'}}>BankingService</span> <span style={{color: '#d4d4d4'}}>{'{'}</span>{'\n'}
            <span style={{color: '#d4d4d4'}}>  </span><span style={{color: '#dcdcaa'}}>constructor</span><span style={{color: '#d4d4d4'}}>()</span> <span style={{color: '#d4d4d4'}}>{'{'}</span>{'\n'}
            <span style={{color: '#d4d4d4'}}>    </span><span style={{color: '#c586c0'}}>this</span><span style={{color: '#d4d4d4'}}>.</span><span style={{color: '#9cdcfe'}}>kafka</span> <span style={{color: '#d4d4d4'}}>=</span> <span style={{color: '#c586c0'}}>new</span> <span style={{color: '#4ec9b0'}}>KafkaClient</span><span style={{color: '#d4d4d4'}}>();</span>{'\n'}
            <span style={{color: '#d4d4d4'}}>    </span><span style={{color: '#c586c0'}}>this</span><span style={{color: '#d4d4d4'}}>.</span><span style={{color: '#9cdcfe'}}>redis</span> <span style={{color: '#d4d4d4'}}>=</span> <span style={{color: '#c586c0'}}>new</span> <span style={{color: '#4ec9b0'}}>RedisClient</span><span style={{color: '#d4d4d4'}}>();</span>{'\n'}
            <span style={{color: '#d4d4d4'}}>  {'}'}</span>{'\n'}
            <span style={{color: '#d4d4d4'}}>{'}'}</span>
          </pre>
        </div>
        
        {/* Overlay con gradientes de colores */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-cyan-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-900/20 via-transparent to-green-900/20"></div>
        
        {/* Partículas de código flotantes */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 text-cyan-400 opacity-40 animate-pulse text-4xl font-bold" style={{textShadow: '0 0 30px #00ffff'}}>
            {'{ }'}
          </div>
          <div className="absolute top-1/3 right-1/4 text-purple-400 opacity-40 animate-pulse text-4xl font-bold" style={{animationDelay: '1s', textShadow: '0 0 30px #b400ff'}}>
            {'[ ]'}
          </div>
          <div className="absolute bottom-1/4 left-1/3 text-green-400 opacity-40 animate-pulse text-4xl font-bold" style={{animationDelay: '2s', textShadow: '0 0 30px #00ff41'}}>
            {'< />'}
          </div>
          <div className="absolute top-1/2 right-1/3 text-pink-400 opacity-40 animate-pulse text-4xl font-bold" style={{animationDelay: '1.5s', textShadow: '0 0 30px #ff00ff'}}>
            {'=>'}
          </div>
        </div>
        
        {/* Scan line animado */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent animate-scan" style={{
          animation: 'scan 8s linear infinite'
        }}></div>
      </div>
      
      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>

      <Navigation 
        activeSection={activeSection}
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
        language={language}
        setLanguage={setLanguage}
        t={t}
      />

      {/* SECCIÓN: Hero */}
      <section id="home" className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="text-center">
            <ProfileAvatar />
            
            {/* Nombre con efecto de código impactante */}
            <div className="relative inline-block mb-8">
              <h1 className="relative text-3xl md:text-6xl font-black font-mono tracking-wider py-4">
                {/* Prompt estilo terminal */}
                <span className="text-green-400 text-2xl md:text-4xl mr-3" style={{
                  textShadow: '0 0 20px #00ff41, 0 0 40px #00ff41'
                }}>❯</span>
                
                {/* Nombre con gradiente animado */}
                <span className="relative inline-block" style={{
                  background: 'linear-gradient(90deg, #00ffff, #00ff41, #ffff00, #00ff41, #00ffff)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'gradient 3s linear infinite',
                  filter: 'drop-shadow(0 0 30px rgba(0, 255, 255, 1)) drop-shadow(0 0 60px rgba(0, 255, 65, 0.8))',
                  fontFamily: 'Monaco, "Courier New", monospace',
                  letterSpacing: '0.05em'
                }}>
                  {PERSONAL_INFO.name}
                </span>
                
                {/* Cursor parpadeante */}
                <span className="inline-block w-3 md:w-4 h-7 md:h-12 bg-cyan-400 ml-2 animate-pulse" style={{
                  boxShadow: '0 0 30px rgba(0, 255, 255, 1)'
                }}></span>
              </h1>
            </div>
            
            <div className="h-16 mb-8">
              <h2 className="text-2xl md:text-4xl font-mono">
                <span className="text-green-400" style={{textShadow: '0 0 10px #00ff41'}}>&gt;_</span> 
                <span className="text-green-400 font-bold" style={{textShadow: '0 0 20px #00ff41, 0 0 40px #00ff41'}}>{typedText}</span>
                <span className="animate-pulse text-green-400 font-bold" style={{textShadow: '0 0 10px #00ff41'}}>█</span>
              </h2>
            </div>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              {t.hero.title}
            </p>
            
            <StatsGrid stats={STATS} />
            <SocialLinks />
            <CTAButtons scrollToSection={scrollToSection} t={t} />
          </div>
        </div>
        
        <ScrollIndicator scrollToSection={scrollToSection} />
      </section>

      {/* SECCIÓN: Companies */}
      <CompaniesSection t={t} />

      {/* SECCIÓN: Achievements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50 backdrop-blur-sm relative">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(0,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.2) 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-mono">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Key Achievements
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACHIEVEMENTS.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="bg-black/90 rounded-lg p-6 border-2 border-cyan-500/30 hover:border-cyan-500 transition-all hover:scale-105 shadow-lg hover:shadow-cyan-500/50 backdrop-blur-sm relative group overflow-hidden">
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  
                  <div className="relative z-10">
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${achievement.color} mb-4 shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-2 font-mono">{achievement.title}</h3>
                    <p className="text-sm text-gray-400">{achievement.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECCIÓN: About */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-mono">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t.about.title}
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                {t.about.description1}
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t.about.description2}
              </p>
              <div className="space-y-3">
                {[
                  { icon: MapPin, text: PERSONAL_INFO.location, color: "text-cyan-400" },
                  { icon: Phone, text: PERSONAL_INFO.phone, color: "text-purple-400" },
                  { icon: Mail, text: PERSONAL_INFO.email, color: "text-pink-400" }
                ].map(({ icon: Icon, text, color }, index) => (
                  <div key={index} className="flex items-center space-x-3 hover:scale-105 transition-transform">
                    <Icon className={color} size={20} />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-black/90 p-6 rounded-lg border-2 border-cyan-500/30 hover:border-cyan-500/50 transition-all backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-cyan-400/30 group-hover:border-cyan-400 transition-colors"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-cyan-400/30 group-hover:border-cyan-400 transition-colors"></div>
                
                <h3 className="text-xl font-semibold mb-4 text-cyan-400 flex items-center space-x-2 font-mono relative z-10">
                  <Award className="w-6 h-6" />
                  <span>Education</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-14 h-14 rounded-lg flex items-center justify-center p-1 relative group">
                      <div className="absolute inset-0 bg-red-500/30 rounded-lg opacity-0 group-hover:opacity-50 animate-pulse"></div>
                      <Image 
                        src="/images/logo-upc.png" 
                        alt="UPC Logo" 
                        className="w-full h-full object-contain hover:scale-110 transition-transform duration-300 relative z-10"
                        width={58}
                        height={58}
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-cyan-400 font-mono">Universidad Peruana de Ciencias Aplicadas</h4>
                      <p className="text-cyan-400/70 text-sm font-mono">B.S. Software Engineering • 2019-2025</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="w-full max-w-[200px] bg-gray-900 rounded-full h-2 border border-cyan-500/30">
                          <div className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full" style={{width: '100%'}}></div>
                        </div>
                        <span className="text-xs text-emerald-400 font-medium font-mono">✓ Graduated</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-14 h-14 rounded-lg flex items-center justify-center p-1 relative group">
                      <div className="absolute inset-0 bg-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 animate-pulse"></div>
                      <Image 
                        src="/images/logo-utp.png" 
                        alt="UTP Logo" 
                        className="w-full h-full object-contain hover:scale-110 transition-transform relative z-10"
                        width={58}
                        height={58}
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-400 font-mono">Universidad Tecnológica del Perú</h4>
                      <p className="text-purple-400/70 text-sm font-mono">B.S. Electronic Engineering • 2014-2018</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="w-full max-w-[200px] bg-gray-900 rounded-full h-2 border border-purple-500/30">
                          <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full" style={{width: '100%'}}></div>
                        </div>
                        <span className="text-xs text-emerald-400 font-medium font-mono">✓</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-purple-400 flex items-center space-x-2">
                  <Star className="w-6 h-6" />
                  <span>Core Competencies</span>
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Code, text: "Full Stack", color: "text-cyan-400" },
                    { icon: Brain, text: "AI/ML Systems", color: "text-purple-400" },
                    { icon: Cloud, text: "Cloud Arch", color: "text-pink-400" },
                    { icon: Smartphone, text: "Mobile Dev", color: "text-emerald-400" }
                  ].map(({ icon: Icon, text, color }, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon className={color} size={16} />
                      <span className="text-sm">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: Projects */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-mono">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t.projects.title}
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={index} project={project} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN: Skills */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-mono">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t.skills.title}
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(SKILLS).map(([category, data]) => (
              <div key={category} className="bg-black/90 rounded-lg p-6 border-2 border-cyan-500/30 hover:border-cyan-500 transition-all hover:scale-105 backdrop-blur-sm relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-cyan-400"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-cyan-400"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="text-cyan-400">{data.icon}</div>
                    <h3 className="text-xl font-semibold text-cyan-400 font-mono">{category}</h3>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-cyan-400/70 font-mono">Level</span>
                      <span className="text-sm font-bold text-cyan-400 font-mono">{data.level}%</span>
                    </div>
                    <div className="w-full bg-gray-900 rounded-full h-3 border border-cyan-500/30">
                      <div 
                        className={`bg-gradient-to-r ${data.color} h-3 rounded-full transition-all duration-1000 shadow-lg`}
                        style={{width: `${data.level}%`}}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {data.badges.map((badgeUrl, index) => (
                      <img 
                        key={index} 
                        src={badgeUrl}
                        alt={`Tech badge ${index}`}
                        className="h-8 hover:scale-105 transition-transform"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN: Experience */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-mono">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t.experience.title}
            </span>
          </h2>
          <div className="space-y-8">
            {t.experience.items.map((exp, index) => (
              <div key={index} className="bg-black/90 rounded-lg p-6 border-l-4 border-cyan-500 border-2 border-cyan-500/30 hover:border-cyan-500 transition-all hover:scale-105 backdrop-blur-sm relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-cyan-400/30 group-hover:border-cyan-400 transition-colors"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                <div className="flex items-start space-x-4 relative z-10">
                  {EXPERIENCE[index].icon ? (
                    <div className="w-16 h-16 flex-shrink-0 bg-white/10 rounded-lg p-2 flex items-center justify-center">
                      <Image 
                        src={EXPERIENCE[index].icon!} 
                        alt={exp.company}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 flex-shrink-0 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                      {exp.company.charAt(0)}
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                        <h4 className="text-lg text-cyan-400 font-medium">{exp.company}</h4>
                      </div>
                      <span className="text-gray-400 text-sm mt-2 md:mt-0 bg-gray-700 px-3 py-1 rounded-full">{exp.period}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-4">{exp.description}</p>
                    
                    <div className="space-y-2">
                      <h5 className="text-sm font-semibold text-cyan-400 flex items-center space-x-2">
                        <Award className="w-4 h-4" />
                        <span>{t.experience.achievements}:</span>
                      </h5>
                      <div className="grid md:grid-cols-3 gap-2">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center space-x-2 text-sm text-gray-300">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN: Contact */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-mono">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t.contact.title}
            </span>
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              {t.contact.subtitle}
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {CONTACT_INFO.map(({ icon: Icon, title, value, href, color, hoverColor }, index) => (
                <a
                  key={index}
                  href={href}
                  className="group bg-black/90 p-8 rounded-lg border-2 border-cyan-500/30 hover:border-cyan-500 transition-all hover:scale-105 block backdrop-blur-sm relative overflow-hidden"
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={`${title}: ${value}`}
                >
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-400"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-400"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="text-cyan-400 mx-auto mb-4 transition-colors transform group-hover:scale-110 flex justify-center">
                      <Icon size={48} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-cyan-400 font-mono">{title}</h3>
                    <p className={`text-gray-300 ${hoverColor} transition-colors`}>{value}</p>
                    <div className={`w-0 group-hover:w-full h-1 bg-gradient-to-r ${color} mx-auto mt-4 transition-all duration-300 rounded`}></div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-4 sm:px-6 lg:px-8 border-t-2 border-cyan-500/30 relative">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="text-3xl font-bold font-mono mb-4">
            <span className="text-cyan-400">&lt;</span>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">{PERSONAL_INFO.name}</span>
            <span className="text-cyan-400">/&gt;</span>
          </div>
          <p className="text-cyan-400/70 mb-6 font-mono text-sm">{PERSONAL_INFO.title}</p>
          <div className="flex justify-center space-x-6 mb-6">
            {[
              { href: PERSONAL_INFO.github, icon: Github, label: "GitHub" },
              { href: PERSONAL_INFO.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: PERSONAL_INFO.tiktok, icon: TikTokIcon, label: "TikTok - 5K Followers", badge: "5K" },
              { href: `mailto:${PERSONAL_INFO.email}`, icon: Mail, label: "Email" }
            ].map(({ href, icon: Icon, label, badge }, index) => (
              <a
                key={index}
                href={href}
                className="text-cyan-400/70 hover:text-cyan-400 transition-all transform hover:scale-110 relative group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon size={24} />
                {badge && (
                  <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    {badge}
                  </span>
                )}
              </a>
            ))}
          </div>
          <div className="border-t-2 border-cyan-500/30 pt-8">
            <p className="text-cyan-400/70 font-mono text-sm">
              © 2025 {PERSONAL_INFO.name}. All rights reserved.
            </p>
            <p className="text-cyan-400/50 text-xs mt-2 font-mono">
              
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
