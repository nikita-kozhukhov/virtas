import { Button } from 'shared/ui/button';

import styles from './ButtonsContainer.module.scss';

export const ButtonsContainer = () => {
  return (
    <div className={styles['container']}>
      <Button title="Вход" color="green" />
      <Button title="Регистрация" color="yellow" />
    </div>
  );
};
