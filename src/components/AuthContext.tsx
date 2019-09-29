import React from "react";

type Auth = {
  isAuthenticated: boolean;
  login: (user: string) => Promise<void>;
  logout: () => Promise<void>;
};

export const AuthContext = React.createContext<Partial<Auth>>({
  isAuthenticated: false
});

type Action =
  | { type: "login"; user: string; redirect?: string }
  | { type: "logout"; redirect?: string };

export function useFakeAuth() {
  const stateReducer = (state: boolean, { type, ...rest }: Action) => {
    switch (type) {
      case "login": {
        // if (rest.redirect) history.push(rest.redirect);
        return true;
      }
      case "logout":
        // if (rest.redirect) history.push(rest.redirect);
        return false;
      default:
        return state;
    }
  };

  const [isAuthenticated, dispatch] = React.useReducer(stateReducer, false);

  const fakeAPICall = async () => setTimeout(() => true, 100);

  const login = (user: string) =>
    fakeAPICall().then(() => dispatch({ type: "login", user }));

  const logout = () => fakeAPICall().then(() => dispatch({ type: "logout" }));

  return {
    isAuthenticated,
    login,
    logout
  };
}
