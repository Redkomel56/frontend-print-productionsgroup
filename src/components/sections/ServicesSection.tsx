import React from 'react';
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
      link: '/printing' // Mock ссылка
    },
    { 
      id: 2, 
      icon: 'servicesIcons/icons-03.svg',
      title: 'УФ-печать',
      description: 'Печать на различных материалах с ультрафиолетовым отверждением.',
      link: '/printing' // Mock ссылка
    },
    { 
      id: 3, 
      icon: 'servicesIcons/icons-04.svg',
      title: 'УФ-печать',
      description: 'Печать на различных материалах с ультрафиолетовым отверждением.',
      link: '/printing' // Mock ссылка
    },
    { 
      id: 4, 
      icon: 'servicesIcons/icons-05.svg',
      title: 'Лазерная гравировка',
      description: 'Гравировка на различных материалах с лазерным отверждением.',
      link: '/printing' // Mock ссылка
    },
    { 
      id: 5, 
      icon: 'servicesIcons/icons-06.svg',
      title: 'Цифровая печать',
      description: 'Печать на различных материалах с цифровым отверждением.',
      link: '/printing' // Mock ссылка
    },
    { 
      id: 6, 
      icon: 'servicesIcons/icons-07.svg',
      title: 'Полиграфия',
      description: 'Печать на различных материалах с полиграфическим отверждением.',
      link: '/printing' // Mock ссылка
    },
    { 
      id: 7, 
      icon: 'servicesIcons/icons-08.svg',
      title: 'Офсетная печать',
      description: 'Печать на различных материалах с офсетным отверждением.',
      link: '/printing' // Mock ссылка
    },
    { 
      id: 8, 
      icon: 'servicesIcons/icons-09.svg',
      title: 'Плоттерная резка',
      description: 'Резка на различных материалах с плоттерным отверждением.',
      link: '/printing' // Mock ссылка
    },
    { 
      id: 9, 
      icon: 'servicesIcons/icons-10.svg',
      title: 'Сублимационная печать',
      description: 'Печать на различных материалах с сублимационным отверждением.',
      link: '/printing' // Mock ссылка
    },
    { 
      id: 10, 
      icon: 'servicesIcons/icons-11.svg',
      title: 'Термотрансфер',
      description: 'Печать на различных материалах с термотрансферным отверждением.',
      link: '/printing' // Mock ссылка
    },
    { 
      id: 11, 
      icon: 'servicesIcons/icons-12.svg',
      title: 'Тампопечать',
      description: 'Печать на различных материалах с тампопечатным отверждением.',
      link: '/printing' // Mock ссылка
    },
    { 
      id: 12, 
      icon: 'servicesIcons/icons-13.svg',
      title: 'Шелкография',
      description: 'Печать на различных материалах с шелкографическим отверждением.',
      link: '/printing' // Mock ссылка
    }
  ];

  const displayedServices = showAll ? allServices : allServices.slice(0, 8);

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Услуги</h2>
          <p className={styles.subtitle}>
            Мы предлагаем широкий спектр печатных услуг и производства рекламной продукции.
          </p>
        </div>
        <div className={styles.grid}>
          {displayedServices.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
        <div className={styles.actions}>
          <button 
            className={styles.toggleButton}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Скрыть' : 'Посмотреть все'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 