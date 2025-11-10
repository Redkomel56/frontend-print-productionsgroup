import React from 'react';
import styles from './OurPhilosophy.module.scss';

const OurPhilosophy: React.FC = () => {
  return (
    <section className={styles.ourPhilosophy}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <span className={styles.label}>Философия</span>
            <h2 className={styles.title}>
              <span>Наша философия</span>
            </h2>
            
            <p className={styles.description}>
              Мы не делаем «просто печать».
            </p>
            
            <p className={styles.description}>
              Мы создаём инструменты визуального воздействия, которые работают на бренд, вызывают эмоции и запоминаются.
            </p>
            
            <p className={styles.description}>
              Каждый проект начинается с идеи — и заканчивается восторгом клиента.
            </p>
            
            <p className={styles.description}>
              Мы не боимся сложных задач — наоборот, они нас заводят.
            </p>
            
            <p className={styles.description}>
              Хотите 10 000 каталогов за три дня? Сделаем.
            </p>
            
            <p className={styles.description}>
              Нужен сложный макет для выставки — выспимся потом.
            </p>
            
            <p className={styles.description}>
              Когда другие ищут отговорки — мы ищем решения.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPhilosophy;

