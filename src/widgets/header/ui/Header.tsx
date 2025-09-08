import { Logo } from 'shared/ui/logo';
import { ButtonsContainer } from 'widgets/buttons-container';
import { Navigation } from 'widgets/navigation';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
      <ButtonsContainer />
    </header>
  );
};
