import React from "react";
import "./Products.css";
import { Link, Outlet } from "react-router-dom";
function Products() {
  return (
    <div>
      <h1 style={{textAlign:"center",}}>Products component</h1>
      <div className="productsContainer">
        <div className="linksContainer">
        <Link
            to="electronics"
            style={{ color: "white", textDecoration: "none", fontSize: "21px" }}
          >
            Electronics
          </Link>
        <Link
            to="jewelery"
            style={{ color: "white", textDecoration: "none", fontSize: "21px" }}
          >
            jewelery
          </Link>
        <Link
            to="mens-clothing"
            style={{ color: "white", textDecoration: "none", fontSize: "21px" }}
          >
            Mens clothing 
          </Link>
        <Link
            to="womens-clothing"
            style={{ color: "white", textDecoration: "none", fontSize: "21px" }}
          >
            womens clothing 
          </Link>
        </div>
        <div className="componentsContainer">
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default Products;
