import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  metadataBase: new URL("https://johnpaulmamani.dev"),
  title: "John Paul Mamani - Senior Software Engineer | Backend, Distributed Systems & AI",
  description:
    "Senior Software Engineer (B.Sc. UPC) specialized in Backend Engineering, Microservices, Distributed Systems, Cloud-Native Architectures and AI Backend Engineering. Building digital banking platforms with Java 21, Quarkus, Kafka and Azure Kubernetes Service.",
  keywords: [
    "Senior Software Engineer",
    "Backend Engineer",
    "Java",
    "System Design",
    "AI Engineering",
    "Microservices",
    "Distributed Systems",
    "Cloud-Native",
    "Java 21",
    "Quarkus",
    "Apache Kafka",
    "Azure Kubernetes Service",
    "Event-Driven Architecture",
    "Hexagonal Architecture",
    "DDD",
    "AI Backend Engineering",
    "LLMs",
    "RAG",
    "Python",
    "FastAPI",
    "Coforge",
    "NTT DATA",
    "BCP",
    "Lima",
    "Peru",
  ],
  authors: [{ name: "John Paul Mamani Quispe" }],
  robots: "index, follow",
  openGraph: {
    title: "John Paul Mamani - Senior Software Engineer | Backend, Distributed Systems & AI",
    description:
      "Backend Engineering, Microservices and Cloud-Native platforms for digital banking. Java 21, Quarkus, Kafka, AKS and AI Backend Engineering.",
    url: "https://johnpaulmamani.dev",
    siteName: "John Paul Mamani Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Paul Mamani - Senior Software Engineer | Backend, Distributed Systems & AI",
    description:
      "Backend Engineering, Microservices and Cloud-Native platforms for digital banking. Java 21, Quarkus, Kafka, AKS and AI Backend Engineering.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" }, // clásico
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest", // ✅ soporte para PWA
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0d10",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrains.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
