import classNames from 'classnames';

import styles from './Button.module.scss';

type ButtonProps = {
  title: string;
  color: 'red' | 'green' | 'yellow';
  onClick?: () => void;
  disabled?: boolean;
};

export const Button = ({
  title,
  color,
  onClick,
  disabled = false,
}: ButtonProps) => {
  const classes = classNames(styles['button'], {
    [styles['button__red']]: color === 'red',
    [styles['button__green']]: color === 'green',
    [styles['button__yellow']]: color === 'yellow',
    [styles['button__disabled']]: disabled,
  });
  return (
    <button className={classes} onClick={onClick}>
      {title}
    </button>
  );
};
