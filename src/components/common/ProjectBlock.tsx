import React from 'react';
import ImageCarousel from './ImageCarousel';
import styles from './ProjectBlock.module.scss';

interface Project {
  id: number;
  title: string;
  short_description: string;
  description: string;
  image: string;
  images: string[];
  category: string;
}

interface ProjectBlockProps {
  project: Project;
}

const ProjectBlock: React.FC<ProjectBlockProps> = ({ project }) => {
  return (
    <div className={styles.projectBlock}>
      <div className={styles.content}>
        <h2 className={styles.title}>{project.title}</h2>
        <p className={styles.description}>{project.description}</p>
      </div>
      <div className={styles.carouselWrapper}>
        <ImageCarousel images={project.images} />
      </div>
    </div>
  );
};

export default ProjectBlock;

