import React from "react";
import "./CSS/Footer.css"; // Import the CSS file for the Footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 contact">
            <h5>Contact Us</h5>
            <p>
              Email: info@flamingohospital.com
              <br />
              Phone: +123-456-7890
              <br />
              Address: 123 Main Street, City, Country
            </p>
          </div>
          <div className="col-md-4 quick-links">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact-us">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Flamingo Multispeciality Hospital. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
