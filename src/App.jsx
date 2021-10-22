import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";
import { Footer } from "./Components/Footer/Footer";
import { CityContext } from "./CityContext";

import "./App.css";
import {useState} from "react";

const cities = {
	currentCity: { name: "Калуга", location: { lat: 54.32, lng: 36.16 } },
	cities: {
		Калуга: { lat: 54.32, lng: 36.16 },
    Обнинск: { lat: 55.06, lng: 36.37 }
	},
	changeCity(name) {
		if (this.cities[name] === undefined) {
			throw new ReferenceError("Такого города не существует");
		}
		this.currentCity = { name, location: this.cities[name] };
	},
};

function App() {

	return (
		<Router>
			<CityContext.Provider value={cities}>
				<Header />
				<Main />
				<Footer />
			</CityContext.Provider>
		</Router>
	);
}

export default App;
