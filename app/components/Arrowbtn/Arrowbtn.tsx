
import Arrowsvg from './arrow.svg';
import styles from "./Arrowbtn.module.css";
import cn from "classnames";
import { ArrowProps } from "./Arrowbtn.props";

export const Arrowbtn = ({color = 'colorless', className, ...props}:ArrowProps): JSX.Element => {
return (
	<button className={cn(styles.button, className, {
		[styles.blue]: color == 'blue',
		[styles.colorless]: color == 'colorless',
		[styles.red]: color == 'red'})}
	{...props}
	>
	Читать
	<Arrowsvg/>
	</button>
)
}
// 	<Arrowsvg className={cn(styles.button, className, {
// 		[styles.blue]: color == 'blue',
// 		[styles.colorless]: color == 'colorless',
// 		[styles.red]: color == 'red'})}/>
// )
