import React from "react";

const skills = [
  { id: 1, icon: "devicon-javascript-plain colored", title: "JavaScript" },
  { id: 2, icon: "devicon-typescript-plain colored", title: "TypeScript" },
  { id: 3, icon: "devicon-react-original colored", title: "React" },
  { id: 4, icon: "devicon-html5-plain colored", title: "HTML" },
  { id: 5, icon: "devicon-css3-plain colored", title: "CSS" },
  { id: 6, icon: "devicon-tailwindcss-plain colored", title: "Tailwind CSS" },
  { id: 7, icon: "devicon-vite-original colored", title: "Vite" },
  { id: 8, icon: "devicon-firebase-plain colored", title: "Firebase" },
  { id: 9, icon: "devicon-supabase-plain colored", title: "Supabase" },
  { id: 10, icon: "devicon-figma-plain colored", title: "Figma" },
  { id: 11, icon: "devicon-git-plain colored", title: "Git" },
];

function Skills() {
  return (
    <div className="px-6 py-20">
      <h1 className="text-sm font-bold uppercase tracking-widest text-gray-500">
        Trusted By
      </h1>
      <p className="mt-2 text-2xl md:text-3xl font-bold text-[#005377]">
        Tech I Work With
      </p>
      <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-4">
        {skills.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center gap-2 rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <i className={`${item.icon} text-4xl`} />
            <span className="text-xs font-medium text-gray-600 text-center">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
