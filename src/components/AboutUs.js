import React from "react";

const AboutUs = () => {
  return (
    <div>
      <section className="hero">
        <h1>About Flamingo Multispecialist Hospital</h1>
        <p>Committed to Excellence in Healthcare</p>
      </section>

      <section className="overview">
        <h2>Our Overview</h2>
        <p>
          Flamingo Multispecialist Hospital is a leading healthcare facility
          with a rich history of providing top-notch medical services to the
          community. Our commitment to excellence and a patient-centered
          approach sets us apart from the rest.
        </p>
        <p>
          We are proud to have a team of dedicated specialists in various
          medical fields. Our mission is to deliver high-quality healthcare with
          compassion and the latest medical advancements.
        </p>
      </section>

      <section className="doctors">
        <h2>Meet Our Team of Specialists</h2>
        <div className="doctor-card">
          <img src="doctor_naushad.jpg" alt="Dr. Naushad Khatri" />
          <h3>Dr. Naushad Khatri</h3>
          <p>
            Specialist surgeon for kidney, stone, prostate, genital diseases
          </p>
          <p>First Urologist of Kutch district</p>
          <p>13 years of vast experience in urology field</p>
          <p>Experience of more than 8000 successful operations</p>
          <p>Pioneer of stone operation by laser</p>
          <p>Qualifications: M.S., D.N.B. (Urology)</p>
        </div>

        {/* Add more doctor cards for other specialists */}
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>Your health is our priority. Reach out to us with your questions.</p>
      </section>
    </div>
  );
};

export default AboutUs;
