import React, { useState } from "react";

export default function Statetask02() {
  const [btnbg, setBtnbg] = useState(0);
  const [btntext, setBtntext] = useState(0);

  const bgArray = ["red", "blue", "green", "teal"];
  const textArray = ["white", "yellow", "pink", "lightblue"];

  const handelBg = () => {
    let indexRandom = Math.floor(Math.random() * bgArray.length);
    setBtnbg(bgArray[indexRandom]);

    let textRandor = Math.floor(Math.random() * textArray.length);
    setBtntext(textArray[textRandor]);
  };

  return (
    <div>
      <button
        onClick={handelBg}
        style={{ backgroundColor: btnbg, color: btntext,padding:"20px", fontSize:"40px" ,border:"none"}}
      >
        Click here
      </button>
    </div>
  );
}