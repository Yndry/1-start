import { CartProps } from './Cart.props';
import styles from './Cart.module.css';
import cn from 'classnames';
import { Blog } from '../Blog/Blog';
import { Htag } from '../Htag/Htag';
import { Ptag } from '../Ptag/Ptag';
import { Likebtn } from '../Likebtn/Likebtn';
import { Arrowbtn } from '../Arrowbtn/Arrowbtn';

export const Cart = ({
  hcontent,
  pcontent,
  className,
  ...props
}: CartProps): JSX.Element => {
  let counter = 4;
  return (
    <div className={cn(styles.cart, className, {})} {...props}>
      <Blog />
      <div className={styles.cart__content}>
        <div className={styles.cart__frontend}>
          <span>Front-end | 1 месяц назад</span>
          <div className={styles.cart__like}>
            <span>{counter}</span>
            <Likebtn color="colorless" />
          </div>
        </div>
        <Htag tag="h3">{hcontent}</Htag>
        <Ptag size="m">{pcontent}</Ptag>
        <div className={styles.read__wrapper}>
          <span>3 минуты</span>
          <Arrowbtn color={'colorless'} />
        </div>
      </div>
    </div>
  );
};
