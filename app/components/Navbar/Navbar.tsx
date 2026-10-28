import { SITE } from "@/app/site";

export default function Navbar() {
  return (
    <nav className="w-full px-4 sm:px-8 pt-6 pb-1 sticky top-0 z-50">
      <div className="max-w-8xl mx-auto gap-4 sm:gap-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center text-sm sm:text-base lg:text-lg font-semibold">
        {/* Block 1 */}
        <div className="hidden md:flex flex-col gap-0">
          <p className="text-black">India based</p>
          <p className="text-[#A1A1A1]">Working globally</p>
        </div>

        {/* Block 2 */}
        <div className="flex flex-col gap-0">
          <p>Building at</p>
          <p className="text-[#A1A1A1] font-semibold">Lumo Studio</p>
        </div>

        {/* Block 3 */}
        <div className="hidden sm:flex flex-col gap-0">
          <p>Freelance availability</p>
          <p className="text-[#A1A1A1] font-semibold">March 2026</p>
        </div>

        {/* CTA */}
        <div className="flex justify-end">
          <a
            href={SITE.contactHref}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 sm:px-6 sm:py-3 bg-black text-white rounded-full font-bold"
          >
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
}
