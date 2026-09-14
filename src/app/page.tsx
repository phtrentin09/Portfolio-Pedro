import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { FeaturedProjects } from "@/sections/FeaturedProjects";
import { AllProjects } from "@/sections/AllProjects";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <FeaturedProjects />
        <AllProjects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
