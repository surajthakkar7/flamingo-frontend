import React, { useState, useEffect } from "react";
import d1 from "./images/d1.png";
import d2 from "./images/d2.png";
import d3 from "./images/d3.jpeg";
import AboutUs from "./AboutUs";
import Services from "./Services";
import ContactUs from "./ContactUs";
import PatientTestimonials from "./PatientTestimonials"; // Import the PatientTestimonials component
import HospitalInfo from "./HospitalInfo"; // Import the HospitalInfo component
import Footer from "./ Footer";
const Home = () => {
  const images = [d1, d2, d3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="slideshow">
        <img
          src={images[currentImage]}
          alt={`Slide ${currentImage + 1}`}
          style={{
            width: "100%",
            height: "500px",
          }}
        />
      </div>
      <AboutUs />
      <Services />
      {/* Render the PatientTestimonials component below the Services component */}
      <PatientTestimonials />
      <HospitalInfo /> {/* Include the HospitalInfo component here */}
      <Footer />
    </div>
  );
};

export default Home;
