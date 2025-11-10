import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import styles from './Navigation.module.scss';
import { LogoIcon, TelegramIcon, WhatsappIcon, BurgerIcon, CloseIcon } from '../Icons/Icons';
import { navigationServices } from '../../data/navigationServices';

const Navigation: React.FC = () => {
  const runningLineRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const dropdownMenuRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Закрываем dropdown при смене страницы
  useEffect(() => {
    setIsServicesDropdownOpen(false);
  }, [location.pathname]);

  // Закрываем dropdown при клике вне его области (только для десктопа)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      // Игнорируем клики если открыто мобильное меню
      if (isMobileMenuOpen) {
        return;
      }
      // Проверяем только для десктопного dropdown
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(target)) {
        setIsServicesDropdownOpen(false);
      }
    };

    // Применяем обработчик только для десктопа (когда мобильное меню закрыто)
    if (isServicesDropdownOpen && !isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isServicesDropdownOpen, isMobileMenuOpen]);

  // Очистка таймера при размонтировании
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Анимация появления dropdown меню
  useEffect(() => {
    const menu = dropdownMenuRef.current;
    if (!menu) return;

    if (isServicesDropdownOpen) {
      // Устанавливаем начальное состояние для меню
      gsap.set(menu, {
        opacity: 0,
        y: -20,
        scale: 0.95
      });

      // Устанавливаем начальное состояние для элементов внутри
      const items = menu.querySelectorAll(`.${styles.dropdownItem}`);
      gsap.set(items, {
        opacity: 0,
        x: -20
      });

      // Анимируем появление меню
      gsap.to(menu, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
        onComplete: () => {
          // После появления меню, анимируем элементы
          gsap.to(items, {
            opacity: 1,
            x: 0,
            duration: 0.25,
            ease: 'power2.out',
            stagger: 0.02 // Небольшая задержка между элементами
          });
        }
      });
    } else {
      // Анимация исчезновения
      const items = menu.querySelectorAll(`.${styles.dropdownItem}`);
      gsap.to([menu, ...items], {
        opacity: 0,
        y: -10,
        scale: 0.98,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          // Сбрасываем стили после анимации
          gsap.set([menu, ...items], { clearProps: 'all' });
        }
      });
    }
  }, [isServicesDropdownOpen]);

  // Функции для обработки hover с задержкой
  const handleMouseEnter = () => {
    // Отменяем закрытие, если оно было запланировано
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    // Устанавливаем задержку перед закрытием
    closeTimeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
      closeTimeoutRef.current = null;
    }, 200); // 200ms задержка для удобного перехода курсора
  };

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
                <div 
                  className={styles.navItem}
                  ref={servicesDropdownRef}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link 
                    to="/services" 
                    className={styles.navLink}
                    onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  >
                    Услуги
                    <span className={styles.dropdownArrow}>▼</span>
                  </Link>
                  {isServicesDropdownOpen && (
                    <div className={styles.dropdownMenu} ref={dropdownMenuRef}>
                      <div className={styles.dropdownGrid}>
                        {navigationServices.map((service) => (
                          <Link
                            key={service.id}
                            to={service.link}
                            className={styles.dropdownItem}
                            onClick={() => setIsServicesDropdownOpen(false)}
                          >
                            <img 
                              src={`/images/${service.icon}`} 
                              alt={service.title}
                              className={styles.dropdownItemIcon}
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                if (target.src.includes('/images/')) {
                                  target.src = `/${service.icon}`;
                                }
                              }}
                            />
                            <span className={styles.dropdownItemTitle}>{service.title}</span>
                          </Link>
                        ))}
                      </div>
                      <Link
                        to="/services"
                        className={styles.dropdownItemAll}
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        Все услуги →
                      </Link>
                    </div>
                  )}
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
        onClick={(e) => {
          // Закрываем меню только если клик был на затемненном фоне, а не на контенте
          if (e.target === e.currentTarget) {
            setIsMobileMenuOpen(false);
          }
        }}
      >
        <div 
          className={styles.mobileMenuContent}
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
            <div className={styles.mobileNavItem}>
              <button
                className={styles.mobileNavLink}
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              >
                Услуги
                <span className={styles.dropdownArrow}>▼</span>
              </button>
              {isServicesDropdownOpen && (
                <div 
                  className={styles.mobileDropdownMenu}
                >
                  <div className={styles.mobileDropdownGrid}>
                    {navigationServices.map((service) => (
                      <Link
                        key={service.id}
                        to={service.link}
                        className={styles.mobileDropdownItem}
                        onClick={() => {
                          // Закрываем меню - Link сам выполнит навигацию
                          setIsServicesDropdownOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        <img 
                          src={`/images/${service.icon}`} 
                          alt={service.title}
                          className={styles.mobileDropdownItemIcon}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            if (target.src.includes('/images/')) {
                              target.src = `/${service.icon}`;
                            }
                          }}
                        />
                        <span className={styles.mobileDropdownItemTitle}>{service.title}</span>
                      </Link>
                    ))}
                  </div>
                  <Link
                    to="/services"
                    className={styles.mobileDropdownItemAll}
                    onClick={() => {
                      // Закрываем меню - Link сам выполнит навигацию
                      setIsServicesDropdownOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Все услуги →
                  </Link>
                </div>
              )}
            </div>
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