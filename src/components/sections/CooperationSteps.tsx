import React from 'react';
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

  return (
    <section className={styles.cooperationSteps}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Этапы нашего сотрудничества <br />с клиентами</h2>
          <p className={styles.subtitle}>
            Мы ценим ваше время и работаем по чётко выстроенному процессу. 
            Следуйте 5 простым шагам – и мы быстро запустим ваш заказ в производство.
          </p>
          <button className={styles.ctaButton}>Отправить заявку</button>
        </div>
        <div className={styles.timeline}>
          <div className={styles.timelineLine}></div>
          <div className={styles.steps}>
            {steps.map((step, index) => (
              <div key={step.id} className={styles.step}>
                <div className={styles.stepMarker}></div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.description}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CooperationSteps; 