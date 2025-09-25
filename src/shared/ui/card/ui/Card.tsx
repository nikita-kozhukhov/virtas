import Image from 'next/image';

import { CardInfoProps } from 'shared/ui/card/types/card-info';

import styles from './Card.module.scss';

export const Card = ({
  title,
  description,
  items,
  footer,
  src,
  alt,
}: CardInfoProps) => {
  return (
    <div className={styles.card}>
      {src && alt && (
        <div className={styles.image}>
          <Image src={src} alt={alt} fill style={{ objectFit: 'contain' }} />
        </div>
      )}
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index} className={styles['list-item']}>
            {item}
          </li>
        ))}
      </ul>
      <p className={styles.footer}>{footer}</p>
    </div>
  );
};
