import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "../body/home/Home.jsx";
import User from "../body/user/User.js";

export default props => {
    return <>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/cadastro-usuario" component={User} />
            </Switch>
        </HashRouter>
    </>
}