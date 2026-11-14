import { ThemeToggle } from "./theme-toggle";
import { profile } from "./data";

const links = [
  { label: "projects", href: "#projects" },
  { label: "experience", href: "#experience" },
  { label: "skills", href: "#skills" },
  { label: "coding", href: "#coding" },
  { label: "contact", href: "#contact" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-lg font-bold tracking-tight">
          <span className="text-muted-foreground">&lt;</span>
          <span className="text-gold-gradient">EKM</span>
          <span className="text-muted-foreground"> /&gt;</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
              >
                <span className="text-primary">./</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="hidden rounded-md bg-primary px-4 py-2 font-mono text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-85 sm:inline-flex"
          >
            hire_me
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
