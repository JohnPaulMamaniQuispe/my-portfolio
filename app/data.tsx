import { Linkedin, Mail, Phone, Database, Cloud, Brain, Smartphone, Code, Network, Award, Zap, Star } from 'lucide-react';
import { Project, Skill, Experience, Achievement, ContactInfo, Certification } from './types';

export const PERSONAL_INFO = {
  name: "John Paul Mamani Quispe",
  title: "Senior Software Engineer | Backend & Distributed Systems | Java | Microservices | Cloud-Native | AI Engineering | System Design",
  phone: "+51 986 838 404",
  email: "john.jpmq@gmail.com",
  location: "Lima, Perú",
  photo: "/images/johnpmq.png",
  whatsappLogo: "/images/whatsappLogo.png",
  github: "https://github.com/JohnPaulMamaniQuispe",
  linkedin: "https://www.linkedin.com/in/john-paul-mamani-quispe-159129b3",
  tiktok: "https://www.tiktok.com/@johnpaulmamani",
  whatsappMessage: "Hola John Paul, me interesa conocer más sobre tus servicios de desarrollo de software"
} as const;

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
    github: PERSONAL_INFO.github,
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
    github: PERSONAL_INFO.github,
    demo: "https://tiqueton.netlify.app/",
    metrics: "0% fraud rate • 95% lower gas fees • 3% platform fee vs 15% industry avg"
  },
  {
    title: "AI-Powered E-Commerce Recommendation Engine",
    description: "Built production-grade recommendation system using collaborative filtering and deep learning, increasing conversion rates by 35% and average order value by 28%. Implemented real-time personalization using TensorFlow and scikit-learn, processing 500K+ user interactions daily. Designed scalable ML pipeline on AWS SageMaker with A/B testing framework. Optimized Next.js frontend achieving 95+ Lighthouse score and <1.5s load time. Integrated Stripe payment processing handling $1M+ in transactions with 99.99% reliability.",
    tech: ["Next.js", "Python", "TensorFlow", "scikit-learn", "AWS SageMaker", "Stripe", "PostgreSQL", "Redis", "Elasticsearch"],
    status: "Production",
    type: "ML/AI & Full Stack",
    github: PERSONAL_INFO.github,
    metrics: "35% conversion ↑ • 28% AOV ↑ • 500K+ daily events • $1M+ processed"
  },
  {
    title: "Sistema de Gestión Empresarial",
    description: "ERP completo y escalable con módulos de inventario, facturación, RRHH y reportes analíticos en tiempo real con dashboards interactivos.",
    tech: ["Vue.js", "Spring Boot", "Java", "MySQL", "Docker"],
    status: "Completado",
    type: "Enterprise",
    github: PERSONAL_INFO.github,
    metrics: "500+ empresas usando"
  },
  {
    title: "ML Pipeline Automatizado",
    description: "Pipeline completo de MLOps con entrenamiento automático, evaluación de modelos y despliegue continuo en la nube con monitoreo avanzado.",
    tech: ["Python", "MLflow", "Apache Airflow", "Docker", "Kubernetes"],
    status: "Completado",
    type: "MLOps",
    github: PERSONAL_INFO.github,
    metrics: "99.5% uptime"
  }
];

// Badges de tecnologías: color de marca y logo de simpleicons.org (vía shields.io)
const NEUTRAL = "2B3137";
export const SKILLS: Record<string, Skill> = {
  "Backend": {
    icon: <Code className="w-5 h-5" />,
    items: [
      { name: "Java 21", logo: "openjdk", color: "ED8B00" },
      { name: "Quarkus", logo: "quarkus", color: "4695EB" },
      { name: "Spring Boot", logo: "springboot", color: "6DB33F" },
      { name: "Node.js", logo: "nodedotjs", color: "339933" },
      { name: "Python", logo: "python", color: "3776AB" },
      { name: "FastAPI", logo: "fastapi", color: "009688" }
    ]
  },
  "Architecture": {
    icon: <Network className="w-5 h-5" />,
    items: [
      { name: "Microservices", color: NEUTRAL },
      { name: "Event-Driven", color: NEUTRAL },
      { name: "Hexagonal", color: NEUTRAL },
      { name: "DDD", color: NEUTRAL },
      { name: "OpenAPI", logo: "openapiinitiative", color: "6BA539" },
      { name: "BIAN", color: NEUTRAL },
      { name: "SOLID · Clean Code", color: NEUTRAL }
    ]
  },
  "Messaging & Data": {
    icon: <Database className="w-5 h-5" />,
    items: [
      { name: "Apache Kafka", logo: "apachekafka", color: "231F20" },
      { name: "Redis", logo: "redis", color: "DC382D" },
      { name: "Azure SQL", logo: "microsoftazure", color: "0078D4" },
      { name: "PostgreSQL", logo: "postgresql", color: "4169E1" },
      { name: "MongoDB", logo: "mongodb", color: "47A248" },
      { name: "DB2", color: "052FAD" }
    ]
  },
  "Cloud & DevOps": {
    icon: <Cloud className="w-5 h-5" />,
    items: [
      { name: "Azure AKS", logo: "microsoftazure", color: "0078D4" },
      { name: "Kubernetes", logo: "kubernetes", color: "326CE5" },
      { name: "Docker", logo: "docker", color: "2496ED" },
      { name: "HashiCorp Vault", logo: "vault", color: "FFEC6E" },
      { name: "Jenkins", logo: "jenkins", color: "D24939" },
      { name: "GitLab CI", logo: "gitlab", color: "FC6D26" },
      { name: "Grafana", logo: "grafana", color: "F46800" },
      { name: "AWS Lambda", color: "FF9900" }
    ]
  },
  "AI Engineering": {
    icon: <Brain className="w-5 h-5" />,
    items: [
      { name: "LLMs", logo: "openai", color: "412991" },
      { name: "RAG", color: NEUTRAL },
      { name: "AI Agents", color: NEUTRAL },
      { name: "Tool Calling", color: NEUTRAL },
      { name: "LangGraph", logo: "langgraph", color: "1C3C3C" },
      { name: "CrewAI", logo: "crewai", color: "FF5A50" },
      { name: "Semantic Kernel", color: "5C2D91" },
      { name: "OpenAI Agents SDK", logo: "openai", color: "412991" }
    ]
  },
  "Frontend & Mobile": {
    icon: <Smartphone className="w-5 h-5" />,
    items: [
      { name: "React", logo: "react", color: "20232A", logoColor: "61DAFB" },
      { name: "Next.js", logo: "nextdotjs", color: "000000" },
      { name: "TypeScript", logo: "typescript", color: "3178C6" },
      { name: "Angular", logo: "angular", color: "DD0031" },
      { name: "Vue.js", logo: "vuedotjs", color: "35495E", logoColor: "4FC08D" },
      { name: "Flutter", logo: "flutter", color: "02569B" },
      { name: "Swift", logo: "swift", color: "F05138" }
    ]
  }
};

