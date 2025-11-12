import React, { useState, useRef, useEffect } from 'react';
import styles from './ImageCarousel.module.scss';

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  // Создаем бесконечный массив изображений
  const infiniteImages = [...images, ...images, ...images];
  const baseIndex = images.length; // базовый сдвиг к средней группе для стабильного бесконечного списка

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

  // Автоматическая прокрутка отключена для страницы проектов, чтобы избежать лагов при одновременной смене слайдов во всех каруселях
  // useEffect(() => {
  //   if (images.length === 0) return;
  //   
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => {
  //       const newIndex = prevIndex + 1;
  //       if (newIndex >= images.length) {
  //         return 0;
  //       }
  //       return newIndex;
  //     });
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [images.length]);

  const handlePrev = () => {
    if (images.length === 0) return;
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    if (images.length === 0) return;
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
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

  if (!images || images.length === 0) {
    return null;
  }

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
        {infiniteImages.map((image, index) => (
          <div
            key={`${image}-${index}`}
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
                  backgroundImage: `url(${image})`,
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
          {images.map((_, index) => (
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

export default ImageCarousel;

