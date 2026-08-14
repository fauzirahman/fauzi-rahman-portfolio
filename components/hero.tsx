import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-32">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-muted">
            Software Engineer
          </p>

          <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Building enterprise
            <br />
            <span className="text-muted">integration & cloud systems.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            I build reliable backend systems, enterprise integrations, REST
            APIs, and cloud applications using modern technologies.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
            >
              Contact Me
            </a>
          </div>
        </div>

        <a
          href="#about"
          className="mt-24 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          Scroll to explore
          <ArrowDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}