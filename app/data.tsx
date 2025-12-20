import { Linkedin, Mail, Phone, Globe, Database, Cloud, Brain, Smartphone, Code, Award, Zap, Star } from 'lucide-react';
import { Project, Skill, Experience, Achievement, ContactInfo, Stat } from './types';

export const PERSONAL_INFO = {
  name: "John Paul Mamani Quispe",
  title: "Senior Software Engineer | AI/ML Specialist | Cloud Architect",
  phone: "+51 986 838 404",
  email: "john.jpmq@gmail.com",
  location: "Lima, Perú",
  photo: "/images/johnpaulmq.png",
  whatsappLogo: "/images/whatsappLogo.png",
  github: "https://github.com/JohnPaulMamaniQuispe",
  linkedin: "https://www.linkedin.com/in/john-paul-mamani-quispe-159129b3",
  tiktok: "https://www.tiktok.com/@johnpaulmamani",
  whatsappMessage: "Hola John Paul, me interesa conocer más sobre tus servicios de desarrollo de software"
} as const;

export const TYPING_ROLES = [
  "Senior Software Engineer",
  "AI/ML Specialist", 
  "Cloud Solutions Architect",
  "Full-Stack Engineer",
  "Tech Lead & Innovator"
] as const;

export const STATS: Stat[] = [
  { value: "10K+", label: "Users Impacted", color: "text-cyan-400" },
  { value: "99.9%", label: "Uptime SLA", color: "text-emerald-400" },
  { value: "40%", label: "Performance ↑", color: "text-purple-400" },
  { value: "30+", label: "Tech Stack", color: "text-pink-400" }
];

export const PROJECTS: Project[] = [
  {
    title: "Omnisapiens - AI-Powered Omnichannel Customer Intelligence Platform",
    description: "Enterprise SaaS platform leveraging Generative AI and Deep Learning for automated customer service across Latin America. Architected scalable NLP pipeline processing 10K+ daily interactions via WhatsApp, Telegram, and Messenger with multimodal AI agent integrating CLIP (vision), Whisper (audio), and Mistral 7B (NLP). Implemented transformer-based models achieving <200ms response latency with emotion detection. Designed microservices architecture on AWS with auto-scaling supporting 99.9% uptime. Long paper accepted at CSCI 2025 (Springer Nature, Las Vegas) with 80% global rating. Solution targets $50B+ SMB market in LATAM, reducing operational costs by 60% while improving customer satisfaction by 45%.",
    tech: ["Python", "PyTorch", "Mistral 7B", "CLIP", "Whisper", "FastAPI", "AWS Lambda", "Docker", "Kubernetes", "PostgreSQL", "Redis"],
    status: "Research Published - CSCI 2025",
    type: "AI/ML Research & SaaS Product",
    github: "https://github.com/JohnPaulMamaniQuispe",
    demo: "https://omnisapiens.netlify.app/",
    paper: "/papers/CSCI_2025_Omnisapiens_Paper.pdf",
    highlight: true,
    metrics: "CSCI 2025 (Springer) • 80% rating • <200ms latency • 10K+ daily queries"
  },
  {
    title: "Rumba - Real-Time Multi-Device Audio Sync Platform",
    description: "Cross-platform music streaming application with real-time synchronization across iOS and Android devices achieving <50ms latency. Engineered distributed system architecture using WebSockets and WebRTC for sub-second audio sync. Integrated Spotify and YouTube APIs serving 10K+ users with 99.9% uptime. Built scalable microservices on Azure with Docker/Kubernetes handling 1M+ API requests/month. Developed native iOS (Swift/SwiftUI) and Android (Flutter) clients with optimized media playback pipelines. Implemented OAuth 2.0, JWT authentication, and end-to-end encryption for secure streaming.",
    tech: ["Node.js", "TypeScript", "Flutter", "Swift", "WebRTC", "WebSockets", "Azure", "Docker", "Kubernetes", "Redis", "MongoDB"],
    status: "Live on App Store & Play Store",
    type: "Real-Time Systems & Mobile",
    github: "https://github.com/johnmamani",
    demo: "https://apps.apple.com/pe/app/rumba-free/id6736374623",
    highlight: true,
    metrics: "10K+ users • <50ms sync latency • 99.9% uptime • 1M+ API calls/month"
  },
  {
    title: "Tiquetón - Decentralized NFT Ticketing Platform",
    description: "Web3 blockchain platform for fraud-proof event ticketing using Ethereum smart contracts and NFT technology. Architected secure, immutable ticket marketplace eliminating counterfeit tickets (0% fraud rate). Implemented ERC-721 tokens with metadata stored on IPFS for decentralized verification. Built React dApp with Web3.js enabling peer-to-peer ticket transfers with full traceability. Deployed smart contracts on Polygon reducing gas fees by 95% vs Ethereum mainnet. Created automated royalty system ensuring event organizers earn on secondary sales. Solution reduces platform fees from 15% to 3%, saving organizers $100K+ annually.",
    tech: ["Solidity", "Ethereum", "Polygon", "React", "Web3.js", "Hardhat", "IPFS", "ERC-721", "MetaMask", "The Graph"],
    status: "Live on Polygon Mainnet",
    type: "Blockchain & Web3",
    github: "https://github.com/johnmamani",
    demo: "https://tiqueton.netlify.app/",
    metrics: "0% fraud rate • 95% lower gas fees • 3% platform fee vs 15% industry avg"
  },
  {
    title: "AI-Powered E-Commerce Recommendation Engine",
    description: "Built production-grade recommendation system using collaborative filtering and deep learning, increasing conversion rates by 35% and average order value by 28%. Implemented real-time personalization using TensorFlow and scikit-learn, processing 500K+ user interactions daily. Designed scalable ML pipeline on AWS SageMaker with A/B testing framework. Optimized Next.js frontend achieving 95+ Lighthouse score and <1.5s load time. Integrated Stripe payment processing handling $1M+ in transactions with 99.99% reliability.",
    tech: ["Next.js", "Python", "TensorFlow", "scikit-learn", "AWS SageMaker", "Stripe", "PostgreSQL", "Redis", "Elasticsearch"],
    status: "Production",
    type: "ML/AI & Full Stack",
    github: "https://github.com/johnmamani",
    demo: "#",
    metrics: "35% conversion ↑ • 28% AOV ↑ • 500K+ daily events • $1M+ processed"
  },
  {
    title: "Sistema de Gestión Empresarial",
    description: "ERP completo y escalable con módulos de inventario, facturación, RRHH y reportes analíticos en tiempo real con dashboards interactivos.",
    tech: ["Vue.js", "Spring Boot", "Java", "MySQL", "Docker"],
    status: "Completado",
    type: "Enterprise",
    github: "https://github.com/johnmamani",
    demo: "#",
    metrics: "500+ empresas usando"
  },
  {
    title: "ML Pipeline Automatizado",
    description: "Pipeline completo de MLOps con entrenamiento automático, evaluación de modelos y despliegue continuo en la nube con monitoreo avanzado.",
    tech: ["Python", "MLflow", "Apache Airflow", "Docker", "Kubernetes"],
    status: "Completado",
    type: "MLOps",
    github: "https://github.com/johnmamani",
    demo: "#",
    metrics: "99.5% uptime"
  }
];

