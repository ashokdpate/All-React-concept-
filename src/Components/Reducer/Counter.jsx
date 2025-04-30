import {useReducer} from 'react'
import reducerFn from './CounterReducer';
function Counter() {
        let [state,dispatch]=useReducer(reducerFn,{count:0});

        const incrementValue=()=>{
            dispatch({type:'increment'})
        }
        const decrementValue=()=>{
            dispatch({type:'decrement'})
        }
        const clearValue=()=>{
            dispatch({type:'clear'})
        }
  return (
    <div className='container' style={{padding:"200px"}}>
        <div className="card" style={{width:"auto", height:"200px"}}>
            <div className="cardBody">
        <h2>Counter App with useReducer hook</h2>
        <h3>count value:{state.count}</h3>
        <button className='btn btn-primary m-3' onClick={incrementValue}>Increment</button>
        <button className='btn btn-warning m-3' onClick={decrementValue}>Decrement</button>
        <button className='btn btn-danger m-3' onClick={clearValue}>Clear</button>
            </div>
        </div>
    </div>
  )}
export default Counter