import NavBar from "./components/Navbar";
import { AuroraBackground } from "./components/aurora-background";
import Hero from "./components/hero";
import About from "./components/About";
import { Vortex } from "./components/vortex";
import Education from "./components/Education";
import Skills from "./components/skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <NavBar/>
      <AuroraBackground className="fade-out-bottom"> 
        <Hero/>
      </AuroraBackground>
      <div className="mx-auto rounded-md h-[100vh] overflow-hidden fade-out-both">
        <Vortex
          backgroundColor="black"
          particleCount={500}
          rangeY={800}
          baseHue={120}
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4"
          >
          <About/>
        </Vortex>
      </div>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  );
}
