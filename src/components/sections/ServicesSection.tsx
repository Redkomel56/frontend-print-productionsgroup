import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ServicesSection.module.scss';
import { AdvanatagesIcon } from '../Icons/Icons';

const ServicesSection: React.FC = () => {
  const [showAll, setShowAll] = React.useState(false);
  
  const allServices = [
    { 
      id: 1, 
      title: 'Широкоформатная печать',
      link: '/printing' // Mock ссылка
    },
    { 
      id: 2, 
      title: 'Интерьерная печать',
      link: '/printing' // Mock ссылка
    },
    { 
      id: 3, 
      title: 'УФ-печать',
      link: '/printing' // Mock ссылка
    },
    { 
      id: 4, 
      title: 'Лазерная гравировка',
      link: '/printing' // Mock ссылка
    },
    { 
      id: 5, 
      title: 'Цифровая печать',
      link: '/printing' // Mock ссылка
    },
    { 
      id: 6, 
      title: 'Полиграфия',
      link: '/printing' // Mock ссылка
    },
    { 
      id: 7, 
      title: 'Офсетная печать',
      link: '/printing' // Mock ссылка
    },
    { 
      id: 8, 
      title: 'Плоттерная резка',
      link: '/printing' // Mock ссылка
    },
    { 
      id: 9, 
      title: 'Сублимационная печать',
      link: '/printing' // Mock ссылка
    },
    { 
      id: 10, 
      title: 'Термотрансфер',
      link: '/printing' // Mock ссылка
    },
    { 
      id: 11, 
      title: 'Тампопечать',
      link: '/printing' // Mock ссылка
    },
    { 
      id: 12, 
      title: 'Шелкография',
      link: '/printing' // Mock ссылка
    },
    { 
      id: 13, 
      title: 'Флексопечать',
      link: '/printing' // Mock ссылка
    },
    { 
      id: 14, 
      title: 'Тиснение',
      link: '/printing' // Mock ссылка
    },
    { 
      id: 15, 
      title: 'Ламинирование',
      link: '/printing' // Mock ссылка
    },
    { 
      id: 16, 
      title: 'Биговка',
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
            <Link 
              key={service.id} 
              to={service.link} 
              className={styles.cardLink}
            >
              <div className={styles.card}>
                <div className={styles.icon}><AdvanatagesIcon /></div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
              </div>
            </Link>
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