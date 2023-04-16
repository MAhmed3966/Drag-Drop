import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { SearchContext } from "./Context/createContext";
const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(SearchContext);
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/imageGallery">
              Image Gallery
            </a>
          </li>
          {!isLoggedIn.loggedIn && (
            <>
              <li className="nav-item">
                <a className="nav-link" href="/register">
                  Register
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            </>
          )}
          {isLoggedIn.loggedIn && (
            <li className="nav-item">
              <a
                className="nav-link"
                href="/login"
                onClick={(e) => {
                  e.preventDefault();
                  setIsLoggedIn({...isLoggedIn, loggedIn:false});
                  navigate("/");
                }}
              >
                Logout
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
