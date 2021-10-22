import { useEffect, useState } from "react";
import { Marker } from "./Marker/Marker";
import GoogleMap from "google-map-react";

import MapStyle from "./Map.module.css";
import { useCityContext } from "../../../CityContext";

const createMapOptions = (maps) => {
	return {
		streetViewControlOptions: {
      position: maps.ControlPosition.LEFT_TOP
    },
		fullscreenControl: false,
		streetViewControl: true,
    streetView: true
	};
};

export const Map = (props) => {

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
			<h2 className={MapStyle.header}>{props.header}</h2>
			<GoogleMap
				center={center}
				zoom={15}
				options={createMapOptions}
				hoverDistance={20}
				onChildClick={onChildClick}
			>
			</GoogleMap>
      {props.children}
		</section>
	);
};
