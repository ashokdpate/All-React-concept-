import React from 'react'

function GridContainer() {
  return (  
        <div className="container  shadow  mt-5 mb-5  p-5 text-dark w-60 mx-auto ">
            <div className="row">
              <h2 className='text-primary'>Github Search</h2>
            </div>
            <div className="row">
              <div className="col-8">
                <input type="text" placeholder='EnterUseranme' className='form-control'/>
              </div>
            <div className="col-4">
              <button type="button" className='btn btn-primary'>Submit</button>
            </div>
            </div>
            <div className="row mt-5">
              <div className="col-4">
                <div className="card ">
                  <div className="card-header">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCelkmWfnQkGmyWNujbuC9mF04Ww5rGRN1vA&s" width="100%" height={"200px"} alt="" />
                    <div className="card-body">
                      <h3>Ashok Pate</h3>
                      <p>Lorem ipsum dolor sit amet.</p>
                      <div className="card-footer">
                          <button className='btn btn-outline-primary'>Profile Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-8">
                <ul className='list-group'>
                  <li className='list-group-item active'>Full name: </li>
                  <li className='list-group-item'>Gender: </li>
                  <li className='list-group-item'>Email id: </li>
                  <li className='list-group-item'>Mobile No: </li>
                  <li className='list-group-item'>Designation: </li>
                  <li className='list-group-item'>Followers: </li>
                  <li className='list-group-item'>Followings: </li>
                </ul>
              </div>
            </div>
          </div>

  )
}

export default GridContainer