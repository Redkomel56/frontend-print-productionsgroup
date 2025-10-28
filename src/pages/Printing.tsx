import React from 'react';
import PrintingHero from '../components/sections/PrintingHero';
import QuickRequest from '../components/sections/QuickRequest';
import ProfessionalPrinting from '../components/sections/ProfessionalPrinting';
import PricingTables from '../components/sections/PricingTables';
import styles from './Printing.module.scss';

const Printing: React.FC = () => {
  return (
    <div>
      <PrintingHero />
      <QuickRequest />
      <ProfessionalPrinting />
      <PricingTables />
      <div className={styles.printing}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.servicesList}>
              <div className={styles.serviceItem}>
                <h3>Широкоформатная печать</h3>
                <p>Печать на больших форматах для наружной рекламы и интерьера</p>
              </div>
              
              <div className={styles.serviceItem}>
                <h3>Цифровая печать</h3>
                <p>Быстрая печать небольших тиражей с высоким качеством</p>
              </div>
              
              <div className={styles.serviceItem}>
                <h3>Офсетная печать</h3>
                <p>Экономичная печать больших тиражей</p>
              </div>
              
              <div className={styles.serviceItem}>
                <h3>УФ-печать</h3>
                <p>Печать на различных материалах с ультрафиолетовым отверждением</p>
              </div>
            </div>
            
            <div className={styles.contactInfo}>
              <h3>Нужна консультация?</h3>
              <p>Свяжитесь с нами для получения подробной информации о наших услугах печати</p>
              <a href="/contacts" className={styles.contactButton}>
                Связаться с нами
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Printing; 