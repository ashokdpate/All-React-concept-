import React, { useState } from 'react'
import { getUserDetails } from './Service';

function GithubSearch({setUserData}) {
        let[username,setUsername]=useState("");
        
    const getUser=()=>{
        if (username.trim() === "") return;
        getUserDetails(username).then((res)=>{
            setUserData(res.data);
        }).catch((error)=>{
            setUserData(null);
        });
    }
  return (
    <div className='container'>
        <div className="row my-2">
            <h2 className='text-primary'> Github Search</h2>
        </div>
        <div className="row my-2">
            <div className="col-8">
                <input   value={username} type="text" placeholder='Enter Username' className='form-control' 
                onChange={(e)=>{setUsername(e.target.value)}}
                />
            </div>
            <div className="col-4">
                <button type="button" className='btn btn-outline-primary px-5' onClick={getUser}>
                    Search
                </button>
            </div>
        </div>
    </div>
  )
}

export default GithubSearch