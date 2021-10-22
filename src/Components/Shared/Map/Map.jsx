import { useState } from "react";
import { Marker } from "./Marker/Marker";
import GoogleMap from "google-map-react";

import MapStyle from "./Map.module.css";

const createMapOptions = (maps) => {
	return {
		zoomControlOptions: {
			position: maps.ControlPosition.LEFT_BOTTOM,
			style: maps.ZoomControlStyle.SMALL,
		},
		mapTypeControlOptions: {
			position: maps.ControlPosition.LEFT_TOP,
			style: maps.MapTypeControlStyle.DROPDOWN_MENU,
		},
		streetViewControlOptions: {},
		mapTypeControl: true,
		fullscreenControl: false,
		streetViewControl: true,
		tilt: 45,
	};
};
export const Map = (props) => {
	console.log(props);
	const [center, setCenter] = useState([54.32, 36.16]);
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
