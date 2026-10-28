# Jatin Singh — Portfolio

Personal portfolio of **Jatin Singh**, a design engineer. Built with a focus on typography, scroll-driven motion and small interaction details.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com)
- [GSAP](https://gsap.com) SplitText + ScrollTrigger for Lumo-style line reveals (`app/components/LineReveal`)
- [Motion](https://motion.dev) for springs, scroll-linked effects and hover/press feedback
- [Lenis](https://lenis.darkroom.engineering) for smooth scrolling, driven by GSAP’s ticker
- [React Bits](https://reactbits.dev) components (LogoLoop, Magnet), vendored in `app/components/reactbits`
- [useAnimations](https://useanimations.com) animated icons (`react-useanimations`), played by `app/components/AnimatedIcon`
- [Cuberto mouse-follower](https://github.com/Cuberto/mouse-follower) cursor, loaded only on mouse devices after the page is idle

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

## Performance notes

- Font: Saans subset to Latin, weight axis only, WOFF2 (46 KB) and preloaded.
- Hero video: one 1600px H.264 file with a poster frame; paused when off screen.
- Hero motion animates `clip-path` only, so scrolling never triggers layout.
- Project screenshots go through `next/image` (AVIF/WebP, responsive sizes).
- Lottie icons and the cursor load lazily, never during first paint.

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
