import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-8 pt-6 pb-1 sticky top-0 z-50">
      <div className="max-w-8xl mx-auto gap-8 grid grid-cols-4 items-center text-lg font-semibold">

        {/* Block 1 */}
        <div className="flex-col gap-0 hidden sm:flex md:flex lg:flex">
          <h1 className="text-black">Indian Based</h1>
          <h1 className="text-[#A1A1A1]">Working globally</h1>
        </div>

        {/* Block 2 */}
        <div className="flex flex-col gap-0">
          <h1>Building at</h1>
          <h1 className="text-[#A1A1A1] font-semibold">Lumo Studio</h1>
        </div>

        {/* Block 3 */}
        <div className="flex flex-col gap-0">
          <h1>Freelance availability</h1>
          <h1 className="text-[#A1A1A1] font-semibold">March 2026</h1>
        </div>

        {/* CTA */}
        <div className="flex justify-end">
          <Link
            href="/contact"
            className="px-6 py-3 bg-black text-white rounded-full text-lg font-bold"
          >
            Get in touch
          </Link>
        </div>

      </div>

      
    </nav>
    
  );
}
