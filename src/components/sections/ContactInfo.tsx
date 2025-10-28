import React from 'react';
import styles from './ContactInfo.module.scss';

// Иконка конверта для email
const EmailIcon: React.FC<{ size?: number; color?: string }> = ({ 
  size = 24, 
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
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

// Иконка телефона
const PhoneIcon: React.FC<{ size?: number; color?: string }> = ({ 
  size = 24, 
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
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

// Иконка локации
const LocationIcon: React.FC<{ size?: number; color?: string }> = ({ 
  size = 24, 
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
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ContactInfo: React.FC = () => {
  return (
    <section className={styles.contactInfo}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Колонка Email */}
          <div className={styles.column}>
            <div className={styles.icon}>
              <EmailIcon size={38} color="black" />
            </div>
            <h3 className={styles.title}>Электронная почта</h3>
            <p className={styles.description}>
              Свяжитесь с нами по любым вопросам через указанные контакты.
            </p>
            <a href="mailto:info@printproductions.ru" className={styles.contactDetail}>
              info@printproductions.ru
            </a>
          </div>
          
          {/* Колонка Телефон */}
          <div className={styles.column}>
            <div className={styles.icon}>
              <PhoneIcon size={38} color="black" />
            </div>
            <h3 className={styles.title}>Телефон</h3>
            <p className={styles.description}>
              Мы всегда готовы ответить на ваши звонки.
            </p>
            <a href="tel:+79952601196" className={styles.contactDetail}>
              +7 (995) 260-11-96
            </a>
          </div>
          
          {/* Колонка Офис */}
          <div className={styles.column}>
            <div className={styles.icon}>
              <LocationIcon size={38} color="black" />
            </div>
            <h3 className={styles.title}>Офис</h3>
            <p className={styles.description}>
              Приходите к нам для обсуждения ваших проектов.
            </p>
            <a href="#" className={styles.contactDetail}>
              г. Москва, ул. Примерная, д. 123
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo; 