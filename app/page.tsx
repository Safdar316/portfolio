import Hero from "./home/page";
import About from "./about/page";
import Skills from "./skills/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
// import { div } from "framer-motion/client";
export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
    
  );
}
