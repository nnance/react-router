import React from "react";
import { AuthContext, useAuthContext } from "./AuthContext";
import { RouteComponentProps } from "react-router";

export default function Login(props: RouteComponentProps) {
  const { login } = useAuthContext(AuthContext);

  const { from } = props.location.state || { from: { pathname: "/" } };

  const loginHandler = () => login("God", from);

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={loginHandler}>Log in</button>
    </div>
  );
}
