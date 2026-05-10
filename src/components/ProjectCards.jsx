import React from "react";
import { ArrowRight } from "lucide-react";

function ProjectCards({ image, title, description, icons, link, status }) {
  const statusColor =
    status === "In-Progress" ? "text-yellow-500" : "text-green-500";

  return (
    <>
      <div className="overflow-hidden rounded-t-2xl">
        <img className="w-full h-48 object-cover" src={image} alt={title} />
      </div>
      <div className="px-5 py-4">
        <div className="font-bold text-base mt-1">{title}</div>
        <p className="text-gray-500 text-sm mt-1.5 leading-relaxed line-clamp-2">
          {description}
        </p>
        <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
          <span
            className={`w-2 h-2 rounded-full ${status === "Done" ? "bg-green-400" : "bg-yellow-400"}`}
          />
          <span className={statusColor}>{status}</span>
        </div>
        <div className="w-full h-px bg-gray-100 my-3" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {icons.map((icon, index) => (
              <i key={index} className={`${icon} text-xl`} />
            ))}
          </div>
          <a
            href={link}
            target="_blank"
            className="text-xs bg-[#005377] text-white font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 hover:bg-[#004060] transition-all"
          >
            View <ArrowRight className="size-3.5" />
          </a>
        </div>
      </div>
    </>
  );
}

export default ProjectCards;
