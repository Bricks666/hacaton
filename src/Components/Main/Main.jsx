import {Route, Switch} from "react-router";
import Cards from "../Cards/Cards";
import CardDescription from "../CradDescription/CardDescription";

export const Main = (props) => {
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Cards/>
                </Route>
                <Route path="/KalugaCard">
                    <CardDescription
                        SectionTitle="Достапримичательности города Калуги"
                        SubTitle="Get Started"
                        Title="Saturn"
                        Body="Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after
                        Jupiter. It is a gas giant with an average radius of about nine times that of Earth. It only has
                         one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times
                          more massive. Saturn is named after the Roman god of wealth and agriculture; its astronomical
                          symbol  represents the god's sickle."
                    />
                </Route>
            </Switch>
        </main>
    );
};
