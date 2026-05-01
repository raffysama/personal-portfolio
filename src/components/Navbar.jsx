import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <nav
      className={`bg-white/80 backdrop-blur-md sticky top-0 z-50
        px-4 py-2 md:px-6 md:py-4 lg:px-16
        transition-all duration-300
        ${scrolled ? "shadow-[0_2px_15px_rgba(0,0,0,0.06)]" : "shadow-none"}`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className=" font-semibold tracking-wide flex items-center justify-start">
          <div className="text-[#06a77d] text-2xl font-bold uppercase tracking-widest">
            Raf
          </div>
          <span className="text-[#005377] text-2xl font-bold uppercase tracking-widest">
            Gumapo
          </span>
        </div>

        {/* DESKTOP NAV */}
        <ul className="hidden lg:flex items-center gap-10">
          {["Skills", "Projects", "Contact"].map((item) => (
            <li key={item} className="relative group cursor-pointer">
              <a
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleScroll(e, item.toLowerCase())}
                className="text-[#1c2333] font-semibold transition-all duration-300 group-hover:text-[#06a77d]"
              >
                {item}
              </a>

              {/* DOT UNDERLINE EFFECT */}
              <span className="absolute left-1/2 -bottom-3 w-1.5 h-1.5 bg-[#06a77d] rounded-full opacity-0 group-hover:opacity-100 -translate-x-1/2 transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        {/* DESKTOP BUTTON */}
        <a
          href="/cv.pdf"
          download="Raffy-CV.pdf"
          className="hidden lg:flex border border-[#1c2333] text-[#1c2333] font-semibold px-6 py-2 rounded-full items-center gap-3 hover:border-[#1c2333] hover:scale-[1.03] transition-all"
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
      {/* BACKDROP */}
      {/* BACKDROP */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* MOBILE MENU PANEL */}
      <div
        className={`fixed top-0 right-0 h-screen w-[80%] sm:w-[380px] z-50 shadow-[0_0_60px_rgba(0,0,0,0.8)]
    transform transition-transform duration-300 ease-out
    ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="absolute inset-0 bg-white" />

        <div className="relative p-6 flex flex-col h-full">
          {/* TOP BAR */}
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-wide text-[#06a77d]">
              RAF
            </div>

            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-lg transition hover:bg-[#06a77d]/10"
            >
              <X size={22} className="text-[#06a77d]" />
            </button>
          </div>

          {/* DIVIDER */}
          <div className="my-6 h-px bg-[#06a77d]/20" />

          {/* NAV TITLE */}
          <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-[#005377]">
            Navigation
          </p>

          {/* NAV LINKS */}
          <nav className="flex flex-col gap-3 mt-1">
            {["Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between px-4 py-4 rounded-xl
            text-[#1c2333] border border-transparent
            transition-all duration-200
            hover:text-[#06a77d] hover:bg-[#06a77d]/5 hover:border-[#06a77d]/25"
              >
                <span className="tracking-wide transition-transform group-hover:translate-x-1">
                  {item}
                </span>
              </a>
            ))}
          </nav>

          {/* PUSH TO BOTTOM */}
          <div className="mt-auto">
            <div className="my-6 h-px bg-[#06a77d]/20" />

            <p className="text-xs uppercase tracking-widest mb-3 text-[#005377] font-semibold">
              Get my CV
            </p>

            <a
              href="/cv.pdf"
              download="Raffy-CV.pdf"
              className="w-full flex items-center justify-center gap-3 px-6 py-3 rounded-xl
          font-semibold transition-all duration-200 hover:scale-[1.02]"
              style={{
                background: "#06a77d",
                color: "#fff",
              }}
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
