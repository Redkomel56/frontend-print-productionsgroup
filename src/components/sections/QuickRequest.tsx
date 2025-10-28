import React, { useState } from 'react';
import styles from './QuickRequest.module.scss';

const QuickRequest: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки заявки
    console.log('Отправка заявки для email:', email);
  };

  return (
    <section className={styles.quickRequest}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Левая колонка - текстовая информация */}
          <div className={styles.leftColumn}>
            <h2 className={styles.title}>Быстрая заявка на печать</h2>
            <p className={styles.description}>
              Получите качественную широкоформатную печать за короткий срок
            </p>
          </div>
          
          {/* Правая колонка - форма */}
          <div className={styles.rightColumn}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.emailInputContainer}>
                <input
                    type="email"
                    placeholder="Введите ваш email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.emailInput}
                    required
                />
                <button type="submit" className={styles.submitButton}>
                    Отправить заявку
                </button>
              </div>
              <p className={styles.disclaimer}>
                Нажимая Отправить заявку, вы соглашаетесь с нашими Условиями и Положениями.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickRequest; 