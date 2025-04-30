import {useReducer} from 'react'
const reducerFn=(action)=>{
    return "ASHOK PATE"
 }
function UseReducer() {
let [state,dispatch] =useReducer(reducerFn,100);

const modify=()=>{
    dispatch({type:"Dummy"});
}
            return (
    <div className='container' style={{padding:"100px"}}>
        <h3>Understanding of UseReducer hook</h3> 
        <p>Data: {state}</p> 
        <button onClick={modify}>Update state</button>    
    </div>
  )
}

export default UseReducer