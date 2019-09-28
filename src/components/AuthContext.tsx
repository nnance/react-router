import React from "react";

type Auth = {
  isAuthenticated: boolean;
  dispatch: React.Dispatch<Action>;
};

export const AuthContext = React.createContext<Auth>({
  isAuthenticated: false,
  dispatch: () => {}
});

type Action =
  | { type: "login"; user: string; redirect?: string }
  | { type: "logout"; redirect?: string };

export function useFakeAuth(history: any) {
  const stateReducer = (state: boolean, { type, ...rest }: Action) => {
    switch (type) {
      case "login": {
        if (rest.redirect) history.redirect(rest.redirect);
        return true;
      }
      case "logout":
        if (rest.redirect) history.redirect(rest.redirect);
        return false;
      default:
        return state;
    }
  };

  const [isAuthenticated, dispatch] = React.useReducer(stateReducer, false);

  // const fakeAuth = (cb: () => void, result: boolean) => {
  //   setTimeout(() => {
  //     setIsAuthenticated(result);
  //     cb();
  //   }, 100);
  // };

  return {
    isAuthenticated,
    dispatch
    // authenticate: (cb: () => void) => {
    //   fakeAuth(cb, true); // fake async
    // },
    // signout: (cb: () => void) => {
    //   fakeAuth(cb, false);
    // }
  };
}
