import React, { useState, useEffect } from 'react';
import ProjectBlock from '../components/common/ProjectBlock';
import styles from './Projects.module.scss';

interface Project {
  id: number;
  title: string;
  short_description: string;
  description: string;
  image: string;
  images: string[];
  category: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Загружаем данные проектов из JSON
    const loadProjects = async () => {
      try {
        const response = await fetch('/data/projects.json');
        if (!response.ok) {
          console.error('Не удалось загрузить проекты:', response.status);
          return;
        }
        const data: Project[] = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Ошибка загрузки проектов:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (loading) {
    return (
      <div className={styles.projectsPage}>
        <div className={styles.container}>Загрузка...</div>
      </div>
    );
  }

  return (
    <div className={styles.projectsPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Наши проекты</h1>
          <p className={styles.description}>
            Профессиональная печать для вашего бизнеса и мероприятий. 
            Мы создаём визуальные решения, которые работают на ваш бренд и вызывают эмоции.
          </p>
        </div>
        
        <div className={styles.projectsList}>
          {projects.map((project) => (
            <ProjectBlock key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

