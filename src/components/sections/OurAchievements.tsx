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
            <span className={styles.statisticsLabel}>Статистика</span>
            <h2 className={styles.title}>
              <span>Наши достижения и</span>
              <span>ключевые показатели компании</span>
            </h2>
            
            <p className={styles.description}>
              Мы гордимся тем, что выполнили более 10,000 заказов за 5 лет работы. 
              Наша команда обслуживает более 1,000 довольных клиентов.
            </p>
            
            <div className={styles.statistics}>
              <div className={styles.statistic}>
                <div className={styles.number}>90%</div>
                <p className={styles.statisticDescription}>
                  Клиенты довольны качеством нашей продукции и услуг.
                </p>
              </div>
              
              <div className={styles.statistic}>
                <div className={styles.number}>5</div>
                <p className={styles.statisticDescription}>
                  Лет на рынке печатных услуг и рекламы.
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