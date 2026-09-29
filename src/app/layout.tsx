import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import SmoothScroll from "@/components/SmoothScroll";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harsh Solanki | Full Stack Engineer",
  description:
    "Full stack engineer in Bahadurgarh, India. Production web applications and AI agent systems — Next.js, TypeScript, Hono and Cloudflare Workers.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>
        {/* Paper grain over the full document */}
        <div className="grain" aria-hidden="true" />
        <Navigation />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
