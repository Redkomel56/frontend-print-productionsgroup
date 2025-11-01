import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import AnimatedContent from '../common/AnimatedContent';
import { useInView } from '../../utils/useInView';
import styles from './ServicesSection.module.scss';
import ServiceCard from './ServiceCard';

const ServicesSection: React.FC = () => {
  const [showAll, setShowAll] = React.useState(false);
  
  const allServices = [
    { 
      id: 1, 
      icon: 'servicesIcons/icons-02.svg',
      title: 'Широкоформатная печать',
      description: 'Баннеры, вывески, щиты, уличные постеры, фасады, перетяжки.',
      link: '/services/wide-format-printing'
    },
    { 
      id: 2, 
      icon: 'servicesIcons/icons-03.svg',
      title: 'УФ-печать',
      description: 'Печать по твёрдым материалам: пластик, стекло, металл, дерево.',
      link: '/services/uv-printing'
    },
    { 
      id: 3, 
      icon: 'servicesIcons/icons-04.svg',
      title: 'Лазерная резка и гравировка',
      description: 'Изготовление табличек, шильд, брендирования сувениров.',
      link: '/services/laser-cutting-engraving'
    },
    { 
      id: 4, 
      icon: 'servicesIcons/icons-05.svg',
      title: 'Цифровая и офсетная печать',
      description: 'Визитки, каталоги, буклеты, листовки, журнал.',
      link: '/services/digital-offset-printing'
    },
    { 
      id: 5, 
      icon: 'servicesIcons/icons-06.svg',
      title: 'Плоттерная и контурная резка',
      description: 'Самоклейка, плёнки, винил, контуры под наклейки и вывески.',
      link: '/services/plotter-cutting'
    },
    { 
      id: 6, 
      icon: 'servicesIcons/icons-07.svg',
      title: 'Сублимационная печать',
      description: 'футболки, кружки, сувенирка, флаги.',
      link: '/services/sublimation-printing'
    },
    { 
      id: 7, 
      icon: 'servicesIcons/icons-08.svg',
      title: 'Термотрансфер и тиснение',
      description: 'Горячие технологии переноса и декоративные элементы.',
      link: '/services/heat-transfer-embossing' 
    },
    { 
      id: 8, 
      icon: 'servicesIcons/icons-09.svg',
      title: 'Тампопечать',
      description: 'Нанесение на неровные и мелкие поверхности (ручки, флешки и т.д.).',
      link: '/services/pad-printing'
    },
    { 
      id: 9, 
      icon: 'servicesIcons/icons-10.svg',
      title: 'Шелкография',
      description: 'Печать на текстиле, пакетах, коробках и рекламной продукции.',
      link: '/services/screen-printing'
    },
    { 
      id: 10, 
      icon: 'servicesIcons/icons-11.svg',
      title: 'Флексопечать',
      description: 'Упаковка, этикетки, самоклеящиеся материалы.',
      link: '/services/flexographic-printing'
    },
    { 
      id: 11, 
      icon: 'servicesIcons/icons-12.svg',
      title: 'Ламинирование и биговка',
      description: 'Постпечатная обработка, защита, подготовка к сгибу и фальцовке.',
      link: '/services/lamination-scoring'
    },
    { 
      id: 12, 
      icon: 'servicesIcons/icons-13.svg',
      title: 'Наружная реклама',
      description: 'Изготовление вывесок, лайбоксов, табличек, стендов, объёмных букв и рекламных конструкций.',
      link: '/services/outdoor-advertising'
    }
  ];

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