import styles from './Logo.module.scss';

export const Logo = () => {
  return (
    <div className={styles.container}>
      <img
        src="/images/logo.png"
        alt="virtas логотип"
        className={styles.logo}
      />
    </div>
  );
};
