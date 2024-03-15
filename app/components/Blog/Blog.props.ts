import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface BlogProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  imgSrc: string;
}
