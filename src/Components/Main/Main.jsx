import { Route, Switch } from "react-router";
import Cards from "../Cards/Cards";

export const Main = (props) => {
	return (
		<main>
			<Switch>
				<Route exact path="/">
					<Cards />
				</Route>
			</Switch>
		</main>
	);
};
