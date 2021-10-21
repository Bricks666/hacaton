import { Navigation } from "./Navigation/Navigation";
import { Logo } from "./Logo/Logo";
import { Search } from "./Search/Search";

import HeaderStyle from "./Header.module.css";

export const Header = (props) => {
	return (
		<header className={HeaderStyle.header}>
			<Logo className={HeaderStyle.picture} />
			<Navigation className={HeaderStyle.nav} />
			<Search />
		</header>
	);
};
