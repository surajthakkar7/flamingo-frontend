import React from "react";
import Doctor from "./Doctor"; // Import the Doctor component
import logo from "./images/logo.png"; // Import your hospital logo image

const DoctorsList = () => {
  const doctors = [
    {
      name: "Dr. Nehal Nanavati",
      specialty: "General Surgeon, Gastro Surgeon",
      expertise: "Endoscopist and ERCP, Laparoscopist, Thoroscopist",
      experience: "25 years of Matbar experience",
      operations: "20,000+ successful operations",
      qualifications: "M.S., F.M.A.S.",
      imageSrc: logo, // Use the hospital logo image
    },
    {
      name: "Dr. Naushad Khatri",
      specialty:
        "Specialist surgeon for kidney, stone, prostate, genital diseases",
      expertise: "First Urologist of Kutch district",
      experience: "13 years of vast experience in urology field",
      operations:
        "Experience of more than 8000 successful operations, Pioneer of stone operation by laser",
      qualifications: "M.S., D.N.B. (Urology)",
      imageSrc: logo, // Use the hospital logo image
    },
    {
      name: "Dr. Mandakini Thakkar",
      specialty:
        "Intern Anesthesiologist, Intensivist and Critical Care Specialist, Pain Physician",
      qualifications: "M.D. (Anaesthesia), F.I.P.M.",
      imageSrc: logo, // Use the hospital logo image
    },
    {
      name: "Dr. Madhav Navlekar",
      specialty:
        "Intensivist and Critical Care Specialist (Visiting Consultant)",
      qualifications: "M.D. (Anaesthesia)",
      imageSrc: logo, // Use the hospital logo image
    },
    {
      name: "Dr. Victory Goswami",
      specialty:
        "Intensivist and Critical Care Specialist (Visiting Consultant)",
      qualifications: "M. D. (Anaesthesia)",
      imageSrc: logo, // Use the hospital logo image
    },
    // Add data for other doctors here
  ];
  const containerStyles = {
    maxWidth: "1200px",
    margin: "0 auto",
    paddingTop: "20px", // Add top padding to create space between the navbar
  };

  const listStyles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center", // Center the cards horizontally
  };

  const doctorStyles = {
    flex: "0 0 calc(33.333% - 20px)",
    margin: "10px",
  };

  return (
    <div className="container" style={containerStyles}>
      <div className="row" style={listStyles}>
        {doctors.map((doctor, index) => (
          <div style={doctorStyles} key={index}>
            <Doctor {...doctor} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
