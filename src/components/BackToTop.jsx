import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const start = window.scrollY;
    const duration = 400;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const time = currentTime - startTime;
      const progress = Math.min(time / duration, 1);

      // smooth ease-out (simple, no heavy math)
      const easeOut = 1 - Math.pow(1 - progress, 3);

      window.scrollTo(0, start * (1 - easeOut));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <>
      {show && (
        <button
          onClick={scrollToTop}
          className={`
fixed bottom-6 right-6 z-50
w-12 h-12 rounded-full

bg-black/70 text-white
backdrop-blur-xl

border border-white/20

flex items-center justify-center

shadow-[0_10px_30px_rgba(0,0,0,0.3)]

hover:scale-110 hover:bg-blue-600
transition-all duration-300
`}
        >
          <ArrowUp size={18} />
        </button>
      )}
    </>
  );
}

export default BackToTop;
