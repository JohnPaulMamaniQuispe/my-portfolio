'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, Phone, MapPin, ChevronDown, Menu, X, Code, Database, Cloud, Brain, Smartphone, Globe, Star, Zap, Award, Rocket, Download, Play } from 'lucide-react';

// =================================
//  DATOS DEL PORTAFOLIO
// =================================
const PERSONAL_INFO = {
  name: "John Paul Mamani Quispe",
  title: "Software Engineer & AI Enthusiast",
  phone: "+51 986 838 404",
  email: "john.jpmq@gmail.com",
  location: "Lima, Perú",
  photo: "/images/johnpaulmq.jpeg",
  whatsappLogo: "/images/whatsappLogo.png",
  github: "https://github.com/JohnPaulMamaniQuispe",
  linkedin: "https://www.linkedin.com/in/john-paul-mamani-quispe-159129b3",
  whatsappMessage: "Hola John Paul, me interesa conocer más sobre tus servicios de desarrollo de software"
};

const TYPING_ROLES = [
  "Software Engineer",
  "AI Enthusiast ", 
  "Full Stack Developer",
  "Cloud Architect ☁️",
  "ML Engineer "
];

const STATS = [
  { value: "95%", label: "Promedio UPC", color: "text-cyan-400" },
  { value: "6+", label: "Proyectos", color: "text-purple-400" },
  { value: "20+", label: "Tecnologías", color: "text-pink-400" },
  { value: "2+", label: "Años Exp.", color: "text-emerald-400" }
];

const PROJECTS = [
  {
    title: "Omnisapiens - Agente Inteligente Multimodal y Omnicanal",
    description: " Omnisapiens es una solución SaaS que transforma la atención al cliente en PYMEs peruanas y latinoamericanas mediante un agente inteligente multimodal y omnicanal. Utiliza IA generativa y procesamiento de lenguaje natural (NLP) para gestionar consultas en canales como WhatsApp, Telegram y Email. En Perú, el 99.6% de las empresas son PYMEs, pero solo el 47% usa canales digitales, lo que limita su competitividad. Omnisapiens ofrece una solución accesible y escalable, permitiendo a las PYMEs digitalizarse y automatizar su atención al cliente sin grandes inversiones ni conocimientos técnicos.",
    tech: ["Python", "Deep Learning", "NLP", "IA Generativa", "FastAPI", "TensorFlow"],
    status: " En desarrollo",
    type: "🎓 Tesis/Investigación",
    github: "https://github.com/JohnPaulMamaniQuispe",
    demo: "https://omnisapiens.netlify.app/",
    paper: "/papers/ARTIIS_2025_Omnisapiens_Paper.pdf",
    highlight: true,
    metrics: "Long Paper enviado a revisión internacional"
  },
  {
    title: "Rumba 🎵 - Plataforma Musical Sincronizada",
    description: "Rumba es una plataforma musical tipo Spotify que permite la reproducción sincronizada de música en tiempo real en múltiples dispositivos, tanto Android como iOS, sin latencia. Gracias a la interoperabilidad con Spotify y Youtube, los usuarios pueden producir música simultáneamente y sincronizarla en varios celulares, creando una experiencia colaborativa única. Este reto tecnológico ha sido resuelto mediante una arquitectura de microservicios escalables, con un frontend desarrollado en Swift y Flutter, garantizando una experiencia fluida y de alta calidad. Rumba 🎵 está disponible en la App Store y Google Play.",
    tech: ["Node.js", "Angular", "Flutter", "Swift", "Azure", "Docker", "Spotify API"],
    status: "✅ Producción",
    type: "🌐 Full Stack",
    github: "https://github.com/johnmamani",
    demo: "https://apps.apple.com/pe/app/rumba-free/id6736374623",
    highlight: true,
    metrics: "1000+ usuarios activos"
  },
  {
    title: "🎫 Tiquetón Perú - Plataforma de Ticketing Blockchain",
    description: "Tiquetón es una plataforma de ticketing basada en **blockchain** diseñada especialmente para **PYMEs** y **organizadores de eventos** que buscan gestionar sus propios eventos sin las altas comisiones de plataformas grandes. A medida que crecen, pueden personalizar la gestión de sus entradas con la seguridad de **smart contracts** inmutables. Los usuarios pueden transferir sus entradas de forma segura, garantizando trazabilidad y protección tanto para el comprador como para el vendedor. Este enfoque innovador maximiza la seguridad, la transparencia y los ingresos del evento, ofreciendo una experiencia sin fraude y sin intermediarios costosos.",
    tech: ["Solidity", "React", "Web3.js", "Hardhat", "IPFS", "Smart Contracts"],
    status: "✅ Implementado",
    type: "⛓️ Blockchain + Eventos",
    github: "https://github.com/johnmamani",
    demo: "https://tiqueton.netlify.app/",
    metrics: "0% de falsificación de tickets, 100% transparencia en transacciones"
  }
,
  {
    title: "🛒 E-commerce con IA Predictiva",
    description: "Plataforma de comercio electrónico con sistema de recomendaciones basado en ML y análisis predictivo avanzado del comportamiento del usuario.",
    tech: ["Next.js", "Python", "TensorFlow", "Stripe", "PostgreSQL"],
    status: "✅ Completado",
    type: "🤖 Full Stack + IA",
    github: "https://github.com/johnmamani",
    demo: "#",
    metrics: "35% aumento en conversiones"
  },
  
  {
    title: "🏢 Sistema de Gestión Empresarial",
    description: "ERP completo y escalable con módulos de inventario, facturación, RRHH y reportes analíticos en tiempo real con dashboards interactivos.",
    tech: ["Vue.js", "Spring Boot", "Java", "MySQL", "Docker"],
    status: "✅ Completado",
    type: "🏭 Enterprise",
    github: "https://github.com/johnmamani",
    demo: "#",
    metrics: "500+ empresas usando"
  },
  {
    title: "ML Pipeline Automatizado",
    description: "Pipeline completo de MLOps con entrenamiento automático, evaluación de modelos y despliegue continuo en la nube con monitoreo avanzado.",
    tech: ["Python", "MLflow", "Apache Airflow", "Docker", "Kubernetes"],
    status: "✅ Completado",
    type: "🧠 MLOps",
    github: "https://github.com/johnmamani",
    metrics: "99.5% uptime"
  }
];

