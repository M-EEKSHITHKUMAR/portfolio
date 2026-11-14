export const profile = {
  name: "Eekshith Kumar Mekala",
  short: "MEK",
  role: "Full-Stack Developer & AI Enthusiast",
  email: "eekshithkumar369@gmail.com",
  phone: "+91-9381533136",
  school: "National Institute of Technology Patna",
  degree: "B.Tech in Computer Science and Engineering",
  gradYear: "2027",
  cgpa: "8.33/10",
  links: {
    linkedin: "https://linkedin.com/in/eekshithkumar/",
    github: "https://github.com/M-EEKSHITHKUMAR",
    codolio: "https://codolio.com/profile/Eekshith_Kumar_Mekala",
  },
};

export interface Project {
  name: string;
  tagline: string;
  stack: string[];
  bullets: string[];
  live?: string;
  repo?: string;
  guide?: string;
}

export const projects: Project[] = [
  {
    name: "UniConnect",
    tagline: "Campus issues, clubs, alumni & events — one unified platform",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux",
      "Redis",
      "Docker",
      "Gemini Embeddings",
    ],
    bullets: [
      "Full-stack platform enabling students to report, discuss, and track campus issues, with club discovery, alumni networking and event hubs through a unified dashboard.",
      "Reduced duplicate issue submissions with AI-powered semantic similarity using Gemini Embeddings.",
      "96% faster API response times via Redis caching with automatic cache invalidation, plus fewer redundant network calls with Redux Toolkit.",
      "Role-based access control (RBAC) securing CRUD operations across issues, clubs, alumni and events through a centralized admin dashboard.",
    ],
    live: "https://uniconnect-eeku.vercel.app",
    repo: "https://github.com/M-EEKSHITHKUMAR/UniConnect",
  },
  {
    name: "AgriWorld",
    tagline: "AI crop-disease diagnosis & agricultural marketplace for farmers",
    stack: [
      "MongoDB",
      "React.js",
      "Node.js",
      "Express.js",
      "Python",
      "CNN (MobileNetV2)",
      "RAG + FAISS",
      "Gemini API",
    ],
    bullets: [
      "End-to-end platform where farmers diagnose crop diseases, receive actionable treatment recommendations, and rent or share agricultural equipment and products.",
      "92% validation accuracy across 29 disease classes with a MobileNetV2 CNN model and image augmentation.",
      "RAG + FAISS retrieval engine with the Gemini API generates context-aware pesticide recommendations, eliminating manual treatment lookup.",
      "Scalable REST APIs for equipment rental listings, discovery and management in a unified marketplace.",
    ],
    repo: "https://github.com/M-EEKSHITHKUMAR/AgriWorld",
    guide: "Prof. Antriksh Goswami",
  },
];

export interface ExperienceItem {
  org: string;
  role: string;
  period: string;
  bullets: string[];
  certificate?: string;
  kind?: "work" | "position";
}

export const experience: ExperienceItem[] = [
  {
    org: "PARQIS",
    role: "Frontend Engineering Intern",
    period: "May 2026 – July 2026",
    certificate:
      "https://drive.google.com/file/d/19SdDWWk90-EmRqLImy1ZDQx0uFdNTWSd/view?usp=sharing",
    bullets: [
      "Contributed to migrating the PARQIS platform from Shopify to a Supabase-powered architecture by developing reusable React components and integrating backend APIs.",
      "Debugged production issues, cutting frontend platform dependency by 80%.",
    ],
  },
  {
    org: "NPTEL, IIT Ropar",
    role: "Winter Intern (Backend Engineering)",
    period: "Jan 2026 – April 2026",
    certificate:
      "https://archive.nptel.ac.in/content/noc/NOC26/Internship/NPTELINT26836500971338.jpg",
    bullets: [
      "Developed and tested REST APIs with Node.js and Express.js and integrated the Gemini API for the Vi-Slides project.",
      "Validated endpoints with Postman and collaborated on backend feature delivery.",
    ],
  },
  {
    org: "Training and Placement Cell, NIT Patna",
    role: "Internship Coordinator",
    period: "Oct 2025 – Present",
    kind: "position",
    bullets: [
      "Coordinating internship opportunities between students and recruiting organisations.",
    ],
  },
];

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["Java", "Python", "JavaScript", "SQL", "C", "HTML", "CSS"],
  },
  {
    label: "Frameworks & Libraries",
    items: ["React.js", "Node.js", "Express.js", "Redux Toolkit", "TensorFlow", "Keras"],
  },
  {
    label: "Databases",
    items: ["MySQL", "MongoDB", "Redis"],
  },
  {
    label: "Tools & Tech",
    items: ["Docker", "Git", "GitHub", "Postman", "Google Colab"],
  },
  {
    label: "Coursework",
    items: ["DSA", "System Design", "OOPs", "OS", "DBMS", "CN", "Software Engineering", "AI", "ML"],
  },
];

export const codingProfiles = [
  {
    platform: "LeetCode",
    rank: "Knight",
    detail: "2020+ rating",
    url: "https://leetcode.com/u/Eekshith_Kumar_Mekala/",
  },
  {
    platform: "Codeforces",
    rank: "Specialist",
    detail: "1400+ rating",
    url: "https://codeforces.com/profile/Eekshith_Kumar_Mekala",
  },
  {
    platform: "CodeChef",
    rank: "3 Star",
    detail: "1650+ rating",
    url: "https://www.codechef.com/users/eekshith_1100",
  },
];

export const achievements: string[] = [
  "International Rank 8 & Zonal Rank 1 — National Cyber Olympiad (NCO), 2019",
  "Amazon ML Summer School 2026 — one of 3,000 selected from 160,000+ applicants",
  "FFE Scholar — Foundation For Excellence",
  "Finalist — ByteVerse Hackathon, NIT Patna",
  "SemiFinalist — Flipkart GRID 8.0",
];

export const codingStats = {
  problems: "1500+",
  contests: "110+",
};
