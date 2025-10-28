import React from 'react';
import styles from './AboutHero.module.scss';

const AboutHero: React.FC = () => {
  return (
    <section className={styles.aboutHero}>
      <div className={styles.backgroundImage}>
        {/* Фоновая картинка будет добавлена через CSS */}
      </div>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>О нашей компании</h1>
          <p className={styles.description}>
            Мы предоставляем услуги широкоформатной печати и полиграфии для вашего бизнеса и мероприятий.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero; 