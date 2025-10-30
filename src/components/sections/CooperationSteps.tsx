import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import AnimatedContent from '../common/AnimatedContent';
import { useInView } from '../../utils/useInView';
import styles from './CooperationSteps.module.scss';

const CooperationSteps: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: 'Шаг 1',
      description: 'Оставьте заявку на сайте или свяжитесь с нами. Расскажите, что нужно – мы всё уточним.'
    },
    {
      id: 2,
      title: 'Шаг 2',
      description: 'Готовим расчёт и подбираем материалы. Отправим вам подробное коммерческое предложение.'
    },
    {
      id: 3,
      title: 'Шаг 3',
      description: 'Согласовываем макет. При необходимости – доработаем и адаптируем под ваши задачи.'
    },
    {
      id: 4,
      title: 'Шаг 4',
      description: 'Вы оплачиваете заказ удобным способом. Работаем по счёту для юридических лиц и онлайн-оплате для физических лиц.'
    },
    {
      id: 5,
      title: 'Шаг 5',
      description: 'Печатаем и доставляем продукцию. Сообщаем о статусах и сроках, держим вас в курсе.'
    }
  ];

  const { ref: titleRef, inView: isTitleInView } = useInView({ threshold: 0.3 });

  return (
    <section className={styles.cooperationSteps}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title} ref={titleRef as React.RefObject<HTMLHeadingElement>}>
            {isTitleInView ? (
              <TypeAnimation
                sequence={[`Этапы нашего сотрудничества \nс клиентами`]}
                speed={50}
                cursor={false}
                repeat={0}
                wrapper="span"
                style={{ whiteSpace: 'pre-line', display: 'inline-block' }}
              />
            ) : (
              'Этапы нашего сотрудничества с клиентами'
            )}
          </h2>

          <AnimatedContent distance={120} direction="vertical" duration={0.9} ease="power3.out" initialOpacity={0.2} animateOpacity threshold={0.1}>
            <p className={styles.subtitle}>
              Мы ценим ваше время и работаем по чётко выстроенному процессу. 
              Следуйте 5 простым шагам – и мы быстро запустим ваш заказ в производство.
            </p>
          </AnimatedContent>

          <AnimatedContent distance={80} direction="horizontal" duration={0.8} ease="power3.out" initialOpacity={0} animateOpacity threshold={0.1}>
            <button className={styles.ctaButton}>Отправить заявку</button>
          </AnimatedContent>
        </div>
        <div className={styles.timeline}>
          <div className={styles.timelineLine}></div>
          <div className={styles.steps}>
            {steps.map((step, index) => (
              <AnimatedContent
                key={step.id}
                distance={250}
                direction={index % 2 === 0 ? 'horizontal' : 'vertical'}
                reverse={index % 3 === 0}
                duration={0.5}
                ease="power3.out"
                initialOpacity={0.05}
                animateOpacity
                scale={1.3}
                threshold={0.15}
                delay={0.06 * index}
              >
                <div className={styles.step}>
                  <div className={styles.stepMarker}></div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.description}>{step.description}</p>
                  </div>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CooperationSteps; 