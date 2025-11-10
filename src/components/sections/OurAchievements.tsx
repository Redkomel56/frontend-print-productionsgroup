import React from 'react';
import styles from './OurAchievements.module.scss';

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

const OurAchievements: React.FC = () => {
  return (
    <section className={styles.ourAchievements}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Левая колонка - текст и статистика */}
          <div className={styles.leftColumn}>
            <span className={styles.statisticsLabel}>Результаты</span>
            <h2 className={styles.title}>
              <span>Наш результат —</span>
              <span>это ваша репутация</span>
            </h2>
            
            <p className={styles.description}>
              Более 1000 довольных клиентов, более 10 000 реализованных проектов, сотни постоянных партнёров, которые возвращаются к нам снова и снова.
            </p>
            <p className={styles.description}>
              Потому что здесь ценят не только качество, но и отношение, скорость, гибкость и честность.
            </p>
            
            <div className={styles.statistics}>
              <div className={styles.statistic}>
                <div className={styles.number}>1000+</div>
                <p className={styles.statisticDescription}>
                  Довольных клиентов
                </p>
              </div>
              
              <div className={styles.statistic}>
                <div className={styles.number}>10000+</div>
                <p className={styles.statisticDescription}>
                  Реализованных проектов
                </p>
              </div>
              
              <div className={styles.statistic}>
                <div className={styles.number}>6</div>
                <p className={styles.statisticDescription}>
                  Лет на рынке с 2019 года
                </p>
              </div>
            </div>
            
            <div className={styles.buttons}>
              <button className={styles.contactButton}>
                Связаться
                <ChevronRightIcon size={16} color="black" />
              </button>
            </div>
          </div>
          
          {/* Правая колонка - изображение */}
          <div className={styles.rightColumn}>
            <div className={styles.imageContainer}>
              {/* Изображение будет добавлено через CSS */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAchievements; 