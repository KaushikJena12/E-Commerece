import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const clearuser = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div className="nav-ul">
      <div>
        <img src="logo192.png" style={{ height: "100px", width: "100px" }} />
      </div>
      <div>
        <ul>
          {auth ? (
            <>
              <li>
                <Link className="ll" to="/">
                  Productlist
                </Link>
              </li>
              <li>
                <Link className="ll" to="/addproduct">
                  Add Products
                </Link>
              </li>
              <li>
                <Link className="ll" to="/">
                  Update Product
                </Link>
              </li>
              <li>
                <Link className="ll" to="/profile">
                  Profile
                </Link>
              </li>

              <li>
                <Link className="ll" onClick={clearuser} to="/Signup">
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link className="ll" to="/Signup">
                  signup
                </Link>
              </li>
              <li>
                <Link className="ll" to="/Signin">
                  signin
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
