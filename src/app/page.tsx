import Hero from "@/app/components/hero";
import About from "@/app/components/about";
import Services from "@/app/components/services";
import SkillsSection from "@/app/components/skills";
import Projects from "@/app/components/projects";
import ExperienceTimeline from "@/app/components/ExperienceTimeline";
import ResumeSection from "@/app/components/resume";




export default function HomePage() {
  return (
    <main>
      <Hero />
      <SkillsSection />
      <About />
      <Projects />
      <ExperienceTimeline />
      <Services />
      <ResumeSection />

    </main>
  );
}