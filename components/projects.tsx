import type { ReactNode } from "react";

import {
  ArrowUpRight,
  Boxes,
  Database,
  GitBranch,
  LayoutDashboard,
  Server,
} from "lucide-react";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "NestJS",
  "PostgreSQL",
  "Prisma",
  "Oracle Fusion",
  "Docker",
  "REST API",
  "OAuth 2.0",
  "Vercel",
  "Railway",
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-32">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-muted">
            Featured Project
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Oracle Fusion Integration Platform
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            An enterprise-style integration platform designed to demonstrate
            reliable synchronization between application services, PostgreSQL,
            and Oracle Fusion APIs, with a production-style monitoring dashboard
            built with Next.js and TypeScript.
          </p>
        </div>

        {/* Main Project Card */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-surface/50">
          {/* Platform Header */}
          <div className="border-b border-border p-6 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              {/* Project Identity */}
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

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
                    Oracle Fusion Integration Platform is an enterprise-style
                    integration platform designed to simulate and demonstrate
                    application integration with Oracle Fusion Cloud through
                    REST APIs.
                  </p>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
                    The platform is built using NestJS, PostgreSQL, Prisma, and
                    Docker, with modular capabilities for employee, department,
                    and supplier management, health monitoring, data
                    synchronization, logging, validation, and API documentation
                    through Swagger.
                  </p>
                </div>
              </div>

              {/* Platform Links */}
              <div className="flex shrink-0 flex-wrap gap-3">
                <a
                  href="https://oracle-fusion-integration-platform.vercel.app/api"
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

          {/* Dashboard */}
          <div className="border-b border-border p-6 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              {/* Dashboard Identity */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border">
                  <LayoutDashboard className="h-5 w-5 text-muted" />
                </div>

                <div className="max-w-3xl">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                    Frontend Application
                  </p>

                  <h3 className="mt-2 text-xl font-semibold">
                    Oracle Fusion Integration Dashboard
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted">
                    Enterprise monitoring dashboard built with Next.js and
                    TypeScript for interacting with an Oracle Fusion integration
                    platform. Provides real-time health monitoring, employee and
                    supplier operations, department data, synchronization
                    visibility, and API-driven enterprise workflows.
                  </p>

                  <p className="mt-3 text-sm leading-6 text-muted">
                    The dashboard consumes a NestJS REST API deployed on Railway
                    and demonstrates a production-style frontend and backend
                    architecture with cloud deployment on Vercel.
                  </p>
                </div>
              </div>

              {/* Dashboard Links */}
              <div className="flex shrink-0 flex-wrap gap-3">
                <a
                  href="https://oracle-fusion-integration-dashboard.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
                >
                  Live Dashboard
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <a
                  href="https://github.com/fauzirahman/oracle-fusion-integration-dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-surface-hover"
                >
                  GitHub
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Dashboard Resources */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://oracle-fusion-integration-dashboard.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-surface-hover"
              >
                Dashboard
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href="https://oracle-fusion-integration-platform-production-755e.up.railway.app/api"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-surface-hover"
              >
                Backend API
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href="https://github.com/fauzirahman/oracle-fusion-integration-dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-surface-hover"
              >
                Frontend GitHub
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Architecture */}
          <div className="grid gap-px bg-border lg:grid-cols-3">
            <ArchitectureCard
              icon={<LayoutDashboard className="h-5 w-5" />}
              title="Frontend"
              description="Next.js and TypeScript dashboard providing health monitoring, employee operations, supplier operations, department data, and API-driven enterprise workflows."
            />

            <ArchitectureCard
              icon={<Server className="h-5 w-5" />}
              title="Application"
              description="NestJS backend with modular architecture, REST APIs, validation, error handling, synchronization workflows, and Swagger documentation."
            />

            <ArchitectureCard
              icon={<Database className="h-5 w-5" />}
              title="Data"
              description="PostgreSQL persistence using Prisma with repositories, synchronization logs, employee, department, and supplier data."
            />
          </div>

          {/* Technology Stack */}
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

          {/* Engineering Highlights */}
          <div className="border-t border-border p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Engineering Highlights
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Highlight text="Next.js enterprise monitoring dashboard" />
              <Highlight text="Modular NestJS architecture" />
              <Highlight text="Oracle Fusion API integration" />
              <Highlight text="Checkpoint-based synchronization" />
              <Highlight text="PostgreSQL persistence with Prisma" />
              <Highlight text="REST API and Swagger documentation" />
              <Highlight text="Docker-ready deployment" />
              <Highlight text="Frontend deployment on Vercel" />
              <Highlight text="Backend deployment on Railway" />
              <Highlight text="CORS-enabled frontend/backend integration" />
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

      <p className="mt-3 text-sm leading-6 text-muted">
        {description}
      </p>
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