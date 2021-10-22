import { useCityContext } from "../../../CityContext";

import CityStyle from "./City.module.css"

const renderOptions = (cities) => {
	return Object.entries(cities).map((pair) => {
		return (
			<option value={pair[0]} key={pair[0]}>
				{pair[0]}
			</option>
		);
	});
};

export const City = (props) => {
	const cities = useCityContext();
	return (
		<div className={`${props.className ?? ""} ${CityStyle.wrapper}`}>
			<select className={CityStyle.select} onChange={(evt) => cities.changeCity(evt.target.value)}>
				{renderOptions(cities.cities)}
			</select>
		</div>
	);
};
