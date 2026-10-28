'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './OverlayNav.css';
import Marquee from '../Marquee/marquee';

gsap.registerPlugin(ScrollTrigger);

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
];

const SKILLS = [
  'CT BUILDER,',
  'DESIGN ENGINEER,',
  'NEXT.JS,',
  'REACT,',
  'TAILWIND,',
  'GSAP,',
  'FRAMER MOTION,',
  'THREE.JS,',
  'WEB ANIMATIONS,',
  'INTERACTION DESIGN,',
  'UI / UX,',
  'EDITORIAL LAYOUTS,',
  'MICRO INTERACTIONS,',
  'PERFORMANCE FIRST,',
  'ACCESSIBILITY,',
  'SCROLL SYSTEMS,',
  'CREATIVE DEV,',
  'FRONTEND ARCHITECT,',
];

export default function OverlayNav() {
  const boxRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  /* ===== SCROLL: ONLY MICRO POLISH (NO OPEN) ===== */
  useEffect(() => {
    if (!boxRef.current) return;

    gsap.set(boxRef.current, { height: '14vh', borderRadius: '32px' });

    const st = ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: '+=300',
      scrub: true,
      onUpdate: (self) => {
        gsap.to(boxRef.current, {
          borderRadius: gsap.utils.interpolate(32, 24, self.progress) + 'px',
          ease: 'none',
          overwrite: 'auto',
        });
      },
    });

    return () => st.kill();
  }, []);

  /* ===== CLICK OPEN / CLOSE ===== */
  useEffect(() => {
    if (!boxRef.current) return;

    gsap.to(boxRef.current, {
      height: open ? '44vh' : '14vh',
      borderRadius: open ? '20px' : '32px',
      duration: 0.6,
      ease: 'power3.inOut',
      overwrite: 'auto',
    });
  }, [open]);

  /* ===== CLOSE ON ESCAPE ===== */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-999 w-[calc(100vw-2rem)] sm:w-[70vw] lg:w-[43vw]">
      {/* MAIN BOX */}
      <div ref={boxRef} className="relative w-full bg-black text-white overflow-hidden">
        {/* MENU CONTENT (ONLY VISIBLE WHEN OPEN) */}
        <nav
          id="overlay-menu"
          aria-label="Main"
          aria-hidden={!open}
          className={`absolute top-0 left-0 w-full px-6 pt-6 transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <ul className="space-y-1">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className="menu-item block"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* BOTTOM BAR */}
        <div className="absolute bottom-0 left-0 h-[14vh] w-full px-2 sm:px-4 py-2 flex items-center justify-between bg-black">
          {/* LEFT */}
          <div className="h-full flex items-center gap-3 sm:gap-5 px-2 sm:px-4 flex-1 min-w-0">
            {/* AVATAR */}
            <div className="h-[10vh] w-[10vh] rounded-xl overflow-hidden bg-orange-500 shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Jatin" className="h-full w-full object-cover" alt="Jatin Singh avatar" />
            </div>

            {/* TEXT */}
            <div className="flex flex-col justify-center gap-1 text-base sm:text-lg min-w-0">
              <p className="font-semibold uppercase leading-none">Jatin Singh</p>
              <Marquee items={SKILLS} speed="slow" className="uppercase text-sm" />
            </div>
          </div>

          {/* MENU BUTTON */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="overlay-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="h-[10vh] w-[10vh] text-[28px] rounded-2xl flex items-center justify-center font-semibold shrink-0 hover:bg-white/10 transition-colors"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </div>
  );
}
