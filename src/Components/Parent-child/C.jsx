import React from 'react'
import D from './D';
const bStyles = {
    width: "800px",
    height: "220px",
    boxShadow: "0 0 10px red",
    textAlign: "center",
    padding: "50px",
    margin: "30px auto",
  };
function C({data}) {
  return (
    <div style={bStyles}>
        <h6>C Compoent</h6>
        <D info={data}/>
    </div>
  )
}
export default C
