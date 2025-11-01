import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, type SpringOptions } from 'motion/react';
import styles from './ServiceCards.module.scss';

type Card = {
  icon?: string;
  text: string;
};

type ServiceCardsProps = {
  title: string;
  description?: string;
  cards: Card[];
  orderButtonText?: string;
  onOrderClick?: () => void;
};

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2
};

type TiltCardProps = {
  icon?: string;
  text: string;
  index: number;
};

const TiltCard: React.FC<TiltCardProps> = ({ icon, text, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Tilt анимация
  const rotateXTilt = useSpring(useMotionValue(0), springValues);
  const rotateZTilt = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const rotateAmplitude = 12;
  const scaleOnHover = 1.05;

  // Динамическая тень на основе наклона карточки
  const shadowOffsetX = useTransform(rotateZTilt, (value) => value * 2);
  const shadowOffsetY = useTransform(rotateXTilt, (value) => value * 2);
  const shadowIntensity = useTransform(rotateXTilt, (value) => Math.abs(value) * 0.5);

  // Комбинированная тень через отдельный motion value
  const boxShadowValue = useMotionValue('0 0 0 rgba(0,0,0,0)');

  // Блик на ближайшей стороне
  const glareXPercent = useTransform(rotateZTilt, (v) => {
    return -v * 15 + 50; // 50% - центр
  });
  
  const glareYPercent = useTransform(rotateXTilt, (v) => {
    return -v * 15 + 50; // 50% - центр
  });

  // Размер блика зависит от интенсивности наклона
  const glareSizeBase = useTransform(
    [rotateXTilt, rotateZTilt], 
    ([rx, rz]: number[]) => {
      const intensity = Math.abs(rx) + Math.abs(rz);
      return Math.min(150, 80 + intensity * 3);
    }
  );
  const glareSize = useSpring(glareSizeBase, springValues);

  // Прозрачность блика
  const glareOpacityBase = useTransform(
    [rotateXTilt, rotateZTilt], 
    ([rx, rz]: number[]) => {
      const intensity = Math.abs(rx) + Math.abs(rz);
      return Math.min(0.4, 0.15 + intensity * 0.02);
    }
  );
  const glareOpacity = useSpring(glareOpacityBase, springValues);
  
  // Позиция блика с анимацией
  const glareX = useSpring(glareXPercent, springValues);
  const glareY = useSpring(glareYPercent, springValues);

  // Обновляем тень при изменении значений, только при наведении
  useEffect(() => {
    if (!isHovering) {
      boxShadowValue.set('0 0 0 rgba(0,0,0,0)');
      return;
    }

    const updateShadow = () => {
      const offsetX = shadowOffsetX.get();
      const offsetY = shadowOffsetY.get();
      const intensity = shadowIntensity.get();
      const blur = 20 + intensity * 10;
      const opacity = 0.15 + intensity * 0.1;
      boxShadowValue.set(`${offsetX}px ${offsetY}px ${blur}px rgba(0,0,0,${opacity})`);
    };

    // Подписываемся на изменения
    const unsubscribeX = shadowOffsetX.on('change', updateShadow);
    const unsubscribeY = shadowOffsetY.on('change', updateShadow);
    const unsubscribeI = shadowIntensity.on('change', updateShadow);

    updateShadow(); // Начальное обновление при наведении

    return () => {
      unsubscribeX();
      unsubscribeY();
      unsubscribeI();
    };
  }, [isHovering, shadowOffsetX, shadowOffsetY, shadowIntensity, boxShadowValue]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    // Tilt анимация: rotateX для наклона вверх-вниз, rotateZ для наклона влево-вправо
    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationZ = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateXTilt.set(rotationX);
    rotateZTilt.set(rotationZ);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    setIsHovering(true);
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateXTilt.set(0);
    rotateZTilt.set(0);
    setIsHovering(false);
    // Обнуляем тень при уходе мыши
    boxShadowValue.set('0 0 0 rgba(0,0,0,0)');
  }

  return (
    <div
      ref={ref}
      className={styles.cardContainer}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ zIndex: isHovering ? 5 : 1 }}
    >
      <motion.div
        className={styles.cardInner}
        style={{
          rotateX: rotateXTilt,
          rotateZ: rotateZTilt,
          scale,
          boxShadow: boxShadowValue,
          transformStyle: 'preserve-3d'
        }}
      >
        <div className={styles.cardFace}>
          {icon && (
            <img src={icon} alt="" className={styles.cardIcon} />
          )}
          <p className={styles.cardText}>{text}</p>
          <motion.div 
            className={styles.glare} 
            style={{ 
              x: useTransform([glareX, glareSize], ([x, size]: number[]) => `calc(${x}% - ${size / 2}px)`),
              y: useTransform([glareY, glareSize], ([y, size]: number[]) => `calc(${y}% - ${size / 2}px)`),
              width: glareSize,
              height: glareSize,
              opacity: glareOpacity
            }} 
          />
        </div>
      </motion.div>
    </div>
  );
};

const ServiceCards: React.FC<ServiceCardsProps> = ({
  title,
  description,
  cards,
  orderButtonText = 'Сделать заказ',
  onOrderClick
}) => {
  return (
    <section className={styles.serviceCards}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
        
        <div className={styles.cardsGrid}>
          {cards.map((card, index) => (
            <TiltCard
              key={index}
              icon={card.icon}
              text={card.text}
              index={index}
            />
          ))}
        </div>
        
        {/* <button className={styles.orderButton} onClick={onOrderClick}>
          {orderButtonText}
        </button> */}
      </div>
    </section>
  );
};

export default ServiceCards;

