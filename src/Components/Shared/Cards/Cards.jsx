import React from "react";
import { Picture } from "../Picture/Picture";
import MyStyle from "./Cards.module.css";


const Cards = (props) => {
	return (
		<section className={MyStyle.section}>
			<h2 className={MyStyle.header}>
				{props.header}
			</h2>
      <Picture className={MyStyle.picture} src={'/bro.png'}/>
			<ul className={MyStyle.wrapper}>
				{props.items.map((e) => (
					<props.Card {...e} key={e.id}/>
				))}
			</ul>
      {props.children}
		</section>
	);
};

export default Cards;
