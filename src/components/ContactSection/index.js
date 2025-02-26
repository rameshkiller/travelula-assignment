import React, { useState } from "react";
import "./index.css"; // Ensure this CSS file exists

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    setSuccessMessage("Your message has been sent successfully!");

    // Simulate form submission (Replace with actual API call if needed)
    setTimeout(() => {
      setSuccessMessage("");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>Contact Us</h2>
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required></textarea>

          <button type="submit" className="send-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
