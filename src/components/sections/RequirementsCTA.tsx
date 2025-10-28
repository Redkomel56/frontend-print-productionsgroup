import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RequirementsCTA.module.scss';

const RequirementsCTA: React.FC = () => {
  return (
    <section className={styles.requirementsCTA}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Остались вопросы?</h2>
          <p className={styles.description}>
            Свяжитесь с нами для получения дополнительной информации.
          </p>
          <Link to="/contacts" className={styles.contactsButton}>
            Контакты
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RequirementsCTA; 