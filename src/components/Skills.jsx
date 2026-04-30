import React from "react";
import SkillCard from "./SKillCard";

const skill = [
  {
    id: 1,
    icon: "devicon-react-original colored text-6xl",
    title: "React",
    description: "Building interactive UI with components based architecture.",
  },
  {
    id: 2,
    icon: "devicon-firebase-plain colored text-6xl",
    title: "Firebase",
    description:
      "Rapid development, authentication, database, and scalable hosting",
  },
  {
    id: 3,
    icon: "devicon-git-plain colored text-6xl",
    title: "Git",
    description: "Version control, tracking changes, and team",
  },
  {
    id: 4,
    icon: "devicon-tailwindcss-plain colored text-6xl",
    title: "TailwindCSS",
    description:
      "TailwindCSS enables rapid UI development through utility classes and responsive design principles.",
  },
  {
    id: 5,
    icon: "devicon-figma-plain colored text-6xl",
    title: "UI/UX",
    description: "Creating wireframes, mockups, and interactive prototypes.",
  },
];

function Skills() {
  return (
    <>
      <div className="px-6 py-20">
        <h1 className="text-sm font-bold uppercase tracking-widest text-gray-500">
          Trusted By
        </h1>
        <p className="mt-4 text-2xl md:text-3xl font-bold text-gray-900">
          Tech I Work With
        </p>
        <div className="cards grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 mt-10">
          {skill.map((item) => (
            <SkillCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
