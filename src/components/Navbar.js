import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

const NavBar = () => {
  const phoneNumber = "7359091116"; // Replace with your actual phone number

  // Handle clicking on the phone number to initiate a call
  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const navStyles = {
    backgroundColor: "#349b49", // Green background color
    color: "#fff",
    padding: "10px 0",
  };

  const topBarStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#63b973", // Lighter green background color
    padding: "10px",
  };

  const logoStyles = {
    marginRight: "20px",
  };

  const callToActionStyles = {
    cursor: "pointer",
    textDecoration: "underline",
    backgroundColor: "#ffd700", // Yellow highlighted background color
    padding: "5px 10px",
    borderRadius: "5px",
  };

  const linkStyles = {
    color: "#fff",
    textDecoration: "none",
    padding: "10px 20px",
    fontSize: "16px",
  };

  return (
    <div>
      <div style={topBarStyles}>
        <div>
          <img src={logo} alt="Flamingo" width="48" height="48" style={logoStyles} />
          <Link to="/" style={{ color: "white", textDecoration: "none", fontSize: "24px" }}>
            Flamingo Multispeciality Hospital
          </Link>
        </div>
        <div style={callToActionStyles} onClick={handleCallClick}>
          Get an Appointment by giving a Missed Call to {phoneNumber}
        </div>
      </div>

      <nav style={navStyles}>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            justifyContent: "center",
            backgroundColor: "#349b49", // Green background color
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <Link to="/" style={{ ...linkStyles, fontSize: "18px" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-us" style={{ ...linkStyles, fontSize: "18px" }}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/services" style={linkStyles}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/doctors" style={linkStyles}>
              Doctors
            </Link>
          </li>
          <li>
            <Link to="/appointments" style={linkStyles}>
              Appointments
            </Link>
          </li>
          <li>
            <Link to="/contact-us" style={linkStyles}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/blog-news" style={linkStyles}>
              Blog/News
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
