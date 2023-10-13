import React from "react";

const HospitalInfo = () => {
  const hospitalData = {
    happyPatients: 1000, // Replace with your actual data
    yearsOfExperience: 20, // Replace with your actual data
    numBeds: 300, // Replace with your actual data
    numOperations: 5000, // Replace with your actual data
  };

  const dataKeys = Object.keys(hospitalData);
  const dataValues = Object.values(hospitalData);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#0072c6",
        color: "#fff",
        padding: "5px 0",
      }}
    >
      <div style={{ flex: 1, textAlign: "center", cursor: "pointer" }}>
        <h2>
          {dataKeys.map((key, index) => (
            <span key={key}>
              {index > 0 ? " | " : ""}
              {key}: {dataValues[index]}
            </span>
          ))}
        </h2>
      </div>
    </div>
  );
};

export default HospitalInfo;
