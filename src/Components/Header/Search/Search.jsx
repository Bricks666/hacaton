import { Form, Field } from "react-final-form";
import { Button } from "../../Shared/Button/Button";
import { Field as MyField } from "../../Shared/Field/Field";

import SearchStyle from "./Search.module.css";

const onSubmit = (props) => {
	console.log(props);
};

export const Search = (props) => {
	return (
		<Form
			onSubmit={onSubmit}
			render={(props) => {
				const showInput = props.form.getFieldState("search")?.active;

				const onSubmit = async (evt) => {
					await props.handleSubmit(evt);
					props.form.reset();
				};

				const onCLick = showInput
					? () => {}
					: (evt) => {
							evt.preventDefault();
							props.form.focus("search");
					  };

				return (
					<form className={SearchStyle.search} onSubmit={onSubmit}>
						<Field
							className={`${SearchStyle.fieldBlock} ${
								showInput ? SearchStyle.showField : ""
							}`}
							fieldClass={SearchStyle.field}
							name="search"
							component={MyField}
							placeholder="Введите название достопримечательности"
						/>
						<Button
							onClick={onCLick}
							className={SearchStyle.button}
							type="submit"
						/>
					</form>
				);
			}}
		/>
	);
};
