import React, {useState} from "react";
import {numbers} from "../../../data";
import NumberButton from "./NumberButton"

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numberBtn] = useState(numbers);
  return (
    <div>
      { numberBtn.map((button, index) => (
        <NumberButton key ={index} result={(button)}  />
      ))}
    </div>
  );
};

export default Numbers;