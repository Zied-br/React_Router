import React from "react";
import Home from "./Home";

const Welcome = (props) => {
  return (
    <div>
      Welcome {props.children}
      <Home>wafa</Home>
    </div>
  );
};

export default Welcome;
