import React, { useState } from "react";
import "./CSS/Appointments.css";
const Appointments = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTimeSlot: "",
    message: "",
    doctor: "",
  });
  const [appointmentStatus, setAppointmentStatus] = useState("pending"); // Initialize the status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/submit-appointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        console.log(response); // Add this line to inspect the response
        return response.json();
      })
      .then((data) => {
        console.log("Appointment request submitted:", data);
        setAppointmentStatus("sent");
      })
      .catch((error) => {
        console.error("Error submitting appointment request:", error);
      });
  };

  return (
    <div className="page-container">
      <section className="hero">
        <h1>Request an Appointment</h1>
        <p>Fill out the form below to schedule an appointment with us.</p>
      </section>

      <section className="appointment-form">
        {appointmentStatus === "pending" ? (
          <div>
            <h2>Appointment Request Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="[0-9]{10}" // Specify the pattern for a 10-digit phone number
                  title="Please enter a 10-digit phone number" // Specify the title attribute for the tooltip
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="preferredDate">Preferred Date</label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="preferredTimeSlot">Preferred Time Slot</label>
                <select
                  id="preferredTimeSlot"
                  name="preferredTimeSlot"
                  value={formData.preferredTimeSlot}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Time Slot</option>
                  <option value="9:00 AM - 9:15 AM">9:00 AM - 9:15 AM</option>
                  <option value="9:15 AM - 9:30 AM">9:15 AM - 9:30 AM</option>
                  <option value="9:30 AM - 9:45 AM">9:30 AM - 9:45 AM</option>
                  <option value="9:45 AM - 10:00 AM">9:45 AM - 10:00 AM</option>
                  <option value="10:00 AM - 10:15 AM">
                    10:00 AM - 10:15 AM
                  </option>
                  <option value="10:15 AM - 10:30 AM">
                    10:15 AM - 10:30 AM
                  </option>
                  <option value="10:30 AM - 10:45 AM">
                    10:30 AM - 10:45 AM
                  </option>
                  <option value="10:45 AM - 11:00 AM">
                    10:45 AM - 11:00 AM
                  </option>
                  <option value="11:00 AM - 11:15 AM">
                    11:00 AM - 11:15 AM
                  </option>
                  <option value="11:15 AM - 11:30 AM">
                    11:15 AM - 11:30 AM
                  </option>
                  <option value="11:30 AM - 11:45 AM">
                    11:30 AM - 11:45 AM
                  </option>
                  <option value="11:45 AM - 12:00 PM">
                    11:45 AM - 12:00 PM
                  </option>
                  <option value="12:00 PM - 12:15 PM">
                    12:00 PM - 12:15 PM
                  </option>
                  <option value="12:15 PM - 12:30 PM">
                    12:15 PM - 12:30 PM
                  </option>
                  <option value="12:30 PM - 12:45 PM">
                    12:30 PM - 12:45 PM
                  </option>
                  <option value="12:45 PM - 1:00 PM">12:45 PM - 1:00 PM</option>
                  <option value="4:00 PM - 4:15 PM">4:00 PM - 4:15 PM</option>
                  <option value="4:15 PM - 4:30 PM">4:15 PM - 4:30 PM</option>
                  <option value="4:30 PM - 4:45 PM">4:30 PM - 4:45 PM</option>
                  <option value="4:45 PM - 5:00 PM">4:45 PM - 5:00 PM</option>
                  <option value="5:00 PM - 5:15 PM">5:00 PM - 5:15 PM</option>
                  <option value="5:15 PM - 5:30 PM">5:15 PM - 5:30 PM</option>
                  <option value="5:30 PM - 5:45 PM">5:30 PM - 5:45 PM</option>
                  <option value="5:45 PM - 6:00 PM">5:45 PM - 6:00 PM</option>
                  <option value="6:00 PM - 6:15 PM">6:00 PM - 6:15 PM</option>
                  <option value="6:15 PM - 6:30 PM">6:15 PM - 6:30 PM</option>
                  <option value="6:30 PM - 6:45 PM">6:30 PM - 6:45 PM</option>
                  <option value="6:45 PM - 7:00 PM">6:45 PM - 7:00 PM</option>
                  <option value="7:00 PM - 7:15 PM">7:00 PM - 7:15 PM</option>
                  <option value="7:15 PM - 7:30 PM">7:15 PM - 7:30 PM</option>
                  <option value="7:30 PM - 7:45 PM">7:30 PM - 7:45 PM</option>
                  <option value="7:45 PM - 8:00 PM">7:45 PM - 8:00 PM</option>
                  <option value="8:00 PM - 8:15 PM">8:00 PM - 8:15 PM</option>
                  <option value="8:15 PM - 8:30 PM">8:15 PM - 8:30 PM</option>
                  <option value="8:30 PM - 8:45 PM">8:30 PM - 8:45 PM</option>
                  <option value="8:45 PM - 9:00 PM">8:45 PM - 9:00 PM</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="doctor">Select Doctor</label>
                <select
                  id="doctor"
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Doctor</option>
                  <option value="Dr. Nehal Nanavati">Dr. Nehal Nanavati</option>
                  <option value="Dr. Naushad Khatri">Dr. Naushad Khatri</option>
                  <option value="Dr. Mandakini Thakkar">
                    Dr. Mandakini Thakkar
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message (optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="cta-button">
                Request Appointment
              </button>
            </form>
          </div>
        ) : (
          <div className="success-message">
            <p>
              Your appointment request has been sent. Please wait for further
              instructions.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Appointments;
