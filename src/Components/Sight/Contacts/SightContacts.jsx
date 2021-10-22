import { Contacts } from "../../Shared/Contacts/Contacts"

export const SightContacts = (props)  => {
  return (
    <div>
      <h3>Контактная информация</h3>
      <Contacts contacts={props.contacts} />
    </div>
  )
}
