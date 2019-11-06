import React, {useState} from "react";
import  {  tsPropertySignature } from "@babel/types"

const OperatorButton = props => {
  return (
    <button className = "operators">{props.button.char}</button>
  );
};

export default OperatorButton;