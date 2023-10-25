import React, { useState, useEffect } from "react";
import "./CSS/HospitalInfo.css";

const HospitalInfo = () => {
  const [hospitalData, setHospitalData] = useState({
    happyPatients: 0,
    yearsOfExperience: 0,
    numBeds: 0,
    numOperations: 0,
  });

  // Replace the desired values here
  const targetData = {
    happyPatients: 1000,
    yearsOfExperience: 20,
    numBeds: 300,
    numOperations: 5000,
  };

  const animationSpeed = 20; // Adjust animation speed (lower value for faster animation)
  const backgroundColor = "#0072c6"; // Background color

  useEffect(() => {
    const interval = setInterval(() => {
      setHospitalData((prevData) => {
        const updatedData = {};
        for (const key in prevData) {
          updatedData[key] = Math.min(
            prevData[key] + 1,
            targetData[key]
          );
        }
        return updatedData;
      });
    }, animationSpeed);

    return () => clearInterval(interval);
  }, []);

  const dataItems = Object.keys(hospitalData).map((key, index) => (
    <div className="data-item" key={key}>
      <span className="data-key">{key}:</span>
      <span className="data-value">{hospitalData[key]}</span> {/* Fixed typo here */}
    </div>
  ));

  const backgroundColorStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <div className="hospital-info-container" style={backgroundColorStyle}>
      <div className="hospital-info">
        <div className="data-container">{dataItems}</div>
      </div>
    </div>
  );
};

export default HospitalInfo;
