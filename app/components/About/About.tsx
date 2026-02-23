"use client";

export default function About() {
  return (
    <section className="w-full h-screen bg-green-300">
      <div className="mx-auto max-w-4xl">
        <p className="mb-6 text-xs uppercase tracking-[0.25em] text-black/50">
          About
        </p>

        <h2 className="mb-12 text-4xl leading-tight">
          I’m Jatin, a design engineer
          focused on building clean,
          thoughtful digital products.
        </h2>

        <div className="space-y-6">
          <p className="text-sm leading-relaxed text-black/70">
            I work across design and development, shaping interfaces
            where structure, typography, and motion come together
            with clarity and purpose.
          </p>

          <p className="text-sm leading-relaxed text-black/70">
            My approach is grounded in simplicity — removing the
            unnecessary, refining the details, and building systems
            that scale without losing character.
          </p>

          <p className="text-sm leading-relaxed text-black/70">
            Whether it’s a personal portfolio or a production product,
            I focus on work that feels intentional, usable, and built
            to last.
          </p>
        </div>
      </div>
    </section>
  );
}