import React from "react";
import { AuthContext } from "./AuthContext";
import { RouteComponentProps, Redirect } from "react-router";

export default function Login(props: RouteComponentProps) {
  const [state, setState] = React.useState({ redirectToReferrer: false });
  const fakeAuth = React.useContext(AuthContext);

  const login = () => {
    // TODO: make async
    fakeAuth.dispatch({ type: "login", user: "God" });
    setState({ redirectToReferrer: true });
  };

  let { from } = props.location.state || { from: { pathname: "/" } };
  let { redirectToReferrer } = state;

  if (redirectToReferrer && fakeAuth.isAuthenticated)
    return <Redirect to={from} />;

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}
