import './Counter.css'
import {useState} from 'react'
function Counter() {
 var[count,setCount]=useState(0);

    const increaseCount=()=>{
        console.log(count);
        setCount((prevState)=>{
            return prevState+1;
        })
        setCount((prevState)=>{
            return prevState+1;
        })
        setCount((prevState)=>{
            return prevState+1;
        })
        
        // setCount(count+1);
          
    }   
  return (
    <div className='counter'>
        <h1>Counter app</h1>
        <p>Count value is : {count}</p>
        <button onClick={increaseCount}>incCount</button>
    </div>
  )
}
export default Counter  