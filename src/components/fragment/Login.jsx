import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../actions/actions";

function LoginFragment() {
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const dispatch = useDispatch();

  async function onLogin(e) {
    e.preventDefault();
    console.log(loginValue, passwordValue);
    const data = await axios.post("http://localhost:4444/api/v1/users/signin", {
      email: loginValue,
      password: passwordValue,
    });
    if (data.status !== 200) {
      // alert error
    } else {
      localStorage.setItem("token", data?.data?.token);
      dispatch(setUser(data?.data?.user));
    }
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
