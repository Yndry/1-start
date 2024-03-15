import { useState } from 'react';
import { Cart } from './components/Cart/Cart';

export default function Home(): JSX.Element {
  const map = new Map<string, object>([
    [
      'blog1',
      {
        src: './blog_img.jpg',
        width: 300,
        height: 300,
      },
    ],
    [
      'blog2',
      {
        src: './blog2_img.jpg',
        width: 300,
        height: 300,
      },
    ],
  ]);

  return (
    <div className="wrapper">
      {/*Размещаем одну карточку */}
      <Cart
        imgSrc={map.get('blog1').src} //Прокидываем путь до картинки в карточку
        hcontent="Как работать с CSS Grid"
        pcontent="Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..."
      />
    </div>
  );
}
