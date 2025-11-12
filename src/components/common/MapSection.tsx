import React, { useEffect, useRef } from 'react';
import styles from './MapSection.module.scss';
import { loadYmaps } from '../../utils/loadYmaps';
import AnimatedContent from './AnimatedContent';

const MapSection: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    const apiKey = "cf07a18e-53c2-4bd2-9b0a-0f081d4aa009"
    
    // Если карта уже создана, не создаем её повторно
    if (mapInstanceRef.current) {
      return;
    }

    console.info('Инициализация карты. Проверка наличия ключа...');
    loadYmaps(apiKey, 'ru_RU')
      .then((ymaps) => {
        if (!mapRef.current || mapInstanceRef.current) return;
        console.info('Создаю экземпляр карты...');
        
        // Очищаем содержимое контейнера перед созданием карты
        if (mapRef.current) {
          mapRef.current.innerHTML = '';
        }
        
        const map = new ymaps.Map(mapRef.current, {
          center: [55.741906, 37.767070], // Москва
          zoom: 12,
          controls: ['zoomControl', 'fullscreenControl']
        });

        mapInstanceRef.current = map;

        const placemark = new ymaps.Placemark([55.741906, 37.767070], {
          balloonContent: 'Офис Print Production Group<br/>ул. Плеханова, д. 22, корп. 4, пом. 6, кв. 41'
        }, {
          preset: 'islands#redDotIcon'
        });

        map.geoObjects.add(placemark);
      })
      .catch((err) => {
        console.error('Не удалось загрузить Яндекс Карты:', err?.message || err);
      });

    // Cleanup функция для уничтожения карты при размонтировании
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy();
        mapInstanceRef.current = null;
      }
    };
  }, []);
  return (
    <section className={styles.mapSection}>
      <div className={styles.mapBackground}>
        <div ref={mapRef} className={styles.mapContainer}></div>
      </div>
      <div className={styles.contactPanelWrapper}>
        <AnimatedContent direction="horizontal" distance={100} duration={0.9} initialOpacity={0} animateOpacity threshold={0.1}>
          <div className={styles.contactPanel}>
          <div className={styles.contactContent}>
            <span className={styles.smallTitle}>Контакты</span>
            <h2 className={styles.title}>Свяжитесь с нами</h2>
            <p className={styles.description}>
              Мы всегда готовы ответить на ваши вопросы и помочь с вашими проектами.
            </p>
            <div className={styles.contactInfo}>
              <AnimatedContent direction="horizontal" distance={80} duration={0.8} initialOpacity={0} animateOpacity threshold={0.15}>
                <div className={styles.contactItem}>
                  <div className={styles.icon}>✉️</div>
                  <div className={styles.details}>
                    <span className={styles.label}>Электронная почта</span>
                    <a href="mailto:info@print-productiongroup.ru" className={styles.value}>
                      info@print-productiongroup.ru
                    </a>
                  </div>
                </div>
              </AnimatedContent>
              <AnimatedContent direction="vertical" distance={80} duration={0.85} delay={0.05} initialOpacity={0} animateOpacity threshold={0.15}>
                <div className={styles.contactItem}>
                  <div className={styles.icon}>📞</div>
                  <div className={styles.details}>
                    <span className={styles.label}>Телефон</span>
                    <a href="tel:+79952601196" className={styles.value}>
                      +7 (995) 260-11-96
                    </a>
                  </div>
                </div>
              </AnimatedContent>
              <AnimatedContent direction="horizontal" reverse distance={80} duration={1.9} delay={0.1} initialOpacity={0} animateOpacity threshold={0.15}>
                <div className={styles.contactItem}>
                  <div className={styles.icon}>📍</div>
                  <div className={styles.details}>
                    <span className={styles.label}>Офис</span>
                    <span className={styles.value}>
                      111123, г. Москва, ул. Плеханова, д. 22, корп. 4, пом. 6, кв. 41
                    </span>
                  </div>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default MapSection; 