export const SKILLS: Record<string, Skill> = {
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

export const EXPERIENCE: Experience[] = [
  {
    icon: "/images/ntt_data.png"
  },
  {
    icon: "/images/beta-logo-blanco.png"
  },
  {
    icon: "/images/omnisapienslogo_light.png"
  },
  {
    icon: null
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    icon: Award,
    title: "Published AI Researcher",
    description: "Long paper accepted at CSCI 2025 (Springer Nature) - 80% rating, top 5% conference",
    color: "from-purple-400 to-pink-500"
  },
  {
    icon: Zap,
    title: "High-Impact Systems",
    description: "Serving 10M+ users in mission-critical banking systems (BCP)",
    color: "from-cyan-400 to-blue-500"
  },
  {
    icon: Brain,
    title: "Multimodal AI Agent",
    description: "Digital human with vision (CLIP), audio (Whisper) & NLP (Mistral 7B)",
    color: "from-emerald-400 to-teal-500"
  },
  {
    icon: Star,
    title: "Production Excellence",
    description: "99.99% uptime SLA - Zero downtime deployments with Kubernetes",
    color: "from-amber-400 to-orange-500"
  }
];

export const CONTACT_INFO: ContactInfo[] = [
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
    title: "Phone", 
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

export const COMPANIES = [
  { name: "NTT DATA", logo: "/images/ntt_data.png", alt: "NTT DATA" },
  { name: "BCP", logo: "/images/bcp_logo.png", alt: "Banco de Crédito del Perú" },
  { name: "Omnisapiens", logo: "/images/omnisapienslogo_light.png", alt: "Omnisapiens" },
  { name: "WORBUM", logo: null, alt: "WORBUM" },
  { name: "Betabyte", logo: "/images/beta-logo-blanco.png", alt: "Betabyte" }
] as const;
