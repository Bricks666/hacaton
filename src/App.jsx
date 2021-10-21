import {BrowserRouter as Router} from 'react-router-dom';

import './App.css';
import {Header} from './Components/Header/Header';
import Cards from "./Components/Cards/Cards";
import CardDescription from "./Components/CradDescription/CardDescription";

function App() {
    return (
        <Router>
            <CardDescription
                SectionTitle="Достапримичательности города Калуги"
                SubTitle="Get Started"
                Title="Saturn"
                Body="Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine times that of Earth. It only has one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive. Saturn is named after the Roman god of wealth and agriculture; its astronomical symbol  represents the god's sickle."
            />
        </Router>
    )
}

export default App;
