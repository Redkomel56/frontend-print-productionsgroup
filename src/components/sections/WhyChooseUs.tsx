import React from 'react';
import styles from './WhyChooseUs.module.scss';

const CheckIcon: React.FC<{ size?: number; color?: string }> = ({ 
  size = 16, 
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
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const WhyChooseUs: React.FC = () => {
  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <span className={styles.label}>Преимущества</span>
            <h2 className={styles.title}>
              <span>Почему выбирают нас</span>
            </h2>
            
            <ul className={styles.featuresList}>
              <li className={styles.feature}>
                <CheckIcon size={16} color="black" />
                <div className={styles.featureContent}>
                  <strong>6 лет на рынке.</strong> С 2019 года мы не просто работаем — мы развиваемся, инвестируем в оборудование, людей и технологии.
                </div>
              </li>
              <li className={styles.feature}>
                <CheckIcon size={16} color="black" />
                <div className={styles.featureContent}>
                  <strong>Собственное производство.</strong> Всё под контролем — от дизайна до упаковки.
                </div>
              </li>
              <li className={styles.feature}>
                <CheckIcon size={16} color="black" />
                <div className={styles.featureContent}>
                  <strong>Скорость и ответственность.</strong> Мы понимаем, что для бизнеса время — деньги.
                </div>
              </li>
              <li className={styles.feature}>
                <CheckIcon size={16} color="black" />
                <div className={styles.featureContent}>
                  <strong>Качество без компромиссов.</strong> Мы не экономим на материалах, потому что знаем: дешевле — значит хуже.
                </div>
              </li>
              <li className={styles.feature}>
                <CheckIcon size={16} color="black" />
                <div className={styles.featureContent}>
                  <strong>Поддержка и сервис.</strong> Мы всегда на связи, подскажем, предложим, адаптируем.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

