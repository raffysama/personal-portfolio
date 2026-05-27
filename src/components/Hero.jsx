import image from "/hero-images.png";
import { ArrowRight, Dot } from "lucide-react";
import { FaRegCircleDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

function Hero() {
  const handleScroll = (e, id) => {
    e.preventDefault();

    const element = document.getElementById(id);

    if (!element) return;

    const targetPosition = element.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 600;
    let start = null;

    window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp;

      const progress = timestamp - start;
      const p = Math.min(progress / duration, 1);
      const ease = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;

      window.scrollTo(0, startPosition + distance * ease);

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    });
  };

  return (
    <section className="relative flex min-h-[calc(100vh-80px)] w-full flex-col justify-center overflow-hidden px-6 py-14 sm:px-8 md:py-20 lg:px-14 xl:px-20">
      <div className="grid items-center gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(520px,680px)_48px]">
        {/* TEXT SIDE */}
        <div className="text-center xl:text-left">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#06a77d] sm:text-base">
            Hello my name is,
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight text-[#1c2333] sm:text-5xl md:text-6xl xl:text-7xl">
            Raffy <span className="text-[#005377]">Gumapo</span>
          </h1>

          <p className="mt-2 text-2xl font-semibold text-[#1c2333] sm:text-3xl md:text-4xl">
            Frontend Developer
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-7 text-[#334155] sm:text-lg xl:mx-0">
            I help businesses build fast, modern web applications that turn
            visitors into customers, simplify daily operations, and create a
            smoother experience for their users.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row xl:justify-start">
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, "projects")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#06a77d] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#058f6b] hover:shadow-lg hover:shadow-emerald-200 active:scale-[0.98] sm:w-auto"
            >
              View my projects <ArrowRight className="size-5" />
            </a>

            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "contact")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#005377] px-6 py-3 text-sm font-semibold text-[#1c2333] transition-all hover:border-[#06a77d] hover:text-[#06a77d] active:scale-[0.98] sm:w-auto"
            >
              Let's Talk <FaRegCircleDot size={12} />
            </a>
          </div>

          {/* STATUS */}
          <div className="mt-7 flex items-center justify-center gap-1 xl:justify-start">
            <Dot size={34} className="text-green-500" />
            <p className="text-sm font-semibold text-[#1c2333] sm:text-base">
              Available for work
            </p>
          </div>

          <div className="mt-8 flex justify-center gap-10 xl:justify-start">
            <div>
              <p className="text-2xl font-bold text-[#06a77d]">5+</p>
              <p className="text-xs font-medium text-[#1c2333]">Projects</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-[#005377]">4yr+</p>
              <p className="text-xs font-medium text-[#1c2333]">Experience</p>
            </div>
          </div>
        </div>

        {/* IMAGE SIDE - LAPTOP/DESKTOP ONLY */}
        <div className="hidden justify-center xl:flex">
          <img
            src={image}
            alt="Raffy Gumapo"
            className="h-[600px] w-auto object-contain"
          />
        </div>

        {/* SOCIALS */}
        <div className="flex items-center justify-center gap-6 xl:flex-col xl:gap-8">
          <a
            href="https://github.com/raffysama"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition hover:-translate-y-1 hover:scale-110"
          >
            <i className="devicon-github-original colored text-2xl"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/raffy-gumapo/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition hover:-translate-y-1 hover:scale-110"
          >
            <i className="devicon-linkedin-plain colored text-2xl"></i>
          </a>

          <a
            href="mailto:raffysama@gmail.com"
            aria-label="Email"
            className="transition hover:-translate-y-1 hover:scale-110"
          >
            <IoMdMail className="size-7 text-[#06a77d]" />
          </a>

          <div className="hidden h-20 w-px bg-slate-300 xl:block" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
