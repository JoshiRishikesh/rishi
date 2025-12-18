import Hero from "@/app/components/hero";
import About from "@/app/components/about";
import Services from "@/app/components/services";
import SkillsSection from "@/app/components/skills";
import Projects from "@/app/components/projects";



export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <SkillsSection />
      <Projects />
    </main>
  );
}