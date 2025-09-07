import { ReactNode } from 'react';

import { Footer } from 'widgets/footer/ui/Footer';
import { Header } from 'widgets/header';

import styles from './MainLayout.module.scss';

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={styles['layout']}>
      <Header />
      <main className={styles['main']}>{children}</main>
      <Footer />
    </div>
  );
};
