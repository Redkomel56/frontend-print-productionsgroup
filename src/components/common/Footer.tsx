import React from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon, TelegramIcon, WhatsappIcon } from '../Icons/Icons';
import { navigationServices } from '../../data/navigationServices';
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
                <li><Link to="/projects">Проекты</Link></li>
                <li><Link to="/contacts">Контакты</Link></li>
                <li><Link to="/about">О компании</Link></li>
                <li><Link to="/requirements">Требования к макетам</Link></li>
              </ul>
            </div>
            
            <div className={styles.column}>
              <h3>Услуги</h3>
              <ul>
                {navigationServices.slice(0, 3).map((service) => (
                  <li key={service.id}>
                    <Link to={service.link}>{service.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className={styles.column}>
              <h3 className={styles.empty}>empty</h3>
              <ul>
                {navigationServices.slice(3, 6).map((service) => (
                  <li key={service.id}>
                    <Link to={service.link}>{service.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className={styles.column}>
              <h3 className={styles.empty}>empty</h3>
              <ul>
                {navigationServices.slice(6, 9).map((service) => (
                  <li key={service.id}>
                    <Link to={service.link}>{service.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className={styles.column}>
              <h3 className={styles.empty}>empty</h3>
              <ul>
                {navigationServices.slice(9, 12).map((service) => (
                  <li key={service.id}>
                    <Link to={service.link}>{service.title}</Link>
                  </li>
                ))}
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
          <p>Адрес: 141090, РОССИЯ, МОСКОВСКАЯ ОБЛ, Г КОРОЛЕВ, МКР ЮБИЛЕЙНЫЙ, УЛ МАЯКОВСКОГО, Д 4</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 