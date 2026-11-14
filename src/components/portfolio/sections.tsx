import {
  ArrowUpRight,
  Award,
  ExternalLink,
  Github,
  GraduationCap,
  Mail,
  Phone,
  Star,
  Trophy,
} from "lucide-react";
import {
  achievements,
  codingProfiles,
  codingStats,
  experience,
  profile,
  projects,
  skillGroups,
} from "./data";

function SectionHeader({
  index,
  title,
  hint,
}: {
  index: string;
  title: string;
  hint: string;
}) {
  return (
    <div className="mb-12">
      <p className="font-mono text-xs tracking-[0.25em] text-primary">
        {index} // {hint}
      </p>
      <h2 className="mt-3 font-mono text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <div className="gold-rule mt-4 h-px w-28" />
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
      {children}
    </span>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <SectionHeader index="01" hint="selected_work" title="Projects" />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/60 sm:p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-mono text-xl font-bold">{p.name}</h3>
              <div className="flex items-center gap-1.5">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.name} live site`}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.name} source code`}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>

            <p className="mt-1.5 font-mono text-xs leading-relaxed text-primary/90">
              {p.tagline}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>

            <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
              {p.bullets.map((b, i) => (
                <li key={i} className="flex gap-2.5">
                  <span className="mt-0.5 shrink-0 font-mono text-primary">
                    ▹
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {p.guide && (
              <p className="mt-auto pt-5 font-mono text-xs text-muted-foreground/80">
                Guide — {p.guide}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20"
    >
      <SectionHeader index="02" hint="where_i_worked" title="Experience" />
      <ol className="relative space-y-10 border-l border-border pl-7">
        {experience.map((e) => (
          <li key={e.org} className="relative">
            <span className="absolute -left-[35px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-mono text-lg font-bold">{e.org}</h3>
              <span className="font-mono text-xs text-muted-foreground">
                {e.period}
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-primary">
              {e.role}
              {e.kind === "position" && (
                <span className="ml-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  position of responsibility
                </span>
              )}
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
              {e.bullets.map((b, i) => (
                <li key={i} className="flex gap-2.5">
                  <span className="mt-0.5 shrink-0 font-mono text-primary">
                    ▹
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            {e.certificate && (
              <a
                href={e.certificate}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs text-primary underline-offset-4 transition-opacity hover:opacity-80 hover:underline"
              >
                <Award className="h-3.5 w-3.5" />
                view certificate
                <ArrowUpRight className="h-3 w-3" />
              </a>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <SectionHeader index="03" hint="toolbox" title="Skills" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g) => (
          <div
            key={g.label}
            className="rounded-xl border border-border bg-card p-5 transition-colors duration-300 hover:border-primary/50"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              {g.label}
            </h3>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {g.items.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CodingProfiles() {
  return (
    <section id="coding" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <SectionHeader index="04" hint="competitive_programming" title="Coding Profiles" />
      <p className="-mt-6 mb-10 font-mono text-sm text-muted-foreground">
        <span className="text-primary">{codingStats.problems}</span> problems
        solved · <span className="text-primary">{codingStats.contests}</span>{" "}
        contests ·{" "}
        <a
          href={profile.links.codolio}
          target="_blank"
          rel="noreferrer"
          className="underline-offset-4 transition-colors hover:text-primary hover:underline"
        >
          Codolio profile
        </a>
      </p>
      <div className="grid gap-5 sm:grid-cols-3">
        {codingProfiles.map((c) => (
          <a
            key={c.platform}
            href={c.url}
            target="_blank"
            rel="noreferrer"
            className="group rounded-xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/60"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-mono text-sm text-muted-foreground">
                {c.platform}
              </h3>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
            <p className="mt-4 font-mono text-2xl font-bold text-gold-gradient">
              {c.rank}
            </p>
            <p className="mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground">
              <Star className="h-3.5 w-3.5 text-primary" />
              {c.detail}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}

export function Achievements() {
  return (
    <section
      id="achievements"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20"
    >
      <SectionHeader index="05" hint="honors" title="Achievements" />
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <ul className="space-y-4">
          {achievements.map((a) => (
            <li
              key={a}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 transition-colors duration-300 hover:border-primary/50"
            >
              <Trophy className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span className="text-sm leading-relaxed text-muted-foreground">
                {a}
              </span>
            </li>
          ))}
        </ul>

        <div className="h-fit rounded-xl border border-primary/40 bg-card p-6">
          <div className="flex items-center gap-3">
            <GraduationCap className="h-5 w-5 text-primary" />
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Education
            </h3>
          </div>
          <p className="mt-4 font-mono text-base font-bold leading-snug">
            {profile.school}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{profile.degree}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Chip>Expected {profile.gradYear}</Chip>
            <Chip>CGPA {profile.cgpa}</Chip>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <p className="font-mono text-xs tracking-[0.25em] text-primary">
          06 // what's_next
        </p>
        <h2 className="mt-4 font-mono text-3xl font-bold tracking-tight sm:text-4xl">
          Let's build something <span className="text-gold-gradient">great</span>.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          Open to internships, collaborations and interesting problems. The
          fastest way to reach me is email — I reply quickly.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block break-all font-mono text-lg font-semibold text-primary underline-offset-8 transition-opacity hover:opacity-80 hover:underline sm:text-2xl"
        >
          {profile.email}
        </a>

        <div className="mt-6 flex items-center justify-center gap-5 font-mono text-sm text-muted-foreground">
          <a
            href={`tel:${profile.phone.replace(/-/g, "")}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4" />
            {profile.phone}
          </a>
          <span className="text-border">|</span>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <span className="text-border">|</span>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Mail className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-6 font-mono text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p>
            designed &amp; built with <span className="text-primary">♥</span> —
            React, TypeScript, Tailwind
          </p>
        </div>
      </footer>
    </section>
  );
}
