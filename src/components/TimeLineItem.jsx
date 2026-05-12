import About from "./About";
import { ArrowRight } from "lucide-react";

function TimeLineItem() {
  const data = [
    {
      year: "2022 - 2026",
      text: "Front-end Developer",
      company: "Transcosmos Asia Philippines",
      description:
        "Worked on maintaining and improving Duskin Health's Rent website, a Japan-based company, including UI enhancements, performance optimization, and development of new features.",
    },
    {
      year: "2021 - 2022",
      text: "Web Developer Trainee",
      company: "Self Learning",
      description:
        "Focused on HTML, CSS, and JavaScript, learning basic web development concepts, front-end technologies, and core programming principles.",
    },
    {
      year: "2014",
      text: "IT Support / Desktop Maintenance",
      company: "University of the East - Manila",
      description:
        "Maintained and enhanced production systems, supported desktop environments, resolved technical issues, and helped improve day-to-day IT operations.",
    },
  ];

  return (
    <section className="px-6 py-20">
      {/* ONLY ONCE */}
      <h1 className="text-sm font-bold uppercase tracking-widest text-gray-500">
        About Me
      </h1>
      <div className="flex items-center justify-between">
        <p className="mt-4 text-2xl md:text-3xl font-bold text-[#005377]">
          My professional journey
        </p>
        <a
          href="/Raffy_Gumapo_CV.pdf"
          download="Raffy_Gumapo_CV.pdf"
          className="px-4 sm:px-5 py-3 flex items-center gap-2 text-xs sm:text-sm font-semibold bg-white rounded-2xl text-gray-800
    shadow-[0_10px_30px_rgba(0,0,0,0.08),0_-2px_10px_rgba(0,0,0,0.03)]
    transition-all duration-300 ease-out
    hover:-translate-y-1 active:scale-95 whitespace-nowrap"
        >
          <span className="sm:hidden">Resume</span>
          <span className="hidden sm:inline">View Full Resume</span>

          <ArrowRight size={16} />
        </a>
      </div>

      {/* grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {data.map((item, index) => (
          <About
            key={index}
            year={item.year}
            text={item.text}
            company={item.company}
            description={item.description}
            gray={index === 0}
          />
        ))}
      </div>
    </section>
  );
}

export default TimeLineItem;
