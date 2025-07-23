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
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

  const sendOtpEmail = async (otp) => {
    const templateParams = {
      passcode: otp,
      time: new Date(Date.now() + 15 * 60000).toLocaleTimeString(),
      email: formData.email,
    };

    await emailjs.send(
      "service_3v0cx1l",     // Your service ID
      "template_gogcord",    // Your template ID
      templateParams,
      "pZ2zeTaUhC_ir7ZFk"    // Your public key
    );
  };

  const sendOtp = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.password || !formData.phone) {
      alert("Please fill all fields");
      return;
    }

    const otp = generateOtp();
    setGeneratedOtp(otp);

    try {
      setLoading(true);
      await sendOtpEmail(otp);
      alert("OTP sent to your email.");
      setStep(2);
    } catch (error) {
      alert("Failed to send OTP. Please try again.");
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();

    if (formData.otp === generatedOtp) {
      alert("✅ Registration successful!");
      console.log("Registered Data:", {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      });
      // TODO: Send to backend API
    } else {
      alert("❌ Invalid OTP. Please try again.");
    }
  };

  const resendOtp = async () => {
    const otp = generateOtp();
    setGeneratedOtp(otp);

    try {
      await sendOtpEmail(otp);
      alert("OTP resent to your email.");
    } catch (error) {
      alert("Failed to resend OTP.");
      console.error("Resend OTP Error:", error);
    }
  };

  return (
    <div style={containerStyle}>
      <h2>Register</h2>
      <form onSubmit={step === 1 ? sendOtp : handleVerifyOtp}>
        {step === 1 && (
          <>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              onChange={handleChange}
              value={formData.fullName}
              required
              style={inputStyle}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
              required
              style={inputStyle}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={formData.password}
              required
              style={inputStyle}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              value={formData.phone}
              required
              style={inputStyle}
            />
            <button type="submit" disabled={loading} style={buttonStyle}>
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <input
              type="text"
              name="otp"
              placeholder="Enter OTP"
              onChange={handleChange}
              value={formData.otp}
              required
              style={inputStyle}
            />
            <button type="submit" style={buttonStyle}>Verify & Register</button>
            <p style={{ marginTop: "10px" }}>
              Didn’t receive OTP?{" "}
              <button
                type="button"
                onClick={resendOtp}
                style={resendStyle}
              >
                Resend OTP
              </button>
            </p>
          </>
        )}
      </form>
    </div>
  );
};

// Styles
const containerStyle = {
  maxWidth: "400px",
  margin: "2rem auto",
  padding: "1rem",
  border: "1px solid #ccc",
  borderRadius: "10px",
};

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#007BFF",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const resendStyle = {
  color: "#007BFF",
  border: "none",
  background: "none",
  cursor: "pointer",
  padding: 0,
};

export default RegisterPage;
