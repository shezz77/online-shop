import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {routes} from "./routes";

const AppRoute = () =>
    <BrowserRouter>
        <Switch>
            {routes.map((route, index) => (
                <Route {...route}/>
            ))}

        </Switch>
    </BrowserRouter>;

export default AppRoute;