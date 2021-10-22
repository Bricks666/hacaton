import { useCityContext } from "../../../CityContext";

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
	console.log(cities);
	return (
		<div className={`${props.className ?? ""}`}>
			<select onChange={(evt) => cities.changeCity(evt.target.value)}>
				{renderOptions(cities.cities)}
			</select>
		</div>
	);
};
