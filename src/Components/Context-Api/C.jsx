import React, { useContext } from 'react'
import D from './D';
import myfirstContext from './MyfirstContext';
const bStyles = {
    width: "800px",
    height: "220px",
    boxShadow: "0 0 10px red",
    textAlign: "center",
    padding: "50px",
    margin: "30px auto",
  };
function C() {
     let data= useContext(myfirstContext);
  return (
    <div style={bStyles}>
        <h6>C Compoent: {data}</h6>
        <D />
    </div>
  )
}
export default C
