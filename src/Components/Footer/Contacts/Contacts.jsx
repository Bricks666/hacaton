import ContactsStyle from "./Contacts.module.css";

export const Contacts = (props) => {
	return (
		<div className={`${ContactsStyle.wrapper} ${props.className ?? ""}`}>
			<h3 className={ContactsStyle.header}>ГБПОУ КО "КТЭП"</h3>
			<dl className={ContactsStyle.list}>
				<dt className={ContactsStyle.term}>Адрес</dt>
				<dd className={ContactsStyle.description}>
					Калуга, ул. Маршала Жукова, д. 35
				</dd>
				<dt className={ContactsStyle.term}>Email</dt>
				<dd className={ContactsStyle.description}>
					<a className={ContactsStyle.link} href="mailto:Ktep@gmail.com">
						Ktep@gmail.com
					</a>
				</dd>
			</dl>
		</div>
	);
};
