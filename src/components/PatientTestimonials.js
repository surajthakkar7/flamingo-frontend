import React, { useState, useEffect } from "react";
import patientTestimonialsData from "./patientTestimonials.json";
import "./CSS/PatientTestimonials.css"; // Import the CSS file

const PatientTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(
        (prevTestimonial) =>
          (prevTestimonial + 1) % patientTestimonialsData.length
      );
    }, 4000); // Change testimonial every 4 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  const testimonial = patientTestimonialsData[currentTestimonial];

  return (
    <div className="patient-testimonials">
      <h2>Patient Testimonials</h2>
      <div className="testimonial">
        <p>{testimonial.testimonial}</p>
        <p className="testimonial-author">- {testimonial.name}</p>
      </div>
    </div>
  );
};

export default PatientTestimonials;
