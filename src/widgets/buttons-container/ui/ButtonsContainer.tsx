import { Link } from 'shared/ui/link';

import styles from './ButtonsContainer.module.scss';

export const ButtonsContainer = () => {
  return (
    <div className={styles['container']}>
      <Link title="Вход" color="green" href="/auth" size="medium" />
      <Link title="Регистрация" color="yellow" href="/register" size="medium" />
    </div>
  );
};
