import React, { useContext } from 'react'
import myfirstContext from './MyfirstContext';
const bStyles = {
    width: "300px",
    height: "80px",
    boxShadow: "0 0 10px red",
    textAlign: "center",
 
    margin: "30px auto",
  };
function E() {
    let data=useContext(myfirstContext);
  return (
    <div style={bStyles}>
        <h6>E Compoent</h6>
        <p>Data:{data} </p>
    </div>
  )
}
export default E
