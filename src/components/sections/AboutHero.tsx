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
          <h1 className={styles.title}>О компании</h1>
          <p className={styles.description}>
            Print Productions Group — это когда печать перестаёт быть просто услугой и превращается в искусство, технологию и эмоцию.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero; 