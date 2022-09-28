import React, { useContext, useState } from "react";
import UserContext, { USER_ACTIONS } from "../context/UserContext";
import { Navigate, useNavigate } from "react-router-dom";

export default function SignUp() {
  const { userActions } = useContext(UserContext);
  const [user, setuser] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  function changed(e) {
    setuser({ ...user, [e.target.name]: e.target.value });
  }

  function signUp(e) {
    e.preventDefault();
    console.log("Sign up " + JSON.stringify(user));
    userActions({ type: USER_ACTIONS.SIGN_UP, payload: { user } });
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
    </div>
  );
}
