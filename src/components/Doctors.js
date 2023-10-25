import React from "react";
import DoctorsList from "./DoctorsList";
import "./CSS/Doctors.css"; // Import the CSS file for styling

const Doctors = () => {
  return (
    <div className="page-container">
      <section className="our-doctors">
        <h1>Our Doctors</h1>
        <div className="doctors-list">
          <DoctorsList />
        </div>
      </section>
    </div>
  );
};

export default Doctors;
