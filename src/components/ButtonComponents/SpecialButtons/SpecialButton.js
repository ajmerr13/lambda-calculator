import React from "react";
import { tsPropertySignature } from "@babel/types";

const SpecialButton = props => {
  return (
    <button>{props.result}</button>
  );
};

export default SpecialButton;