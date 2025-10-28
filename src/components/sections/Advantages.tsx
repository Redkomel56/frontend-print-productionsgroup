import React from 'react';
import styles from './Advantages.module.scss';
import { AdvanatagesIcon } from '../Icons/Icons';

const Advantages: React.FC = () => {
  const advantages = [
    {
      id: 1,
      title: 'Современное оборудование',
      description: 'Мы используем профессиональные принтеры и плоттеры последнего поколения для безупречного качества печати.',
      icon: <AdvanatagesIcon />
    },
    {
      id: 2,
      title: 'Оперативное выполнение',
      description: 'Ваш заказ будет готов точно в срок – от визиток до крупноформатной печати и баннеров.',
      icon: <AdvanatagesIcon />
    },
    {
      id: 3,
      title: 'Индивидуальный подход',
      description: 'Мы учитываем задачи вашего бизнеса, подбираем оптимальные материалы и форматы.',
      icon: <AdvanatagesIcon />
    },
    {
      id: 4,
      title: 'Опытная команда',
      description: 'В штате – дизайнеры, печатники и менеджеры с большим опытом в рекламной и полиграфической сфере.',
      icon: <AdvanatagesIcon />
    },
    {
      id: 5,
      title: 'Выгодные цены без потери качества',
      description: 'Мы используем профессиональные принтеры и плоттеры последнего поколения для безупречного качества печати.',
      icon: <AdvanatagesIcon />
    },
    {
      id: 6,
      title: 'Оптовые тиражи – дешевле',
      description: 'Чем больше объём, тем ниже цена за единицу. Мы предлагаем выгодные условия на массовую печать.',
      icon: <AdvanatagesIcon />
    },
    {
      id: 7,
      title: 'Бесплатная проверка и правки макетов',
      description: 'Перед печатью мы проверяем макеты на ошибки и вносим мелкие правки – бесплатно, чтобы вы не тратили деньги на переделки.',
      icon: <AdvanatagesIcon />
    },
    {
      id: 8,
      title: 'Доставка до двери',
      description: 'Мы избавляем клиентов от лишних затрат на логистику – доставляем продукцию точно по адресу.',
      icon: <AdvanatagesIcon />
    }
  ];

  return (
    <section className={styles.advantages}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Наши преимущества</h2>
          <p className={styles.subtitle}>
            Мы предлагаем не просто печать – а умные решения, которые экономят ваш бюджет. 
            От листовок до баннеров – подбираем материалы, форматы и технологии так, чтобы вы получили максимум за свои деньги. 
            Быстро, надёжно и без переплат.
          </p>
        </div>
        <div className={styles.grid}>
          {advantages.map((advantage) => (
            <div key={advantage.id} className={styles.card}>
              <div className={styles.icon}>{advantage.icon}</div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{advantage.title}</h3>
                <p className={styles.description}>{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages; 