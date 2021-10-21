import FieldStyle from "./Field.module.css";

export const Field = (props) => {
	return (
		<label className={`${FieldStyle.label} ${props.className ?? ""}`}>
			{props.children}
			<input
				{...props.input}
				className={`${FieldStyle.field} ${props.fieldClass}`}
				placeholder={props.placeholder}
				autoFocus={props.focus}
			/>
		</label>
	);
};
