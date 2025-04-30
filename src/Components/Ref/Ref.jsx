import React, { useRef } from 'react'

function Ref() {
        let h2Ref=useRef(); //only one property {current}
        let buttonRef=useRef();
        const handleChange=()=>{
        h2Ref.current.innerText="Dom Manipulated using ref concept";
        h2Ref.current.style.color="red";
        buttonRef.current.style.color="blue";
    }
  return (
    <div className='container'>
        <div className="card" style={{width:"600px",height:"200px" , marginTop:"100px"}}>
            <div className="cardBody" >
        <h3 ref={h2Ref}>Dom Manipulation Using useRef() hook</h3>
        <button ref={buttonRef} className='btn btn-warning mt-5'onClick={handleChange} >
            change content and style</button>
            </div>
        </div>
    </div>
  )
}
export default Ref;
