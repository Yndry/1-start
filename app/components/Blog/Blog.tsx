//Компонент Блога (Пока статичная картинка)

import styles from './Blog.module.css';
import { BlogProps } from './Blog.props';

export const Blog = ({ imgSrc }: BlogProps): JSX.Element => {
  return (
    <div className={styles.cart__blog}>
      <img className={styles.cart__img} src={imgSrc}></img>
    </div>
  );
};
