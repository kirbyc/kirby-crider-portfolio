
import { useEffect } from "react";
import ProjectSection from "@/components/ProjectSection";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const Index = () => {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    document.querySelectorAll(".section-heading").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-secondary/30">
      <section className="container mx-auto pt-24 pb-16">
        <h1 className="text-6xl md:text-7xl font-mono font-bold mb-8 animate-fade-up">
          Portfolio
        </h1>
        <nav className="flex gap-6 animate-fade-up" style={{ animationDelay: "200ms" }}>
          <a href="#multimedia" className="nav-link">
            Multimedia Projects
          </a>
          <a href="#elearning" className="nav-link">
            E-Learning
          </a>
          <a href="#facilitation" className="nav-link">
            Facilitation Services
          </a>
        </nav>
      </section>

      <ProjectSection
        id="multimedia"
        title="Multimedia"
        projects={projects.multimedia}
        className="bg-white"
      />
      <ProjectSection
        id="elearning"
        title="E-Learning"
        projects={projects.elearning}
        className="bg-secondary/30"
      />
      <ProjectSection
        id="facilitation"
        title="Facilitation Services"
        projects={projects.facilitation}
        className="bg-white"
      />

      <Footer />
    </div>
  );
};

export default Index;
