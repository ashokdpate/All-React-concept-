import React, { useContext } from 'react'
import myfirstContext from './MyfirstContext';
function UserDetails() {
            let formData=useContext(myfirstContext);
            if (!formData) return null;
  return (
    <div className='card p-3 mt-3 shadow' style={{ minWidth: '500px' }}>
        <h1>User Details</h1>
        <p>Name: {formData.name}</p>
        <p>LastName: {formData.lastName}</p>
        <p>MobileNo: {formData.mobileNo}</p>
        <p>Email: {formData.email}</p>
        <p>Gender: {formData.gender}</p>
    </div>
  )
}
export default UserDetails