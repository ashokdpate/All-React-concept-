import React from 'react'
import { useSelector } from 'react-redux'

function Details() {
let data=useSelector((storedata)=>{
           return storedata;
 })

  return (
    <div style={{padding:"100px"}}>
        <h1>Details Component</h1>
        <p style={{color:"green",fontWeight:"bold"}}> 
            {data.name}
        </p>
    </div>
  )
}

export default Details