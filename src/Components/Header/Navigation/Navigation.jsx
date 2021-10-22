import { Link } from "react-router-dom";

import NavStyle from "./Navigation.module.css";

const SubNavigation = (props) => {
	return <ul className={props.className}>{props.children}</ul>;
};

const SubNavItem = (props) => {
	return (
		<li className={props.className}>
			<Link className={NavStyle.link} to={props.to}>
				{props.children}
			</Link>
		</li>
	);
};

export const Navigation = (props) => {
	return (
		<nav className={`${props.className ?? ""}`}>
			<ul className={NavStyle.list}>
				<li className={NavStyle.item}>
					<Link className={NavStyle.link} to="/">
						Домой
					</Link>
				</li>
				<li className={NavStyle.item}>
					<Link className={NavStyle.link} to="/sightsides">Что посмотреть</Link>
				</li>
			</ul>
		</nav>
	);
};
