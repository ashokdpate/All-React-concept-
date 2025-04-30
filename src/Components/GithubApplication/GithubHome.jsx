import React, { useState } from 'react'
import GithubSearch from './GithubSearch'
import GithubProfile from './GithubProfile'
import GithubDetails from './GithubDetails'
function GithubHome() {
    const [userData,setUserData]=useState(null);
  return ( 
    <div className='container w-75 shadow mt-5 p-3 mx-auto'>
        <div className="row">
            <GithubSearch setUserData={setUserData}/>
        </div>
        {
            userData && 
        <div className="row">
        <div className="col-4">
            <GithubProfile user={userData}/>
        </div>
        <div className="col-6">
            <GithubDetails user={userData}/>
        </div>
        </div>
        }
    </div>
  )
}
export default GithubHome