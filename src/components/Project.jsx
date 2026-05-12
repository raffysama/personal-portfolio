import React from "react";
import ProjectCards from "./ProjectCards";

const projects = [
  {
    id: 1,
    title: "Duskin Health Rent",
    category: "Maintenance",
    description:
      "Maintained and enhanced a production system used by thousands of users. Built new features, fixed issues, and improved performance.",
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
    category: "Full-stack",
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
    category: "Tracking App",
    description:
      "Real-time tracking system with live location, updates, and history. Optimized for performance and usability.",
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
    category: "E-commerce",
    description:
      "A full-stack e-commerce store for tech products with product browsing, cart management, user authentication, and order history.",
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
  {
    id: 6,
    title: "WarehouseIQ",
    category: "Inventory System",
    description:
      "A full-stack inventory management system with authentication, role-based access, inventory management, stock transactions, dashboard insights, and staff management.",
    status: "In-Progress",
    image: "/images/warehouseiq.png",
    icons: [
      "devicon-react-original colored",
      "devicon-typescript-plain colored",
      "devicon-tailwindcss-plain colored",
      "devicon-supabase-plain colored",
    ],
    links: "https://warehouse-iq-ten.vercel.app/",
  },
];

function Project() {
  return (
    <section className="bg-[#e5e9ee] px-3 py-20">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-10 px-2">
          <h1 className="text-sm font-bold uppercase tracking-widest text-gray-500">
            Featured Projects
          </h1>
          <p className="mt-2 text-2xl font-bold text-[#005377] md:text-3xl">
            Something I've Built
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((item, index) => (
            <ProjectCards
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              status={item.status}
              icons={item.icons}
              link={item.links}
              category={item.category}
              className={
                index === projects.length - 1
                  ? "md:col-span-2 xl:col-span-2"
                  : ""
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
