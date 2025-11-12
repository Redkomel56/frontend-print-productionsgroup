import React, { useState, useEffect, useRef } from 'react';
import styles from './ProjectsCarousel.module.scss';

interface Project {
  id: number;
  title: string;
  short_description: string;
  description: string;
  image: string;
  images: string[];
  category: string;
}

interface ProjectsCarouselProps {
  projects: Project[];
}

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  
  // Создаем бесконечный массив проектов
  const infiniteProjects = [...projects, ...projects, ...projects];
  const baseIndex = projects.length; // базовый сдвиг к средней группе для стабильного бесконечного списка

  // Определяем количество карточек на экран по ширине окна
  useEffect(() => {
    const computeItemsPerView = () => {
      const width = window.innerWidth;
      if (width <= 576) return 1;
      if (width <= 992) return 2;
      if (width <= 1200) return 3;
      return 4;
    };

    const handleResize = () => {
      const next = computeItemsPerView();
      setItemsPerView(next);
    };

    // Инициализация
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Автоматическая прокрутка
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        if (newIndex >= projects.length) {
          return 0;
        }
        return newIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Вычисляем точный сдвиг в пикселях, чтобы исключить накопление ошибок из-за gap/процентов
  const translateXPx = (() => {
    const targetIndex = baseIndex + currentIndex;
    const targetEl = cardRefs.current[targetIndex];
    if (targetEl) {
      return targetEl.offsetLeft;
    }
    // fallback: на первом рендере пока рефы не готовы
    return 0;
  })();

  return (
    <div className={styles.carouselContainer}>
      <div 
        ref={carouselRef}
        className={styles.carousel}
        style={{
          // Используем пиксельный сдвиг для точного выравнивания карточек
          transform: typeof translateXPx === 'number' ? `translateX(-${translateXPx}px)` : `translateX(-${translateXPx}%)`
        }}
      >
        {infiniteProjects.map((project, index) => (
          <div
            key={`${project.id}-${index}`}
            className={styles.card}
            ref={(el) => {
              if (el) {
                cardRefs.current[index] = el;
              }
            }}
          >
            <div className={styles.imageContainer}>
              <div 
                className={styles.image}
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.navigation}>
        <div className={styles.pagination}>
          {projects.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
        <div className={styles.arrows}>
          <button className={styles.arrow} onClick={handlePrev}>
            ←
          </button>
          <button className={styles.arrow} onClick={handleNext}>
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCarousel;

