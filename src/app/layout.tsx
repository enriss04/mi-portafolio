import "../styles/globals.css";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Plus_Jakarta_Sans } from 'next/font/google';

export const metadata: Metadata = {
  title: "Enrique Sánchez | Full Stack Developer",
  description: "Portafolio profesional de Enrique Sánchez Santiago, especialista en Backend, IA y DevOps.",
};

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800']
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`antialiased bg-slate-950 ${jakarta.className}`}>
        <Header />
        <div className="pt-16"> {/* Padding para que el Header fixed no tape el contenido */}
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}