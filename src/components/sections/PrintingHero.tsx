import React from 'react';
import styles from './PrintingHero.module.scss';

const PrintingHero: React.FC = () => {
  return (
    <section className={styles.printingHero}>
      <div className={styles.backgroundImage}>
        {/* Фоновое изображение принтера будет добавлено через CSS */}
      </div>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>Широкоформатная печать</h1>
          <p className={styles.description}>
            Мы предлагаем высококачественную широкоформатную печать для любых ваших нужд и проектов.
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