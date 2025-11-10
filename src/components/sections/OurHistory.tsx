import React from 'react';
import styles from './OurHistory.module.scss';

// Иконка стрелки вправо
const ChevronRightIcon: React.FC<{ size?: number; color?: string }> = ({ 
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
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const OurHistory: React.FC = () => {
  return (
    <section className={styles.ourHistory}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Левая колонка - заголовок и лейбл */}
          <div className={styles.leftColumn}>
            <span className={styles.qualityLabel}>О нас</span>
            <h2 className={styles.title}>
              <span>Print Productions Group</span>
              <span>печать, которой можно гордиться</span>
            </h2>
          </div>
          
          {/* Правая колонка - описание и кнопки */}
          <div className={styles.rightColumn}>
            <p className={styles.description}>
              Мы не просто создаём полиграфию — мы формируем визуальную среду вашего бизнеса. От первых макетов и логотипов до огромных баннеров, бренд-зон и выставочных стендов — всё, что вы видите, трогаете и чем гордитесь, начинается у нас.
            </p>
            <p className={styles.description}>
              С 2019 года мы прошли путь от небольшой мастерской до производственного комплекса полного цикла, где каждый процесс доведён до идеала. Сегодня Print Productions Group — это команда дизайнеров, инженеров, операторов и технарей, которые живут своим делом и вкладывают в каждый заказ максимум профессионализма и души.
            </p>
            
            <div className={styles.buttons}>
              <button className={styles.learnButton}>
              Связаться
              </button>
            </div>
          </div>
        </div>
        
        {/* Нижняя область с изображением */}
        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            {/* Изображение будет добавлено через CSS */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHistory; 