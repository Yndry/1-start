import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface LikebtnProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	color: 'colorless' | 'red' | 'blue',
}