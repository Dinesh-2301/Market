// src/pages/RegisterPage.jsx
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    otp: "",
  });

  const [generatedOtp, setGeneratedOtp] = useState("");
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendOtp = async () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);

    const templateParams = {
      to_name: formData.fullName,
      to_email: formData.email,
      otp,
    };

    try {
      await emailjs.send(
        "service_3v0cx1l",
        "template_gogcord",
        templateParams,
        "pZ2zeTaUhC_ir7ZFk"
      );
      alert("OTP sent to your email.");
      setStep(2);
    } catch (error) {
      alert("Failed to send OTP.");
      console.error(error);
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (formData.otp === generatedOtp) {
      alert("Registration successful!");
      // TODO: Save user data to backend
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto" }}>
      <h2>Register</h2>
      <form onSubmit={step === 1 ? sendOtp : handleVerifyOtp}>
        {step === 1 && (
          <>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              required
            />
            <button type="submit">Send OTP</button>
          </>
        )}

        {step === 2 && (
          <>
            <input
              type="text"
              name="otp"
              placeholder="Enter OTP"
              onChange={handleChange}
              required
            />
            <button type="submit">Verify & Register</button>
          </>
        )}
      </form>
    </div>
  );
};

export default RegisterPage;
