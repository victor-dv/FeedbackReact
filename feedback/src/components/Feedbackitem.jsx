import React from "react";
import { useState } from "react";

function Feedbackitem() {
    const[avalia, setAvalia] = useState(5)

    const clicaBtn = ()=>{
        setAvalia ((prev) =>{
            return prev + 1
        })
    }
  return (
    <div className="card">
        <div className="num-display">{avalia}</div>
        <div>Eu sou uma avaliação</div>
        <button onClick={clicaBtn}></button>
    </div>
  );
}

export default Feedbackitem;
