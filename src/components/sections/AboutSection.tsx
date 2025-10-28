import React from 'react';
import styles from './AboutSection.module.scss';

const AboutSection: React.FC = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.companyInfo}>
            <h2 className={styles.companyName}>
              <span>Принт Продакшнс</span>
              <span>Групп</span>
            </h2>
            <div className={styles.benefits}>
              <span className={styles.benefit}>Быстро</span>
              <span className={styles.benefit}>Качественно</span>
              <span className={styles.benefit}>Надежно</span>
            </div>
          </div>
          <p className={styles.description}>
            Наша типография в Москве предлагает не просто печать, а решения, 
            которые помогают вашему бизнесу экономить время и деньги. 
            Мы быстро реализуем проекты, соблюдая сроки и сохраняя высокое качество.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutSection; 