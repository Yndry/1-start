import { HtagProps } from "./Htag.props";
import styles from "./Htag.module.css";
import cn from "classnames";

export const Htag = ({size, children, className, ...props}: HtagProps) => {
	return (
		<p className={cn(styles.p, className, {
			[styles.h1]: size == 'h1',
			[styles.h2]: size == 'h2',
			[styles.h3]: size == 'h3',
		})}
		{...props}>
			{children}
		</p>
	)

}