import { useState } from "react";
import MarkerStyle from "./Marker.module.css";

export const Marker = (props) => {
	const [showCard, toggleShow] = useState(false);
	console.log(showCard);
	return (
		<div
			lat={props.lat}
			lbg={props.lng}
			className={`${MarkerStyle.marker} ${
				props.$hover ? MarkerStyle.markerHover : ""
			}`}
			onClick={() => toggleShow(showCard)}
		>
			{props.children}
		</div>
	);
};
