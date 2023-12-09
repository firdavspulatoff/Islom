import React, { useState } from "react";
import "../assets/scss/HoverButton.scss";
import { Button } from "@material-ui/core";
// import { ThemeContext } from "../../api/Theme";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogut } from "../../actions/actions";
// import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
// import { Redirect } from "react-router-dom";

function HoverButton({ text, variant, Icon, IconTo }) {
  const [currStyle] = useState(null);

  const dispatch = useDispatch();
  function onLogout(e) {
    e.preventDefault();
    dispatch(setLogut());
  }

  return (
    <>
      <Link to={"/home/" + text.toLowerCase()} className={"hb"}>
        <Button
          style={currStyle}
          startIcon={Icon ? <Icon /> : null}
          variant={variant}
        >
          {text}
        </Button>
      </Link>
      <Link to={"/"} className={"hb"}>
        <Button
          style={currStyle}
          startIcon={IconTo ? <IconTo /> : null}
          variant={variant}
          onClick={onLogout}
        >
          Logout
        </Button>
      </Link>
    </>
  );
}

export default HoverButton;
