import React, { useReducer, useState } from 'react'
import TodoReducer from './TodoReducer';

function ToDoApp() {
    let [inputValue,setInputValue]=useState('');
    let [state,dispatch]=useReducer(TodoReducer,[]);
    const addTodo=(e)=>{
            e.preventDefault();
            if(inputValue.trim()!==""){
                dispatch({type:"ADD_TODO",
                    payload:inputValue
                });
                setInputValue('');
            }
    };
    const toggleTodo=(id)=>{
            dispatch({type:"TOGGLE_TODO",payload:id});
    };
    const deleteTodo=(id)=>{
        dispatch({type:"DELETE_TODO",payload:id});
    };

    const clearAll=()=>{
        dispatch({type:"CLEAR_ALL"});
    };


  return (
    <div style={{padding:"50px",textAlign:"center"}}>
        <h1>To DO APP</h1>
        <form onSubmit={addTodo}>
            <input type="text" name="name" placeholder='Enter text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
            <button type='submit' className='btn btn-primary'>Add Task</button>
            <button type='button' className='btn btn-danger m-2' onClick={clearAll}>Clear Task</button>
        </form>
        <ul style={{listStyle:"none",marginTop:"20px"}}>
            {
                state.map((todo)=>(
                    <li key={todo.id} style={{marginBottom:"10px"}}> 
                        <span onClick={()=>toggleTodo(todo.id)} style={{textDecoration:todo.completed?'line-through':'none',cursor:'pointer'}} >
                            {todo.text}
                        </span>
                    <button className='btn btn-danger m-2' onClick={()=>deleteTodo(todo.id)}>DELETE

                    </button>
                    </li>
                )) }
        </ul>
    </div>
  )
}
export default ToDoApp