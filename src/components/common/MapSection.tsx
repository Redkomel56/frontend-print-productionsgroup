import React, { useEffect, useRef } from 'react';
import styles from './MapSection.module.scss';

const MapSection: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Загружаем скрипт Яндекс Карт
    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?apikey=YOUR_API_KEY&lang=ru_RU';
    script.async = true;
    
    script.onload = () => {
      // @ts-ignore
      window.ymaps.ready(() => {
        if (mapRef.current) {
          // @ts-ignore
          const map = new window.ymaps.Map(mapRef.current, {
            center: [55.7558, 37.6176], // Москва
            zoom: 12,
            controls: ['zoomControl', 'fullscreenControl']
          });

          // Добавляем метку офиса
          // @ts-ignore
          const placemark = new window.ymaps.Placemark([55.7558, 37.6176], {
            balloonContent: 'Офис Print Production Group<br/>Москва, ул. Примерная, д. 123'
          }, {
            preset: 'islands#redDotIcon'
          });

          map.geoObjects.add(placemark);
        }
      });
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return (
    <section className={styles.mapSection}>
      <div className={styles.mapBackground}>
        <div ref={mapRef} className={styles.mapContainer}></div>
      </div>
      <div className={styles.contactPanel}>
        <div className={styles.contactContent}>
          <span className={styles.smallTitle}>Контакты</span>
          <h2 className={styles.title}>Свяжитесь с нами</h2>
          <p className={styles.description}>
            Мы всегда готовы ответить на ваши вопросы и помочь с вашими проектами.
          </p>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <div className={styles.icon}>✉️</div>
              <div className={styles.details}>
                <span className={styles.label}>Электронная почта</span>
                <a href="mailto:info@print-productiongroup.ru" className={styles.value}>
                  info@print-productiongroup.ru
                </a>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.icon}>📞</div>
              <div className={styles.details}>
                <span className={styles.label}>Телефон</span>
                <a href="tel:+79952601196" className={styles.value}>
                  +7 (995) 260-11-96
                </a>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.icon}>📍</div>
              <div className={styles.details}>
                <span className={styles.label}>Офис</span>
                <span className={styles.value}>
                  Москва, ул. Примерная, д. 123
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection; 