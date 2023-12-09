import axios from "axios";
import React, { useState } from "react";
import { setUser } from "../../actions/actions";
import { useDispatch } from "react-redux";

function SignupFragment() {
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [passwordConfirmValue, setPasswordConfirValue] = useState("");
  const dispatch = useDispatch();
  async function onLogin(e) {
    e.preventDefault();

    const data = await axios.post("http://localhost:4444/api/v1/users/signup", {
      email: loginValue,
      firstName: firstNameValue,
      lastName: lastNameValue,
      password: passwordValue,
      passwordConfirm: passwordConfirmValue,
    });
    if (data.status !== 200) {
      // alert error not singuping
    } else {
      localStorage.setItem("token", data?.data?.token);
      dispatch(setUser(data?.data?.user));
    }
  }

  return (
    <form>
      <input
        placeholder="first name"
        value={firstNameValue}
        onChange={(e) => setFirstNameValue(e.target.value)}
      />
      <input
        placeholder="last name"
        value={lastNameValue}
        onChange={(e) => setLastNameValue(e.target.value)}
      />
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
      <input
        placeholder="confirm password"
        value={passwordConfirmValue}
        onChange={(e) => setPasswordConfirValue(e.target.value)}
      />
      <button onClick={onLogin}>Signup</button>
    </form>
  );
}

export default SignupFragment;
