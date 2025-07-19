import React from "react";
import "../styles/ContactSection.css";

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="contact-form">
        <h2>Have Questions?</h2>
        <h1>Send us a message</h1>
        <form>
          <input type="text" placeholder="Name" />
          <div className="inline-inputs">
            <input type="email" placeholder="Email*" />
            <input type="text" placeholder="Phone" />
          </div>
          <textarea placeholder="Tell Us About Project *" rows="4"></textarea>
          <button type="submit">✈ Get In Touch</button>
        </form>
      </div>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>
          Plan upon yet way get cold spot its week. <br />
          Almost do am or limits hearts. Resolve parties but why she shewing.
        </p>
        <div className="info-block">
          <strong>Hotline</strong>
          <p>+4733378901</p>
        </div>
        <div className="info-block">
          <strong>Our Location</strong>
          <p>55 Main Street, The Grand Avenue 2nd Block,<br />New York City</p>
        </div>
        <div className="info-block">
          <strong>Official Email</strong>
          <p>info@agrul.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
