import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()} Virtas. Все права защищены.
    </footer>
  );
};
