import React from "react";
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch
} from "react-router-dom";

import App from "./App";
import Users from "./users";
import Contact from "./contact";
import Notfound from "./notfound";

export default function Routing() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <NavLink exact activeClassName="active" to="/">
                            Home
                    </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/users">
                            Users
                    </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/contact">
                            Contact
                    </NavLink>
                    </li>
                </ul>
                <hr />
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/users" component={Users} />
                    <Route path="/contact" component={Contact} />
                    <Route component={Notfound} />
                </Switch>
            </div>
        </Router>
    );
}