import { Navigation } from "./Navigation/Navigation"
import { Picture } from "../Shared/Picture/Picture"

import HeaderStyle from "./Header.module.css";

export const Header = (props) => {
  return (
    <header className={HeaderStyle.header}>
      <Picture className={HeaderStyle.picture} src="/"/>
      <Navigation className={HeaderStyle.nav} />
    </header>
  )
}
