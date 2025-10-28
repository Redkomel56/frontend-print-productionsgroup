import React from 'react';
import styles from './PricingTables.module.scss';

// Иконка галочки
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
    <polyline points="20,6 9,17 4,12" />
  </svg>
);

const PricingTables: React.FC = () => {
  return (
    <section className={styles.pricingTables}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Прайс-лист</h2>
          <p className={styles.subtitle}>
            Выберите удобный для вас тарифный план.
          </p>
        </div>
        
        <div className={styles.tablesContainer}>
          {/* Первая таблица: Категория услуг */}
          <div className={styles.tableSection}>
            <h3 className={styles.tableTitle}>Категория услуг</h3>
            <div className={styles.table}>
              <div className={styles.tableHeader}>
                <div className={styles.headerCell}>Услуга</div>
                <div className={styles.headerCell}>10</div>
                <div className={styles.headerCell}>25</div>
                <div className={styles.headerCell}>Неограниченно</div>
              </div>
              <div className={styles.tableBody}>
                <div className={styles.tableRow}>
                  <div className={styles.cell}>Широкоформатная печать</div>
                  <div className={styles.cell}>10</div>
                  <div className={styles.cell}></div>
                  <div className={styles.cell}></div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.cell}>Интерьерная печать</div>
                  <div className={styles.cell}></div>
                  <div className={styles.cell}>
                    <CheckIcon size={16} color="black" />
                  </div>
                  <div className={styles.cell}>
                    <CheckIcon size={16} color="black" />
                  </div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.cell}>УФ-печать</div>
                  <div className={styles.cell}></div>
                  <div className={styles.cell}>
                    <CheckIcon size={16} color="black" />
                  </div>
                  <div className={styles.cell}>
                    <CheckIcon size={16} color="black" />
                  </div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.cell}>Цифровая печать</div>
                  <div className={styles.cell}></div>
                  <div className={styles.cell}></div>
                  <div className={styles.cell}>
                    <CheckIcon size={16} color="black" />
                  </div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.cell}>Наружная реклама</div>
                  <div className={styles.cell}></div>
                  <div className={styles.cell}></div>
                  <div className={styles.cell}>
                    <CheckIcon size={16} color="black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Вторая таблица: Лазерная гравировка */}
          <div className={styles.tableSection}>
            <h3 className={styles.tableTitle}>Категория услуг</h3>
            <div className={styles.table}>
              <div className={styles.tableHeader}>
                <div className={styles.headerCell}>Наименование</div>
                <div className={styles.headerCell}>Цена за 10 см</div>
                <div className={styles.headerCell}>Цена за 30 см</div>
                <div className={styles.headerCell}>Цена за м²</div>
              </div>
              <div className={styles.tableBody}>
                {[...Array(6)].map((_, index) => (
                  <div key={index} className={styles.tableRow}>
                    <div className={styles.cell}>Лазерная гравировка</div>
                    <div className={styles.cell}>10 p</div>
                    <div className={styles.cell}>10 p</div>
                    <div className={styles.cell}>100 p</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Третья таблица: Feature Category */}
          <div className={styles.tableSection}>
            <h3 className={styles.tableTitle}>Feature Category</h3>
            <div className={styles.table}>
              <div className={styles.tableHeader}>
                <div className={styles.headerCell}>Услуга</div>
                <div className={styles.headerCell}>10</div>
                <div className={styles.headerCell}>25</div>
                <div className={styles.headerCell}>Неограниченно</div>
              </div>
              <div className={styles.tableBody}>
                <div className={styles.tableRow}>
                  <div className={styles.cell}>Баннерная печать</div>
                  <div className={styles.cell}>10</div>
                  <div className={styles.cell}></div>
                  <div className={styles.cell}></div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.cell}>Печать на холсте</div>
                  <div className={styles.cell}></div>
                  <div className={styles.cell}>
                    <CheckIcon size={16} color="black" />
                  </div>
                  <div className={styles.cell}>
                    <CheckIcon size={16} color="black" />
                  </div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.cell}>Печать на пленке</div>
                  <div className={styles.cell}></div>
                  <div className={styles.cell}>
                    <CheckIcon size={16} color="black" />
                  </div>
                  <div className={styles.cell}>
                    <CheckIcon size={16} color="black" />
                  </div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.cell}>Печать на бумаге</div>
                  <div className={styles.cell}></div>
                  <div className={styles.cell}></div>
                  <div className={styles.cell}>
                    <CheckIcon size={16} color="black" />
                  </div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.cell}>Печать на картоне</div>
                  <div className={styles.cell}></div>
                  <div className={styles.cell}></div>
                  <div className={styles.cell}>
                    <CheckIcon size={16} color="black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTables; 