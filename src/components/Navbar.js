import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavBar = () => {
  const phoneNumber = "7359091116"; // Replace with your actual phone number

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Flamingo" width="48" height="48" className="mr-2" />
          Flamingo Multispeciality Hospital
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
            <Nav.Link as={Link} to="/appointments">Appointments</Nav.Link>
            <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/blog-news">Blog/News</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <div className="d-none d-lg-block mr-3">
              <div className="call-to-action" onClick={handleCallClick}>
                Get an Appointment by giving a Missed Call to {phoneNumber}
              </div>
            </div>
            <div className="d-block d-lg-none">
              <button className="btn btn-primary" onClick={handleCallClick}>
                Call Now
              </button>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
