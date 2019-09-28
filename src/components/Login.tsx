import React from "react";
import { AuthContext } from "./AuthContext";
import { RouteComponentProps } from "react-router";

export default function Login(props: RouteComponentProps) {
  const fakeAuth = React.useContext(AuthContext);

  const { from } = props.location.state || { from: { pathname: "/" } };

  const login = () => {
    fakeAuth.dispatch({
      type: "login",
      user: "God",
      redirect: from
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}
