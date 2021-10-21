import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import { Header } from "./Components/Header/Header";

import { Main } from "./Components/Main/Main";

function App() {
	return (
		<Router>
			<Header />
			<Main />
		</Router>
	);
}

export default App;
