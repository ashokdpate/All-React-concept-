import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import loginActionCreator from './loginActionCreator';

function LoginPage() {
        let dispatch=useDispatch();
        const handleLogin=()=>{
            dispatch(loginActionCreator());
        }
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4 rounded" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="card-body">
          <h3 className="text-center mb-4 text-primary">Login</h3>
          <form>
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
            <div className="form-group mb-4">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100" onClick={handleLogin}>
              Login
            </button>
          </form>
          <p className="mt-3 text-center">
            Not registered?{' '}
            <a href="#" className="text-decoration-none">
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
