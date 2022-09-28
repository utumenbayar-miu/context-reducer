import React, { useContext, useState } from "react";
import UserContext, { USER_ACTIONS } from "../context/UserContext";

export default function SignIn() {
  const { user: global_user, userActions } = useContext(UserContext);
  const [user, setuser] = useState({ email: "", password: "" });

  console.log(global_user);

  function changed(e) {
    setuser({ ...user, [e.target.name]: e.target.value });
  }

  function signIn(e) {
    e.preventDefault();
    console.log("Sign in " + JSON.stringify(user));
    console.log(userActions({ type: USER_ACTIONS.SIGN_IN, payload: { user } }));
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
    </div>
  );
}
