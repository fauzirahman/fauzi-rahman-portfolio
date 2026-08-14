import type { ReactNode } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Cloud,
  Database,
  GitBranch,
  Server,
} from "lucide-react";

const technologies = [
  "Next.js",
  "NestJS",
  "TypeScript",
  "PostgreSQL",
  "Oracle Fusion",
  "Docker",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 py-32 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Hero content */}
        <div>
          <div className="mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-muted">
            <span className="h-px w-8 bg-border" />
            Software Engineer
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Building reliable
            <br />
            <span className="text-muted">
              enterprise systems & integrations.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            I design and build backend services, enterprise APIs, integration
            platforms, and cloud applications with a focus on reliability,
            maintainability, and scalability.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <a
              href="/Fauzi-Rahman-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
            >
              View Resume
            </a>

            <a
              href="/Fauzi-Rahman-CV.pdf"
              download="Fauzi-Rahman-CV.pdf"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>

        {/* Engineering visual */}
        <div className="relative mx-auto w-full max-w-md lg:ml-auto">
          <div className="rounded-2xl border border-border bg-surface/70 p-5 shadow-2xl">
            <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted">
                  Engineering Stack
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  Enterprise Application
                </p>
              </div>

              <span className="flex h-2.5 w-2.5 rounded-full bg-foreground" />
            </div>

            <div className="space-y-3">
              <ArchitectureItem
                icon={<Server className="h-4 w-4" />}
                label="Application"
                value="Next.js / NestJS"
              />

              <ArchitectureItem
                icon={<GitBranch className="h-4 w-4" />}
                label="Integration"
                value="REST / OAuth 2.0"
              />

              <ArchitectureItem
                icon={<Database className="h-4 w-4" />}
                label="Data"
                value="PostgreSQL / Prisma"
              />

              <ArchitectureItem
                icon={<Cloud className="h-4 w-4" />}
                label="Cloud"
                value="Docker / Railway"
              />
            </div>

            <div className="mt-5 border-t border-border pt-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted">System status</span>

                <span className="flex items-center gap-2 font-medium text-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                  Operational
                </span>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute -bottom-6 -left-6 -z-10 h-32 w-32 rounded-full border border-border/40"
          />

          <div
            aria-hidden="true"
            className="absolute -right-8 -top-8 -z-10 h-24 w-24 rounded-full border border-border/40"
          />
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-sm text-muted transition-colors hover:text-foreground sm:inline-flex"
      >
        Scroll to explore
        <ArrowDown className="h-4 w-4" />
      </a>
    </section>
  );
}

function ArchitectureItem({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-border/70 bg-background/50 p-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border text-muted">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs text-muted">{label}</p>
        <p className="mt-1 truncate text-sm font-medium text-foreground">
          {value}
        </p>
      </div>
    </div>
  );
}
