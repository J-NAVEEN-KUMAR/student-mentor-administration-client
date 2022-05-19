import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid navbar-container">
          {/* <img src="./logo.jpg" alt="logo" width="30" height="24" /> */}
          <Link className="navbar-brand text-light title" to="/">
            Student Mentor Administration
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon  navbar-light"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-routes">
              <li className="nav-item ">
                <Link
                  to="/create-student"
                  className="nav-link text-light sub-title"
                  aria-current="page"
                >
                  Create Student
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/create-mentor"
                  className="nav-link text-light sub-title"
                  aria-current="page"
                >
                  Create Mentor
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/assign-student"
                  className="nav-link text-light sub-title"
                  aria-current="page"
                >
                  Assign Student
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <img
                src="./avatar.png"
                alt="logo"
                width="40"
                height="40"
                className="avatar"
              />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
