export const Picture = (props) => {
	return (
		<img
			className={props.className}
			src={`${props.src}`}
			srcSet={`${props.src}`}
			alt={props.alt}
		/>
	);
};
