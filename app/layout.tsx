import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Paul Mamani - Software Engineer & AI Enthusiast",
  description:
    "Portafolio profesional de John Paul Mamani Quispe - Especializado en desarrollo full stack, IA generativa y soluciones cloud escalables.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "AI",
    "Machine Learning",
    "React",
    "Next.js",
    "Lima",
    "Perú",
  ],
  authors: [{ name: "John Paul Mamani Quispe" }],
  robots: "index, follow",
  openGraph: {
    title: "John Paul Mamani - Software Engineer",
    description:
      "Especializado en desarrollo full stack, IA generativa y soluciones cloud escalables",
    url: "https://johnpaulmamani.dev",
    siteName: "John Paul Mamani Portfolio",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/web-app-manifest-512x512.png", // ✅ tu foto grande
        width: 512,
        height: 512,
        alt: "Foto de John Paul Mamani",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Paul Mamani - Software Engineer",
    description:
      "Especializado en desarrollo full stack, IA generativa y soluciones cloud escalables",
    images: ["/web-app-manifest-512x512.png"], // ✅ tu foto también en Twitter
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
