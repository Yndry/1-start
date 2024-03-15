import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface CartProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  hcontent: string;
  pcontent: string;
  imgSrc: string;
}
