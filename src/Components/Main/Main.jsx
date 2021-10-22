import { Route, Switch } from "react-router";
import Cards from "../Cards/Cards";
import { Container } from "../Shared/Container/Container";
import { Map } from "../Shared/Map/Map";

import MainStyle from "./Main.module.css";

export const Main = (props) => {
	return (
		<main>
			<Container>
				<Switch>
					<Route exact path="/">
						<Cards />
						<Map className={MainStyle.map} />
					</Route>
				</Switch>
			</Container>
		</main>
	);
};
