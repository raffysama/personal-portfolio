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
      const duration = 600; // 600ms animation
      let start = null;

      window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        // easeInOutCubic
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
      <div className="text-white md:w-1/2">
        <h1 className="text-2xl font-bold text-blue-600">Hi, I'm Raf</h1>

        <p className="mt-8 text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-200 leading-tight">
          Frontend Developer
          <br />
          crafting clean digital
          <br />
          experiences <span className="text-blue-600">.</span>
        </p>

        <p className="mt-6 text-lg md:text-xl font-light text-gray-400">
          I build responsive, scalable and user-friendly web applications that
          solve real problems.
        </p>

        {/* BUTTONS */}
        <div className="flex mt-8 gap-4">
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, "projects")}
            className="bg-white text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-300 transition-all w-fit"
          >
            View my projects <ArrowRight className="size-5" />
          </a>

          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className="border border-gray-400 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:border-blue-600 transition-all w-fit"
          >
            Let's Talk <FaRegCircleDot size={12} />
          </a>
        </div>
        {/* STATUS */}
        <div className="flex items-center mt-8 gap-2">
          <Dot size={35} className="text-green-500" />
          <p className="text-gray-400 font-semibold">Available for work</p>
        </div>
      </div>

      {/* IMAGE SIDE (HIDDEN ON MOBILE) */}
      <div className="hidden md:flex md:w-1/2 justify-center">
        <img
          src={image}
          alt="Hero"
          className="h-[400px] md:h-[500px] lg:h-[600px] w-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* SOCIALS */}
      <div className="flex md:flex-col flex-row gap-6 md:gap-10 items-center">
        <a
          href="https://github.com/raffysama "
          target="_blank"
          className="hover:scale-110 transition"
        >
          <FaGithub className="size-5 text-gray-300 hover:text-white transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/raffy-gumapo/"
          target="_blank"
          className="hover:scale-110 transition"
        >
          <FaLinkedin className="size-5 text-gray-300 hover:text-white transition" />
        </a>

        <a
          href="mailto:raffysama@gmail.com"
          target="_blank"
          className="hover:scale-110 transition"
        >
          <IoMdMail className="size-5 text-gray-300 hover:text-white transition" />
        </a>

        <div className="hidden md:block w-[2px] h-20 bg-gray-600"></div>
      </div>
    </section>
  );
}

export default Hero;
