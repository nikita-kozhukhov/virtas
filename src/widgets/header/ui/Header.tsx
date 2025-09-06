import Link from 'next/link';

import styles from './Header.module.scss';

type HeaderProps = {
  title?: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className={styles.header}>
      {title && <h1>{title}</h1>}
      <Link href="/">Главная</Link>
      <Link href="/about">О нас</Link>
    </header>
  );
};
