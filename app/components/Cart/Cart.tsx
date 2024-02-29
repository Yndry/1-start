import { CartProps } from "./Cart.props";
import styles from "./Cart.module.css";
import cn from "classnames";

export const Cart = ({children, className, ...props}:CartProps): JSX.Element => {
	return (
<div className={cn(styles.cart, className, {
		})}
		{...props}>
			{children}
		</div>
	)

}