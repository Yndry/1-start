
import { useState } from "react";
import { Cart } from "./components/Cart/Cart";

export default function Home(): JSX.Element {
  return (
		<div className="wrapper">
			<Cart 
				hcontent="Как работать с CSS Grid"
				pcontent="Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..."/>
		</div>
  );
};
