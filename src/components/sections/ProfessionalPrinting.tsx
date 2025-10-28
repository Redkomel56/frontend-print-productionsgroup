import React from 'react';
import styles from './ProfessionalPrinting.module.scss';

// Иконка галочки для списка
const CheckIcon: React.FC<{ size?: number; color?: string }> = ({ 
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
    <polyline points="20,6 9,17 4,12" />
  </svg>
);

const ProfessionalPrinting: React.FC = () => {
  return (
    <section className={styles.professionalPrinting}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Левая колонка - белый фон с текстом */}
          <div className={styles.leftColumn}>
            <h2 className={styles.title}>
              Профессиональная широкоформатная печать для вашего бизнеса
            </h2>
            
            <p className={styles.description}>
              Широкоформатная печать – это идеальное решение для создания ярких и впечатляющих 
              рекламных материалов. Мы используем современное оборудование и качественные материалы 
              для достижения наилучших результатов.
            </p>
            
            <ul className={styles.featuresList}>
              <li className={styles.feature}>
                <CheckIcon size={16} color="black" />
                <span>Современные технологии для высококачественной печати.</span>
              </li>
              <li className={styles.feature}>
                <CheckIcon size={16} color="black" />
                <span>Широкий выбор материалов для любых нужд.</span>
              </li>
              <li className={styles.feature}>
                <CheckIcon size={16} color="black" />
                <span>Быстрое выполнение заказов любой сложности.</span>
              </li>
            </ul>
            
            <button className={styles.orderButton}>
              Сделать заказ
            </button>
          </div>
          
          {/* Правая колонка - черный фон с изображением */}
          <div className={styles.rightColumn}>
            <div className={styles.imageContainer}>
              <img 
                src="/images/example.png" 
                alt="Примеры широкоформатной печати" 
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalPrinting; 