import React from "react";
import DoctorsList from "./DoctorsList";

const Doctors = () => {
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="text-center">
        <h1 className="mb-4">Our Doctors</h1>
        <div className="container">
          <DoctorsList />
        </div>
      </div>
    </div>
  );
};

export default Doctors;
