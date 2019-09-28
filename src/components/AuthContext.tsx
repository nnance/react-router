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
  | { type: "login"; user: string; cb?: (state: boolean) => void }
  | { type: "logout"; cb?: (state: boolean) => void };

const stateReducer = (state: boolean, { type, ...rest }: Action) => {
  switch (type) {
    case "login":
      return true;
    case "logout":
      return false;
    default:
      return state;
  }
};

export function useFakeAuth() {
  const [isAuthenticated, dispatch] = React.useReducer((state, action) => {
    const newState = stateReducer(state, action);
    if (action.cb) action.cb(newState);
    return newState;
  }, false);

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
