export type NavItem = {
  label: string;
  href: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type Skill = {
  icon: string;
  title: string;
  group: string;
};

export type Project = {
  title: string;
  category: string;
  description: string;
  status: "Done" | "In Progress";
  image: string;
  stack: string[];
  icons: string[];
  link: string;
};

export type JourneyItem = {
  year: string;
  role: string;
  company: string;
  description: string;
};

export const profile = {
  name: "Raffy Gumapo",
  role: "Frontend Developer",
  email: "raffysama@gmail.com",
  phone: "+63 945 984 2105",
  location: "Valenzuela, Philippines",
  github: "https://github.com/raffysama",
  linkedin: "https://www.linkedin.com/in/raffy-gumapo/",
  resume: "/Raffy_Gumapo_CV.pdf",
  intro:
    "I build fast, polished web interfaces for dashboards, ecommerce, and business tools with a strong focus on usability, responsive layouts, and clean front-end architecture.",
};

export const navItems: NavItem[] = [
  { label: "Tech", href: "skills" },
  { label: "Gallery", href: "projects" },
  { label: "Journey", href: "journey" },
  { label: "Contact", href: "contact" },
];

export const metrics: Metric[] = [
  { value: "5+", label: "shipped projects" },
  { value: "4yr+", label: "frontend experience" },
  { value: "18", label: "tools in stack" },
];

export const skills: Skill[] = [
  {
    icon: "devicon-javascript-plain colored",
    title: "JavaScript",
    group: "Core",
  },
  {
    icon: "devicon-typescript-plain colored",
    title: "TypeScript",
    group: "Core",
  },
  { icon: "devicon-react-original colored", title: "React", group: "UI" },
  { icon: "devicon-nextjs-plain", title: "Next.js", group: "App" },
  { icon: "devicon-html5-plain colored", title: "HTML", group: "UI" },
  { icon: "devicon-css3-plain colored", title: "CSS", group: "UI" },
  { icon: "devicon-tailwindcss-plain colored", title: "Tailwind", group: "UI" },
  { icon: "devicon-vite-original colored", title: "Vite", group: "Build" },
  { icon: "devicon-firebase-plain colored", title: "Firebase", group: "Data" },
  { icon: "devicon-supabase-plain colored", title: "Supabase", group: "Data" },
  { icon: "devicon-figma-plain colored", title: "Figma", group: "Design" },
  { icon: "devicon-git-plain colored", title: "Git", group: "Workflow" },
  { icon: "devicon-vercel-original", title: "Vercel", group: "Deploy" },
  { icon: "devicon-github-original", title: "GitHub", group: "Workflow" },
  { icon: "devicon-bash-plain colored", title: "Git Bash", group: "Tools" },
  {
    icon: "devicon-npm-original-wordmark colored",
    title: "npm",
    group: "Package",
  },
  { icon: "devicon-reactrouter-plain colored", title: "Router", group: "App" },
  { icon: "devicon-postman-plain colored", title: "REST API", group: "API" },
];

export const projects: Project[] = [
  {
    title: "Duskin Health Rent",
    category: "Maintenance",
    description:
      "Production website enhancements, UI improvements, performance work, and feature support for a Japan-based health rent service.",
    status: "Done",
    image: "/images/duskin.png",
    stack: ["HTML", "JavaScript", "CSS"],
    icons: [
      "devicon-html5-plain colored",
      "devicon-javascript-plain colored",
      "devicon-css3-plain colored",
    ],
    link: "https://healthrent.duskin.jp/",
  },
  {
    title: "Mini CRM / Pipeline Dashboard",
    category: "Full-stack",
    description:
      "CRM dashboard with lead management, kanban pipeline, task tracking, and a focused interface for managing customer workflows.",
    status: "In Progress",
    image: "/images/mini_crm.png",
    stack: ["React", "TypeScript", "Tailwind"],
    icons: [
      "devicon-react-original colored",
      "devicon-typescript-plain colored",
      "devicon-tailwindcss-plain colored",
    ],
    link: "https://mini-crm-pipeline-dashboard.vercel.app/",
  },
  {
    title: "EZ Tracking",
    category: "Tracking App",
    description:
      "Realtime tracking system with location updates, activity history, and a focused interface for operational monitoring.",
    status: "In Progress",
    image: "/images/eztracking.png",
    stack: ["React", "Tailwind", "Firebase"],
    icons: [
      "devicon-react-original colored",
      "devicon-tailwindcss-plain colored",
      "devicon-firebase-plain colored",
    ],
    link: "https://ez-tracking-iota.vercel.app/",
  },
  {
    title: "TechVault",
    category: "E-commerce",
    description:
      "Tech product storefront with browsing, cart flows, authentication, and customer order history.",
    status: "In Progress",
    image: "/images/techvault.png",
    stack: ["React", "TypeScript", "Tailwind"],
    icons: [
      "devicon-react-original colored",
      "devicon-typescript-plain colored",
      "devicon-tailwindcss-plain colored",
    ],
    link: "https://techvault-coral.vercel.app/",
  },
  {
    title: "WarehouseIQ",
    category: "Inventory System",
    description:
      "Inventory platform with auth, roles, stock movements, dashboard insights, and staff management.",
    status: "In Progress",
    image: "/images/warehouseiq.png",
    stack: ["React", "TypeScript", "Tailwind"],
    icons: [
      "devicon-react-original colored",
      "devicon-typescript-plain colored",
      "devicon-tailwindcss-plain colored",
    ],
    link: "https://warehouse-iq-ten.vercel.app/",
  },
  {
    title: "StudyMate",
    category: "Student Productivity",
    description:
      "Study platform with notes, flashcards, planner tasks, reviewers, shared resources, notifications, and PWA support.",
    status: "In Progress",
    image: "/images/studymate.png",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind"],
    icons: [
      "devicon-nextjs-original",
      "devicon-react-original colored",
      "devicon-typescript-plain colored",
      "devicon-supabase-plain colored",
      "devicon-tailwindcss-plain colored",
    ],
    link: "https://studymate-sepia.vercel.app/",
  },
  {
    title: "La Moderno",
    category: "E-commerce",
    description:
      "Modern ecommerce experience with product browsing, cart management, authentication, and order history.",
    status: "In Progress",
    image: "/images/lamoderno.png",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind"],
    icons: [
      "devicon-nextjs-original",
      "devicon-react-original colored",
      "devicon-typescript-plain colored",
      "devicon-supabase-plain colored",
      "devicon-tailwindcss-plain colored",
    ],
    link: "https://la-moderno.vercel.app/",
  },
];

export const journey: JourneyItem[] = [
  {
    year: "2022 - 2026",
    role: "Front-end Developer",
    company: "Transcosmos Asia Philippines",
    description:
      "Maintained and improved production web experiences, shipped UI enhancements, fixed issues, and optimized user-facing features.",
  },
  {
    year: "2021 - 2022",
    role: "Web Developer Trainee",
    company: "Self Learning",
    description:
      "Built strong foundations in HTML, CSS, JavaScript, front-end workflows, and core programming concepts.",
  },
  {
    year: "2014",
    role: "IT Support / Desktop Maintenance",
    company: "University of the East - Manila",
    description:
      "Supported desktop environments, resolved technical issues, and helped keep daily IT operations reliable.",
  },
];
