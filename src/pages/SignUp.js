import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [user, setuser] = useState({ name: "", email: "", password: "" });

  function changed(e) {
    setuser({ ...user, [e.target.name]: e.target.value });
  }

  function signUp(e) {
    e.preventDefault();
    console.log("Sign up " + JSON.stringify(user));
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
      <Link to="/sign-in">Sign in</Link>
    </div>
  );
}