export const EXPERIENCE: Experience[] = [
  {
    icon: "/images/coforge.png",
    onLight: true
  },
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
    description: "Long paper accepted at CSCI 2025 (Springer Nature) - 80% rating, top 5% conference"
  },
  {
    icon: Zap,
    title: "High-Impact Systems",
    description: "Serving 10M+ users in mission-critical banking systems (BCP)"
  },
  {
    icon: Brain,
    title: "Multimodal AI Agent",
    description: "Digital human with vision (CLIP), audio (Whisper) & NLP (Mistral 7B)"
  },
  {
    icon: Star,
    title: "Production Excellence",
    description: "99.99% uptime SLA - Zero downtime deployments with Kubernetes"
  }
];

export const CONTACT_INFO: ContactInfo[] = [
  { 
    icon: Mail, 
    title: "Email", 
    value: PERSONAL_INFO.email,
    href: `mailto:${PERSONAL_INFO.email}`
  },
  { 
    icon: Phone, 
    title: "Phone", 
    value: PERSONAL_INFO.phone,
    href: `tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`
  },
  { 
    icon: Linkedin, 
    title: "LinkedIn", 
    value: "johnpaulmamani",
    href: PERSONAL_INFO.linkedin
  }
];

export const COMPANIES = [
  // cover: logos que traen su propio recuadro de color y deben rellenar la tarjeta
  // onLight: logos oscuros con fondo transparente, van sobre tarjeta blanca
  { name: "Coforge", logo: "/images/coforge.png", alt: "Coforge", onLight: true },
  { name: "NTT DATA", logo: "/images/ntt_data.png", alt: "NTT DATA", cover: true },
  { name: "BCP", logo: "/images/bcp_logo.png", alt: "Banco de Crédito del Perú", cover: true },
  { name: "Omnisapiens", logo: "/images/omnisapienslogo_light.png", alt: "Omnisapiens" },
  { name: "WORBUM", logo: null, alt: "WORBUM" },
  { name: "Betabyte", logo: "/images/beta-logo-blanco.png", alt: "Betabyte" }
] as const;

// Certificados y honores. Para agregar uno:
// - images: una o más hojas en /public/certificates (jpg/png) con su tamaño en píxeles
// - file: documento completo (pdf/jpg) que se abre al hacer clic
// - credentialUrl: enlace de verificación (Credly, AWS, Microsoft Learn, etc.)
export const CERTIFICATIONS: Certification[] = [
  {
    type: "honor",
    title: {
      es: "Best Paper Award – FICTA 2026 (Springer)",
      en: "Best Paper Award – FICTA 2026 (Springer)"
    },
    issuer: "14th FICTA-2026 · London Metropolitan University, UK",
    date: "2026",
    images: [{ src: "/certificates/best-paper-ficta-2026.jpg", width: 1560, height: 1080 }]
  },
  {
    type: "honor",
    title: {
      es: "Paper aceptado en CSCI 2025 (Springer Nature)",
      en: "Paper accepted at CSCI 2025 (Springer Nature)"
    },
    issuer: "CSCI 2025 · Las Vegas, USA",
    date: "2025",
    file: "/papers/CSCI_2025_Omnisapiens_Paper.pdf"
  },
  {
    type: "degree",
    title: {
      es: "Bachiller en Ingeniería de Software",
      en: "Bachelor of Science in Software Engineering"
    },
    issuer: "Universidad Peruana de Ciencias Aplicadas (UPC)",
    date: "2026",
    logo: "/images/logo-upc.png",
    images: [{ src: "/certificates/bachiller-upc-1.jpg", width: 1454, height: 2264 }]
  }

];
