import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  href: string;
  title: string;
  description: string;
}

const ProjectCard = ({ href, title, description }: ProjectCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card group block w-full"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-400">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed font-medium">
            {description}
          </p>
        </div>
        <div className="arrow-icon text-primary">
          <ExternalLink className="w-5 h-5" />
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
