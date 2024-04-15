import React, { useState, useEffect } from "react";
import "./CSS/HospitalInfo.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faClock, faBed, faSyringe } from '@fortawesome/free-solid-svg-icons';

const HospitalInfo = () => {
  const [hospitalData, setHospitalData] = useState({
    happyPatients: 0,
    yearsOfExperience: 0,
    numBeds: 0,
    numOperations: 0,
  });

  const animationSpeed = 20; // Adjust animation speed (lower value for faster animation)

  useEffect(() => {
    // Replace the desired values here
    const targetData = {
      happyPatients: 1000,
      yearsOfExperience: 20,
      numBeds: 300,
      numOperations: 5000,
    };
    const interval = setInterval(() => {
      setHospitalData((prevData) => {
        const updatedData = {};
        for (const key in prevData) {
          updatedData[key] = Math.min(prevData[key] + 1, targetData[key]);
        }
        return updatedData;
      });
    }, animationSpeed);

    return () => clearInterval(interval);
  }, []);

  const renderIcon = (key) => {
    switch (key) {
      case 'happyPatients':
        return <FontAwesomeIcon icon={faSmile} />;
      case 'yearsOfExperience':
        return <FontAwesomeIcon icon={faClock} />;
      case 'numBeds':
        return <FontAwesomeIcon icon={faBed} />;
      case 'numOperations':
        return <FontAwesomeIcon icon={faSyringe} />;
      default:
        return null;
    }
  };

  const formatKeyName = (key) => {
    // Convert camelCase to words with spaces
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
  };

  const dataItems = Object.keys(hospitalData).map((key, index) => (
    <div className="data-item" key={key}>
      {renderIcon(key)}
      <span className="data-key">{formatKeyName(key)}:</span>
      <span className="data-value">{hospitalData[key]}</span>
    </div>
  ));

  return (
    <div className="hospital-info-container">
      <div className="hospital-info">
        <h2 className="info-title">Hospital Information</h2>
        <div className="data-container">{dataItems}</div>
      </div>
    </div>
  );
};

export default HospitalInfo;
