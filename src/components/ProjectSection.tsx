
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  image: string;
  description: string;
  points: string[];
}

interface ProjectSectionProps {
  id?: string; // Added id as an optional prop
  title: string;
  projects: Project[];
  className?: string;
}

const ProjectSection = ({ id, title, projects, className = "" }: ProjectSectionProps) => {
  return (
    <section id={id} className={`py-24 ${className}`}>
      <div className="container mx-auto">
        <h2 className="section-heading">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
