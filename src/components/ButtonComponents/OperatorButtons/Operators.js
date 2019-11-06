import React, {useState} from "react";
import {operators} from "../../../data";
import OperatorButton from "../OperatorButtons/OperatorButton"
//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  const [operatorBtn] = useState(operators)
  return (
    <div>
      {operatorBtn.map((button, index) => (
       <OperatorButton key ={index} button ={button} />
       ))}
    </div>
  );
};

export default Operators;