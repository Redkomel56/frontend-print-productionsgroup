import React from 'react';
import styles from './PrintingHero.module.scss';

const PrintingHero: React.FC<{ 
  src: string; 
  title: string; 
  description: string;
  noMargin?: boolean;
  rounded?: boolean;
}> = ({ src, title, description, noMargin = false, rounded = false }) => {
  return (
    <section className={`${styles.printingHero} ${noMargin ? styles.noMargin : ''} ${rounded ? styles.rounded : ''}`}>
      {src && (
        <img src={src} alt={title} className={styles.backgroundImage} />
      )}
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>
            {description}
          </p>
          <button className={styles.orderButton}>
            Заказать
          </button>
        </div>
      </div>
    </section>
  );
};

export default PrintingHero; 