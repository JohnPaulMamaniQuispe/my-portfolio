'use client'

import React, { useState, useEffect } from 'react';

// Imports modulares
import { Language } from './types';
import { translations } from './translations';
import { WhatsAppButton, Navigation, CodeRain } from './components';
import { Hero, Companies, Achievements, About, Projects, Skills, Experience, Contact, Footer } from './sections';
import { CertificationsSection } from './certifications';

const SECTION_IDS = ['home', 'experience', 'projects', 'skills', 'certifications', 'about', 'contact'];
const LANGUAGE_KEY = 'portfolio-language';

// =================================
// 🏠 COMPONENTE PRINCIPAL
// =================================
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [language, setLanguage] = useState<Language>('en');

  const t = translations[language];

  // Idioma inicial: el elegido antes por el visitante o, si no, el de su navegador
  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(LANGUAGE_KEY);
    } catch {
      // Almacenamiento bloqueado (modo privado): se usa el idioma del navegador
    }
    // Solo se puede leer en el navegador tras hidratar; leerlo antes descuadraría el HTML del servidor
    /* eslint-disable react-hooks/set-state-in-effect */
    if (saved === 'es' || saved === 'en') {
      setLanguage(saved);
    } else if (navigator.language.toLowerCase().startsWith('es')) {
      setLanguage('es');
    }
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  // Guardar el idioma y reflejarlo en <html lang> (accesibilidad y SEO)
  const changeLanguage = (lang: Language): void => {
    setLanguage(lang);
    try {
      localStorage.setItem(LANGUAGE_KEY, lang);
    } catch {
      // Sin almacenamiento: el idioma solo dura esta visita
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // Detección de scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sección activa en el menú según lo que se ve en pantalla
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  // Navegación suave
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      element.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Fondo animado fijo: más tenue en la columna central, donde está el texto */}
      <CodeRain className="fixed inset-0 w-full h-full z-0 opacity-30 [mask-image:linear-gradient(to_right,#000_0%,rgba(0,0,0,0.3)_28%,rgba(0,0,0,0.3)_72%,#000_100%)]" />

      <Navigation
        activeSection={activeSection}
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
        language={language}
        setLanguage={changeLanguage}
        t={t}
      />

      <main className="relative z-10">
        {/* Orden pensado para reclutadores: primero experiencia y trabajo, luego el resto */}
        <Hero t={t} scrollToSection={scrollToSection} />
        <Companies t={t} />
        <Experience t={t} />
        <Projects t={t} />
        <Skills t={t} />
        <CertificationsSection t={t} language={language} />
        <Achievements t={t} />
        <About t={t} />
        <Contact t={t} />
      </main>

      <div className="relative z-10">
        <Footer t={t} />
      </div>
      <WhatsAppButton />
    </div>
  );
}
