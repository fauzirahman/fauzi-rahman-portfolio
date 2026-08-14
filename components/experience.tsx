import {
  Database,
  GitBranch,
  Headphones,
  Search,
  Server,
  Workflow,
} from "lucide-react";

const responsibilities = [
  {
    icon: Server,
    title: "Application Development & Maintenance",
    description:
      "Developing, maintaining, and improving business applications based on operational and user requirements.",
  },
  {
    icon: Headphones,
    title: "Customer Service & Technical Support",
    description:
      "Providing technical assistance, troubleshooting, and support to users and customers.",
  },
  {
    icon: Search,
    title: "Problem Isolation & Analysis",
    description:
      "Investigating application and system issues, isolating root causes, and implementing appropriate solutions.",
  },
  {
    icon: Database,
    title: "Requirement Data & Technical Support",
    description:
      "Providing requirement data, technical information, and application-related support for users.",
  },
  {
    icon: Workflow,
    title: "Process Improvement",
    description:
      "Improving existing processes and maintaining technical documentation to support operational efficiency.",
  },
];

const technologyGroups = [
  {
    category: "Programming",
    technologies: [
      "Lumen",
      "Yii",
      "Laravel",
      "NestJS",
      "Python 3.7.3",
      "C++",
    ],
  },
  {
    category: "JavaScript",
    technologies: [
      "jQuery",
      "Vue.js",
      "Node.js",
      "React",
    ],
  },
  {
    category: "Database",
    technologies: [
      "Oracle",
      "MySQL",
      "Redis",
    ],
  },
  {
    category: "Frontend",
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    category: "Management & Development Tools",
    technologies: [
      "Git",
      "Slack",
      "Trello",
      "Docker",
    ],
  },
  {
    category: "Data Distribution",
    technologies: [
      "Pentaho ETL",
    ],
  },
  {
    category: "Web Pattern",
    technologies: [
      "RSS",
      "XPath",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-32">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-muted">
            Experience
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Building software through real-world experience.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            More than a decade of experience across application development,
            technical support, system analysis, database technologies, and
            enterprise software maintenance.
          </p>
        </div>

        {/* Main experience */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          {/* Timeline */}
          <div>
            <div className="border-l border-border pl-6">
              <div className="relative">
                <span className="absolute -left-[31px] top-1 h-2.5 w-2.5 rounded-full bg-foreground" />

                <p className="text-sm font-medium text-muted">
                  October 2015 — July 2026
                </p>

                <h3 className="mt-3 text-2xl font-semibold">
                  Senior Programmer
                </h3>

                <p className="mt-2 text-base text-muted">
                  PT. Sonar Analitika Indonesia
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-border px-3 py-1.5 text-xs text-muted">
                    Software Development
                  </span>

                  <span className="rounded-full border border-border px-3 py-1.5 text-xs text-muted">
                    API Development
                  </span>

                  <span className="rounded-full border border-border px-3 py-1.5 text-xs text-muted">
                    Technical Support
                  </span>

                  <span className="rounded-full border border-border px-3 py-1.5 text-xs text-muted">
                    System Analysis
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Responsibilities */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Responsibilities
            </p>

            <div className="mt-6 space-y-4">
              {responsibilities.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-border bg-surface/50 p-5"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border text-muted">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="font-semibold">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-muted">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        {/* Technology stack */}
        <div className="mt-20 border-t border-border pt-12">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Technology Experience
            </p>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight">
              A broad engineering toolkit
            </h3>

            <p className="mt-4 text-base leading-7 text-muted">
              Experience across backend development, frontend applications,
              databases, data processing, version control, and development
              infrastructure.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {technologyGroups.map((group) => (
              <article
                key={group.category}
                className="rounded-2xl border border-border bg-surface/50 p-6"
              >
                <div className="flex items-center gap-3">
                  <GitBranch className="h-4 w-4 text-muted" />

                  <h4 className="text-sm font-semibold">
                    {group.category}
                  </h4>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-border px-3 py-1.5 text-xs text-muted"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}