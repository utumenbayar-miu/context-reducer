import React, { useReducer, useState } from "react";

const init = { name: "", email: "", password: "" };
const UserContext = React.createContext(init);

export const USER_ACTIONS = {
  SIGN_IN: "sign-in",
  SIGN_UP: "sign-up",
  FORGOT_PASSWORD: "forgot-password",
};

function reducer(globalUser, action) {
  switch (action.type) {
    case USER_ACTIONS.SIGN_IN: {
      // API call
      if (action.payload.email === "email@email.com") {
        console.log("success");
      } else {
        console.log("invalid login");
      }
    }
    case USER_ACTIONS.SIGN_UP: {
      // store data inside context
      globalUser = { ...action.payload };
      return globalUser;
    }
    default: {
      console.error("Error, no such actions");
    }
  }
}

export function UserStore({ children }) {
  const [globalUser, globalUserActions] = useReducer(reducer, init);

  return (
    <UserContext.Provider value={{ globalUser, globalUserActions }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
