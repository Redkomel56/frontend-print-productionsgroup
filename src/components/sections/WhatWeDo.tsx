import React from 'react';
import styles from './WhatWeDo.module.scss';

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

const WhatWeDo: React.FC = () => {
  return (
    <section className={styles.whatWeDo}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <span className={styles.label}>Услуги</span>
            <h2 className={styles.title}>
              <span>Что мы делаем</span>
            </h2>
            
            <p className={styles.description}>
              Мы предлагаем весь спектр услуг цифровой, широкоформатной и УФ-печати, а также лазерную резку, гравировку, плоттерную резку, тиснение, термоперенос, сублимацию и постпечатную обработку.
            </p>
            
            <p className={styles.description}>
              В нашем арсенале — мощное современное оборудование, высокоточные плоттеры, лазеры и принтеры, работающие с любыми материалами: от бумаги и пластика до дерева, стекла и металла.
            </p>
            
            <p className={styles.description}>
              Благодаря собственной производственной базе мы гарантируем:
            </p>
            
            <ul className={styles.featuresList}>
              <li className={styles.feature}>
                <CheckIcon size={16} color="black" />
                <span>безупречную цветопередачу,</span>
              </li>
              <li className={styles.feature}>
                <CheckIcon size={16} color="black" />
                <span>точность реза до миллиметра,</span>
              </li>
              <li className={styles.feature}>
                <CheckIcon size={16} color="black" />
                <span>надёжность и долговечность каждой партии,</span>
              </li>
              <li className={styles.feature}>
                <CheckIcon size={16} color="black" />
                <span>стабильное качество на любых объёмах.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

