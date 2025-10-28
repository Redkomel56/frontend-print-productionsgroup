import React from 'react';
import styles from './HeroBanner.module.scss';

const HeroBanner: React.FC = () => {
  return (
    <section className={styles.heroBanner}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
          Добро пожаловать <br />в Принт Продакшнс Групп
          </h1>
          <p className={styles.subtitle}>
            Мы предлагаем широкий спектр услуг печати и рекламы, чтобы помочь вашему бизнесу выделиться. Наша команда профессионалов готова воплотить ваши идеи в жизнь с помощью современных технологий.
          </p>
          <div className={styles.actions}>
            <button className={styles.primaryButton}>Наши услуги</button>
          </div>
        </div>
      </div>
      <div className={styles.image}>
          {/* Здесь будет изображение */}
          <img src="images/mainBanner.png" alt="" />
        </div>
    </section>
  );
};

export default HeroBanner; 