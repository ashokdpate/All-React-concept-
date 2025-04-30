import {useEffect, useState} from 'react'
function Users() {
    var[user,setUser]=useState([])
    useEffect(()=>{
            getUsers();
    },[])
    const getUsers=async ()=>{
            var res=await fetch("https://jsonplaceholder.typicode.com/users")
            var data=await res.json()
            setUser(data);
        }
  return (
    <div className='container' style={{padding:"100px"}}>
        <h1>Users List component</h1>
        <button className='btn btn-primary' onClick={getUsers}>Get Users</button>
        {
            user.length > 0 ? <ol>
                {
                    user.map((element)=>
                        <li>{element.name}</li>
                    )
                }
            </ol> : <h2 style={{color:"red"}}>No user found</h2>
        }
    </div>
  )
}
export default Users
