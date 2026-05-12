import React from "react";
import { ArrowUpRight } from "lucide-react";

function ProjectCards({
  image,
  title,
  description,
  icons,
  link,
  status,
  category = "Project",
  className = "",
}) {
  const isDone = status === "Completed" || status === "Done";

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={`group relative block h-[280px] overflow-hidden rounded-xl bg-slate-200 shadow-sm ${className}`}
    >
      {image ? (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-200 text-5xl">
          🖥️
        </div>
      )}

      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-transparent" />

      <div className="absolute left-5 top-5">
        <span
          className={`rounded-full px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md ${
            isDone ? "bg-emerald-500/80" : "bg-amber-500/80"
          }`}
        >
          {status}
        </span>
      </div>

      <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
        <ArrowUpRight className="size-4" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <span className="mb-2 inline-flex rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
          {category}
        </span>

        <h3 className="text-lg font-bold text-white drop-shadow">{title}</h3>

        <p className="mt-1 line-clamp-2 max-w-xl text-sm leading-relaxed text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {description}
        </p>

        <div className="mt-3 flex items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {icons.map((icon, index) => (
            <i key={index} className={`${icon} text-lg text-white`} />
          ))}
        </div>
      </div>
    </a>
  );
}

export default ProjectCards;
