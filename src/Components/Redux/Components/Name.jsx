import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
function Name() {
    let inputRef=useRef(null);
                let dispatch=useDispatch();
    const getData=()=>{
        //create action object
        var actionObject={
            type:"NAME",
            nameComp: inputRef.current.value,
        };
        dispatch(actionObject);
    };

  return (
    <div style={{padding:"100px"}}>
        <h1>Name component</h1>
        <input ref={inputRef} type="text" placeholder='Add some data' />
        <button onClick={getData}>Submit</button> 
    </div>
  )
}
export default Name