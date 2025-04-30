import React, { useState } from 'react'
import Display from './Display'

function Name() {
    var [state,setState]=useState("");
  return (
    <div style={{ padding: "50px" }}>
        <h1>Parent component</h1>
        <p>Data:{state}</p>
        <Display setData={setState}/>
    </div>
  )
}
export default Name 