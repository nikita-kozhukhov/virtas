import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()} My App. Все права защищены.
    </footer>
  );
};
