import React from "react";
import { useHistory } from "react-router";

type Auth = {
  isAuthenticated: boolean;
  user?: string;
};

type AuthContext = {
  auth: Auth;
  dispatch: React.Dispatch<Action>;
};

export const AuthContext = React.createContext<AuthContext>({
  auth: { isAuthenticated: false },
  dispatch: action => {}
});

type Action = { type: "login"; user: string } | { type: "logout" };

// TODO: add support for user name
export function useFakeAuth() {
  const stateReducer = (state: Auth, { type, ...rest }: Action) => {
    switch (type) {
      case "login":
        return { isAuthenticated: true };
      case "logout":
        return { isAuthenticated: false };
    }
  };

  const [auth, dispatch] = React.useReducer(stateReducer, {
    isAuthenticated: false
  });

  return {
    auth,
    dispatch
  };
}

export const useAuthContext = (authContext: React.Context<AuthContext>) => {
  const context = React.useContext(authContext);
  const history = useHistory();

  const fakeAPICall = async () => setTimeout(() => true, 100);

  const login = (user: string, redirect?: string) =>
    fakeAPICall().then(() => {
      context.dispatch({ type: "login", user });
      if (redirect) history.push(redirect);
    });

  const logout = (redirect?: string) =>
    fakeAPICall().then(() => {
      context.dispatch({ type: "logout" });
      if (redirect) history.push(redirect);
    });

  return {
    login,
    logout
  };
};
