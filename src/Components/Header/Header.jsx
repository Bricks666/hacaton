import { Navigation } from "./Navigation/Navigation";
import { Logo } from "./Logo/Logo";
import { Search } from "./Search/Search";
import { HeaderAbout } from "./HeaderAbout/HeaderAbout";

import HeaderStyle from "./Header.module.css";
import { Container } from "../Shared/Container/Container";
import { City } from "./City/City";

export const Header = (props) => {
	return (
		<header className={HeaderStyle.header}>
			<Container className={HeaderStyle.container}>
				<Logo className={HeaderStyle.picture} />
				<Navigation className={HeaderStyle.nav} />
				<City className={HeaderStyle.cities} />
				<Search className={HeaderStyle.search} />
				<HeaderAbout className={HeaderStyle.headerAbout} />
			</Container>
		</header>
	);
};
