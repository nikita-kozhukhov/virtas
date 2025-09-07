import { MAIN_HEADER } from 'widgets/info-block/config/constants';

import styles from './InfoBlock.module.scss';

export const InfoBlock = () => {
  return (
    <div className={styles['info-block']}>
      <h1>{MAIN_HEADER}</h1>
      <button>Подробнее</button>
    </div>
  );
};
