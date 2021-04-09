import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Redirect, Route, Router, Switch } from "react-router-dom";

// core components
import Admin from "@/layouts/Admin";
import RTL from "@/layouts/RTL";

import "@/assets/css/material-dashboard-react.css?v=1.9.0";

const hist = createBrowserHistory();
ReactDOM.render(
    <React.StrictMode>
        <Router history={hist}>
            <Switch>
                <Route path="/admin" component={Admin}/>
                <Route path="/rtl" component={RTL}/>
                <Redirect from="/" to="/admin/dashboard"/>
            </Switch>
        </Router>,
    </React.StrictMode>,
    document.getElementById('root')
)
