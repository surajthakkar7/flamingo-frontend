import React from "react";
import Doctor from "./Doctor"; // Import the Doctor component

const DoctorsList = () => {
  const doctors = [
    {
      name: "Dr. Nehal Nanavati",
      specialty: "General Surgeon, Gastro Surgeon",
      expertise: "Endoscopist and ERCP, Laparoscopist, Thoroscopist",
      experience: "25 years of Matbar experience",
      operations: "20,000+ successful operations",
      qualifications: "M.S., F.M.A.S.",
      imageSrc: "doctor_nehal.jpg", // Provide the image path
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
      imageSrc: "doctor_naushad.jpg", // Provide the image path
    },
    {
      name: "Dr. Mandakini Thakkar",
      specialty:
        "Intern Anesthesiologist, Intensivist and Critical Care Specialist, Pain Physician",
      qualifications: "M.D. (Anaesthesia), F.I.P.M.",
      imageSrc: "doctor_mandakini.jpg",
    },
    {
      name: "Dr. Madhav Navlekar",
      specialty:
        "Intensivist and Critical Care Specialist (Visiting Consultant)",
      qualifications: "M.D. (Anaesthesia)",
      imageSrc: "doctor_madhav.jpg", // Provide the image path
    },
    {
      name: "Dr. Victory Goswami",
      specialty:
        "Intensivist and Critical Care Specialist (Visiting Consultant)",
      qualifications: "M. D. (Anaesthesia)",
      imageSrc: "doctor_victory.jpg", // Provide the image path
    },
    // Add data for other doctors here
  ];

  return (
    <div className="row">
      {doctors.map((doctor, index) => (
        <div className="col-md-4" key={index}>
          <Doctor {...doctor} />
        </div>
      ))}
    </div>
  );
};

export default DoctorsList;
