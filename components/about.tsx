export default function About() {
  return (
    <section
      id="about"
      className="border-t border-border/60"
    >
      <div className="mx-auto max-w-6xl px-6 py-32">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-muted">
              About
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Engineering with a focus on reliable systems.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-muted">
            <p>
              I am a software engineer focused on building backend services,
              enterprise integrations, REST APIs, and cloud-based applications.
            </p>

            <p>
              My work combines application development with system integration,
              database design, synchronization processes, and deployment
              practices to create reliable solutions for business operations.
            </p>

            <p>
              I enjoy turning complex business requirements into maintainable
              software systems that are observable, scalable, and practical to
              operate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}