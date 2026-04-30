import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

function Navbar() {
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
    <nav className="p-4 text-white relative z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-semibold tracking-wide">RAF</div>

        {/* DESKTOP NAV */}
        <ul className="hidden lg:flex items-center gap-10">
          {["Skills", "Projects", "Contact"].map((item) => (
            <li key={item} className="relative group cursor-pointer">
              <a
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleScroll(e, item.toLowerCase())}
                className="text-gray-300 transition-all duration-300 group-hover:text-white"
              >
                {item}
              </a>

              {/* DOT UNDERLINE EFFECT */}
              <span className="absolute left-1/2 -bottom-3 w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 -translate-x-1/2 transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        {/* DESKTOP BUTTON */}
        <a
          href="/cv.pdf"
          download="Raffy-CV.pdf"
          className="hidden lg:flex border border-gray-400 text-white font-semibold px-6 py-3 rounded-full items-center gap-3 hover:border-blue-600 hover:scale-[1.03] transition-all"
        >
          Download CV
          <Download size={15} strokeWidth={3} />
        </a>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* BACKDROP */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* MOBILE MENU */}
      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300
  ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* MOBILE MENU PANEL */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] sm:w-[380px] z-50
  bg-linear-to-b from-[#0b0d12] via-[#07080c] to-[#05060a]
  border-l border-white/10
  shadow-[0_0_60px_rgba(0,0,0,0.8)]
  transform transition-transform duration-300 ease-out
  ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* TOP BAR */}
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white tracking-wide">
              RAF
            </div>

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-lg hover:bg-white/10 transition"
            >
              <X size={22} className="text-white" />
            </button>
          </div>

          {/* DIVIDER */}
          <div className="my-6 h-px bg-white/10" />

          {/* NAV TITLE */}
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">
            Navigation
          </p>

          {/* NAV LINKS */}
          <nav className="flex flex-col gap-3 mt-1">
            {["Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between px-4 py-4 rounded-xl
          text-gray-300 hover:text-white
          border border-transparent hover:border-white/10
          hover:bg-white/5 transition-all duration-200"
              >
                <span className="tracking-wide group-hover:translate-x-1 transition-transform">
                  {item}
                </span>

                <span className=" group-hover:bg-white transition-all" />
              </a>
            ))}
          </nav>

          {/* PUSH TO BOTTOM */}
          <div className="mt-auto">
            <div className="my-6 h-px bg-white/10" />

            <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">
              Get my CV
            </p>

            {/* CLEAN BUTTON (NO GLOW) */}
            <a
              href="/cv.pdf"
              download="Raffy-CV.pdf"
              className="w-full flex items-center justify-center gap-3 px-6 py-3 rounded-xl
        bg-white text-black font-semibold
        border border-white/10
        hover:bg-gray-100 hover:scale-[1.02]
        transition-all duration-200"
            >
              Download CV
              <Download size={16} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
