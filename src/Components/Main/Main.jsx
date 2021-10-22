import { Route, Switch } from "react-router";
import { Card } from "../Shared/Card/Card";
import { MainCards } from "../Cards/MainCards/MainCards";
import Cards from "../Shared/Cards/Cards";
import { Container } from "../Shared/Container/Container";
import { Map } from "../Shared/Map/Map";
import { SightWithRouter } from '../Sight/Sight'

import MainStyle from "./Main.module.css";
import data from '../../sw_templates.json'
import { toValidCard } from "../../toValidCard";

const cardArray = Object.values(JSON.parse(data)).map(toValidCard)

export const Main = (props) => {

	return (
		<main id="main">
			<Container>
				<Switch>
					<Route exact path="/">
						<MainCards items={cardArray} />
						<Map className={MainStyle.map} header={"Посмотреть на карте"}/>
					</Route>
          <Route exact path="/sightsides">
            <Cards header={"Все списки достопримечательностей в Калуге"} Card={Card} items={cardArray}/>
          </Route>
          <Route exact path="/sightsides/:id">
          <SightWithRouter sights={cardArray}/>
          </Route>
				</Switch>
			</Container>
		</main>
	);
};
