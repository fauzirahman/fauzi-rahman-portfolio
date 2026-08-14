import type { ReactNode } from "react";

import {
  ArrowUpRight,
  Boxes,
  Database,
  GitBranch,
  Server,
} from "lucide-react";

const technologies = [
  "NestJS",
  "PostgreSQL",
  "Prisma",
  "Oracle Fusion",
  "Docker",
  "REST API",
  "OAuth 2.0",
  "Railway",
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-32">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-muted">
            Featured Project
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Oracle Fusion Integration Platform
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            An enterprise-style integration platform designed to demonstrate
            reliable synchronization between application services,
            PostgreSQL, and Oracle Fusion APIs.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-surface/50">
          {/* Project header */}
          <div className="border-b border-border p-6 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border">
                  <Boxes className="h-5 w-5 text-muted" />
                </div>

                <div>
                  <p className="text-sm text-muted">
                    Enterprise Integration Platform
                  </p>

                  <h3 className="mt-1 text-xl font-semibold">
                    Oracle Fusion Integration Platform
                  </h3>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://oracle-fusion-integration-platform-production-755e.up.railway.app/api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
                >
                  Live API
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <a
                  href="https://github.com/fauzirahman/oracle-fusion-integration-platform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-surface-hover"
                >
                  GitHub
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Architecture */}
          <div className="grid gap-px bg-border lg:grid-cols-3">
            <ArchitectureCard
              icon={<Server className="h-5 w-5" />}
              title="Application"
              description="NestJS backend with modular architecture, REST APIs, validation, error handling, and Swagger documentation."
            />

            <ArchitectureCard
              icon={<GitBranch className="h-5 w-5" />}
              title="Integration"
              description="Oracle Fusion integration layer with authentication, API clients, mapping, and synchronization workflows."
            />

            <ArchitectureCard
              icon={<Database className="h-5 w-5" />}
              title="Data"
              description="PostgreSQL persistence using Prisma with repositories, synchronization logs, and checkpoint-based processing."
            />
          </div>

          {/* Technologies */}
          <div className="border-t border-border p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Technology Stack
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-border px-3 py-1.5 text-xs text-muted"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* Engineering highlights */}
          <div className="border-t border-border p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Engineering Highlights
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Highlight text="Modular NestJS architecture" />
              <Highlight text="Oracle Fusion API integration" />
              <Highlight text="Checkpoint-based synchronization" />
              <Highlight text="PostgreSQL persistence with Prisma" />
              <Highlight text="Docker-ready deployment" />
              <Highlight text="Production deployment on Railway" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArchitectureCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <article className="bg-surface/50 p-6 sm:p-8">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted">
        {icon}
      </div>

      <h3 className="mt-5 font-semibold">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
    </article>
  );
}

function Highlight({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-sm text-muted">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
      {text}
    </div>
  );
}