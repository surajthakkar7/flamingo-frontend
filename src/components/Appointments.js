import React, { useState } from "react";

const Appointments = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
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
    <div>
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
                <label htmlFor="preferredTime">Preferred Time</label>
                <input
                  type="time"
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  required
                />
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
          <div>
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
