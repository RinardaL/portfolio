// All site content lives here — edit this file to update the portfolio.

export const profile = {
  name: "Rinarda Lahu",
  role: "Junior Full-Stack Developer",
  location: "Pristina, Kosovo",
  email: "rinardalahu1@gmail.com",
  github: "https://github.com/RinardaL",
  linkedin: "https://www.linkedin.com/in/rinarda-lahu-32a81b28a/",
  cv: "/Rinarda_Lahu_CV.pdf",
  summary:
    "Computer Science student at UBT building full-stack apps with React, Node.js, Spring Boot and MySQL. Looking for my first internship or junior role where I can learn fast and ship real features.",
  openTo: "Open to internships and junior roles — remote or in Pristina",
};

export type Project = {
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  github?: string;
  demo?: string; // live URL — the button appears once this is set
  image?: string; // e.g. "/projects/physio.png" — put the file in public/projects
  icon: string;
  gradient: string; // Tailwind gradient classes for the cover
  url?: string; // label shown in the cover's address bar
  team?: string; // e.g. "Team of 6" — shown as a badge
};

export const projects: Project[] = [
  {
    title: "Physio Center Management System",
    description:
      "Full-stack web app for running a physiotherapy clinic: patients, therapists, appointments, treatment and exercise plans, clinical assessments, equipment and payments.",
    highlights: [
      "REST API with Express and 12 Sequelize models on MySQL",
      "JWT access/refresh tokens, bcrypt, patient/therapist roles",
      "Stripe Checkout with verified webhooks",
      "Admin dashboard with Recharts statistics",
    ],
    tech: ["React", "Node.js", "Express", "MySQL", "Sequelize", "JWT", "Stripe"],
    github: "https://github.com/RinardaL/physio-center",
    icon: "🩺",
    gradient: "from-pink-200 via-rose-100 to-violet-200 dark:from-pink-500/40 dark:via-rose-400/20 dark:to-violet-500/40",
    url: "physio-center / dashboard",
  },
  {
    title: "WellnessCenter",
    description:
      "E-commerce and wellness platform built by a team of six in a shared GitHub repo. I owned the order, review and delivery features and much of the storefront UI.",
    highlights: [
      "Built Order and Review CRUD end-to-end (API + UI)",
      "Delivery module with MongoDB (Mongoose)",
      "Product detail and order confirmation pages",
      "Redesigned the home page, header and logo",
      "Planned team tasks on Trello and collaborated through Git branches",
    ],
    tech: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "MySQL", "Stripe"],
    github: "https://github.com/oltahasimja/WellnessCenter",
    demo: "https://wellness-center-five.vercel.app",
    icon: "🌿",
    gradient: "from-emerald-100 via-teal-50 to-sky-200 dark:from-emerald-400/30 dark:via-teal-400/10 dark:to-sky-400/30",
    url: "wellness-center-five.vercel.app",
    team: "Team of 6 · 22 commits",
  },
  {
    title: "Glow by SV",
    description:
      "Website for a jewellery and gift shop in Kaçanik, Kosovo: collections, brand story, opening hours and contact — hand-coded and deployed on Vercel.",
    highlights: [
      "Collections for rings, necklaces, earrings, bracelets, hair accessories, handmade gifts and beauty",
      "Mobile-first responsive layout that works on any screen",
      "Albanian-language content written for the shop's local customers",
      "Automatic deploys to Vercel from GitHub",
    ],
    tech: ["HTML", "CSS", "Responsive design", "Vercel"],
    github: "https://github.com/RinardaL/glow-by-sv-website",
    demo: "https://glow-by-sv-website.vercel.app",
    icon: "💍",
    gradient: "from-rose-100 via-amber-50 to-pink-200 dark:from-rose-400/30 dark:via-amber-300/20 dark:to-pink-400/30",
    url: "glow-by-sv-website.vercel.app",
  },
  {
    title: "FlightTime Zone",
    description:
      "Programmatic-SEO site that generates a flight-time and time-zone page for every pair of ~115 world cities — around 13,000 statically generated pages.",
    highlights: [
      "Next.js static generation for ~13,000 city-pair pages",
      "DST-aware time-zone math and best meeting window (Luxon)",
      "Interactive world map with Leaflet",
      "FAQ, Breadcrumb and Dataset JSON-LD for search engines",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Luxon", "Leaflet"],
    github: "https://github.com/RinardaL/-flight-time-calculator",
    demo: "https://flight-time-calculator-six.vercel.app",
    icon: "🕒",
    gradient: "from-sky-100 via-indigo-100 to-violet-200 dark:from-sky-400/30 dark:via-indigo-400/20 dark:to-violet-500/40",
    url: "flight-time-calculator-six.vercel.app",
  },
  {
    title: "Product Sales Management",
    description:
      "Work in progress: a CRUD application for managing products in a sales system, with a Spring Boot REST backend and a React frontend.",
    highlights: [
      "Create, update, delete and list products",
      "Spring Boot REST API with MySQL persistence",
      "Basic authentication for user administration",
    ],
    tech: ["Java", "Spring Boot", "React", "MySQL"],
    icon: "📦",
    gradient: "from-amber-100 via-orange-100 to-pink-200 dark:from-amber-300/30 dark:via-orange-300/20 dark:to-pink-400/30",
    url: "sales / products",
    team: "In progress",
  },
  {
    title: "TripToCost",
    description:
      "My own project idea that I have been building and refining for months: a travel-cost website with 100+ destination pages, saved trips and an itinerary planner, built from scratch with no frameworks.",
    highlights: [
      "100+ hand-built destination pages",
      "Saved trips and itinerary features in vanilla JavaScript",
      "Responsive layout, SEO sitemap and PWA manifest",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/RinardaL/wander-list",
    demo: "https://wander-list-gray.vercel.app",
    icon: "✈️",
    gradient: "from-fuchsia-100 via-pink-100 to-orange-100 dark:from-fuchsia-400/30 dark:via-pink-400/20 dark:to-orange-300/30",
    url: "wander-list-gray.vercel.app",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["JavaScript", "TypeScript", "Java", "PHP", "SQL", "HTML", "CSS"] },
  { group: "Frontend", items: ["React", "Next.js", "React Router", "Tailwind CSS", "Axios", "Recharts"] },
  { group: "Backend", items: ["Node.js", "Express", "Spring Boot", "REST APIs", "JWT auth", "Stripe API"] },
  { group: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "Sequelize", "Mongoose"] },
  { group: "AI", items: ["Claude", "Claude Code", "AI-assisted development", "Prompting"] },
  { group: "Tools & teamwork", items: ["Git", "GitHub", "GitLab", "Postman", "Trello", "VS Code", "IntelliJ IDEA"] },
];

