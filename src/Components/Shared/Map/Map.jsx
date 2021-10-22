import { useEffect, useState } from "react";
import { Marker } from "./Marker/Marker";
import GoogleMap from "google-map-react";

import MapStyle from "./Map.module.css";
import { useCityContext } from "../../../CityContext";

const createMapOptions = (maps) => {
	return {
		streetViewControlOptions: {},
		fullscreenControl: false,
		streetViewControl: true,
	};
};

export const Map = (props) => {
	debugger;
	const cities = useCityContext();
	const [center, setCenter] = useState(cities.currentCity.location);

	useEffect(() => {
		setCenter(cities.currentCity.location);
	}, [cities.currentCity]);

	const onChildClick = (id, childProps) => {
		setCenter([childProps.lat, childProps.lng]);
		console.log(center);
	};

	return (
		<section className={`${MapStyle.wrapper} ${props.className ?? ""}`}>
			<h2 className={MapStyle.header}>Посмотреть на карте</h2>
			<GoogleMap
				center={center}
				zoom={15}
				options={createMapOptions}
				hoverDistance={40}
				onChildClick={onChildClick}
				onChildMouseEnter={(...props) => console.log(props)}
			>
				<Marker lat={54.32} lng={36.14}>
					Тестовая точка
				</Marker>
				<Marker lat={54.32} lng={36.18}>
					Тестовая точка
				</Marker>
			</GoogleMap>
		</section>
	);
};
