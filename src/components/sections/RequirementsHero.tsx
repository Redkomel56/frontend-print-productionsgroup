import React from 'react';
import styles from './RequirementsHero.module.scss';

const RequirementsHero: React.FC = () => {
  return (
    <section className={styles.requirementsHero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Требования к макетам</h1>
          <p className={styles.subtitle}>
            Узнайте основные требования к макетам для качественной печати и успешного результата.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RequirementsHero; 