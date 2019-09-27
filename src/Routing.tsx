import React from "react";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
  RouteProps,
  Redirect
} from "react-router-dom";

import App from "./App";
import Users from "./users";
import Contact from "./contact";
import Notfound from "./notfound";
import Login from "./login";
import { AuthContext, useFakeAuth } from "./AuthContext";
import AuthButton from "./AuthButton";

export default function Routing() {
  const auth = useFakeAuth();

  return (
    <AuthContext.Provider value={auth}>
      \
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
            <PrivateRoute path="/users" component={Users} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route component={Notfound} />
          </Switch>
          <AuthButton />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

const PrivateRoute = (props: RouteProps) => {
  const Component = props.component;
  return (
    <AuthContext.Consumer>
      {fakeAuth => (
        <Route
          path={props.path}
          render={routeProps =>
            fakeAuth.isAuthenticated && Component ? (
              <Component {...routeProps} />
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: routeProps.location }
                }}
              />
            )
          }
        />
      )}
    </AuthContext.Consumer>
  );
};
