import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  {
    label: "GitHub",
    href: "https://github.com/fauzirahman/",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:fauzirahman45@gmail.com",
    external: false,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Identity */}
          <div>
            <a
              href="#home"
              className="font-semibold tracking-tight text-foreground"
            >
              Fauzi Rahman
            </a>

            <p className="mt-2 text-sm text-muted">
              Software Engineer · Backend · Integration · Cloud
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}

                {link.external && (
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-border/60 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Fauzi Rahman. All rights reserved.
          </p>

          <p>
            Built with Next.js, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}