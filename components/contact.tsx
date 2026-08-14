import { ArrowUpRight, Mail } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "fauzirahman45@gmail.com",
    href: "mailto:fauzirahman45@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/fauzirahman",
    href: "https://github.com/fauzirahman/",
    icon: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-muted">
              Contact
            </p>

            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Let&apos;s build something meaningful.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              I&apos;m open to opportunities involving software engineering,
              backend systems, enterprise integration, APIs, and cloud
              applications.
            </p>

            <a
              href="mailto:fauzirahman45@gmail.com"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              Send me an email
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="space-y-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "GitHub" ? "_blank" : undefined}
                rel={
                  link.label === "GitHub"
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex items-center justify-between rounded-2xl border border-border bg-surface/50 p-5 transition-colors hover:bg-surface-hover"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted">
                    {link.icon ? (
                      <link.icon className="h-5 w-5" />
                    ) : (
                      <span className="text-xs font-semibold">GH</span>
                    )}
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted">
                      {link.label}
                    </p>

                    <p className="mt-1 text-sm font-medium text-foreground">
                      {link.value}
                    </p>
                  </div>
                </div>

                <ArrowUpRight className="h-4 w-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}