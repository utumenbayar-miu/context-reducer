import React, { useReducer, useState } from "react";

const init = { name: "", email: "", password: "" };

const UserContext = React.createContext(init);

export const USER_ACTIONS = {
  SIGN_IN: "sign-in",
  SIGN_UP: "sign-up",
};

function reducer(user, action) {
  switch (action.type) {
    case USER_ACTIONS.SIGN_IN:
      const userSubmitted = action.payload.user;
      return (
        userSubmitted.email === user.email &&
        userSubmitted.password === user.password
      );
    case USER_ACTIONS.SIGN_UP:
      user = { ...action.payload.user };
      return user;
    default:
      return "Error: The user action doesn't exist!";
  }
}

export function UserStore({ children }) {
  const [user, dispatch] = useReducer(reducer, init);

  return (
    <UserContext.Provider value={{ user, userActions: dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
