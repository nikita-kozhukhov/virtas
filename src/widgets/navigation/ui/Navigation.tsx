import { Link } from 'shared/ui/link';
import { navLinksData } from 'widgets/navigation/config/navLinksData';

import styles from './Navigation.module.scss';

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.container}>
        {navLinksData.map((link) => {
          return (
            <li key={link.id}>
              <Link
                title={link.title}
                href={link.href}
                color="red"
                size="medium"
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
