import React from "react";
import icu from "./images/icu.jpeg";
import generalward from "./images/generalward.jpg";
import "./CSS/Services.css"; // Import the CSS file for styling

const Services = () => {
  return (
    <div className="container" style={{ paddingTop: "80px" }}>
      <h1 className="mt-4">Our Services</h1>

      {/* ICU and Trauma Center Section */}
      <section className="my-4">
        <h2>ICU and Trauma Center</h2>
        <div className="row">
          <div className="col-md-6">
            <ul>
              <li>8-bed advanced ICU</li>
              <li>
                Intensive care system for septic, drug addict, and
                accident-injured patients
              </li>
              <li>Diagnostic and interventional bronchoscopy</li>
              <li>Fiber optic wave insulation</li>
            </ul>
          </div>
          <div className="col-md-6">
            <img
              src={icu} 
              alt="Inside of an intensive care unit"
              className="img-fluid"
            />
          </div>
        </div>
        <p>
          Our ICU and Trauma Center provides advanced care and facilities for
          critically ill patients. We offer an 8-bed ICU with intensive care
          systems for septic, drug addict, and accident-injured patients. Our
          services include diagnostic and interventional bronchoscopy and fiber
          optic wave insulation.
        </p>
      </section>

      {/* Available Facilities Section */}
      <section className="my-4">
        <h2>Available Facilities</h2>
        <ul>
          <li>Laboratory</li>
          <li>Medical store</li>
          <li>Emergency Department</li>
          <li>Modular Operation Theatre</li>
          <li>A desert ward bay area</li>
        </ul>
        <p>
          Our hospital offers a wide range of facilities to support our
          patients. These include a fully equipped laboratory, a medical store,
          an emergency department, a modular operation theatre, and a desert
          ward bay area.
        </p>
      </section>

      {/* General Ward Section */}
      <section className="my-4">
        <h2>General Ward</h2>
        <p>24-hour treatment in the General Ward with facilities including:</p>
        <ul>
          <li>Every operation of the stomach and intestine</li>
          <li>Laparoscopic advanced surgery</li>
          <li>Bariatric surgery (Operation to reduce obese body weight)</li>
          <li>Endoscopy (binocular) diagnosis and operation</li>
          <li>
            Modern treatment of benign tumors, hemorrhoids, warts, fistulas,
            gallstones, and various abdominal operations
          </li>
          <li>Telescopic treatment of urinary stones and prostate</li>
          <li>Facilitate stone operation by laser</li>
          <li>Treatment of kidney, prostate, urinary bladder cancer</li>
          <li>
            Treatment of urinary leakage and recurrent vaccination in women
          </li>
          <li>Treatment of urinary or kidney diseases in children</li>
          <li>Treatment and guidance of male infertility diseases</li>
          <li>Accurate guidance and treatment of men's sex-related issues</li>
        </ul>
        <div className="text-center">
          <img
            src={generalward} alt="General Ward " className="img-fluid"
          />
        </div>
        <p>
          Our General Ward is open 24/7 and offers comprehensive medical care.
          Our services include surgeries for stomach and intestinal conditions,
          laparoscopic advanced surgery, and bariatric surgery. We also provide
          treatments for benign tumors, urinary stones, prostate issues, and
          more.
        </p>
      </section>
    </div>
  );
};

export default Services;
