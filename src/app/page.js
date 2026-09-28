import HeroSection from "@/components/HeroSection";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
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
