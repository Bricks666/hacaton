import { Pictures } from "./Pictures/Pictures";


import HeaderAboutStyle from "./HeaderAbout.module.css";
import { useCityContext } from "../../../CityContext";

export const HeaderAbout = (props) => {
  const {currentCity} = useCityContext()
	return (
		<section className={`${props.className ?? ""} ${HeaderAboutStyle.section}`}>
			<h2 className={HeaderAboutStyle.header}>{currentCity.name}</h2>
			<Pictures className={HeaderAboutStyle.pictures} />
			<a className={HeaderAboutStyle.scroll} href="#main">
				← Scroll
			</a>
		</section>
	);
};
