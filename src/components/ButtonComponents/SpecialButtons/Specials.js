import React, {useState} from "react";
import {specials} from "../../../data"
import SpecialButton from "../SpecialButtons/SpecialButton"
//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  const [specialBtn] = useState(specials)

  return (
    <div>
      {specialBtn.map((button, index)=>(
        <SpecialButton key ={index} result={(button)}/>
      ))}
    </div>
  );
};

export default Specials;