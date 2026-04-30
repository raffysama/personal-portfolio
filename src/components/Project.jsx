import React from "react";
import ProjectCards from "./ProjectCards";

const projects = [
  {
    id: 1,
    title: "Duskin Health Rent",
    description:
      "Maintain and enchanced a production system used by thousands of users, Built new features, fixed issues and improved performance.",
    status: "Done",
    image: "src/assets/images/duskin.png",
    icons: [
      "devicon-html5-plain colored",
      "devicon-javascript-plain colored",
      "devicon-css3-plain colored",
    ],
    links: "https://healthrent.duskin.jp/",
  },
  {
    id: 2,
    title: "EZ Tracking",
    description:
      "Real-time tracking system with live location, updates and history, Optimized for performance and usability",
    status: "In-Progress",
    image: "src/assets/images/eztracking.png",
    icons: [
      "devicon-react-original colored",
      "devicon-tailwindcss-plain colored",
      "devicon-firebase-plain colored",
    ],
    links: "https://ez-tracking-iota.vercel.app/",
  },
  {
    id: 3,
    title: "EZ Tracking",
    description:
      "Real-time tracking system with live location, updates and history, Optimized for performance and usability",
    status: "In-Progress",
    image: "src/assets/images/eztracking.png",
    icons: [
      "devicon-react-original colored",
      "devicon-tailwindcss-plain colored",
      "devicon-firebase-plain colored",
    ],
    links: "https://ez-tracking-iota.vercel.app/",
  },
];

function Project() {
  return (
    <>
      <div className="px-6 py-20 bg-gray-100">
        <div className="w-full px-6 md:px-10 lg:px-16">
          <h1 className="text-sm font-bold uppercase tracking-widest text-blue-500">
            Featured Projects
          </h1>
          <p className="mt-4 text-2xl md:text-3xl font-bold text-gray-900">
            Some thing I've built
          </p>
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {projects.map((item) => (
              <div className="bg-white rounded-2xl  shadow-[0_10px_30px_rgba(0,0,0,0.08),0_-2px_10px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12),0_-4px_15px_rgba(0,0,0,0.05)]">
                <ProjectCards
                  key={item.id}
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
