import React, { useState } from 'react'

function Display({setData}) {
        var[child,setChild] =useState("React js");
  return (
    <div>
        <h1>child Component</h1>
        <button onClick={()=>{
           setData(child)
        }}>Pass to Parent component</button>
    </div>
  )
}
export default Display