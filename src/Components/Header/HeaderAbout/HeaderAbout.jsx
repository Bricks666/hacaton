import { Pictures } from "./Pictures/Pictures";


import HeaderAboutStyle from "./HeaderAbout.module.css";

export const HeaderAbout = (props) => {

	return (
		<section className={`${props.className ?? ""} ${HeaderAboutStyle.section}`}>
			<h2 className={HeaderAboutStyle.header}>Калуга</h2>
			<Pictures className={HeaderAboutStyle.pictures} />
			<a className={HeaderAboutStyle.scroll} href="#main">
				← Scroll
			</a>
		</section>
	);
};
