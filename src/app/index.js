import React from "react";
import {render} from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router";

import {Home} from "./components/Home";
import {Root} from "./components/Root";
import {User} from "./components/User";
import {Form} from "./components/Form";
import {SampleData} from "./components/SampleData";
import {RowDetails} from "./components/Form/RowDetails";
import {ListApiHome} from "./components/API/ListApiHome";
import {Comments} from "./components/Comments/Comments";

class App extends React.Component {
    render() {
        return (
            // Router div
            <Router history={browserHistory}>
                <Route path={"/"} component={Root}>
                    <IndexRoute component={Home}/>
                    <Route path={"user/:id/:name"} component={User}/>
                    <Route path={"home"} component={Home}/>
                    <Route path={"form"} component={Form}/>
                    <Route path={"sampledata"} component={SampleData}/>
                    <Route path={"rowdetails/:id/:name/:age/:group"} component={RowDetails}/>
                    <Route path={"listapihome"} component={ListApiHome}/>
                    <Route path={"comments"} component={Comments}/>
                </Route>
                <Route path={"home-single"} component={Home}/>
            </Router>
        );
    }
}

render(<App/>, window.document.getElementById("app"));