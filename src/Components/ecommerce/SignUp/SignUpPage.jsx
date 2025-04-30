import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignUpPage() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4 rounded" style={{ width: '100%', maxWidth: '450px' }}>
        <div className="card-body">
          <h3 className="text-center mb-4 text-success">Sign Up</h3>
          <form>
            <div className="form-group mb-3">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="mobile">Mobile Number</label>
              <input
                type="tel"
                className="form-control"
                id="mobile"
                placeholder="Enter your mobile number"
                pattern="[0-9]{10}"
                required
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="gender">Gender</label>
              <select className="form-control" id="gender" required>
                <option value="">Select gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-group mb-4">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Create a password"
                required
              />
            </div>

            <button type="submit" className="btn btn-success w-100">
              Sign Up
            </button>
          </form>

          <p className="mt-3 text-center">
            Already have an account?{' '}
            <a href="#" className="text-decoration-none">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
