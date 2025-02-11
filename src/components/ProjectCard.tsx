
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  points: string[];
  index: number;
}

const ProjectCard = ({ title, image, description, points, index }: ProjectCardProps) => {
  return (
    <div
      className="project-card"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md mb-4"
        loading="lazy"
      />
      <h3 className="text-xl font-mono font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <ul className="space-y-2">
        {points.map((point) => (
          <li key={point} className="flex items-center gap-2 text-sm">
            <ArrowRight className="w-4 h-4" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
