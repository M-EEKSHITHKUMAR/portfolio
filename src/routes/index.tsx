import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/portfolio/nav";
import { Hero } from "@/components/portfolio/hero";
import {
  Achievements,
  CodingProfiles,
  Contact,
  Experience,
  Projects,
  Skills,
} from "@/components/portfolio/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eekshith Kumar Mekala — Full-Stack & ML Developer" },
      {
        name: "description",
        content:
          "Portfolio of Eekshith Kumar Mekala, B.Tech CSE at NIT Patna — full-stack web development, machine learning and competitive programming.",
      },
      {
        property: "og:title",
        content: "Eekshith Kumar Mekala — Full-Stack & ML Developer",
      },
      {
        property: "og:description",
        content:
          "Full-stack platforms, applied ML and 1300+ solved problems. B.Tech CSE, NIT Patna.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <CodingProfiles />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}
