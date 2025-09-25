import classNames from 'classnames';

import styles from './Button.module.scss';

type ButtonProps = {
  title: string;
  color: 'red' | 'green' | 'yellow';
  size: 'small' | 'medium' | 'big';
  onClick?: () => void;
  disabled?: boolean;
};

export const Button = ({
  title,
  color,
  size,
  onClick,
  disabled = false,
}: ButtonProps) => {
  const classes = classNames(styles['button'], {
    [styles['button__red']]: color === 'red',
    [styles['button__green']]: color === 'green',
    [styles['button__yellow']]: color === 'yellow',

    [styles['button__small']]: size === 'small',
    [styles['button__medium']]: size === 'medium',
    [styles['button__big']]: size === 'big',

    [styles['button__disabled']]: disabled,
  });
  return (
    <button className={classes} onClick={onClick}>
      {title}
    </button>
  );
};
