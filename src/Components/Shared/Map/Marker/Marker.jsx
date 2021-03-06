import { useState } from "react";
import {Picture} from '../../../Shared/Picture/Picture'

import MarkerStyle from "./Marker.module.css";

export const Marker = (props) => {
	const [showCard, toggleShow] = useState(false);
	return (
		<div
			lat={props.lat}
			lbg={props.lng}
			className={`${MarkerStyle.marker} ${
				props.$hover ? MarkerStyle.markerHover : ""
			}`}
			onClick={() => toggleShow(showCard)}
		>
			<Picture className={MarkerStyle.icon} src="/fakephoto.jpg"/>
		</div>
	);
};
