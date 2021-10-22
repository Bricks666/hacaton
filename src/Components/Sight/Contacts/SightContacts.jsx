import { Contacts } from "../../Shared/Contacts/Contacts"

import ContactsStyle from './Contacts.module.css'

export const SightContacts = (props)  => {
  return (
    <div className={`${props.className ?? ""}`}>
      <h3 className={ContactsStyle.header}>Контактная информация</h3>
      <Contacts contacts={props.contacts} />
    </div>
  )
}
