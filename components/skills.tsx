import {
  Cloud,
  Database,
  Layers3,
  Server,
  Workflow,
} from "lucide-react";

const skillGroups = [
  {
    icon: Server,
    title: "Backend",
    description: "Building APIs and backend services.",
    skills: ["NestJS", "Node.js", "REST API", "OAuth 2.0"],
  },
  {
    icon: Layers3,
    title: "Frontend",
    description: "Developing modern web applications.",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Database,
    title: "Database",
    description: "Designing and managing application data.",
    skills: ["PostgreSQL", "Prisma", "SQL", "Data Modeling"],
  },
  {
    icon: Workflow,
    title: "Integration",
    description: "Connecting enterprise systems and services.",
    skills: [
      "Oracle Fusion",
      "REST Integration",
      "API Design",
      "Synchronization",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Deploying and operating applications.",
    skills: ["Docker", "Railway", "Git", "CI/CD"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-border/60"
    >
      <div className="mx-auto max-w-6xl px-6 py-32">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-muted">
            Skills
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Technical expertise
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            A practical engineering stack covering application development,
            enterprise integration, data, and cloud infrastructure.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.title}
                className="rounded-2xl border border-border bg-surface/50 p-6 transition-colors hover:bg-surface-hover"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-6 text-lg font-semibold">
                  {group.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted">
                  {group.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border px-3 py-1.5 text-xs text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}