const SKILLS = {
  "Frontend": {
    icon: <Globe className="w-8 h-8" />,
    badges: [
      "https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB",
      "https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white",
      "https://img.shields.io/badge/Angular-DD0031?style=flat&logo=angular&logoColor=white",
      "https://img.shields.io/badge/Vue.js-35495E?style=flat&logo=vuedotjs&logoColor=4FC08D",
      "https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white",
      "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white"
    ],
    level: 70,
    color: "from-cyan-400 to-blue-500"
  },
  "Backend": {
    icon: <Database className="w-8 h-8" />,
    badges: [
      "https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white",
      "https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white",
      "https://img.shields.io/badge/Java-ED8B00?style=flat&logo=java&logoColor=white",
      "https://img.shields.io/badge/Spring-6DB33F?style=flat&logo=spring&logoColor=white",
      "https://img.shields.io/badge/FastAPI-005571?style=flat&logo=fastapi&logoColor=white",
      "https://img.shields.io/badge/Express.js-404D59?style=flat&logo=express&logoColor=white"
    ],
    level: 80,
    color: "from-emerald-400 to-teal-500"
  },
  "Mobile": {
    icon: <Smartphone className="w-8 h-8" />,
    badges: [
      "https://img.shields.io/badge/React_Native-20232A?style=flat&logo=react&logoColor=61DAFB",
      "https://img.shields.io/badge/Flutter-02569B?style=flat&logo=flutter&logoColor=white",
      "https://img.shields.io/badge/Swift-FA7343?style=flat&logo=swift&logoColor=white",
      "https://img.shields.io/badge/Kotlin-7F52FF?style=flat&logo=kotlin&logoColor=white"
    ],
    level: 69,
    color: "from-purple-400 to-pink-500"
  },
  "IA & ML": {
    icon: <Brain className="w-8 h-8" />,
    badges: [
      "https://img.shields.io/badge/TensorFlow-FF6F00?style=flat&logo=tensorflow&logoColor=white",
      "https://img.shields.io/badge/PyTorch-EE4C2C?style=flat&logo=pytorch&logoColor=white",
      "https://img.shields.io/badge/scikit--learn-F7931E?style=flat&logo=scikit-learn&logoColor=white",
      "https://img.shields.io/badge/OpenAI-74aa9c?style=flat&logo=openai&logoColor=white",
      "https://img.shields.io/badge/Hugging_Face-FFD21E?style=flat&logo=huggingface&logoColor=black",
      "https://img.shields.io/badge/Rasa-5A5E9C?style=flat&logo=rasa&logoColor=white"
    ],
    level: 68,
    color: "from-orange-400 to-red-500"
  },
  "Cloud & DevOps": {
    icon: <Cloud className="w-8 h-8" />,
    badges: [
      "https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazonaws&logoColor=white",
      "https://img.shields.io/badge/Microsoft%20Azure-0089D6?style=flat&logo=microsoftazure&logoColor=white",
      "https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white",
      "https://img.shields.io/badge/Kubernetes-326CE5?style=flat&logo=kubernetes&logoColor=white",
      "https://img.shields.io/badge/Jenkins-D24939?style=flat&logo=jenkins&logoColor=white",
      "https://img.shields.io/badge/GitHub%20Actions-2088FF?style=flat&logo=githubactions&logoColor=white"
    ],
    level: 65,
    color: "from-blue-400 to-indigo-500"
  },
  "Database": {
    icon: <Code className="w-8 h-8" />,
    badges: [
      "https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white",
      "https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white",
      "https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white",
      "https://img.shields.io/badge/Redis-DC382D?style=flat&logo=redis&logoColor=white",
      "https://img.shields.io/badge/Elasticsearch-005571?style=flat&logo=elasticsearch&logoColor=white"
    ],
    level: 68,
    color: "from-yellow-400 to-amber-500"
  }
};

