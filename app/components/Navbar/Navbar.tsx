"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { SITE, SPRING } from "@/app/site";
import "./Navbar.css";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  // Scroll edge effect: the hairline only appears once content slides under the bar.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on Escape, and if the window grows past the mobile breakpoint.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 768px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  return (
    <>
      {/* Dim the page behind the open menu; tap to dismiss. */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="scrim"
            className="fixed inset-0 z-40 bg-black/25 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <header
        className={`glass-light fixed top-0 inset-x-0 z-50 transition-[box-shadow] duration-300 ${
          scrolled || open ? "shadow-[0_1px_0_rgba(0,0,0,0.08)]" : ""
        }`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-12 max-w-[1200px] items-center justify-between px-5 sm:px-8 text-[0.8125rem]"
        >
          <a href="#home" onClick={() => setOpen(false)} className="font-semibold tracking-[-0.01em] text-ink">
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

          <div className="flex items-center gap-3">
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
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="nav-toggle md:hidden"
            >
              <span className={`nav-icon ${open ? "is-open" : ""}`} aria-hidden>
                <span />
                <span />
              </span>
            </button>
          </div>
        </nav>

        {/* MOBILE MENU: grows down from the bar it belongs to */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="menu"
              id="mobile-menu"
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={reduce ? { duration: 0 } : SPRING}
              className="overflow-hidden md:hidden"
            >
              <ul className="px-5 sm:px-8 pt-4 pb-10">
                {LINKS.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8, transition: { duration: 0.12 } }}
                    transition={{ ...SPRING, delay: reduce ? 0 : 0.04 * i }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block py-2.5 font-saans text-[1.75rem] font-semibold tracking-[-0.025em] text-ink active:text-muted"
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
