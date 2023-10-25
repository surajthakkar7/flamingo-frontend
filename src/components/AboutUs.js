import React from "react";
import "./CSS/AboutUs.css"; // Import the CSS file
import logo from "./images/logo.png";
import Footer from "./ Footer";

function AboutUs() {
  return (
    <>
      <h1 className="about-us-title">
        Welcome to Flamingo Multispeciality Hospital
      </h1>

      <div className="about-us-content">
        <div className="image-container">
          <img src={logo} alt="Hospital" />
        </div>
        <div className="text-content">
          <p>Committed to Excellence in Healthcare</p>
          <p>
            At Flamingo Multispeciality Hospital, we are committed to providing
            world-class healthcare with a focus on compassion and excellence.
            Our journey began with the vision to offer affordable and modern
            medical services to the community, regardless of financial or social
            status.
          </p>
          <p>
            Over the years, we have assembled a team of dedicated specialists in
            various medical fields. Our mission is to deliver high-quality
            healthcare that combines the latest medical advancements with
            compassionate care.
          </p>
          <p>
            Our hospital features a state-of-the-art facility with modern
            patient-centered medical and surgical services. We are equipped with
            cutting-edge diagnostic equipment and a dedicated team of
            professionals to ensure your health and well-being.
          </p>
          <p>
            To complement what will be one of the main areas of focus for
            Bethany – high-quality cancer treatment, including RapidArc - the
            hospital has in place the latest Varian Linear Accelerator.
            Considering that only a few hospitals in Mumbai have this facility,
            it will offer patients in and around Thane city the best in
            radiation oncology.
          </p>
        </div>
      </div>
      <div className="containerStyles">
        <div className="textStyles">
          <h2 className="headingStyles">VISION</h2>
          <p>
            To constantly strive to provide cost-effective, accessible, and
            quality-assured healthcare services with the love and compassion of
            Christ.
          </p>
          <h2 className="headingStyles">MISSION</h2>
          <p>
            Cost-effective Healthcare: To run a cost-efficient operation so as
            to pass on the benefit to the patient. To intentionally strive to
            price the hospital services less than the market benchmark of its
            peers thereby enlarging the range and accessibility of affordable
            healthcare.
          </p>
          <p>
            Accessible Healthcare: To consciously route part of the hospital
            revenues to areas in India where health care is not accessible. To
            engage with and partner in the eradication drug abuse, alcoholism,
            AIDS and to offer care to the elderly at the point of need.
          </p>
          <p>
            Quality Assured Healthcare: To develop a process and
            performance-oriented culture where continuous process improvements
            are a way of life!
          </p>
          <h2 className="headingStyles">MOTTO</h2>
          <p>Not to be served, but to serve.</p>
          <h2 className="headingStyles">VALUES</h2>
          <p>
            Servanthood: To follow the example of Christ and embrace the
            attitude of a servant - Bethany trustees, employees, and volunteers
            do not come to a job but to serve at the Hospital and related
            projects.
          </p>
          <p>
            Prayer: To depend on God through prayer for the Organization’s daily
            sustenance - as Christ is the ultimate healer and provider for the
            sick and needy.
          </p>
          <p>
            Integrity: To never compromise in matters of ethics in all spheres
            of service. To work daily with sincerity of heart and for the glory
            of God.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
