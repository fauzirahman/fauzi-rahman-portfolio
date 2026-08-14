import About from "@/components/about";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Skills from "@/components/skills";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />

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