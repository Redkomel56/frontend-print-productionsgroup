import React from 'react';
import styles from './RequirementsContent.module.scss';

const RequirementsContent: React.FC = () => {
  return (
    <section className={styles.requirementsContent}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Левая колонка - текстовая информация */}
          <div className={styles.leftColumn}>
            <h2 className={styles.mainTitle}>
              Основные рекомендации по подготовке макетов для печати
            </h2>
            
            <p className={styles.description}>
              Подготовка макетов – ключевой этап в процессе печати. Правильные требования помогут избежать ошибок и ускорят выполнение заказа.
            </p>
            
            <div className={styles.recommendations}>
              <div className={styles.recommendation}>
                <h3 className={styles.recommendationTitle}>TIFF</h3>
                <div className={styles.recommendationContent}>
                  <span className={styles.recommendationLabel}>Формат файлов</span>
                  <p className={styles.recommendationText}>
                    Используйте форматы PDF, AI или PSD для наилучшего качества печати.
                  </p>
                </div>
              </div>
              
              <div className={styles.recommendation}>
                <h3 className={styles.recommendationTitle}>HIGH-res</h3>
                <div className={styles.recommendationContent}>
                  <span className={styles.recommendationLabel}>Разрешение изображений</span>
                  <p className={styles.recommendationText}>
                    Минимальное разрешение должно составлять 300 dpi для четкости изображения.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Правая колонка - изображение */}
          <div className={styles.rightColumn}>
            <div className={styles.imageContainer}>
              <img 
                src="/images/reqBase.png" 
                alt="Требования к макетам" 
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementsContent; 