const EXPERIENCE = [
  {
    company: "🚀 Proyecto Omnisapiens",
    role: "Desarrollador Principal & Project Manager",
    period: "Abril 2025 - Presente",
    description: "Liderazgo en desarrollo de agente inteligente multimodal para PYMEs usando Deep Learning y NLP. Gestión completa del proyecto desde la concepción hasta la implementación.",
    icon: "🎓",
    achievements: ["Paper enviado a la conferencia  ARTIIS 2025", "90% precisión en respuestas automáticas", "Equipo de 5 desarrolladores"]
  },
  {
    company: "💼 WORBUM S.A.C",
    role: "Desarrollador Full Stack",
    period: "Agosto 2024 - Presente",
    description: "Desarrollo de microservicios escalables y aplicaciones móviles con sincronización en tiempo real. Implementación en Azure con Docker y Kubernetes.",
    icon: "🌐",
    achievements: ["1000+ usuarios activos", "99.9% uptime", "Reducción de 40% en latencia"]
  },
  {
    company: "⚡ Betabyte S.A.C",
    role: "Desarrollador Frontend/Backend",
    period: "Julio 2023 - Diciembre 2023",
    description: "Implementación de soluciones con Vue.js y Spring Boot siguiendo metodologías ágiles. Desarrollo de APIs RESTful y interfaces de usuario responsivas.",
    icon: "💻",
    achievements: ["5 proyectos entregados", "100% cumplimiento de deadlines", "Metodologías ágiles"]
  }
];

const CONTACT_INFO = [
  { 
    icon: Mail, 
    title: "Email", 
    value: PERSONAL_INFO.email,
    href: `mailto:${PERSONAL_INFO.email}`,
    color: "from-red-400 to-pink-500",
    hoverColor: "group-hover:text-red-400"
  },
  { 
    icon: Phone, 
    title: "Teléfono", 
    value: PERSONAL_INFO.phone,
    href: `tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`,
    color: "from-emerald-400 to-teal-500",
    hoverColor: "group-hover:text-emerald-400"
  },
  { 
    icon: Linkedin, 
    title: "LinkedIn", 
    value: "johnpaulmamani",
    href: PERSONAL_INFO.linkedin,
    color: "from-blue-400 to-indigo-500",
    hoverColor: "group-hover:text-blue-400"
  }
];

// =================================
// 🎨 COMPONENTES REUTILIZABLES
// =================================

