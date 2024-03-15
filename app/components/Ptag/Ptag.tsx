//Компонент Размер параграфа

import { PtagProps } from './Ptag.props';
import styles from './Ptag.module.css';
import cn from 'classnames';
export const Ptag = ({
  size = 'm',
  children,
  className,
  ...props
}: PtagProps) => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.s]: size == 's',
        [styles.m]: size == 'm',
        [styles.l]: size == 'l',
      })}
      {...props}
    >
      {children}
    </p>
  );
};
