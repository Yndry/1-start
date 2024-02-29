
import { useState } from "react";
import { Cart } from "./components/Cart/Cart";
import { Blog } from "./components/Blog/Blog";
import { Htag } from "./components/Htag/Htag";

export default function Home(): JSX.Element {
  return (
		<div className="wrapper">
			<Cart>
				<Blog/>
					<div className="cart__front-end">
						<div className="front-end__content">
							<span>Front-end | 1 месяц назад</span>
						</div>
						<Htag size="h3">Как работать с CSS Grid</Htag>
				</div>
			</Cart>
		</div>
  );
};
