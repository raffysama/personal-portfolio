import React from "react";
import image from "/hero-images.png";
import { ArrowRight, Dot } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaRegCircleDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { useState } from "react";

function Hero() {
  const [open, setOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const targetPosition =
        element.getBoundingClientRect().top + window.scrollY;
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
        if (progress < duration) window.requestAnimationFrame(step);
      });
    }
    setOpen(false);
  };

  return (
    <section className="px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* TEXT SIDE */}
      <div className="text-white mt-20 md:w-1/2">
        <h1 className="text-2xl font-bold text-[#06a77d]">Hello my name is,</h1>

        <p className="mt-4 text-3xl md:text-5xl lg:text-6xl font-semibold text-[#1c2333] leading-tight">
          Raffy <span className="text-[#005377]">Gumapo</span>
          <br />
          Frontend Developer
        </p>

        <p className="mt-6 text-lg md:text-base  text-[#1c2333] font-semibold">
          I help businesses build fast, modern web applications that turn
          visitors into customers, simplify daily operations, and create a
          smoother experience for their users.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-3 mt-10">
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, "projects")}
            className="bg-[#06a77d] text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#058f6b] hover:scale-[1.03] transition-all w-fit shrink-0"
          >
            View my projects <ArrowRight className="size-5" />
          </a>

          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className="border border-[#005377] text-[#1c2333] font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:border-blue-600 transition-all w-fit shrink-0"
          >
            Let's Talk <FaRegCircleDot size={12} />
          </a>
        </div>
        {/* STATUS */}
        <div className="flex items-center mt-8">
          <Dot size={35} className="text-green-500" />
          <p className="text-[#1c2333] font-semibold">Available for work</p>
        </div>
        <div className="mt-10 ml-10 flex gap-6">
          <div>
            <p className="text-2xl font-bold text-[#06a77d]">5+</p>
            <p className="text-xs text-[#1c2333]">Projects</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-[#005377]">4yr+</p>
            <p className="text-xs text-[#1c2333]">Experience</p>
          </div>
        </div>
      </div>

      {/* IMAGE SIDE (HIDDEN ON MOBILE) */}
      <div className="hidden md:flex md:w-1/2 justify-center">
        <img
          src={image}
          alt="Hero"
          className="h-[400px] md:h-[500px] lg:h-[600px] w-auto object-contain"
        />
      </div>

      {/* SOCIALS */}
      <div className="flex md:flex-col flex-row gap-6 md:gap-10 items-center">
        <a
          href="https://github.com/raffysama "
          target="_blank"
          className="hover:scale-110 transition"
        >
          <i className="devicon-github-original colored text-2xl"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/raffy-gumapo/"
          target="_blank"
          className="hover:scale-110 transition"
        >
          <i className="devicon-linkedin-plain colored text-2xl"></i>
        </a>

        <a
          href="mailto:raffysama@gmail.com"
          target="_blank"
          className="hover:scale-110 transition"
        >
          <IoMdMail className="size-7 text-[#06a77d] hover:[#058f6b] hover:scale-[1.03] transition-all w-fit" />
        </a>

        <div className="hidden md:block w-px h-20 bg-gray-400"></div>
      </div>
    </section>
  );
}

export default Hero;
