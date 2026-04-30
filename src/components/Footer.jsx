import React from "react";
import { FaRegCircleDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MapPin, Phone } from "lucide-react";
import profile from "../assets/images/mainprofile.jpg";

function Footer() {
  return (
    <>
      <div className="px-6 py-10 ">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-10">
          {/* 1. HERO MESSAGE (PRIMARY FOCUS) */}
          <div className="space-y-4">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              LET'S CONNECT
            </span>

            <p className="text-2xl md:text-5xl font-bold text-white leading-tight">
              Let's build something
              <br />
              amazing together
            </p>
          </div>

          {/* 2. DESCRIPTION + CTA (SECONDARY BLOCK) */}
          <div className="space-y-5">
            <p className="text-gray-300 font-medium text-sm leading-relaxed max-w-md">
              I'm always open to new opportunities whether it's a challenging
              project or a chance to collaborate.
            </p>

            <a
              href="https://www.linkedin.com/in/raffy-gumapo/"
              target="_blank"
              className="border border-gray-400 text-white mt-10 font-semibold px-6 py-3 rounded-full w-fit flex items-center gap-4 hover:border-blue-600 transition-all"
            >
              Get in Touch <FaRegCircleDot size={12} />
            </a>
          </div>

          {/* 3. CONTACT (SUPPORTING INFO BLOCK) */}
          <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-10">
            {/* LEFT DIVIDER (desktop only) */}
            <div className="hidden lg:block w-[2px] h-20 bg-gray-600 mt-1"></div>

            {/* CONTACT INFO */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <IoMdMail className="size-5 text-gray-300" />
                <p className="text-gray-300 text-sm">raffysama@gmail.com</p>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="size-5 text-gray-300" />
                <p className="text-gray-300 text-sm">Valenzuela, Philippines</p>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="size-5 text-gray-300" />
                <p className="text-gray-300 text-sm">+63 945 984 2105</p>
              </div>
            </div>
          </div>

          {/* 4. PROFILE (VISUAL END CAP) */}
          <div className="flex flex-col items-center lg:items-center pt-4 lg:pt-10 space-y-3">
            <img
              src={profile}
              alt="RAF"
              className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover border-2 border-white shadow-lg"
            />

            <p className="text-gray-500 text-xs lg:text-sm font-medium">
              © 2026 RAF. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
