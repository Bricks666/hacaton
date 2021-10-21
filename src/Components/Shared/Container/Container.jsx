import ContainerStyle from "./Container.module.css";

export const Container = (props) => {
	return (
		<div className={`${ContainerStyle.container} ${props.className ?? ""}`}>
			{props.children}
		</div>
	);
};
