import Navbar from "./components/Navbar/Navbar";
import Overlay from "./components/OverlayNav/OverlayNav";
import "./globals.css";
import LenisProvider from "./providers/lenis-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Saans, sans-serif" ,backgroundColor: "#F5F5F5"}}>
        <LenisProvider>
          <Overlay />
          <Navbar />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
