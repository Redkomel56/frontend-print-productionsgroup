import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';
import { LogoIcon, TelegramIcon, WhatsappIcon } from '../Icons/Icons';

const Navigation: React.FC = () => {
  const runningLineRef = useRef<HTMLDivElement>(null);

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
          newSpan.textContent = 'принт продакшенс групп';
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
            <div className={styles.navList}>
                <div className={styles.navItem}>
                <Link to="/" className={styles.navLink}>
                <LogoIcon size={149}/>
                </Link>
                </div>
                <div className={styles.navItem}>
                <Link to="/prices" className={styles.navLink}>Цены</Link>
                </div>
                <div className={styles.navItem}>
                <Link to="/services" className={styles.navLink}>Услуги</Link>
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
            <div className={styles.makeOrder}>
                <button className={styles.makeOrderButton}>Сделать заказ</button>
            </div>
      </div>
      <div className={styles.runningLine} ref={runningLineRef}>
        <div className={styles.runningLineContent}>
          <span>принт продакшенс групп</span>
          <span>принт продакшенс групп</span>
          <span>принт продакшенс групп</span>
          <span>принт продакшенс групп</span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 