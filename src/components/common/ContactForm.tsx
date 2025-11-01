import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import AnimatedContent from './AnimatedContent';
import { useInView } from '../../utils/useInView';
import styles from './ContactForm.module.scss';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    file: null as File | null
  });

  const [consent, setConsent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        file: e.target.files![0]
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      alert('Необходимо дать согласие на обработку персональных данных');
      return;
    }
    console.log('Форма отправлена:', formData);
  };

  const { ref: titleRef, inView: isTitleInView } = useInView({ threshold: 0.3 });

  return (
    <section className={styles.contactForm}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title} ref={titleRef as React.RefObject<HTMLHeadingElement>}>
            {isTitleInView ? (
              <TypeAnimation
                sequence={[`Свяжитесь с нами`]}
                speed={50}
                cursor={false}
                repeat={0}
                wrapper="span"
                style={{ display: 'inline-block' }}
              />
            ) : (
              'Свяжитесь с нами'
            )}
          </h2>
          <AnimatedContent distance={100} direction="vertical" duration={1.8} ease="power3.out" initialOpacity={0.2} animateOpacity threshold={0.2}>
            <p className={styles.subtitle}>
              Заполните форму, и мы свяжемся с вами.
            </p>
          </AnimatedContent>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formContent}>
            <div className={styles.mainFields}>
              <div className={styles.topRow}>
                <AnimatedContent distance={80} direction="horizontal" duration={1.6} ease="power3.out" initialOpacity={0} animateOpacity threshold={0.2}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Имя</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </AnimatedContent>
                <AnimatedContent distance={80} direction="vertical" duration={1.65} delay={0.05} ease="power3.out" initialOpacity={0} animateOpacity threshold={0.2}>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Номер телефона</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </AnimatedContent>
                <AnimatedContent distance={80} direction="horizontal" reverse duration={1.7} delay={0.1} ease="power3.out" initialOpacity={0} animateOpacity threshold={0.2}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Электронная почта</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </AnimatedContent>
              </div>
              <AnimatedContent distance={100} direction="vertical" duration={1.8} delay={0.1} ease="power3.out" initialOpacity={0.15} animateOpacity threshold={0.2}>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Сообщение</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Введите ваше сообщение..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>
              </AnimatedContent>
            </div>
            <div className={styles.sideSection}>
              <AnimatedContent distance={80} direction="horizontal" duration={1.6} ease="power3.out" initialOpacity={0} animateOpacity threshold={0.2}>
                <div className={styles.formGroup}>
                  <label htmlFor="file">Ваш макет</label>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    onChange={handleFileChange}
                    className={styles.fileInput}
                  />
                  <label htmlFor="file" className={styles.fileButton}>
                    Загрузить файл
                  </label>
                </div>
              </AnimatedContent>
              <AnimatedContent distance={80} direction="vertical" duration={1.65} delay={0.05} ease="power3.out" initialOpacity={0} animateOpacity threshold={0.2}>
                <div className={styles.consentGroup}>
                  <label className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      required
                    />
                    <span className={styles.checkboxText}>
                      Я даю согласие на обработку моих персональных данных и подтверждаю, что ознакомлен(а) с{' '}
                      <a href="/privacy" className={styles.privacyLink}>
                        Политикой конфиденциальности и обработки персональных данных
                      </a>
                    </span>
                  </label>
                </div>
              </AnimatedContent>
                <AnimatedContent distance={80} direction="horizontal" reverse duration={1.7} delay={0.1} ease="power3.out" initialOpacity={0} animateOpacity threshold={0.2}>
                <button type="submit" className={styles.submitButton}>
                  Отправить
                </button>
              </AnimatedContent>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm; 