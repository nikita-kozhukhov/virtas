import classNames from 'classnames';
import NextLink from 'next/link';

import styles from './Link.module.scss';

type LinkProps = {
  title: string;
  size: 'small' | 'medium' | 'big';
  href: string;
  color: 'red' | 'green' | 'yellow';
  disabled?: boolean;
};

export const Link = ({
  title,
  size,
  href,
  color,
  disabled = false,
}: LinkProps) => {
  const classes = classNames(styles['link'], {
    [styles['link__red']]: color === 'red',
    [styles['link__green']]: color === 'green',
    [styles['link__yellow']]: color === 'yellow',

    [styles['link__small']]: size === 'small',
    [styles['link__medium']]: size === 'medium',
    [styles['link__big']]: size === 'big',

    [styles['link__disabled']]: disabled,
  });
  return (
    <NextLink className={classes} href={href}>
      {title}
    </NextLink>
  );
};
