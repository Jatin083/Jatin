import type { Metadata, Viewport } from "next";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import LenisProvider from "./providers/lenis-provider";
import Cursor from "./components/Cursor/Cursor";

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

export const viewport: Viewport = {
  themeColor: "#fbfbfd",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/font/Saans-VF.woff2" as="font" type="font/woff2" crossOrigin="" />
      </head>
      <body className="font-sans bg-canvas text-ink">
        <LenisProvider>
          <Navbar />
          <main>{children}</main>
        </LenisProvider>
        <Cursor />
      </body>
    </html>
  );
}
