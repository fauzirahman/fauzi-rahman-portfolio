"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          onClick={closeMenu}
          className="font-semibold tracking-tight text-foreground"
        >
          Fauzi Rahman
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 text-sm text-muted md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#projects"
          className="hidden items-center gap-1 text-sm font-medium text-foreground sm:flex"
        >
          View Work
          <ArrowUpRight className="h-4 w-4" />
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-md p-2 text-muted transition-colors hover:bg-surface hover:text-foreground md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-border/40 py-4 text-sm text-muted transition-colors last:border-b-0 hover:text-foreground"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#projects"
              onClick={closeMenu}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background"
            >
              View Work
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}