import React, { useState, useEffect, useRef } from 'react';
import styles from './ProjectsSection.module.scss';

const ProjectsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  
  const projects = [
    {
      id: 1,
      title: 'Заголовок события 1',
      description: 'Уникальные решения для вашего бизнеса с нашими печатными услугами.',
      image: '/images/projects/project1.png',
      category: 'Печать'
    },
    {
      id: 2,
      title: 'Заголовок события 2',
      description: 'Качественная печать для ваших рекламных материалов и мероприятий.',
      image: '/images/projects/project1.png',
      category: 'Реклама'
    },
    {
      id: 3,
      title: 'Заголовок события 3',
      description: 'Создайте уникальную атмосферу с помощью наших интерьерных решений.',
      image: '/images/projects/project1.png',
      category: 'Резка'
    },
    {
      id: 4,
      title: 'Заголовок события 4',
      description: 'Профессиональная печать для вашего бизнеса и мероприятий.',
      image: '/images/projects/project1.png',
      category: 'Печать'
    },
    {
      id: 5,
      title: 'Заголовок события 5',
      description: 'Инновационные решения для современного бизнеса.',
      image: '/images/projects/project1.png',
      category: 'Реклама'
    }
  ];

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
    <section className={styles.projectsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleBlock}>
            <h2 className={styles.title}>Наши проекты</h2>
            <p className={styles.subtitle}>
              Профессиональная печать для вашего бизнеса и мероприятий.
            </p>
          </div>
        </div>
        
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
                  <span className={styles.category}>{project.category}</span>
                </div>
                <div className={styles.content}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>
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
      </div>
    </section>
  );
};

export default ProjectsSection; 