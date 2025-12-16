import styles from '@/styles/ProjectCard.module.css';
import { ExternalLink, Github } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
  technologies: string[];
  liveUrl: string;
  codeUrl?: string;
  category: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src={project.image} alt={project.title} className={styles.image} width={500} height={300}/>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        
        <div className={styles.techStack}>
          {project.technologies.map((tech, index) => (
            <span key={index} className={styles.tech}>
              {tech}
            </span>
          ))}
        </div>
        
        <div className={styles.links}>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <ExternalLink size={16} />
            <span>{project.category === 'figma' ? 'Open Figma' : 'Live Preview'}</span>
          </a>
          {project.codeUrl && (
            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <Github size={16} />
              <span>View Code</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;