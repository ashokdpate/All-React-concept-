import React from 'react'
import C from './C';
const bStyles = {
    width: "1000px",
    height: "350px",
    boxShadow: "0 0 10px red",
    textAlign: "center",
    padding: "50px",
    margin: "30px auto",
  };
function B() {
  return (
    <div style={bStyles}>
        <h6>B Compoent</h6>
        <C />
    </div>
  )
}
export default B
