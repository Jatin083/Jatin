import Reveal from "../Reveal/Reveal";
import { SITE } from "@/app/site";

export default function Contact() {
  return (
    <>
      <section id="contact" className="mx-auto max-w-[1200px] px-5 sm:px-8 pt-24 md:pt-32">
        <Reveal>
          <div className="rounded-[28px] bg-black px-8 py-20 sm:py-28 text-center text-[#f5f5f7]">
            <p className="type-eyebrow text-[#a1a1a6]">Contact</p>
            <h2 className="type-hero mt-4 !text-[clamp(2.75rem,8vw,7rem)]">
              Let’s build
              <br />
              something great.
            </h2>
            <p className="type-body-lg mx-auto mt-6 max-w-md text-[#a1a1a6]">
              Taking on freelance projects from March 2026.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-6 text-[1.0625rem]">
              <a href={SITE.contactHref} target="_blank" rel="noopener noreferrer" className="btn-pill btn-primary">
                Get in touch
              </a>
              <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="font-medium text-[#2997ff] hover:underline">
                GitHub <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="mx-auto max-w-[1200px] px-5 sm:px-8 pt-10 pb-10 text-[0.75rem] text-faint">
        <div className="flex flex-col gap-2 border-t border-hairline pt-5 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. Designed and built by hand.</p>
          <p>India · Working globally</p>
        </div>
      </footer>
    </>
  );
}
