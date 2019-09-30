import React from "react";
import { withRouter } from "react-router";
import { useAuthContext, AuthContext } from "./AuthContext";

const AuthButton = withRouter(() => {
  const { auth } = React.useContext(AuthContext);
  const { logout } = useAuthContext(AuthContext);

  const buttonHandler = () => logout("/");

  return auth.isAuthenticated ? (
    <p>
      Welcome! <button onClick={buttonHandler}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
});

export default AuthButton;
