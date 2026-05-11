import React from "react";
import { ArrowUpRight } from "lucide-react";

function ProjectCards({ image, title, description, icons, link, status }) {
  const isDone = status === "Completed" || status === "Done";

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group relative block w-full h-64 rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Image */}
      {image ? (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center text-5xl bg-slate-200">
          🖥️
        </div>
      )}

      {/* Strong gradient — always dark at bottom */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Status badge */}
      <span
        className={`absolute top-3 left-3 text-[11px] font-bold tracking-wide px-2.5 py-1 rounded-full ${
          isDone ? "bg-green-600 text-white" : "bg-amber-500 text-white"
        }`}
      >
        {status}
      </span>

      {/* Arrow */}
      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
        <ArrowUpRight className="size-4 text-white" />
      </div>

      {/* Info panel */}
      <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-8 translate-y-6 group-hover:translate-y-0 transition-transform duration-300 ease-out">
        <p className="text-white font-bold text-[15px] leading-snug mb-1 drop-shadow-md">
          {title}
        </p>
        <p className="text-white/75 text-[12px] leading-relaxed line-clamp-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 drop-shadow-md">
          {description}
        </p>

        {/* Icons */}
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          {icons.map((icon, index) => (
            <i
              key={index}
              className={`${icon} text-base text-white drop-shadow-md`}
            />
          ))}
        </div>
      </div>
    </a>
  );
}

export default ProjectCards;
