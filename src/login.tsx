import React from "react";
import { AuthContext } from "./AuthContext";
import { RouteComponentProps, Redirect } from "react-router";

export default function Login(props: RouteComponentProps) {
  const [state, setState] = React.useState({ redirectToReferrer: false });
  const fakeAuth = React.useContext(AuthContext);

  const login = () => {
    fakeAuth.authenticate(() => {
      setState({ redirectToReferrer: true });
    });
  };

  let { from } = props.location.state || { from: { pathname: "/" } };
  let { redirectToReferrer } = state;

  if (redirectToReferrer) return <Redirect to={from} />;

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}
