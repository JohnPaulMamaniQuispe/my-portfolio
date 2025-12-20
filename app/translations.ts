import { Translation } from './types';

export const translations: Record<'es' | 'en', Translation> = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Mí',
      projects: 'Proyectos',
      skills: 'Habilidades',
      experience: 'Experiencia',
      contact: 'Contacto'
    },
    hero: {
      greeting: '¡Hola! Soy',
      title: 'Transformo ideas en soluciones digitales de alto impacto',
      btnProjects: 'Ver Proyectos',
      btnResume: 'Descargar CV',
      btnContact: 'Contactar'
    },
    about: {
      title: 'Sobre Mí',
      subtitle: 'Senior Software Engineer especializado en IA/ML, Cloud y Arquitectura de Sistemas de Alto Impacto',
      description1: 'Egresado de Ingeniería de Software de la UPC (100% completado, en proceso de graduación) con enfoque en Backend Development y tecnologías emergentes. Actualmente trabajando en NTT DATA & BCP, desarrollando microservicios de misión crítica para Banca Móvil 3.0 que sirven a 10M+ usuarios activos. Experiencia práctica en arquitecturas reactivas, event-driven con Quarkus, Kafka y Kubernetes.',
      description2: 'Mi pasión por la investigación científica y el análisis comparativo es el motor de mi trabajo. Paper aceptado en CSCI 2025 (Springer Nature, Las Vegas) con 80% de calificación global, presentando agente inteligente multimodal para PYMEs que integra CLIP (visión), Whisper (audio) y Mistral 7B (NLP). La investigación transforma vidas: demostrando que la IA puede cerrar la brecha digital en América Latina.'
    },
    projects: {
      title: 'Proyectos Destacados',
      subtitle: 'Soluciones de software que generan impacto real',
      status: 'Estado',
      viewProject: 'Ver Proyecto',
      viewCode: 'Ver Código',
      viewPaper: 'Ver Paper'
    },
    skills: {
      title: 'Habilidades Técnicas',
      subtitle: 'Stack tecnológico completo para desarrollo enterprise'
    },
    experience: {
      title: 'Experiencia Profesional',
      subtitle: 'Trayectoria construyendo soluciones de alto impacto',
      achievements: 'Logros Clave',
      items: [
        {
          company: 'NTT DATA & BCP - Banco de Crédito del Perú',
          role: 'Senior Backend Developer - Microservices Architect',
          period: 'jul. 2024 - actualidad · 5+ meses',
          description: 'Desarrollo de microservicios cloud-native para Banca Móvil 3.0 (10M+ usuarios activos) utilizando Quarkus Framework con programación reactiva (Mutiny, SmallRye Reactive Messaging). Implementación de arquitecturas event-driven con Apache Kafka, Redis para caché distribuido y bases de datos PostgreSQL/MongoDB. Diseño de APIs RESTful bajo estándares BIAN (Banking Industry Architecture Network) con patrones empresariales: CQRS, Event Sourcing, Saga Pattern. Despliegue en Azure Kubernetes Service (AKS) con estrategias Blue-Green/Canary, pipelines CI/CD vía Azure DevOps. Gestión de secrets con HashiCorp Vault, service mesh con Consul. Monitoreo 24/7 con Prometheus, Grafana, ELK Stack. Coordinación con equipos QA, Frontend, DevOps, Arquitectos Empresariales y POs bajo Scrum/Kanban en sprints de 2 semanas.',
          achievements: [
            '5+ microservicios en producción (10M+ usuarios)',
            'Event-driven architecture con Kafka',
            'APIs bajo estándar BIAN',
            '99.99% SLA - Zero downtime',
            'CI/CD Azure DevOps + GitOps',
            'Quarkus + Redis + Kubernetes'
          ]
        },
        {
          company: 'Betabyte S.A.C',
          role: 'Full Stack Developer & Founder',
          period: 'ene. 2024 - Sept. 2024',
          description: 'Fundador y arquitecto técnico de startup especializada en soluciones empresariales. Diseñé y desarrollé sistema integral de diagnóstico en línea para equipos Apple con gestión de reparaciones, ventas e inventario. Stack tecnológico: Vue.js, React, Next.js en frontend con enfoque en usabilidad y accesibilidad; Java Spring Boot en backend optimizando seguridad y eficiencia. Implementé persistencia híbrida IndexedDB + Firebase para experiencia offline-first. Lideré desarrollo de landing pages y módulos FAQ interactivos mejorando autoservicio al cliente. Como CEO, dirigí estrategia técnica: definición de requerimientos, contratación de equipo técnico y validación con clientes reales. Aplicación de metodologías ágiles (Scrum) garantizando entregables iterativos de alta calidad alineados con objetivos de negocio.',
          achievements: [
            'Sistema empresarial Apple completo en producción',
            'Offline-first: IndexedDB + Firebase',
            'Stack: Vue.js, React, Next.js, Spring Boot',
            'CEO & Arquitecto técnico',
            'Scrum para entregables iterativos'
          ]
        },
        {
          company: 'Omnisapiens AI Research Project',
          role: 'Lead AI Engineer & Researcher',
          period: 'abr. 2024 - dic. 2024',
          description: 'Lideré el desarrollo de agente inteligente multimodal y omnicanal para PYMEs como proyecto de tesis. Long paper aceptado en CSCI 2025 (Springer Nature, Las Vegas) con 80% de calificación global. Diseñé arquitectura de "humano digital" integrando CLIP para visión, Whisper para audio, Mistral 7B para NLP, y detección de emociones. Implementación de plataforma omnicanal unificada (WhatsApp, Messenger, Telegram, MS Teams) con Deep Learning y NLP. Procesamiento de 10K+ conversaciones diarias con <200ms de latencia. Selectividad de 18-21% de aceptación en conferencia indexada en top 5% mundial.',
          achievements: [
            'Paper aceptado CSCI 2025 (Springer Nature)',
            '80% calificación global - Impacto social',
            'Agente multimodal: CLIP + Whisper + Mistral 7B',
            'Plataforma omnicanal unificada',
            '10K+ conversaciones/día - <200ms latencia'
          ]
        },
        {
          company: 'WORBUM S.A.C',
          role: 'Full Stack Engineer - Mobile & Cloud',
          period: 'ago. 2023 - dic. 2024',
          description: 'Ingeniería de plataforma de sincronización musical en tiempo real sirviendo a 10K+ usuarios activos en iOS y Android. Construcción de arquitectura de microservicios event-driven en Azure usando Node.js, logrando 99.9% uptime y manejando 1M+ solicitudes API mensuales. Optimización de consultas de base de datos e implementación de caché Redis, reduciendo latencia en 40% (de 500ms a 300ms). Desarrollo de aplicaciones móviles nativas usando Swift y Flutter con integración WebSocket para actualizaciones en tiempo real. Establecimiento de pipelines CI/CD con Docker y Kubernetes, reduciendo tiempo de despliegue de 2 horas a 15 minutos.',
          achievements: [
            '10K+ usuarios activos escalados',
            '99.9% uptime mantenido',
            '40% reducción de latencia',
            '1M+ llamadas API mensuales',
            'CI/CD deployment: 2h → 15min'
          ]
        }
      ]
    },
    contact: {
      title: 'Contacto',
      subtitle: '¿Listo para crear algo increíble juntos?',
      sendMessage: 'Enviar Mensaje'
    },
    companies: {
      title: 'Empresas de Confianza',
      subtitle: 'He trabajado con empresas líderes desarrollando soluciones de alto impacto'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      experience: 'Experience',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hi! I\'m',
      title: 'Transforming ideas into high-impact digital solutions',
      btnProjects: 'View Projects',
      btnResume: 'Download Resume',
      btnContact: 'Contact Me'
    },
    about: {
      title: 'About Me',
      subtitle: 'Senior Software Engineer specialized in AI/ML, Cloud, and High-Impact Systems Architecture',
      description1: 'Software Engineering graduate from UPC (100% completed, graduation in progress) with focus on Backend Development and emerging technologies. Currently working at NTT DATA & BCP, developing mission-critical microservices for Banca Móvil 3.0 serving 10M+ active users. Hands-on experience in reactive architectures, event-driven systems with Quarkus, Kafka, and Kubernetes.',
      description2: 'My passion for scientific research and comparative analysis drives my work. Paper accepted at CSCI 2025 (Springer Nature, Las Vegas) with 80% global rating, presenting multimodal intelligent agent for SMEs integrating CLIP (vision), Whisper (audio), and Mistral 7B (NLP). Research transforms lives: proving that AI can bridge the digital divide in Latin America.'
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Software solutions that generate real impact',
      status: 'Status',
      viewProject: 'View Project',
      viewCode: 'View Code',
      viewPaper: 'View Paper'
    },
    skills: {
      title: 'Technical Skills',
      subtitle: 'Complete tech stack for enterprise development'
    },
    experience: {
      title: 'Professional Experience',
      subtitle: 'Building high-impact solutions throughout my career',
      achievements: 'Key Achievements',
      items: [
        {
          company: 'NTT DATA & BCP - Banco de Crédito del Perú',
          role: 'Senior Backend Developer - Microservices Architect',
          period: 'Sep 2024 - Present · 5+ months',
          description: 'Development of cloud-native microservices for Banca Móvil 3.0 (10M+ active users) using Quarkus Framework with reactive programming (Mutiny, SmallRye Reactive Messaging). Implementation of event-driven architectures with Apache Kafka, Redis for distributed caching, and PostgreSQL/MongoDB databases. Design of RESTful APIs under BIAN standards (Banking Industry Architecture Network) with enterprise patterns: CQRS, Event Sourcing, Saga Pattern. Deployment on Azure Kubernetes Service (AKS) with Blue-Green/Canary strategies, CI/CD pipelines via Azure DevOps. Secrets management with HashiCorp Vault, service mesh with Consul. 24/7 monitoring with Prometheus, Grafana, ELK Stack. Coordination with QA, Frontend, DevOps teams, Enterprise Architects and POs under Scrum/Kanban in 2-week sprints.',
          achievements: [
            '5+ microservices in production (10M+ users)',
            'Event-driven architecture with Kafka',
            'APIs under BIAN standard',
            '99.99% SLA - Zero downtime',
            'CI/CD Azure DevOps + GitOps',
            'Quarkus + Redis + Kubernetes'
          ]
        },
        {
          company: 'Betabyte S.A.C',
          role: 'Full Stack Developer & Founder',
          period: 'Jan 2024 - Sep 2024',
          description: 'Founder and technical architect of startup specializing in enterprise solutions. Designed and developed comprehensive online diagnostic system for Apple equipment with repair management, sales and inventory. Tech stack: Vue.js, React, Next.js on frontend focusing on usability and accessibility; Java Spring Boot on backend optimizing security and efficiency. Implemented hybrid persistence IndexedDB + Firebase for offline-first experience. Led development of landing pages and interactive FAQ modules improving customer self-service. As CEO, directed technical strategy: requirements definition, technical team hiring and validation with real customers. Applied agile methodologies (Scrum) ensuring high-quality iterative deliverables aligned with business objectives.',
          achievements: [
            'Complete Apple enterprise system in production',
            'Offline-first: IndexedDB + Firebase',
            'Stack: Vue.js, React, Next.js, Spring Boot',
            'CEO & Technical Architect',
            'Scrum for iterative deliverables'
          ]
        },
        {
          company: 'Omnisapiens AI Research Project',
          role: 'Lead AI Engineer & Researcher',
          period: 'Apr 2024 - Dec 2024',
          description: 'Led development of multimodal and omnichannel intelligent agent for SMEs as thesis project. Long paper accepted at CSCI 2025 (Springer Nature, Las Vegas) with 80% global rating. Designed "digital human" architecture integrating CLIP for vision, Whisper for audio, Mistral 7B for NLP, and emotion detection. Implementation of unified omnichannel platform (WhatsApp, Messenger, Telegram, MS Teams) with Deep Learning and NLP. Processing 10K+ daily conversations with <200ms latency. Conference acceptance rate of 18-21% in top 5% worldwide indexed venue.',
          achievements: [
            'Paper accepted at CSCI 2025 (Springer Nature)',
            '80% global rating - Social impact',
            'Multimodal agent: CLIP + Whisper + Mistral 7B',
            'Unified omnichannel platform',
            '10K+ conversations/day - <200ms latency'
          ]
        },
        {
          company: 'WORBUM S.A.C',
          role: 'Full Stack Engineer - Mobile & Cloud',
          period: 'Aug 2023 - Dec 2024',
          description: 'Engineered real-time music synchronization platform serving 10K+ active users across iOS and Android. Built event-driven microservices architecture on Azure using Node.js, achieving 99.9% uptime and handling 1M+ API requests monthly. Optimized database queries and implemented Redis caching, reducing latency by 40% (from 500ms to 300ms). Developed native mobile applications using Swift and Flutter with WebSocket integration for real-time updates. Established CI/CD pipelines with Docker and Kubernetes, reducing deployment time from 2 hours to 15 minutes.',
          achievements: [
            '10K+ active users scaled',
            '99.9% uptime maintained',
            '40% latency reduction',
            '1M+ monthly API calls',
            'CI/CD deployment: 2h → 15min'
          ]
        }
      ]
    },
    contact: {
      title: 'Contact',
      subtitle: 'Ready to build something amazing together?',
      sendMessage: 'Send Message'
    },
    companies: {
      title: 'Trusted by Leading Companies',
      subtitle: 'Built high-impact solutions for industry leaders'
    }
  }
};
