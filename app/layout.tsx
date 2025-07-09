import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Paul Mamani - Software Engineer & AI Enthusiast",
  description: "Portafolio profesional de John Paul Mamani Quispe - Especializado en desarrollo full stack, IA generativa y soluciones cloud escalables.",
  keywords: ["Software Engineer", "Full Stack Developer", "AI", "Machine Learning", "React", "Next.js", "Lima", "Perú"],
  authors: [{ name: "John Paul Mamani Quispe" }],
  robots: "index, follow",
  openGraph: {
    title: "John Paul Mamani - Software Engineer",
    description: "Especializado en desarrollo full stack, IA generativa y soluciones cloud escalables",
    url: "https://johnpaulmamani.dev",
    siteName: "John Paul Mamani Portfolio",
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Paul Mamani - Software Engineer",
    description: "Especializado en desarrollo full stack, IA generativa y soluciones cloud escalables",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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