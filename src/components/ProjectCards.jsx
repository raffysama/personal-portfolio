import React from "react";
import { ArrowRight } from "lucide-react";

function ProjectCards({ image, title, description, icons, link, status }) {
  const statusColor =
    status === "In-Progress" ? "text-yellow-400" : "text-green-400";

  return (
    <>
      <div className="overflow-hidden rounded-2xl">
        <img className="w-full" src={image} alt={title} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mt-4">{title}</div>
        <p className="text-gray-600 whitespace-pre-line text-sm mt-2 leading-relaxed overflow-hidden">
          {description}
        </p>
        <div className="mt-10">
          <div className="flex items-center gap-2 text-sm font-semibold">
            {status === "Done" ? (
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            ) : (
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
            )}
            <span className={`${statusColor}`}>{status}</span>
          </div>
        </div>
        <div className="w-full h-px bg-gray-200 my-4"></div>

        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            {icons.map((icon, index) => (
              <i key={index} className={`${icon} text-2xl`}></i>
            ))}
          </div>
          <a
            href={link}
            target="_blank"
            className="text-sm bg-white text-blue-600 font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-all cursor-pointer"
          >
            View my work <ArrowRight className="size-5" />
          </a>
        </div>
      </div>
    </>
  );
}

export default ProjectCards;
