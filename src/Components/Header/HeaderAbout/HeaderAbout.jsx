import { Pictures } from "./Pictures/Pictures";
import { Link } from "react-router-dom";

import HeaderAboutStyle from "./HeaderAbout.module.css";

export const HeaderAbout = (props) => {
	return (
		<section className={`${props.className ?? ""} ${HeaderAboutStyle.section}`}>
			<h2 className={HeaderAboutStyle.header}>Калуга</h2>
			<Pictures className={HeaderAboutStyle.pictures} />
			<Link className={HeaderAboutStyle.scroll} to="#">
				← Scroll
			</Link>
		</section>
	);
};
