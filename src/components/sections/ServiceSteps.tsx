import React from 'react';
import styles from './ServiceSteps.module.scss';

type Step = {
  icon?: string;
  title: string;
  description?: string;
};

type ServiceStepsProps = {
  title: string;
  description?: string;
  steps: Step[];
};

const ServiceSteps: React.FC<ServiceStepsProps> = ({
  title,
  description,
  steps
}) => {
  return (
    <section className={styles.steps}>
        <div className={styles.container}>  
            <div className={styles.stepsHeader}>
                <h2 className={styles.stepsTitle}>{title}</h2>
                {description && <p className={styles.stepsDescription}>{description}</p>}
            </div>
            <div className={styles.stepsList}>
                {steps.map((step, index) => (
                <div key={index} className={styles.stepItem}>
                    {step.icon && (
                    <div className={styles.stepIconWrapper}>
                        <img src={step.icon} alt={`Шаг ${index + 1}`} className={styles.stepIcon} />
                    </div>
                    )}
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    {step.description && <p className={styles.stepDescription}>{step.description}</p>}
                </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default ServiceSteps;

