import React from 'react'
import E from './E';
import { data } from 'react-router-dom';
const bStyles = {
    width: "600px",
    height: "130px",
    boxShadow: "0 0 10px red",
    textAlign: "center",
    padding: "30px",
    margin: "30px auto",
  };
function D({info}) {
  return (
    <div style={bStyles}>
        <h6>D Compoent</h6>       
        <E data={info}/>
    </div>
  )
}
export default D
