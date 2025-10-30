import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useInView } from '../../utils/useInView';
import AnimatedContent from '../common/AnimatedContent';
import styles from './Advantages.module.scss';
import { AdvanatagesIcon } from '../Icons/Icons';

const Advantages: React.FC = () => {
  const advantages = [
    {
      id: 1,
      title: 'Современное оборудование',
      description: 'Мы используем профессиональные принтеры и плоттеры последнего поколения для безупречного качества печати.',
      icon: '/images/advantagesIcons/icons-14.svg'
    },
    {
      id: 2,
      title: 'Оперативное выполнение',
      description: 'Ваш заказ будет готов точно в срок – от визиток до крупноформатной печати и баннеров.',
      icon: '/images/advantagesIcons/icons-15.svg'
    },
    {
      id: 3,
      title: 'Индивидуальный подход',
      description: 'Мы учитываем задачи вашего бизнеса, подбираем оптимальные материалы и форматы.',
      icon: '/images/advantagesIcons/icons-16.svg'
    },
    {
      id: 4,
      title: 'Опытная команда',
      description: 'В штате – дизайнеры, печатники и менеджеры с большим опытом в рекламной и полиграфической сфере.',
      icon: '/images/advantagesIcons/icons-17.svg'
    },
    {
      id: 5,
      title: 'Выгодные цены без потери качества',
      description: 'Мы используем профессиональные принтеры и плоттеры последнего поколения для безупречного качества печати.',
      icon: '/images/advantagesIcons/icons-18.svg'
    },
    {
      id: 6,
      title: 'Оптовые тиражи – дешевле',
      description: 'Чем больше объём, тем ниже цена за единицу. Мы предлагаем выгодные условия на массовую печать.',
      icon: '/images/advantagesIcons/icons-19.svg'
    },
    {
      id: 7,
      title: 'Бесплатная проверка и правки макетов',
      description: 'Перед печатью мы проверяем макеты на ошибки и вносим мелкие правки – бесплатно, чтобы вы не тратили деньги на переделки.',
      icon: '/images/advantagesIcons/icons-20.svg'
    },
    {
      id: 8,
      title: 'Доставка до двери',
      description: 'Мы избавляем клиентов от лишних затрат на логистику – доставляем продукцию точно по адресу.',
      icon: '/images/advantagesIcons/icons-21.svg'
    }
  ];

  const { ref: titleRef, inView: isTitleInView } = useInView({ threshold: 0.3 });

  return (
    <section className={styles.advantages}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title} ref={titleRef as React.RefObject<HTMLHeadingElement>}>
            {isTitleInView ? (
              <TypeAnimation
                sequence={['Наши преимущества']}
                speed={50}
                cursor={false}
                repeat={0}
                wrapper="span"
                style={{ display: 'inline-block' }}
              />
            ) : (
              'Наши преимущества'
            )}
          </h2>
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
              Мы предлагаем не просто печать – а умные решения, которые экономят ваш бюджет. 
              От листовок до баннеров – подбираем материалы, форматы и технологии так, чтобы вы получили максимум за свои деньги. 
              Быстро, надёжно и без переплат.
            </p>
          </AnimatedContent>
        </div>
        <div className={styles.grid}>
          {advantages.map((advantage, idx) => (
            <AnimatedContent
              key={advantage.id}
              distance={150}
              direction={idx % 2 === 0 ? 'vertical' : 'horizontal'}
              reverse={false}
              duration={1}
              ease="power3.out"
              initialOpacity={0.2}
              animateOpacity
              scale={1.02}
              threshold={0.1}
              delay={0.05 * idx}
            >
              <div className={styles.card}>
                <div className={styles.icon}><img src={advantage.icon} alt={advantage.title} /></div>
                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{advantage.title}</h3>
                  <p className={styles.description}>{advantage.description}</p>
                </div>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages; 