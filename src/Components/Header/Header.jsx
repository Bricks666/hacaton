import { Navigation } from "./Navigation/Navigation"
import { Picture } from "../Shared/Picture/Picture"
import logoSrc from './logo.svg';

import HeaderStyle from "./Header.module.css";
import { Search } from "./Search/Search";

export const Header = (props) => {
  return (
    <header className={HeaderStyle.header}>
      <Picture className={HeaderStyle.picture} src={logoSrc} alt="Логотип"/>
      <Navigation className={HeaderStyle.nav} />
      <Search />
    </header>
  )
}
