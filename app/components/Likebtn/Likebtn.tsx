import { LikebtnProps } from './Likebtn.props';
import Likesvg from './like.svg';
import styles from './Likebtn.module.css';
import cn from 'classnames';

export const Likebtn = ({
  color = 'colorless',
  className,
  ...props
}: LikebtnProps): JSX.Element => {
  return (
    <Likesvg
      className={cn(styles.button, className, {
        [styles.blue]: color == 'blue',
        [styles.colorless]: color == 'colorless',
        [styles.red]: color == 'red',
      })}
    />
  );
};
