import { Container } from "../Shared/Container/Container";
import { Contacts } from "./Contacts/Contacts";
import { SocialNetworks } from "./SocialNetworks/SocialNetworks";

import FooterStyle from "./Footer.module.css";

export const Footer = (props) => {
	return (
		<footer className={FooterStyle.footer}>
			<Container className={FooterStyle.container}>
				<h2 className={FooterStyle.header}>Контакты</h2>
				<SocialNetworks />
				<Contacts className={FooterStyle.last} />
			</Container>
		</footer>
	);
};
