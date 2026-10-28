import type { ReactNode } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiGreensock,
  SiFramer,
  SiThreedotjs,
  SiNodedotjs,
  SiVercel,
  SiFigma,
  SiGit,
} from "react-icons/si";

// Edit the stack here. `title` shows under the icon on hover.
const STACK: { icon: ReactNode; title: string; href?: string }[] = [
  { icon: <SiReact />, title: "React", href: "https://react.dev" },
  { icon: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { icon: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { icon: <SiJavascript />, title: "JavaScript" },
  { icon: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { icon: <SiGreensock />, title: "GSAP", href: "https://gsap.com" },
  { icon: <SiFramer />, title: "Motion", href: "https://motion.dev" },
  { icon: <SiThreedotjs />, title: "Three.js", href: "https://threejs.org" },
  { icon: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { icon: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
  { icon: <SiFigma />, title: "Figma", href: "https://figma.com" },
  { icon: <SiGit />, title: "Git", href: "https://git-scm.com" },
];

const CELL =
  "group flex h-32 flex-col items-center justify-center gap-2 border-r border-b border-hairline transition-colors duration-300 hover:bg-tile";

export default function TechStack() {
  return (
    <section id="stack" aria-label="Tech stack" className="py-24 md:py-32">
      <h2 className="px-5 text-center font-saans font-semibold uppercase leading-[0.9] tracking-[-0.05em] text-ink text-[clamp(2.5rem,12vw,13rem)]">
        <span className="block">Modern</span>
        <span className="block">Tech Stack</span>
      </h2>

      <div className="mx-auto mt-16 md:mt-24 max-w-[1200px] px-5 sm:px-8">
        <div className="flex items-end justify-between text-[0.875rem]">
          <p className="font-semibold text-ink">Daily drivers</p>
          <p className="text-muted">{STACK.length} tools I use every week</p>
        </div>

        <ul className="mt-4 grid grid-cols-2 border-l border-t border-hairline sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {STACK.map((t) => {
            const inner = (
              <>
                <span className="text-[2.5rem] text-ink/75 transition-[color,transform] duration-300 group-hover:-translate-y-1 group-hover:text-ink">
                  {t.icon}
                </span>
                <span className="text-[0.75rem] font-medium text-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  {t.title}
                </span>
              </>
            );
            return (
              <li key={t.title}>
                {t.href ? (
                  <a href={t.href} target="_blank" rel="noopener noreferrer" aria-label={t.title} className={CELL}>
                    {inner}
                  </a>
                ) : (
                  <div aria-label={t.title} className={CELL}>
                    {inner}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
