import React from "react";

function TextInput(props) {
  return (
    <textarea
      placeholder="Ingresa tu texto aquí ..."
      onChange={props.onTextChange}
    ></textarea>
  );
}

export default TextInput;