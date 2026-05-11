import React from "react";
import ProjectCards from "./ProjectCards";

const projects = [
  {
    id: 1,
    title: "Duskin Health Rent",
    description:
      "Maintain and enchanced a production system used by thousands of users, Built new features, fixed issues and improved performance.",
    status: "Done",
    image: "/images/duskin.png",
    icons: [
      "devicon-html5-plain colored",
      "devicon-javascript-plain colored",
      "devicon-css3-plain colored",
    ],
    links: "https://healthrent.duskin.jp/",
  },
  {
    id: 2,
    title: "Mini CRM / Pipeline Dashboard",
    description:
      "Full-stack CRM dashboard with lead management, kanban pipeline, auth, and real-time data powered by Supabase.",
    status: "In-Progress",
    image: "/images/mini_crm.png",
    icons: [
      "devicon-react-original colored",
      "devicon-tailwindcss-plain colored",
      "devicon-supabase-plain colored",
      "devicon-typescript-plain colored",
    ],
    links: "https://mini-crm-pipeline-dashboard.vercel.app/",
  },
  {
    id: 3,
    title: "EZ Tracking",
    description:
      "Real-time tracking system with live location, updates and history, Optimized for performance and usability",
    status: "In-Progress",
    image: "/images/eztracking.png",
    icons: [
      "devicon-react-original colored",
      "devicon-tailwindcss-plain colored",
      "devicon-firebase-plain colored",
    ],
    links: "https://ez-tracking-iota.vercel.app/",
  },
  {
    id: 5,
    title: "TechVault",
    description:
      "A full-stack e-commerce store for tech products. Features product browsing, cart management, user authentication, and order history — built with React, TypeScript, and Supabase.",
    status: "In-Progress",
    image: "/images/techvault.png",
    icons: [
      "devicon-react-original colored",
      "devicon-typescript-plain colored",
      "devicon-tailwindcss-plain colored",
      "devicon-supabase-plain colored",
    ],
    links: "https://techvault-coral.vercel.app/",
  },
];

function Project() {
  return (
    <>
      <div className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-sm font-bold uppercase tracking-widest text-gray-500">
            Featured Projects
          </h1>
          <p className="mt-2 text-2xl md:text-3xl font-bold text-[#005377]">
            Something I've Built
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {projects.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <ProjectCards
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  status={item.status}
                  icons={item.icons}
                  link={item.links}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
