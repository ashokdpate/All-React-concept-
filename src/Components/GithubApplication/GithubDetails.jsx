import React from 'react'

function GithubDetails({user}) {
  return (
    <ul className='list-group'>
        <li className="list-group-item"><strong>Username:</strong> {user.login}</li>
      <li className="list-group-item"><strong>Name:</strong> {user.name || "N/A"}</li>
      <li className="list-group-item"><strong>Company:</strong> {user.company || "N/A"}</li>
      <li className="list-group-item"><strong>Location:</strong> {user.location || "N/A"}</li>
      <li className="list-group-item"><strong>Email:</strong> {user.email || "N/A"}</li>
      <li className="list-group-item"><strong>Followers:</strong> {user.followers}</li>
      <li className="list-group-item"><strong>Following:</strong> {user.following}</li>
      <li className="list-group-item"><strong>Public Repos:</strong> {user.public_repos}</li>
      <li className="list-group-item"><strong>Public Gists:</strong> {user.public_gists}</li>
      <li className="list-group-item"><strong>Profile Created:</strong> {new Date(user.created_at).toLocaleDateString()}</li>
    </ul>
  )
}

export default GithubDetails