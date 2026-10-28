'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import './OverlayNav.css';
import Marquee from '../Marquee/marquee';
import { SPRING, SPRING_SOFT } from '@/app/site';

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const SKILLS = [
  'Design engineer',
  'Next.js',
  'React',
  'Tailwind',
  'GSAP',
  'Motion',
  'Three.js',
  'Interaction design',
  'UI / UX',
  'Editorial layouts',
  'Micro-interactions',
  'Performance first',
  'Accessibility',
  'Scroll systems',
];

export default function OverlayNav() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      {/* Dim to focus while the menu is open; tap anywhere to dismiss. */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="scrim"
            className="fixed inset-0 z-[998] bg-black/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-[999] w-[calc(100vw-2rem)] sm:w-[440px]">
        {/* Springs animate from the current value, so the panel can be
            reversed mid-flight without a jump. */}
        <motion.div
          layout
          transition={reduce ? { duration: 0 } : open ? SPRING_SOFT : SPRING}
          style={{ borderRadius: 26, transformOrigin: 'bottom center' }}
          className="glass-dark overflow-hidden text-[#f5f5f7] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.45)]"
        >
          <AnimatePresence initial={false}>
            {open && (
              <motion.nav
                key="menu"
                id="overlay-menu"
                aria-label="Sections"
                initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
                transition={SPRING}
                className="px-3 pt-3"
              >
                <ul>
                  {LINKS.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ ...SPRING, delay: 0.03 * i }}
                    >
                      <a href={link.href} onClick={() => setOpen(false)} className="menu-item">
                        {link.label}
                        <span aria-hidden className="text-white/30">›</span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
                <div className="mx-3 mt-2 h-px bg-white/10" />
              </motion.nav>
            )}
          </AnimatePresence>

          {/* BAR */}
          <motion.div layout="position" className="flex h-[68px] items-center gap-3 px-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://api.dicebear.com/9.x/avataaars/svg?seed=Jatin&backgroundColor=ffd5dc"
              className="h-12 w-12 shrink-0 rounded-[14px]"
              alt="Jatin Singh avatar"
            />
            <div className="flex min-w-0 flex-1 flex-col justify-center">
              <p className="text-[0.9375rem] font-semibold tracking-[-0.01em] leading-tight">Jatin Singh</p>
              <Marquee items={SKILLS} speed="slow" className="text-[0.8125rem] text-white/55" />
            </div>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="overlay-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="menu-toggle"
            >
              <span className={`menu-icon ${open ? 'is-open' : ''}`} aria-hidden>
                <span />
                <span />
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
