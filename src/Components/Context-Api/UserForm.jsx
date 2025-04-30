import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserDetails from './UserDetails';
import myfirstContext from './MyfirstContext';

function UserForm() {
    var [form, setForm] = useState({
        name: '',
        lastName: '',
        mobileNo: '',
        email: '',
        gender: '',
    })
    var [formData, setFormData] = useState();

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setFormData(form);
    }
    return (
        <myfirstContext.Provider value={formData}>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card p-4 shadow" style={{ minWidth: '500px' }}>
                            <h2 className="card-title text-center mb-4">User Form</h2>
                            <form className="card-body" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">First Name</label>
                                    <input type="text" name='name' className="form-control" placeholder="Enter name" onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Last Name</label>
                                    <input type="text" name='lastName' className="form-control" placeholder="Enter lastname" onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Mobile No</label>
                                    <input type="text" name='mobileNo' className="form-control" placeholder="Enter mobile no" onChange={handleChange} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" name='email' className="form-control" placeholder="Enter email" onChange={handleChange} />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">Gender</label>
                                    <select className="form-select" name='gender' onChange={handleChange}>
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {formData && (
                        <div className="col-md-6" >
                            <UserDetails />
                        </div>
                    )}
                </div>
            </div>
        </myfirstContext.Provider>
    );
}

export default UserForm;
