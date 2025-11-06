import HeroSection from "@/components/HeroSection";
import Skills from "./skills/page";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
