
import React from "react";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have a Question?</h1>
      <h1 className="primary-heading">We're Here to Help</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
    </div>
  );
};

export default Contact;
