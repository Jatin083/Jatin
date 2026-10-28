import LineReveal from "../LineReveal/LineReveal";
import Magnet from "../reactbits/Magnet/Magnet";
import RollText from "../RollText/RollText";
import AnimatedIcon from "../AnimatedIcon/AnimatedIcon";
import mail from "react-useanimations/lib/mail";
import github from "react-useanimations/lib/github";
import arrowUp from "react-useanimations/lib/arrowUp";
import { SITE } from "@/app/site";

export default function Contact() {
  return (
    <>
      <section id="contact" className="mx-auto max-w-[1200px] px-5 sm:px-8 pt-24 md:pt-32">
        <div>
          <div data-cursor="-inverse" className="rounded-[28px] bg-black px-8 py-20 sm:py-28 text-center text-[#f5f5f7]">
            <LineReveal as="h2" className="type-hero block !text-[clamp(2.75rem,8vw,7rem)] !leading-[1.06] mx-auto max-w-[11ch]">
              Let’s build something great.
            </LineReveal>
            <p className="type-body-lg mx-auto mt-6 max-w-md text-[#a1a1a6]">
              Taking on freelance projects from March 2026.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-6 text-[1.0625rem]">
              {/* React Bits Magnet: the button leans toward the cursor */}
              <Magnet padding={60} magnetStrength={3} maxOffset={14}>
                <a href={SITE.contactHref} target="_blank" rel="noopener noreferrer" className="roll btn-pill btn-primary">
                  <AnimatedIcon icon={mail} size={20} />
                  <RollText>Get in touch</RollText>
                </a>
              </Magnet>
              <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="roll inline-flex items-center gap-1.5 font-medium text-[#2997ff]">
                <AnimatedIcon icon={github} size={20} />
                <RollText>GitHub</RollText>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-[1200px] px-5 sm:px-8 pt-10 pb-10 text-[0.75rem] text-faint">
        <div className="flex flex-col gap-2 border-t border-hairline pt-5 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. Designed and built by hand.</p>
          <div className="flex items-center gap-6">
            <p>India, working globally</p>
            <a href="#home" className="roll inline-flex items-center gap-1 font-medium text-ink">
              <AnimatedIcon icon={arrowUp} size={16} />
              <RollText>Back to top</RollText>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
