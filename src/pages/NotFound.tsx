import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

const NotFound: React.FC = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1 className={styles.title}>Ой! Страница не найдена <br /> (404)</h1>
          </div>
          
          <p className={styles.description}>
          Похоже, вы попали не туда. <br />
          Возможно, страница была удалена, переехала или вы просто ошиблись в адресе.
          </p>
          
          <div className={styles.suggestions}>
            <h2 className={styles.suggestionsTitle}>Что можно сделать:</h2>
            <ul className={styles.suggestionsList}>
              <li>Проверить правильность адреса в строке браузера</li>
              <li>Воспользоваться поиском по сайту</li>
              <li>Или просто связаться с нами, если вам нужна помощь</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;