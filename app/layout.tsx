import type { Metadata } from "next";
import Navbar from "./components/Navbar/Navbar";
import Overlay from "./components/OverlayNav/OverlayNav";
import "./globals.css";
import LenisProvider from "./providers/lenis-provider";

export const metadata: Metadata = {
  title: "Jatin Singh — Design Engineer",
  description:
    "Jatin Singh is a design engineer building clean, thoughtful, motion-rich digital products with Next.js, React and GSAP.",
  openGraph: {
    title: "Jatin Singh — Design Engineer",
    description:
      "Design engineer building clean, thoughtful digital products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-saans bg-[#F5F5F5] text-black antialiased">
        <LenisProvider>
          <Overlay />
          <Navbar />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
