import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import AnimatedContent from '../common/AnimatedContent';
import { useInView } from '../../utils/useInView';
import styles from './ServicesSection.module.scss';
import ServiceCard from './ServiceCard';
import { navigationServices } from '../../data/navigationServices';

const ServicesSection: React.FC = () => {
  const [showAll, setShowAll] = React.useState(false);
  
  // Используем общие данные услуг из navigationServices
  const allServices = navigationServices;

  const displayedServices = showAll ? allServices : allServices.slice(0, 8);
  const { ref: titleRef, inView: isTitleInView } = useInView({ threshold: 0.3 });

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title} ref={titleRef as React.RefObject<HTMLHeadingElement>}>
            {isTitleInView ? (
              <TypeAnimation
                sequence={[`Услуги`]}
                speed={50}
                cursor={false}
                repeat={0}
                wrapper="span"
                style={{ display: 'inline-block' }}
              />
            ) : (
              'Услуги'
            )}
          </h2>
          <AnimatedContent distance={120} direction="vertical" duration={0.9} ease="power3.out" initialOpacity={0.2} animateOpacity threshold={0.1}>
            <p className={styles.subtitle}>
              Мы предлагаем широкий спектр печатных услуг и производства рекламной продукции.
            </p>
          </AnimatedContent>
        </div>
        <div className={styles.grid}>
          {displayedServices.map((service, idx) => (
            <AnimatedContent
              key={service.id}
              distance={140}
              direction={idx % 2 === 0 ? 'vertical' : 'horizontal'}
              reverse={idx % 3 === 0}
              duration={0.9}
              ease="power3.out"
              initialOpacity={0.15}
              animateOpacity
              scale={1.02}
              threshold={0.15}
              delay={0.04 * idx}
            >
              <ServiceCard
                id={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            </AnimatedContent>
          ))}
        </div>
        <AnimatedContent distance={80} direction="horizontal" duration={0.8} ease="power3.out" initialOpacity={0} animateOpacity threshold={0.1}>
          <div className={styles.actions}>
            <button 
              className={styles.toggleButton}
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Скрыть' : 'Посмотреть все'}
            </button>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default ServicesSection; 