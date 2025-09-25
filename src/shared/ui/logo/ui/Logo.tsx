import styles from './Logo.module.scss';

type LogoProps = {
  color?: 'light' | 'dark';
};

export const Logo = ({ color = 'light' }: LogoProps) => {
  const src = color === 'light' ? '/images/logo.png' : '/images/logo-dark.png';

  return (
    <div className={styles.container}>
      <img src={src} alt="virtas логотип" className={styles.logo} />
    </div>
  );
};
