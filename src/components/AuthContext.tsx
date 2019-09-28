import React from "react";

type Auth = {
  isAuthenticated: boolean;
  dispatch: React.Dispatch<Action>;
};

export const AuthContext = React.createContext<Auth>({
  isAuthenticated: false,
  dispatch: () => {}
});

type Action = { type: "login"; user: string } | { type: "logout" };

const reducer = (state: boolean, { type, ...rest }: Action) => {
  if (type === "login") {
    return true;
  } else if (type === "logout") {
    // history.push("/");
    return false;
  } else {
    return state;
  }
};

export function useFakeAuth(\) {
  // const history = useHistory();
  const [isAuthenticated, dispatch] = React.useReducer(reducer, false);

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
