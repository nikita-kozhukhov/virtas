import { ABOUT_CARDS } from 'app/about/constants';
import { CardsContainer } from 'widgets/cards-container';

import styles from './AboutContent.module.scss';

export const AboutContent = () => {
  return (
    <div className={styles['about-container']}>
      <h1 className={styles['about-container--main-header']}>
        О проекте Virtas
      </h1>
      <p className={styles['about-container--text']}>
        <strong>Virtas</strong> — это современный виртуальный помощник в
        достижении целей. Мы создали проект для людей, которые хотят не просто
        ставить задачи, но и действительно двигаться к результату, получая
        поддержку, аналитику и мотивацию.
      </p>

      <CardsContainer cards={ABOUT_CARDS} />

      <h2 className={styles['about-container--secondary-header']}>
        Virtas — это больше, чем планировщик.
      </h2>
      <p className={styles['about-container--text']}>
        Мы верим, что цели должны становиться реальностью, а процесс их
        достижения — комфортным и увлекательным. Virtas объединяет технологии,
        социальное взаимодействие и интеллект, чтобы помочь каждому пользователю
        двигаться вперёд.
      </p>
    </div>
  );
};
