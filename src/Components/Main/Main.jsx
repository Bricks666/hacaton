import { Route, Switch } from "react-router";
import { Card } from "../Cards/Card/Card";
import { MainCards } from "../Cards/MainCards/MainCards";
import Cards from "../Shared/Cards/Cards";
import { Container } from "../Shared/Container/Container";
import { Map } from "../Shared/Map/Map";

import MainStyle from "./Main.module.css";

export const Main = (props) => {
	return (
		<main>
			<Container>
				<Switch>
					<Route exact path="/">
						<MainCards />
						<Map className={MainStyle.map} header={"Посмотреть на карте"}/>
					</Route>
          <Route exact path="/sightsides">
            <Cards header={"Все достопримечательности"} Card={Card}/>
          </Route>
          <Route exact path="/sightsude/:id">

          </Route>
				</Switch>
			</Container>
		</main>
	);
};
