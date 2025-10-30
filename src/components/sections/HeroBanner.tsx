import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useInView } from '../../utils/useInView';
import AnimatedContent from '../common/AnimatedContent';
import styles from './HeroBanner.module.scss';

const HeroBanner: React.FC = () => {
  const { ref: titleRef, inView: isTitleInView } = useInView({ threshold: 0.5 });

  return (
    <section className={styles.heroBanner}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title} ref={titleRef as React.RefObject<HTMLHeadingElement>}>
            {isTitleInView ? (
              <TypeAnimation
                sequence={[
                  // Старт анимации печати заголовка
                  'Добро пожаловать в\nПринт Продакшнс Групп',
                ]}
                speed={50}
                cursor={true}
                repeat={0}
                wrapper="span"
                style={{ whiteSpace: 'pre-line', display: 'inline-block' }}
              />
            ) : (
              'Добро пожаловать в Принт Продакшнс Групп'
            )}
          </h1>
          <AnimatedContent
            distance={120}
            direction="vertical"
            reverse={false}
            duration={0.9}
            ease="power3.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={0.1}
          >
            <p className={styles.subtitle}>
              Мы предлагаем широкий спектр услуг печати и рекламы, чтобы помочь вашему бизнесу выделиться. Наша команда профессионалов готова воплотить ваши идеи в жизнь с помощью современных технологий.
            </p>
          </AnimatedContent>
          <AnimatedContent
            distance={80}
            direction="horizontal"
            reverse={false}
            duration={0.8}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={0.15}
          >
            <div className={styles.actions}>
              <button className={styles.primaryButton}>Наши услуги</button>
            </div>
          </AnimatedContent>
        </div>
      </div>
      <div className={styles.image}>
          {/* Здесь будет изображение */}
          <img src="images/mainBanner.png" alt="" />
      </div>
      <div className={styles.partners}>
        <div className={styles.title}>
          <h3>
            Партнеры и заказчики
          </h3>
        </div>
        <div className={styles.list}>
          <div className={styles.marqueeTrack}>
            {[...Array(9)].map((_, idx) => (
              <div className={styles.partner} key={`a-${idx}`}>
                <img src={`images/partners/partner_${idx + 1}.png`} alt="" />
              </div>
            ))}
            {[...Array(9)].map((_, idx) => (
              <div className={styles.partner} key={`b-${idx}`}>
                <img src={`images/partners/partner_${idx + 1}.png`} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 

export default HeroBanner; 