// Componente: Botón WhatsApp
const WhatsAppButton = () => (
  <>
    <style jsx>{`
      .btn-whatsapp {
        position: fixed;
        z-index: 999;
        bottom: 20px;
        right: 20px;
      }
      .btn-whatsapp:before,
      .btn-whatsapp:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: rgb(0, 255, 0);
        opacity: 0;
        transform: translate(-50%, -50%) scale(0);
        animation: onda 1.7s infinite;
      }
      .btn-whatsapp:before {
        animation-delay: 1s;
      }
      .btn-whatsapp:after {
        animation-delay: 1.3s;
      }
      .btn-whatsapp img {
        position: relative;
        z-index: 2;
        width: 50px;
        height: 50px;
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

// Componente: Navegación
const Navigation = ({ activeSection, isScrolled, isMenuOpen, setIsMenuOpen, scrollToSection }: {
  activeSection: string;
  isScrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  scrollToSection: (section: string) => void;
}) => {
  const menuItems = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm border-b border-cyan-500/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            JP
          </div>
          
          <div className="hidden md:block">
            <div className="flex space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`px-3 py-2 text-sm font-medium transition-colors capitalize ${
                    activeSection === item ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-gray-800">
          <div className="px-4 py-2 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-cyan-400 capitalize w-full text-left transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// Componente: Avatar con Foto
const ProfileAvatar = () => (
  <div className="relative mb-8">
    <div className="w-48 h-48 mx-auto relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full animate-pulse"></div>
      <div className="relative w-full h-full bg-gray-900 rounded-full overflow-hidden border-4 border-gray-900">
        <Image 
          src={PERSONAL_INFO.photo}
          alt={`${PERSONAL_INFO.name} - Software Engineer`}
          className="w-full h-full object-cover object-top"
          style={{ objectPosition: 'center top' }}
          width={192}
          height={192}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const fallback = target.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = 'flex';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-yellow-400 to-pink-400 rounded-full flex items-center justify-center text-6xl font-bold text-white" style={{display: 'none'}}>
          JP
        </div>
      </div>
    </div>
  </div>
);

// Componente: Estadísticas
const StatsGrid = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-3xl mx-auto">
    {STATS.map((stat, index) => (
      <div key={index} className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-cyan-500/50 transition-all hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
        <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
        <div className="text-sm text-gray-400">{stat.label}</div>
      </div>
    ))}
  </div>
);

// Componente: Enlaces Sociales
const SocialLinks = () => {
  const socialLinks = [
    { href: PERSONAL_INFO.github, icon: Github, color: "hover:text-purple-400" },
    { href: PERSONAL_INFO.linkedin, icon: Linkedin, color: "hover:text-cyan-400" },
    { href: `mailto:${PERSONAL_INFO.email}`, icon: Mail, color: "hover:text-pink-400" }
  ];
  
  return (
    <div className="flex justify-center space-x-6 mb-12">
      {socialLinks.map(({ href, icon: Icon, color }, index) => (
        <a
          key={index}
          href={href}
          className={`text-gray-300 ${color} transition-all duration-300 transform hover:scale-110`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon size={28} />
        </a>
      ))}
    </div>
  );
};

// Componente: Botones de Acción
const CTAButtons = ({ scrollToSection }: { scrollToSection: (section: string) => void }) => (
  <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
    <button
      onClick={() => scrollToSection('projects')}
      className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
    >
      <Rocket className="w-5 h-5" />
      <span>Ver Proyectos</span>
    </button>
    
    <button
      onClick={() => scrollToSection('contact')}
      className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:bg-purple-500 hover:text-white flex items-center justify-center space-x-2"
    >
      <Mail className="w-5 h-5" />
      <span>Contactar</span>
    </button>
    
    <a 
      href="/cv/John_Paul_Mamani_CV1.pdf"
      download="John_Paul_Mamani_CV1.pdf"
      className="px-8 py-4 border-2 border-pink-500 text-pink-400 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:bg-pink-500 hover:text-white flex items-center justify-center space-x-2"
    >
      <Download className="w-5 h-5" />
      <span>Descargar CV</span>
    </a>
  </div>
);

// Componente: Tarjeta de Proyecto
const ProjectCard = ({ project }: { project: typeof PROJECTS[0] }) => (
  <div className={`relative bg-gray-800/50 rounded-xl overflow-hidden transition-all duration-300 border border-gray-700 hover:border-cyan-500/50 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 ${project.highlight ? 'ring-2 ring-gradient-to-r from-cyan-500 to-purple-500' : ''}`}>
    {project.highlight && (
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
          <Star className="w-3 h-3" />
          <span>Destacado</span>
        </div>
      </div>
    )}
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full">
          {project.type}
        </span>
        <span className={`text-sm px-3 py-1 rounded-full text-white ${
          project.status.includes('Completado') ? 'bg-emerald-500' : 
          project.status.includes('desarrollo') ? 'bg-amber-500' : 'bg-blue-500'
        }`}>
          {project.status}
        </span>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white hover:text-cyan-400 transition-colors">{project.title}</h3>
      <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
      
      {project.metrics && (
        <div className="mb-4 p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
          <div className="flex items-center space-x-2">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400">{project.metrics}</span>
          </div>
        </div>
      )}
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.slice(0, 4).map((tech, i) => (
          <span key={i} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors">
            {tech}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
            +{project.tech.length - 4} más
          </span>
        )}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex space-x-3">
          <a href={project.github} className="text-gray-300 hover:text-purple-400 transition-colors" target="_blank" rel="noopener noreferrer" title="Ver código en GitHub">
            <Github size={20} />
          </a>
          {project.demo && (
            <a href={project.demo} className="text-gray-300 hover:text-emerald-400 transition-colors" target="_blank" rel="noopener noreferrer" title="Ver demo en vivo">
              <Play size={20} />
            </a>
          )}
        </div>
        <div className="flex flex-col space-y-2">
          {project.paper && (
            <a
              href={project.paper}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-2 rounded-lg flex items-center space-x-2 hover:scale-105 transition-transform cursor-pointer shadow-lg hover:shadow-purple-500/25"
              title="Descargar paper completo"
            >
              <Award className="w-4 h-4" />
              <span>📄 Ver Paper ARTIIS 2025</span>
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

// =================================
// 🏠 COMPONENTE PRINCIPAL
// =================================
export default function Portfolio() {
  // Estados
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);

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
  const scrollToSection = (sectionId: string) => {
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
          <div className="text-xl">Cargando portafolio...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Botón WhatsApp */}
      <WhatsAppButton />

      {/* Fondo */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-cyan-900/10 to-purple-900/10"></div>
      </div>

      {/* Navegación */}
      <Navigation 
        activeSection={activeSection}
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />

      {/* SECCIÓN: Hero */}
      <section id="home" className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="text-center">
            <ProfileAvatar />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {PERSONAL_INFO.name}
            </h1>
            
            <div className="h-16 mb-8">
              <h2 className="text-2xl md:text-4xl text-gray-300">
                <span className="text-cyan-400 font-bold">{typedText}</span>
                <span className="animate-pulse">|</span>
              </h2>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Transformando ideas innovadoras en <span className="text-cyan-400 font-semibold">código que impacta el mundo real</span>. 
              Especializado en desarrollo full stack, IA generativa y arquitecturas cloud escalables.
            </p>
            <StatsGrid />
            <SocialLinks />
            <CTAButtons scrollToSection={scrollToSection} />
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-cyan-400" size={32} />
        </div>
      </section>

      {/* SECCIÓN: Sobre Mí */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Sobre Mí ✨
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                 Estudiante de <span className="text-cyan-400 font-semibold">Ingeniería de Software en la UPC</span> con enfoque en DevOps y tecnologías emergentes. 
                Con experiencia práctica en desarrollo full stack, IA generativa y arquitecturas cloud escalables.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Mi pasión por la <span className="text-purple-400 font-semibold">investigación científica y el análisis comparativo</span> es el motor de mi trabajo. 
                Reviso, comparo y sintetizo estudios para identificar oportunidades de innovación, aplicando estos hallazgos en <span className="text-cyan-400 font-semibold">Machine Learning, Deep Learning y NLP</span> para crear soluciones con fundamento científico.
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
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400 flex items-center space-x-2">
                  <Award className="w-6 h-6" />
                  <span>Educación</span>
                </h3>
                <div className="space-y-4">
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-14 h-14 rounded-lg flex items-center justify-center p-1 relative logo-upc-container">
                      <style jsx>{`
                        .logo-upc-container:before,
                        .logo-upc-container:after {
                          content: "";
                          position: absolute;
                          top: 50%;
                          left: 50%;
                          width: 100%;
                          height: 100%;
                          border-radius: 12px;
                          background: red;
                          opacity: 0;
                          transform: translate(-50%, -50%) scale(0);
                          animation: ondaUPC 2s infinite;
                        }
                        .logo-upc-container:before {
                          animation-delay: 0.5s;
                        }
                        .logo-upc-container:after {
                          animation-delay: 1s;
                        }
                        .logo-upc-container img {
                          position: relative;
                          z-index: 2;
                        }
                        @keyframes ondaUPC {
                          0% {
                            transform: translate(-50%, -50%) scale(0);
                            opacity: 0;
                          }
                          15% {
                            opacity: 0.7;
                          }
                          100% {
                            opacity: 0;
                            transform: translate(-50%, -50%) scale(2);
                          }
                        }
                      `}</style>
                      <Image 
                        src="/images/logo-upc.png" 
                        alt="UPC Logo" 
                        className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                        width={58}
                        height={58}
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Universidad Peruana de Ciencias Aplicadas</h4>
                      <p className="text-gray-400">Ingeniería de Software • 2019-2025</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full" style={{width: '95%'}}></div>
                        </div>
                        <span className="text-sm text-cyan-400 font-medium">95%</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-16 h-16  rounded-lg flex items-center justify-center p-1">
                      <Image 
                        src="/images/logo-utp.png" 
                        alt="UTP Logo" 
                        className="w-full h-full object-contain"
                        width={58}
                        height={58}
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Universidad Tecnológica del Perú</h4>
                      <p className="text-gray-400">Ingeniería Electrónica • 2014-2018</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full" style={{width: '100%'}}></div>
                        </div>
                        <span className="text-sm text-emerald-400 font-medium">✓</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-purple-400 flex items-center space-x-2">
                  <Star className="w-6 h-6" />
                  <span>Especialidades</span>
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Code, text: "Full Stack", color: "text-cyan-400" },
                    { icon: Brain, text: "IA & ML", color: "text-purple-400" },
                    { icon: Cloud, text: "Cloud & DevOps", color: "text-pink-400" },
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

      {/* SECCIÓN: Proyectos */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Proyectos Destacados 
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN: Habilidades */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Habilidades Técnicas 
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(SKILLS).map(([category, data]) => (
              <div key={category} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all hover:scale-105">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="text-cyan-400 hover:text-purple-400 transition-colors">
                    {data.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category}</h3>
                </div>
                
                {/* Barra de Progreso */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Nivel de experiencia</span>
                    <span className="text-sm font-bold text-cyan-400">{data.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div 
                      className={`bg-gradient-to-r ${data.color} h-3 rounded-full transition-all duration-1000`}
                      style={{width: `${data.level}%`}}
                    ></div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {data.badges.map((badgeUrl, index) => (
                    <img 
                      key={index} 
                      src={badgeUrl}
                      alt="Technology Badge"
                      className="h-8 hover:scale-105 transition-transform cursor-default"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN: Experiencia */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experiencia Profesional 💼
          </h2>
          <div className="space-y-8">
            {EXPERIENCE.map((exp, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border-l-4 border-cyan-500 border border-gray-700 hover:border-cyan-500/50 transition-all hover:scale-105">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{exp.icon}</div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white hover:text-cyan-400 transition-colors">{exp.role}</h3>
                        <h4 className="text-lg text-cyan-400 font-medium">{exp.company}</h4>
                      </div>
                      <span className="text-gray-400 text-sm mt-2 md:mt-0 bg-gray-700 px-3 py-1 rounded-full">{exp.period}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-4">{exp.description}</p>
                    
                    {/* Logros */}
                    <div className="space-y-2">
                      <h5 className="text-sm font-semibold text-cyan-400 flex items-center space-x-2">
                        <Award className="w-4 h-4" />
                        <span>Logros destacados:</span>
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

      {/* SECCIÓN: Contacto */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Contacto 📞
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              ¿Interesado en colaborar? Estoy abierto a nuevas oportunidades y proyectos innovadores.
              <br />
              <span className="text-cyan-400 font-semibold">¡Construyamos algo increíble juntos!</span>
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {CONTACT_INFO.map(({ icon: Icon, title, value, href, color, hoverColor }, index) => (
                <a
                  key={index}
                  href={href}
                  className="group bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all hover:scale-105 block"
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <Icon className={`text-cyan-400 mx-auto mb-4 ${hoverColor} transition-colors transform group-hover:scale-110`} size={48} />
                  <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
                  <p className={`text-gray-300 ${hoverColor} transition-colors`}>{value}</p>
                  <div className={`w-0 group-hover:w-full h-1 bg-gradient-to-r ${color} mx-auto mt-4 transition-all duration-300 rounded`}></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: Footer */}
      <footer className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              {PERSONAL_INFO.name}
            </div>
            <p className="text-gray-400 mb-6">{PERSONAL_INFO.title}</p>
            <div className="flex justify-center space-x-6 mb-6">
              {[
                { href: PERSONAL_INFO.github, icon: Github },
                { href: PERSONAL_INFO.linkedin, icon: Linkedin },
                { href: `mailto:${PERSONAL_INFO.email}`, icon: Mail }
              ].map(({ href, icon: Icon }, index) => (
                <a
                  key={index}
                  href={href}
                  className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              © 2025 {PERSONAL_INFO.name}. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Desarrollado con amor usando Next.js, React, Tailwind CSS y mucho café ☕
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}