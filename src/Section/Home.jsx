import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Project from "../components/Project";
import TimeLineItem from "../components/TimeLineItem";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="fixed top-0 w-full z-10">
        <Navbar />
      </div>
      <div className="min-h-min bg-[#e9ecef] px-3 py-20 bg-cover  w-full  md:px-10 lg:px-16">
        <Hero />
      </div>
      <div className="w-full bg-[#f4f6f8] px-6 md:px-10 lg:px-16">
        <div id="skills">
          <Skills />
        </div>
      </div>
      <div id="projects">
        <Project />
      </div>
      <div className="w-full px-6 md:px-10 lg:px-16">
        <div>
          <TimeLineItem />
        </div>
      </div>
      <div className=" bg-transparent bg-cover bg-center bg-[url(/hero-background.png)] w-full px-6 md:px-10 lg:px-16">
        <div id="contact">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
