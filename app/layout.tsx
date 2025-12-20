import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Paul Mamani - Senior Software Engineer | AI/ML Specialist",
  description:
    "Senior Software Engineer at NTT DATA & BCP with expertise in AI/ML, distributed systems, and cloud architecture. Building high-impact solutions serving 10M+ users and processing $100M+ daily transactions. Published AI researcher with proven track record in scalable enterprise systems.",
  keywords: [
    "Senior Software Engineer",
    "AI Engineer",
    "Machine Learning",
    "Cloud Architecture",
    "Distributed Systems",
    "Full Stack Developer",
    "NTT DATA",
    "BCP",
    "Banking Systems",
    "React",
    "Next.js",
    "Python",
    "AWS",
    "Azure",
    "Lima",
    "Peru",
    "FAANG",
    "Tech Lead",
  ],
  authors: [{ name: "John Paul Mamani Quispe" }],
  robots: "index, follow",
  openGraph: {
    title: "John Paul Mamani - Senior Software Engineer | AI/ML Specialist",
    description:
      "Building mission-critical banking systems serving 10M+ users. Expert in AI/ML, distributed systems, and cloud architecture with proven high-impact results.",
    url: "https://johnpaulmamani.dev",
    siteName: "John Paul Mamani Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "John Paul Mamani - Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Paul Mamani - Senior Software Engineer | AI/ML",
    description:
      "Building mission-critical systems at scale. Expert in AI/ML, distributed systems, and cloud architecture.",
    images: ["/web-app-manifest-512x512.png"],
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
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
