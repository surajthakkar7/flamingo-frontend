import React from "react";

const ContactUs = () => {
  return (
    <div>
      <section className="contact-info">
        <h1>Contact Us</h1>
        <p>
          If you have any questions or need assistance, feel free to contact us.
        </p>
        <p>Phone: +91 2832 258249</p>
        <p>Mobile: +91 7359091116</p>
        <p>
          Address: B.Ed College Rd, near Reliance Petrol Pump Airplane Circle,
          Bhuj, Gujarat 370001
        </p>
      </section>

      <section className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.353198864749!2d69.65861887532012!3d23.23023097902872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39511f04a79959f5%3A0x45bb22f062f2ba31!2sFlamingo%20Multispeciality%20Hospital!5e0!3m2!1sen!2sin!4v1697127597883!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          title="Hospital Location"
        ></iframe>
      </section>

      <section className="contact-form">
        <h2>Get In Touch</h2>
        <p>
          If you have any questions or inquiries, please use the form below.
        </p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" className="cta-button">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
