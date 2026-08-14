import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section
          id="about"
          className="mx-auto min-h-screen max-w-6xl px-6 py-32"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-muted">
            About
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Engineering with a focus on reliable systems.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            I specialize in backend development, enterprise integration,
            APIs, databases, and cloud-based applications.
          </p>
        </section>

        <section
          id="skills"
          className="mx-auto min-h-screen max-w-6xl px-6 py-32"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-muted">
            Skills
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Technical expertise
          </h2>
        </section>

        <section
          id="projects"
          className="mx-auto min-h-screen max-w-6xl px-6 py-32"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-muted">
            Projects
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Selected work
          </h2>
        </section>

        <section
          id="experience"
          className="mx-auto min-h-screen max-w-6xl px-6 py-32"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-muted">
            Experience
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Professional experience
          </h2>
        </section>

        <section
          id="contact"
          className="mx-auto min-h-screen max-w-6xl px-6 py-32"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-muted">
            Contact
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s build something meaningful.
          </h2>
        </section>
      </main>
    </>
  );
}