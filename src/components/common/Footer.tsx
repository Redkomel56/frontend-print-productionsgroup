import React from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon, TelegramIcon, WhatsappIcon } from '../Icons/Icons';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.companyInfo}>
            <h2 className={styles.companyName}>Принт Продакшнс Групп</h2>
          </div>
          
          <div className={styles.columns}>
            <div className={styles.column}>
              <h3>Страницы</h3>
              <ul>
                <li><Link to="/services">Услуги</Link></li>
                <li><Link to="/prices">Цены</Link></li>
                <li><Link to="/contacts">Контакты</Link></li>
                <li><Link to="/about">О компании</Link></li>
                <li><Link to="/requirements">Требования к макетам</Link></li>
              </ul>
            </div>
            
            <div className={styles.column}>
              <h3>Услуги</h3>
              <ul>
                <li><Link to="/services">Интерьерная печать</Link></li>
                <li><Link to="/services">Интерьерная печать</Link></li>
                <li><Link to="/services">УФ-печать</Link></li>
                <li><Link to="/services">Лазерная гравировка</Link></li>
              </ul>
            </div>
            
            <div className={styles.column}>
              <h3 className={styles.empty}>empty</h3>
              <ul>
                <li><Link to="/services">Цифровая печать</Link></li>
                <li><Link to="/services">Полиграфия</Link></li>
                <li><Link to="/services">Офсетная печать</Link></li>
                <li><Link to="/services">Плоттерная резка</Link></li>
              </ul>
            </div>
            
            <div className={styles.column}>
              <h3 className={styles.empty}>empty</h3>
              <ul>
                <li><Link to="/services">Цифровая печать</Link></li>
                <li><Link to="/services">Полиграфия</Link></li>
                <li><Link to="/services">Офсетная печать</Link></li>
                <li><Link to="/services">Плоттерная резка</Link></li>
              </ul>
            </div>
            
            <div className={styles.column}>
              <h3 className={styles.empty}>empty</h3>
              <ul>
                <li><Link to="/services">Цифровая печать</Link></li>
                <li><Link to="/services">Полиграфия</Link></li>
                <li><Link to="/services">Офсетная печать</Link></li>
                <li><Link to="/services">Плоттерная резка</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.divider}></div>
        
        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            <span>© 2025 Принт Продакшнс Групп. Все права защищены.</span>
            <div className={styles.legalLinks}>
              <Link to="/privacy">Политика Конфиденциальности</Link>
            </div>
          </div>
          <div className={styles.social}>
            <a href="https://wa.me/79952601196" target="_blank" rel="noopener noreferrer">
              <WhatsappIcon color="black" />
            </a>
            <a href="https://t.me/+79952601196" target="_blank" rel="noopener noreferrer">
              <TelegramIcon color="black" />
            </a>
          </div>
        </div>
        
        <div className={styles.legalInfo}>
          <p>ИНДИВИДУАЛЬНЫЙ ПРЕДПРИНИМАТЕЛЬ ШОРНИКОВ ДМИТРИЙ ВЛАДИМИРОВИЧ</p>
          <p>ИНН: 211902029386</p>
          <p>ОГРН: 319508100273711</p>
          <p>Адрес: 141090, РОССИЯ, МОСКОВСКАЯ ОБЛ, Г КОРОЛЕВ, МКР ЮБИЛЕЙНЫЙ, УЛ МАЯКОВСКОГО, Д 4, КВ 242</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 