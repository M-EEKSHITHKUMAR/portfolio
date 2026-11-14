import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { codingStats, profile } from "./data";

const terminalLines: { prompt?: string; text: string; accent?: boolean }[] = [
  { prompt: "$", text: "whoami" },
  { text: "eekshith_kumar_mekala", accent: true },
  { prompt: "$", text: "cat education.txt" },
  { text: "B.Tech CSE — NIT Patna | CGPA 8.33/10 | Class of 2027", accent: true },
  { prompt: "$", text: "cat focus.txt" },
  { text: "full-stack web • AI powered Solutions • competitive programming", accent: true },
  { prompt: "$", text: "./run --stats" },
  {
    text: `${codingStats.problems} problems solved  |  ${codingStats.contests} contests`,
    accent: true,
  },
  {
    text: "LeetCode: Knight   Codeforces: Specialist   CodeChef: 3★",
    accent: true,
  },
];

const stats = [
  { value: "8.33", label: "CGPA / 10" },
  { value: codingStats.problems, label: "problems solved" },
  { value: codingStats.contests, label: "contests" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* subtle gold glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[480px] rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-primary), transparent)",
        }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="font-mono text-sm text-primary">
            {"// hi, my name is"}
          </p>
          <h1 className="mt-4 font-mono text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Eekshith Kumar
            <br />
            <span className="text-gold-gradient">Mekala.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.role} crafting full-stack platforms and applied AI
            Solutions — currently a Computer Science undergrad at{" "}
            <span className="font-medium text-foreground">
              National Institute of Technology Patna
            </span>
            , graduating in {profile.gradYear}.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-mono text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-85"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 font-mono text-sm text-foreground transition-colors hover:border-primary/60 hover:text-primary"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 font-mono text-sm text-foreground transition-colors hover:border-primary/60 hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="border-l-2 border-primary/70 pl-3"
              >
                <dt className="font-mono text-2xl font-bold text-foreground sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* terminal card */}
        <div className="rounded-xl border border-border bg-card shadow-[0_20px_60px_-20px_oklch(0.79_0.13_88_/_0.25)]">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-destructive/80" />
            <span className="h-3 w-3 rounded-full bg-primary/60" />
            <span className="h-3 w-3 rounded-full bg-muted-foreground/60" />
            <span className="ml-2 font-mono text-xs text-muted-foreground">
              eekshith@nitp: ~
            </span>
          </div>
          <div className="space-y-1.5 p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
            {terminalLines.map((line, i) =>
              line.prompt ? (
                <p key={i} className="text-muted-foreground">
                  <span className="text-primary">{line.prompt}</span>{" "}
                  {line.text}
                </p>
              ) : (
                <p
                  key={i}
                  className={
                    line.accent ? "text-primary" : "text-muted-foreground"
                  }
                >
                  {line.text}
                </p>
              ),
            )}
            <p className="text-muted-foreground">
              <span className="text-primary">$</span>{" "}
              <span className="blink text-primary">▊</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
