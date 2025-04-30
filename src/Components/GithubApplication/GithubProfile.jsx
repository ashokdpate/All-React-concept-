import React from 'react'

function GithubProfile({user}) {
  return (
    <div className='card'>
        <div className="card-header">
            <img src={user.avatar_url} width="200px" height="200px" alt="" />
            <div className="card-body">
                <h3 className='text-primary'><i bi bi-person-add></i>{user.name || user.login}</h3>
                <p className='text-justify-content'>{user.bio || "No bio available"}</p>
                <div className="card-footer">
                    <button>profileDetails</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GithubProfile