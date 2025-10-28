import React from 'react';
import styles from './OurHistory.module.scss';

// Иконка стрелки вправо
const ChevronRightIcon: React.FC<{ size?: number; color?: string }> = ({ 
  size = 16, 
  color = 'currentColor' 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const OurHistory: React.FC = () => {
  return (
    <section className={styles.ourHistory}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Левая колонка - заголовок и лейбл */}
          <div className={styles.leftColumn}>
            <span className={styles.qualityLabel}>Качество</span>
            <h2 className={styles.title}>
              <span>Наша история:</span>
              <span>от мечты к реальности</span>
            </h2>
          </div>
          
          {/* Правая колонка - описание и кнопки */}
          <div className={styles.rightColumn}>
            <p className={styles.description}>
              Принт Продакшнс Групп была основана с целью предоставления высококачественных услуг печати. 
              Наша миссия – делать печать доступной и удобной для всех клиентов. 
              Мы гордимся тем, что используем современные технологии и инновации для достижения выдающихся результатов.
            </p>
            
            <div className={styles.buttons}>
              <button className={styles.learnButton}>
              Связаться
              </button>
            </div>
          </div>
        </div>
        
        {/* Нижняя область с изображением */}
        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            {/* Изображение будет добавлено через CSS */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHistory; 