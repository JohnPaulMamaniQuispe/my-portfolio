import { Translation } from './types';

export const translations: Record<'es' | 'en', Translation> = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Mí',
      projects: 'Proyectos',
      skills: 'Habilidades',
      experience: 'Experiencia',
      certifications: 'Certificados',
      contact: 'Contacto'
    },
    hero: {
      greeting: '¡Hola! Soy',
      title: 'Construyo sistemas backend y plataformas cloud-native de misión crítica para banca digital.',
      btnProjects: 'Ver Proyectos',
      btnResume: 'Solicitar CV',
      resumeSubject: 'Solicitud de CV - John Paul Mamani',
      resumeBody: 'Hola John Paul,\n\nMe gustaría recibir tu CV actualizado.\n\nNombre:\nEmpresa:\nPuesto / oportunidad:\n\nGracias.',
      resumeNote: 'CV disponible a solicitud personal:',
      btnContact: 'Contactar'
    },
    about: {
      title: 'Sobre Mí',
      subtitle: 'Senior Software Engineer | Backend & Sistemas Distribuidos | Java | Microservicios | Cloud-Native | AI Engineering | System Design',
      description1: 'Software Engineer (B.Sc. en Ingeniería de Software – UPC) especializado en Backend Engineering, Microservicios, Sistemas Distribuidos y Arquitecturas Cloud-Native. Diseño y desarrollo plataformas empresariales para banca digital con Java 21, Quarkus, REST APIs, Apache Kafka, Redis y Azure SQL, aplicando OpenAPI y el estándar BIAN, Event-Driven Architecture, Arquitectura Hexagonal, DDD, SOLID y Clean Code. Despliego sobre Azure Kubernetes Service (AKS) con HPA, Ingress, ConfigMaps, Secrets y HashiCorp Vault, automatizando la entrega con CI/CD, Jenkins y prácticas DevSecOps.',
      description2: 'Expando mi experiencia en AI Backend Engineering y Cloud Computing, desarrollando soluciones con Python, FastAPI, LLMs, AI Agents, RAG, Tool Calling, Context & Memory Management y AWS Lambda, explorando frameworks como LangGraph, CrewAI, AutoGen, Semantic Kernel y OpenAI Agents SDK. Me apasionan la Arquitectura de Software, el System Design, Platform Engineering, Cloud Computing y la Inteligencia Artificial, diseñando plataformas escalables, resilientes y preparadas para operar a escala empresarial.',
      education: 'Educación',
      competencies: 'Competencias',
      graduated: 'Graduado'
    },
    projects: {
      title: 'Proyectos Destacados',
      subtitle: 'Soluciones de software que generan impacto real',
      status: 'Estado',
      viewProject: 'Ver Proyecto',
      viewCode: 'Ver Código',
      viewPaper: 'Ver Paper',
      featured: 'Destacado',
      details: 'Detalles'
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
          company: 'Coforge & BCP - Banco de Crédito del Perú',
          role: 'Senior Software Engineer',
          period: 'oct. 2026 - actualidad · Lima, Híbrido',
          description: 'Senior Software Engineer asignado al cliente BCP para plataformas de banca digital. Diseño y desarrollo de microservicios con Java 21 y Quarkus, REST APIs bajo OpenAPI y el estándar BIAN, mensajería con Apache Kafka, caché con Redis y persistencia en Azure SQL, aplicando Event-Driven Architecture, Arquitectura Hexagonal, DDD, SOLID y Clean Code. Despliegue sobre Azure Kubernetes Service (AKS) con HPA, Ingress, ConfigMaps, Secrets y HashiCorp Vault, con CI/CD en Jenkins, prácticas DevSecOps y observabilidad con Grafana.',
          achievements: [
            'Microservicios Java 21 + Quarkus',
            'Apache Kafka · Event-Driven',
            'APIs OpenAPI · estándar BIAN',
            'Azure AKS · HPA · HashiCorp Vault',
            'CI/CD Jenkins · DevSecOps',
            'Observabilidad con Grafana'
          ]
        },
        {
          company: 'NTT DATA Europe & Latam & BCP - Banco de Crédito del Perú',
          role: 'Backend Developer - Microservices',
          period: 'sept. 2024 - sept. 2026',
          description: 'Proyecto MBBK – BMO 3.0 Banca Móvil (10M+ usuarios activos), Squad Lending - Tribu Canales Digitales. Desarrollo de microservicios reactivos con Quarkus Framework (Java 21) para productos crediticios digitales bajo supervisión de líder técnica. Escritura de código implementando flujos de créditos con integración a sistemas bancarios, caché Redis optimizado y bases de datos PostgreSQL/MongoDB/DB2. Diseño de contratos OpenAPI 3.0 siguiendo arquitectura BIAN establecida y principios SOLID/POO. Ejecución de pruebas unitarias, integración, Contract Testing y colaboración estrecha con QA. Aprobación de APIs vía Gobierno Corporativo con test de vulnerabilidad y auditoría de seguridad. Aplicación de TDD, Code Review y BDD según lineamientos BCP. Despliegue en Kubernetes/OpenShift con pipelines CI/CD (Jenkins, GitLab). Participación activa en Daily (L-V), sesiones técnicas y ceremonias ágiles Scrum en sprints de 2 semanas.',
          achievements: [
            'Microservicios reactivos Quarkus + Mutiny',
            'APIs OpenAPI 3.0 bajo estándar BIAN',
            'Stack: Java 21, Redis, MongoDB, PostgreSQL, DB2',
            'CI/CD: Jenkins + GitLab Pipelines',
            'TDD, Contract Testing, Code Review',
            'Gobierno de APIs + Auditoría de seguridad'
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
    },
    achievements: {
      title: 'Logros',
      subtitle: 'Resultados e hitos destacados'
    },
    footer: {
      rights: 'Todos los derechos reservados.'
    },
    certifications: {
      title: 'Certificados y Honores',
      subtitle: 'Formación académica, certificaciones y reconocimientos',
      viewDocument: 'Ver documento',
      verify: 'Verificar',
      close: 'Cerrar',
      types: {
        degree: 'Grado Académico',
        certification: 'Certificación',
        honor: 'Honor'
      }
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      experience: 'Experience',
      certifications: 'Certifications',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hi! I\'m',
      title: 'I build mission-critical backend systems and cloud-native platforms for digital banking.',
      btnProjects: 'View Projects',
      btnResume: 'Request Resume',
      resumeSubject: 'Resume request - John Paul Mamani',
      resumeBody: 'Hi John Paul,\n\nI would like to receive your updated resume.\n\nName:\nCompany:\nRole / opportunity:\n\nThank you.',
      resumeNote: 'Resume available upon personal request:',
      btnContact: 'Contact Me'
    },
    about: {
      title: 'About Me',
      subtitle: 'Senior Software Engineer | Backend & Distributed Systems | Java | Microservices | Cloud-Native | AI Engineering | System Design',
      description1: 'Software Engineer (B.Sc. in Software Engineering – UPC) specialized in Backend Engineering, Microservices, Distributed Systems and Cloud-Native Architectures. I design and build enterprise digital banking platforms with Java 21, Quarkus, REST APIs, Apache Kafka, Redis and Azure SQL, applying OpenAPI and the BIAN standard, Event-Driven Architecture, Hexagonal Architecture, DDD, SOLID and Clean Code. I deploy on Azure Kubernetes Service (AKS) with HPA, Ingress, ConfigMaps, Secrets and HashiCorp Vault, automating delivery through CI/CD, Jenkins and DevSecOps practices.',
      description2: 'I am expanding into AI Backend Engineering and Cloud Computing, building solutions with Python, FastAPI, LLMs, AI Agents, RAG, Tool Calling, Context & Memory Management and AWS Lambda, while exploring frameworks such as LangGraph, CrewAI, AutoGen, Semantic Kernel and the OpenAI Agents SDK. I am passionate about Software Architecture, System Design, Platform Engineering, Cloud Computing and Artificial Intelligence, designing platforms that are scalable, resilient and ready to operate at enterprise scale.',
      education: 'Education',
      competencies: 'Core competencies',
      graduated: 'Graduated'
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Software solutions that generate real impact',
      status: 'Status',
      viewProject: 'View Project',
      viewCode: 'View Code',
      viewPaper: 'View Paper',
      featured: 'Featured',
      details: 'Details'
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
          company: 'Coforge & BCP - Banco de Crédito del Perú',
          role: 'Senior Software Engineer',
          period: 'Oct 2026 - Present · Lima, Hybrid',
          description: 'Senior Software Engineer assigned to BCP, building digital banking platforms. Design and development of microservices with Java 21 and Quarkus, REST APIs following OpenAPI and the BIAN standard, messaging with Apache Kafka, Redis caching and Azure SQL persistence, applying Event-Driven Architecture, Hexagonal Architecture, DDD, SOLID and Clean Code. Deployment on Azure Kubernetes Service (AKS) with HPA, Ingress, ConfigMaps, Secrets and HashiCorp Vault, CI/CD with Jenkins, DevSecOps practices and observability with Grafana.',
          achievements: [
            'Java 21 + Quarkus microservices',
            'Apache Kafka · Event-Driven',
            'OpenAPI APIs · BIAN standard',
            'Azure AKS · HPA · HashiCorp Vault',
            'CI/CD Jenkins · DevSecOps',
            'Observability with Grafana'
          ]
        },
        {
          company: 'NTT DATA Europe & Latam & BCP - Banco de Crédito del Perú',
          role: 'Backend Developer - Microservices',
          period: 'Sep 2024 - Sep 2026',
          description: 'MBBK – BMO 3.0 Mobile Banking Project (10M+ active users), Squad Lending - Digital Channels Tribe. Development of reactive microservices with Quarkus Framework (Java 21) for digital credit products under technical leader supervision. Code writing implementing credit flows with banking systems integration, optimized Redis cache and PostgreSQL/MongoDB/DB2 databases. Design of OpenAPI 3.0 contracts following established BIAN architecture and SOLID/OOP principles. Execution of unit tests, integration, Contract Testing and close collaboration with QA. API approval via Corporate Governance with vulnerability testing and security audit. Application of TDD, Code Review and BDD according to BCP guidelines. Deployment on Kubernetes/OpenShift with CI/CD pipelines (Jenkins, GitLab). Active participation in Daily (M-F), technical sessions and Scrum agile ceremonies in 2-week sprints.',
          achievements: [
            'Reactive microservices Quarkus + Mutiny',
            'OpenAPI 3.0 APIs under BIAN standard',
            'Stack: Java 21, Redis, MongoDB, PostgreSQL, DB2',
            'CI/CD: Jenkins + GitLab Pipelines',
            'TDD, Contract Testing, Code Review',
            'API Governance + Security Audit'
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
    },
    achievements: {
      title: 'Highlights',
      subtitle: 'Selected results and milestones'
    },
    footer: {
      rights: 'All rights reserved.'
    },
    certifications: {
      title: 'Certifications & Honors',
      subtitle: 'Academic degrees, certifications and recognitions',
      viewDocument: 'View document',
      verify: 'Verify',
      close: 'Close',
      types: {
        degree: 'Academic Degree',
        certification: 'Certification',
        honor: 'Honor'
      }
    }
  }
};
