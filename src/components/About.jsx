function About({ year, text, company, description, gray }) {
  return (
    <div className="relative pl-10 group">
      {/* vertical line */}
      <div className="absolute left-3 top-7 h-[150px] w-px bg-gray-300 group-hover:bg-blue-400 transition-colors"></div>

      {/* dot */}
      <div
        className={`absolute left-[7px] top-1 w-3 h-3 rounded-full transition-transform group-hover:scale-125
        ${gray ? "bg-blue-500" : "bg-gray-400"}`}
      ></div>

      {/* year */}
      <div className="flex items-center">
        <span
          className={`text-sm font-medium
          ${gray ? "text-blue-500" : "text-gray-400"}`}
        >
          {year}
        </span>

        <div className="flex-1 h-px bg-gray-300 mx-3 group-hover:bg-blue-400 transition-colors"></div>
      </div>

      {/* text */}
      <p className="text-black text-sm font-bold mt-2 leading-relaxed group-hover:text-gray-900 transition-colors">
        {text}
      </p>
      <p className="text-gray-600 font-semibold text-sm mt-2 leading-relaxed group-hover:text-gray-900 transition-colors">
        {company}
      </p>
      <p className="text-gray-600 mt-2 text-sm  leading-relaxed group-hover:text-gray-900 transition-colors">
        {description}
      </p>
    </div>
  );
}

export default About;
