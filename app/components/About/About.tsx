export default function About() {
  return (
    <section id="about" className="w-full px-4 sm:px-8 py-28 md:py-40">
      <div className="grid gap-12 md:grid-cols-12">
        <p className="md:col-span-3 text-xs uppercase tracking-[0.25em] text-black/50">
          About
        </p>

        <div className="md:col-span-9 max-w-4xl">
          <h2 className="mb-12 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
            I’m Jatin, a design engineer focused on building clean, thoughtful
            digital products.
          </h2>

          <div className="grid gap-6 sm:grid-cols-3">
            <p className="text-sm leading-relaxed text-black/70">
              I work across design and development, shaping interfaces where
              structure, typography, and motion come together with clarity and
              purpose.
            </p>

            <p className="text-sm leading-relaxed text-black/70">
              My approach is grounded in simplicity — removing the unnecessary,
              refining the details, and building systems that scale without
              losing character.
            </p>

            <p className="text-sm leading-relaxed text-black/70">
              Whether it’s a personal portfolio or a production product, I focus
              on work that feels intentional, usable, and built to last.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
