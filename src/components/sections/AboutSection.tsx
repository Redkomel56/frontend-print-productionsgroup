import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import AnimatedContent from '../common/AnimatedContent';
import { useInView } from '../../utils/useInView';
import styles from './AboutSection.module.scss';

const AboutSection: React.FC = () => {
  const { ref: titleRef, inView: isTitleInView } = useInView({ threshold: 0.3 });

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.companyInfo}>
            <h2 className={styles.companyName} ref={titleRef as React.RefObject<HTMLHeadingElement>}>
              {isTitleInView ? (
                <TypeAnimation
                  sequence={[`Принт Продакшнс\nГрупп`]}
                  speed={50}
                  cursor={false}
                  repeat={0}
                  wrapper="span"
                  style={{ whiteSpace: 'pre-line', display: 'inline-block' }}
                />
              ) : (
                'Принт Продакшнс Групп'
              )}
            </h2>

            <div className={styles.benefits}>
              <AnimatedContent direction="horizontal" distance={80} duration={0.8} initialOpacity={0} animateOpacity threshold={0.15}>
                <span className={styles.benefit}>Быстро</span>
              </AnimatedContent>
              <AnimatedContent direction="vertical" distance={80} duration={0.85} delay={0.05} initialOpacity={0} animateOpacity threshold={0.15}>
                <span className={styles.benefit}>Качественно</span>
              </AnimatedContent>
              <AnimatedContent direction="horizontal" reverse distance={80} duration={0.9} delay={0.1} initialOpacity={0} animateOpacity threshold={0.15}>
                <span className={styles.benefit}>Надежно</span>
              </AnimatedContent>
            </div>
          </div>

          <AnimatedContent distance={120} direction="vertical" duration={0.9} ease="power3.out" initialOpacity={0.2} animateOpacity threshold={0.1}>
            <p className={styles.description}>
              Наша типография в Москве предлагает не просто печать, а решения, 
              которые помогают вашему бизнесу экономить время и деньги. 
              Мы быстро реализуем проекты, соблюдая сроки и сохраняя высокое качество.
            </p>
          </AnimatedContent>
        </div>

      </div>
    </section>
  );
};

export default AboutSection; 