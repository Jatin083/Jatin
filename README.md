# Jatin Singh — Portfolio

Personal portfolio of **Jatin Singh**, a design engineer. Built with a focus on typography, scroll-driven motion and small interaction details.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com)
- [GSAP](https://gsap.com) (SplitText, ScrollTrigger) for text reveals
- [Motion](https://motion.dev) for springs, scroll-linked effects and hover/press feedback
- [Lenis](https://lenis.darkroom.engineering) for smooth scrolling, driven by GSAP’s ticker
- [React Bits](https://reactbits.dev) components (SplitText, LogoLoop, Magnet), vendored in `app/components/reactbits`

## Sections

| Section  | File                                   |
| -------- | -------------------------------------- |
| Navbar   | `app/components/Navbar/Navbar.tsx`     |
| Hero     | `app/components/Hero/hero.tsx`         |
| About    | `app/components/About/About.tsx`       |
| Work     | `app/components/work/work.tsx`         |
| Services | `app/components/service/services.tsx`  |
| Tech stack | `app/components/TechStack/TechStack.tsx` |
| Contact  | `app/components/Contact/Contact.tsx`   |

Projects in the Work section and the service list are plain arrays at the top of their files, so adding content doesn't mean touching markup. Contact links live in `app/site.ts`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | What it does                 |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the dev server         |
| `npm run build` | Production build             |
| `npm run start` | Serve the production build   |
| `npm run lint`  | Lint with ESLint             |

## Deploy

The easiest way to deploy is [Vercel](https://vercel.com/new): import this repository and keep the default Next.js settings.

## License

MIT — see [LICENSE](LICENSE). The Saans font in `public/font` is a trial version and needs a proper license before commercial use.
