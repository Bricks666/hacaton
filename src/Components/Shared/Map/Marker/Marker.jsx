import MarkerStyle from "./Marker.module.css";

export const Marker = (props) => {
	console.log(props);
	return (
		<div
			lat={props.lat}
			lbg={props.lng}
			className={`${MarkerStyle.marker} ${
				props.$hover ? MarkerStyle.markerHover : ""
			}`}
		>
			{props.children}
		</div>
	);
};
