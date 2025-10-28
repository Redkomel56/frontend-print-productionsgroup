import React from 'react';
import styles from './ContactsHero.module.scss';

const ContactsHero: React.FC = () => {
  return (
    <section className={styles.contactsHero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Наши Контакты</h1>
          <p className={styles.subtitle}>
            Свяжитесь с нами для получения дополнительной информации и консультаций по услугам.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactsHero; 