import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import UserContext, { USER_ACTIONS } from "../context/UserContext";

export default function SignIn() {
  const { globalUser, globalUserActions } = useContext(UserContext);
  // const location = useLocation();

  const [user, setuser] = useState({
    email: globalUser.email || "",
    password: "",
  });

  function changed(e) {
    setuser({ ...user, [e.target.name]: e.target.value });
  }

  function signIn(e) {
    e.preventDefault();
    console.log("Sign in " + JSON.stringify(user));
    globalUserActions({ type: USER_ACTIONS.SIGN_IN, payload: user });
  }

  return (
    <div>
      <h2>Sign in</h2>
      <form onSubmit={signIn}>
        <input
          value={user.email}
          name="email"
          type="email"
          placeholder="email"
          onChange={(e) => changed(e)}
        />
        <input
          type="password"
          value={user.password}
          name="password"
          placeholder="password"
          onChange={(e) => changed(e)}
        />
        <input type="submit" value="Sign in" />
      </form>
      <Link to="/sign-up">Sign up</Link>
    </div>
  );
}
