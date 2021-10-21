import { Route, Switch } from "react-router";
import Cards from "../Cards/Cards";
import { Container } from "../Shared/Container/Container";
import { Map } from "../Shared/Map/Map";

export const Main = (props) => {
	return (
		<main>
			<Container>
				<Switch>
					<Route exact path="/">
						<Cards />
						<Map />
					</Route>
				</Switch>
			</Container>
		</main>
	);
};