export type TimelineItem = { title: string; org: string; period: string; detail: string; link?: string };

export const timeline: TimelineItem[] = [
  {
    title: "Computer Science and Programming",
    org: "UBT – University for Business and Technology",
    period: "2022 – Present",
    detail: "Bachelor's studies, Pristina",
  },
  {
    title: "Java Fundamentals & Spring Boot",
    org: "AlpineTech · ISO 9001:2015 certified training",
    period: "2024 · Certificate",
    detail: "3-month training: Java beginner and advanced, Spring Boot, REST API, GitLab, PostgreSQL, team projects",
    link: "/certificates/alpinetech-java-spring-boot.pdf",
  },
  {
    title: "Claude 101",
    org: "Anthropic Education",
    period: "Certificate",
    detail: "Anthropic's introductory course on working effectively with Claude",
    link: "/certificates/claude-101-anthropic.pdf",
  },
];

export const about = {
  paragraphs: [
    "I'm a Computer Science and Programming student at UBT in Pristina. I got into development because I like building things people actually use — a clinic system that replaces paperwork, a shop that handles real orders, a tool that answers a real question in one glance.",
    "Most of my work is full-stack JavaScript: React on the front end, Node.js and Express on the back end, and MySQL or MongoDB underneath. I've also built with Java and Spring Boot, and recently with Next.js and TypeScript.",
    "I work with Claude every day as part of how I build — to plan features, debug, review my code and learn new frameworks faster. I treat it like a senior teammate: it speeds me up, but I make sure I understand every line I ship.",
    "On team projects I'm comfortable with Git branches and merges and planning work on Trello. Right now I'm looking for an internship or junior role where I can learn from experienced engineers and grow with the team.",
  ],
  facts: [
    { label: "Based in", value: "Pristina, Kosovo" },
    { label: "Studying", value: "Computer Science · UBT" },
    { label: "Focus", value: "Full-stack web apps" },
    { label: "AI workflow", value: "Claude & Claude Code" },
    { label: "Languages", value: "Albanian · English" },
    { label: "Available for", value: "Internships · Junior roles · Remote" },
  ],
};
