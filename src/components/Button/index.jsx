import { useState } from "react";

import "./styles.scss";

function Button(props) {

  return (
      <button id={props.id} onClick={props.handleClick} >
        {props.value}
      </button>
  );
}

export default Button;
