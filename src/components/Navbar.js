import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

const NavBar = () => {
  const phoneNumber = "7359091116"; // Replace with your actual phone number

  // Handle clicking on the phone number to initiate a call
  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <div style={{ position: "fixed", top: "0", left: "0", width: "100%" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#0072c6",
          color: "#fff",
          padding: "0px 0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Flamingo" width="48" height="48" />
        </div>
        <div
          style={{ flex: 1, textAlign: "center", cursor: "pointer" }}
          onClick={handleCallClick} // Add this click event
        >
          Get an Appointment by giving a Missed Call to {phoneNumber}
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Flamingo Multispeciality Hospital
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/doctors">
                  Doctors
                </Link>
              </li>
              {/*}    <li className="nav-item">
                <Link className="nav-link" to="/patients">
                  Patients
                </Link>
      </li>  */}
              <li className="nav-item">
                <Link className="nav-link" to="/appointments">
                  Appointments
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog-news">
                  Blog/News
                </Link>
              </li>
            </ul>
            {/*    <ul className="navbar-nav ml-2">
              <li className="nav-item">
                <Link className="nav-link" to="/adminlogin">
                  Admin Log In
                </Link>
              </li>
              
            </ul> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
