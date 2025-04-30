import React, { useState } from 'react'
import B from './B'
const aStyles = {
    width: "1200px",
    height: "500px",
    boxShadow: "0 0 10px green",
    textAlign: "center",
    margin: "50px auto",
    padding: "50px",
  };
function A() {
  var [state,setState]=useState("---");
    return (
    <div style={aStyles}>
        <h6 >A component</h6>
        <button  onClick={() => {
          setState("Hello from A component");
        }}>
            pass the data
        </button>
        
        <B info={state}/>
    </div>
  )
}
export default A

