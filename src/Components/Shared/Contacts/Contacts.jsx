import ContactsStyle from "./Contacts.module.css";

const render = (contacts) => {
  return contacts.map((contact) =>
    contact.description ?
    <>
    <dt className={ContactsStyle.term}>{contact.term}</dt>
    <dd className={ContactsStyle.description}>{contact.isLink? <a className={ContactsStyle.link} href={contact.link}>{contact.description}</a>: contact.description}</dd>
    </>
     : ""
  )
}

export const Contacts = (props) => {
	return (
			<dl className={ContactsStyle.list}>
          {render(props.contacts)}
			</dl>
	);
};
