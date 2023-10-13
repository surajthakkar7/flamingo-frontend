import React from "react";

const Doctor = ({
  name,
  specialty,
  expertise,
  experience,
  operations,
  qualifications,
  imageSrc,
}) => {
  const cardStyles = {
    width: "18rem",
    marginBottom: "20px", // Add margin at the bottom
  };

  return (
    <div className="container">
      <div className="card" style={cardStyles}>
        <img src={imageSrc} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            <strong>Specialty:</strong> {specialty}
          </p>
          <p className="card-text">
            <strong>Expertise:</strong> {expertise}
          </p>
          <p className="card-text">
            <strong>Experience:</strong> {experience}
          </p>
          <p className="card-text">
            <strong>Operations:</strong> {operations}
          </p>
          <p className="card-text">
            <strong>Qualifications:</strong> {qualifications}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
