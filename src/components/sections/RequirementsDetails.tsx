import React from 'react';
import styles from './RequirementsDetails.module.scss';

// Иконка принтера
const PrinterIcon: React.FC<{ size?: number; color?: string }> = ({ 
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
    <polyline points="6,9 6,2 18,2 18,9" />
    <path d="M6,18H4a2,2,0,0,1-2-2V11a2,2,0,0,1,2-2H20a2,2,0,0,1,2,2v5a2,2,0,0,1-2,2H18" />
    <polyline points="6,14 6,18 18,18 18,14" />
  </svg>
);

// Иконка изображения
const ImageIcon: React.FC<{ size?: number; color?: string }> = ({ 
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
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21,15 16,10 5,21" />
  </svg>
);

// Иконка галочки
const CheckIcon: React.FC<{ size?: number; color?: string }> = ({ 
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
    <polyline points="20,6 9,17 4,12" />
  </svg>
);

const RequirementsDetails: React.FC = () => {
  return (
    <section className={styles.requirementsDetails}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Требования к макетам: что нужно знать для успешной печати
          </h2>
          <p className={styles.subtitle}>
            Каждая типография имеет свои требования, но существуют общие положения, самые значимые из которых приведены ниже.
          </p>
        </div>
        
        <div className={styles.columns}>
          {/* Колонка 1: Рекомендации по подготовке макетов */}
          <div className={styles.column}>
            <div className={styles.iconContainer}>
              <PrinterIcon size={32} color="black" />
            </div>
            <h3 className={styles.columnTitle}>
              Рекомендации по подготовке макетов для печати
            </h3>
            <ul className={styles.requirementsList}>
              <li>Разрешение: 300 dpi в натуральную величину</li>
              <li>Цветовая модель: только CMYK (для текста и изображений)</li>
              <li>Шрифты: переведены в кривые или приложены отдельно</li>
              <li>Изображения: встроены в файл или предоставлены отдельно</li>
              <li>Размер макета: с вылетом 2 мм с каждой стороны</li>
              <li>Важные элементы: не ближе 7 мм от края</li>
              <li>При большом количестве элементов: метки обрезки обязательны</li>
            </ul>
          </div>
          
          {/* Колонка 2: Требуемая конфигурация файлов */}
          <div className={styles.column}>
            <div className={styles.iconContainer}>
              <ImageIcon size={32} color="black" />
            </div>
            <h3 className={styles.columnTitle}>
              Требуемая конфигурация файлов
            </h3>
            <ul className={styles.requirementsList}>
              <li>Разрешение для интерьерной печати: не более 150 dpi</li>
              <li>Разрешение для широкоформатной печати на баннерах: не более 75 dpi</li>
              <li>Режим: CMYK</li>
              <li>Цветовой профиль: U.S. Web Coated (SWOP) v2</li>
              <li>Черный цвет: составной</li>
              <li>Отсутствие слоев и альфа-каналов</li>
              <li>LZW-сжатие: обязательно</li>
            </ul>
          </div>
          
          {/* Колонка 3: Технические требования к векторным макетам */}
          <div className={styles.column}>
            <div className={styles.iconContainer}>
              <CheckIcon size={32} color="black" />
            </div>
            <h3 className={styles.columnTitle}>
              Технические требования к векторным макетам
            </h3>
            <ul className={styles.requirementsList}>
              <li>Использование эффектов, связанных с прозрачностью и различными заливками: плохо выглядят при печати</li>
              <li>Наличие линий толщиной волос: видны на мониторе, но исчезают при печати, особенно при очень высоком разрешении</li>
              <li>Использование стилей и шрифтов с "некруглыми" размерами точек</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementsDetails; 