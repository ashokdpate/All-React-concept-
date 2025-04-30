import React, { useContext } from 'react'
import myfirstContext from './MyfirstContext'

function Details() {
            let data=useContext(myfirstContext);
  return (
    <div  style={{marginTop:"50px"}} >
            <hr />
        <h1>Details: {data}</h1>
    </div>
  )
}
export default Details


