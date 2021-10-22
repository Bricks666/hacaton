import { Route, Switch } from "react-router";
import { Card } from "../Cards/Card/Card";
import { MainCards } from "../Cards/MainCards/MainCards";
import Cards from "../Shared/Cards/Cards";
import { Container } from "../Shared/Container/Container";
import { Map } from "../Shared/Map/Map";
import { Slider } from "../Sight/Slider/Slider";

import MainStyle from "./Main.module.css";

export const Main = (props) => {

	return (
		<main id="main">
			<Container>
				<Switch>
					<Route exact path="/">
						<MainCards />
						<Map className={MainStyle.map} header={"Посмотреть на карте"}/>
					</Route>
          <Route exact path="/sightsides">
            <Cards header={"Все достопримечательности"} Card={Card}/>
              <Slider photos={["/fakephoto.jpg",
                  "/CardDescription.jpg",
                  "/fakephoto.jpg",
                  "/fakephoto.jpg",
                  "/fakephoto.jpg",
                  "/20200306-cara-post.jpg",
                  "/fakephoto.jpg"]}/>
          </Route>
          <Route exact path="/sightsides/:id">
            <Slider photos={["/fakephoto.jpg",
              "/fakephoto.jpg",
              "/fakephoto.jpg",
              "/fakephoto.jpg",
              "/fakephoto.jpg",
              "/fakephoto.jpg",
              "/fakephoto.jpg"]}/>
          </Route>
				</Switch>
			</Container>
		</main>
	);
};
