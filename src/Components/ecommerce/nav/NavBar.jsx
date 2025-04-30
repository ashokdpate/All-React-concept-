import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import logoutActionCreator from "../action/actionCreater";
import { useNavigate } from "react-router-dom";
function NavBar() {
     const navigate=useNavigate();
     const dispatch=useDispatch();
     const logout=()=>{
      dispatch(logoutActionCreator());
        navigate("/");
    }

  return (
    <div class="nav">
      <div class="leftPanel flexContainer">
        <h1>E-commerce-App</h1>
      </div>
      <div class="rightPanel flexContainer">
        <Link to="/home">Home </Link>
        <Link to="/">Login </Link>
        <Link to="/signup">Signup</Link>
        <Link to="/products">Products</Link>
        <Link to="/menswear">MensWear</Link>
        <Link to="/womenwear">WomensWear</Link>
        <Link to="/kidswear">KidsWear</Link>
        <button className="btn btn-outline-danger" onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default NavBar;
