import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  RouteProps
} from "react-router-dom";

import { useFakeAuth, AuthContext } from "./AuthContext";
import Login from "./login";
import AuthButton from "./AuthButton";

////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

function AuthExample() {
  const auth = useFakeAuth();
  return (
    <AuthContext.Provider value={auth}>
      <Router>
        <div>
          <AuthButton />
          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>
          <Route path="/public" component={Public} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/protected" component={Protected} />
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

function Public() {
  return <h3>Public</h3>;
}

function Protected() {
  return <h3>Protected</h3>;
}

export default AuthExample;
