"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/app/site";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Scroll edge effect: the hairline only appears once content slides under the bar.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`glass-light fixed top-0 inset-x-0 z-50 transition-[box-shadow] duration-300 ${
        scrolled ? "shadow-[0_1px_0_rgba(0,0,0,0.08)]" : ""
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-12 max-w-[1200px] items-center justify-between px-5 sm:px-8 text-[0.8125rem]"
      >
        <a href="#home" className="font-semibold tracking-[-0.01em] text-ink">
          Jatin Singh
        </a>

        <ul className="hidden md:flex items-center gap-8 text-ink/80">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <span className="hidden lg:inline-flex items-center gap-2 text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-[#30d158]" aria-hidden />
            Available March 2026
          </span>
          <a
            href={SITE.contactHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill btn-primary !py-1.5 !px-3.5 text-[0.75rem]"
          >
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  );
}
