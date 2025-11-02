import React from 'react';
import styles from './ServiceInfoBlock.module.scss';

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

const ServiceInfoBlock: React.FC<{ src: string; title: string; description: string; features: string[]; inverse: boolean }> = ({ src, title, description, features, inverse }) => {
  return (
    <section className={styles.serviceInfoBlock}>
      <div className={styles.container}>
        <div className={`${styles.content} ${inverse ? styles.inverse : ''}`}>
          {/* Левая колонка - белый фон с текстом */}
          <div className={styles.leftColumn}>
            <h2 className={styles.title}>
              {title}
            </h2>
            
            <p className={styles.description}>
              {description}
            </p>
            
            <ul className={styles.featuresList}>
              {features.map((feature, index) => (
                <li className={styles.feature} key={index}>
                  <CheckIcon size={16} color="black" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            {/* <button className={styles.orderButton}>
              Сделать заказ
            </button> */}
          </div>
          
          {/* Правая колонка - черный фон с изображением */}
          <div className={styles.rightColumn}>
            <div className={styles.imageContainer}>
              <img 
                src={src || ''} 
                alt={title} 
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceInfoBlock;

