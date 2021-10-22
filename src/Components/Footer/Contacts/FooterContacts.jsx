import { Contacts } from '../../Shared/Contacts/Contacts'
import FooterContractsStyle from './FooterContracts.module.css'

const contacts = [
  {
    term: "Адрес",
    description: "Калуга, ул. Маршала Жукова, д. 35"
  },
  {
    term: "Email",
    description: "Ktep@gmailcom",
    isLink: true,
    link: "mailto:Ktep@gmail.com"
  },
]

export const FooterContacts = (props) => {
return (
  <div className={`${FooterContractsStyle.wrapper} ${props.className ?? ""}`}>
        <h3 className={FooterContractsStyle.header}>ГБПОУ КО "КТЭП"</h3>
        <Contacts contacts={contacts} />
  </div>
  )
}
