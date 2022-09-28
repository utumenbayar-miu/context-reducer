import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext, { USER_ACTIONS } from "../context/UserContext";

export default function SignUp() {
  const navigate = useNavigate();
  const { globalUserActions } = useContext(UserContext);
  const [user, setuser] = useState({ name: "", email: "", password: "" });

  function changed(e) {
    setuser({ ...user, [e.target.name]: e.target.value });
  }

  function signUp(e) {
    e.preventDefault();
    console.log("Sign up " + JSON.stringify(user));
    globalUserActions({ type: USER_ACTIONS.SIGN_UP, payload: user });
    // why is reducer function triggered after function returned when it is not a promise.
    navigate("/sign-in");
  }

  return (
    <div>
      <h2>Sign up</h2>
      <form onSubmit={signUp}>
        <input
          value={user.name}
          name="name"
          placeholder="name"
          onChange={(e) => changed(e)}
        />
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
        <input type="submit" value="Sign up" />
      </form>
      <Link to="/sign-in" state={{ email: user.email }}>
        Sign in
      </Link>
    </div>
  );
}
