import React from "react";

function SKillCard({ icon, title, description }) {
  return (
    <>
      <div className="skill bg-white rounded-2xl p-10 shadow-[0_10px_30px_rgba(0,0,0,0.08),0_-2px_10px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12),0_-4px_15px_rgba(0,0,0,0.05)]">
        <i className={icon}></i>
        <h3 className="mt-2 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600 leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </>
  );
}

export default SKillCard;
