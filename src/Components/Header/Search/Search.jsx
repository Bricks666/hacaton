import { Form, Field } from "react-final-form";
import { Button } from "../../Shared/Button/Button";
import { Field as MyField } from "../../Shared/Field/Field";

import SearchStyle from "./Search.module.css";

const onSubmit = (e) => {
	return new Promise((resolve) => setTimeout(resolve, 300));
};

export const Search = (props) => {
	return (
		<Form
			className={props.className}
			onSubmit={onSubmit}
			render={(props) => {
				const showInput = props.form.getFieldState("search")?.active;

				const onSubmit = async (evt) => {
					await props.handleSubmit(evt);
					props.form.blur("search");
					props.form.reset();
				};

				const onCLick = showInput
					? () => {}
					: (evt) => {
							evt.preventDefault();
							props.form.focus("search");
					  };
				return (
					<form
						className={`${props.className ?? ""} ${SearchStyle.search} ${
							showInput ? SearchStyle.showSearch : ""
						}`}
						onSubmit={onSubmit}
					>
						<Field
							className={`${SearchStyle.fieldBlock} `}
							fieldClass={SearchStyle.field}
							name="search"
							component={MyField}
							focus={showInput}
							placeholder="Введите название достопримечательности"
						/>
						<Button
							onClick={onCLick}
							className={`${SearchStyle.button} `}
							disabled={props.pristine && showInput}
							type="submit"
						/>
					</form>
				);
			}}
		/>
	);
};
