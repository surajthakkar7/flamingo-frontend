import React from "react";

const Patient = () => {
  return (
    <div>
      <section className="hero">
        <h1>Welcome to the Patient Portal</h1>
        <p>Access Your Medical Records and Communicate with Providers</p>
      </section>

      <section className="portal-info">
        <h2>What is the Patient Portal?</h2>
        <p>
          Our Patient Portal is a secure online platform that allows you to
          access your medical records, test results, and communicate with your
          healthcare providers. It's a convenient way to stay connected with
          your healthcare team and manage your health information.
        </p>
      </section>

      <section className="portal-login">
        <h2>Log In to Your Patient Portal</h2>
        <p>
          To access your Patient Portal, please enter your login credentials
          below.
        </p>
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />

          <button type="submit" className="cta-button">
            Log In
          </button>
        </form>
      </section>

      <section className="portal-in-progress">
        <h2>Portal in Progress</h2>
        <p>
          Currently, our Patient Portal is under development. We are working
          hard to bring you the best experience for managing your health online.
          The portal will soon be available with features to access your records
          and communicate with your providers.
        </p>
      </section>
    </div>
  );
};

export default Patient;
