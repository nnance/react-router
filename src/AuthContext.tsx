import React from "react";

export type FakeAuth = {
  isAuthenticated: boolean;
  authenticate: (cb: () => void) => void;
  signout: (cb: () => void) => void;
};

export const AuthContext = React.createContext<FakeAuth>({
  isAuthenticated: false,
  authenticate: () => {},
  signout: () => {}
});

export function useFakeAuth(): FakeAuth {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const fakeAuth = (cb: () => void, result: boolean) => {
    setTimeout(() => {
      setIsAuthenticated(result);
      cb();
    }, 100);
  };

  return {
    isAuthenticated,
    authenticate: (cb: () => void) => {
      fakeAuth(cb, true); // fake async
    },
    signout: (cb: () => void) => {
      fakeAuth(cb, false);
    }
  };
}
