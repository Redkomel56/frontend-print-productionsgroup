import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';
import { LogoIcon, TelegramIcon, WhatsappIcon, BurgerIcon, CloseIcon } from '../Icons/Icons';

const Navigation: React.FC = () => {
  const runningLineRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Блокировка скролла при открытом меню
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const runningLine = runningLineRef.current;
    if (!runningLine) return;

    const container = runningLine.querySelector(`.${styles.runningLineContent}`) as HTMLElement;
    if (!container) return;

    let animationId: number;
    let position = 0;
    const speed = 1; // пикселей в кадр

    const animate = () => {
      position -= speed;
      
      // Если первый элемент полностью ушел за левый край
      const firstSpan = container.querySelector('span') as HTMLElement;
      if (firstSpan && position <= -firstSpan.offsetWidth) {
        // Удаляем первый элемент
        container.removeChild(firstSpan);
        position += firstSpan.offsetWidth;
      }

      // Если нужно добавить новый элемент в конец
      const lastSpan = container.querySelector('span:last-child') as HTMLElement;
      if (lastSpan) {
        const containerRight = container.offsetLeft + container.offsetWidth;
        const lastSpanRight = lastSpan.offsetLeft + lastSpan.offsetWidth;
        
        if (lastSpanRight < containerRight + 100) { // Добавляем с запасом
          const newSpan = document.createElement('span');
          newSpan.textContent = 'принт продакшнс групп';
          container.appendChild(newSpan);
        }
      }

      container.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <nav className={styles.navigation}>
        <div className={styles.contactInfo}>
            <div className={styles.workTimeBlock}>
                <div className={styles.phoneBlock}>
                    <p>тел. </p>
                    <a href="tel:+79952601196">+7 (995) 260-11-96</a>
                </div>
                <div className={styles.workTime}>
                    <p>с 9-00 до 18-00 Пн-Пт</p>
                </div>
            </div>
            <div className={styles.socialBlock}>
                <p>Круглосуточно: </p>
                <a href="https://wa.me/79952601196" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <WhatsappIcon color='black'/>
                </a>
                <a href="https://t.me/+79952601196" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <TelegramIcon color='black'/>
                </a>
            </div>
        </div>
        <div className={styles.navBlock}>
            {/* Лого слева — всегда видно */}
            <div className={styles.logoWrapper}>
                <Link to="/" className={styles.navLink}>
                    <LogoIcon size={149}/>
                </Link>
            </div>
            {/* Десктопное меню по центру */}
            <div className={styles.navList}>
                <div className={styles.navItem}>
                  <Link to="/prices" className={styles.navLink}>Цены</Link>
                </div>
                <div className={styles.navItem}>
                  <Link to="/services" className={styles.navLink}>Услуги</Link>
                </div>
                <div className={styles.navItem}>
                  <Link to="/projects" className={styles.navLink}>Наши проекты</Link>
                </div>
                <div className={styles.navItem}>
                  <Link to="/requirements" className={styles.navLink}>Требования к макетам</Link>
                </div>
                <div className={styles.navItem}>
                  <Link to="/contacts" className={styles.navLink}>Контакты</Link>
                </div>
                <div className={styles.navItem}>
                  <Link to="/about" className={styles.navLink}>О компании</Link>
                </div>
            </div>
            {/* Социальные кнопки и бургер справа на мобильных */}
            <div className={styles.mobileHeaderActions}>
              <div className={styles.mobileHeaderSocial}>
                <span className={styles.mobileHeaderSocialText}>24/7</span>
                <a 
                  href="https://wa.me/79952601196" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.mobileHeaderSocialLink}
                  aria-label="WhatsApp"
                >
                  <WhatsappIcon color='black' size={20}/>
                </a>
                <a 
                  href="https://t.me/+79952601196" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.mobileHeaderSocialLink}
                  aria-label="Telegram"
                >
                  <TelegramIcon color='black' size={20}/>
                </a>
              </div>
              {/* Бургер справа */}
              <button 
                className={styles.burgerButton}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Открыть меню"
              >
                <BurgerIcon size={24} color="black" />
              </button>
            </div>
      </div>
      
      {/* Мобильное меню */}
      <div 
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div 
          className={styles.mobileMenuContent}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.mobileMenuHeader}>
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <LogoIcon size={149} />
            </Link>
            <button 
              className={styles.closeButton}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Закрыть меню"
            >
              <CloseIcon size={24} color="black" />
            </button>
          </div>
          
          {/* Контактная информация в мобильном меню */}
          <div className={styles.mobileContactInfo}>
            <div className={styles.mobileWorkTimeBlock}>
              <div className={styles.mobilePhoneBlock}>
                <p>тел. </p>
                <a href="tel:+79952601196">+7 (995) 260-11-96</a>
              </div>
              <div className={styles.mobileWorkTime}>
                <p>с 9-00 до 18-00 Пн-Пт</p>
              </div>
            </div>
            <div className={styles.mobileSocialBlock}>
              <p>Круглосуточно: </p>
              <div>
                <a href="https://wa.me/79952601196" target="_blank" rel="noopener noreferrer" className={styles.mobileSocialLink}>
                  <WhatsappIcon color='black'/>
                </a>
                <a href="https://t.me/+79952601196" target="_blank" rel="noopener noreferrer" className={styles.mobileSocialLink}>
                  <TelegramIcon color='black'/>
                </a>
              </div>
            </div>
          </div>
          
          <nav className={styles.mobileNav}>
            <Link 
              to="/" 
              className={styles.mobileNavLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Главная страница
            </Link>
            <Link 
              to="/services" 
              className={styles.mobileNavLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Услуги
            </Link>
            <Link 
              to="/projects" 
              className={styles.mobileNavLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Наши проекты
            </Link>
            <Link 
              to="/requirements" 
              className={styles.mobileNavLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Требования к макетам
            </Link>
            <Link 
              to="/contacts" 
              className={styles.mobileNavLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Контакты
            </Link>
            <Link 
              to="/about" 
              className={styles.mobileNavLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              О компании
            </Link>
          </nav>
          
          
          <div className={styles.mobileButtons}>
            <button className={styles.mobileButtonOutline}>Связаться</button>
          </div>
        </div>
      </div>
      <div className={styles.runningLine} ref={runningLineRef}>
        <div className={styles.runningLineContent}>
          <span>принт продакшнс групп</span>
          <span>принт продакшнс групп</span>
          <span>принт продакшнс групп</span>
          <span>принт продакшнс групп</span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 