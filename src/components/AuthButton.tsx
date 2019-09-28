import React from "react";
import { withRouter } from "react-router";
import { AuthContext } from "./AuthContext";

const AuthButton = withRouter(({ history }) => {
  return (
    <AuthContext.Consumer>
      {fakeAuth =>
        fakeAuth.isAuthenticated ? (
          <p>
            Welcome!{" "}
            <button onClick={() => fakeAuth.dispatch({ type: "logout" })}>
              Sign out
            </button>
          </p>
        ) : (
          <p>You are not logged in.</p>
        )
      }
    </AuthContext.Consumer>
  );
});

export default AuthButton;
