import axios from "axios";
import React, { useState } from "react";

function LoginFragment() {
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  async function onLogin(e) {
    e.preventDefault();
    console.log(loginValue, passwordValue);
    const data = await axios.post("http://localhost:4444/api/v1/users/signin", {
      email: loginValue,
      password: passwordValue,
    });
    if (data.status !== 200) {
      // alert error
    }
    console.log(data);
  }
  return (
    <form>
      <input
        placeholder="email"
        value={loginValue}
        onChange={(e) => setLoginValue(e.target.value)}
      />
      <input
        placeholder="password"
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
      />
      <button onClick={onLogin}>Login</button>
    </form>
  );
}

export default LoginFragment;
