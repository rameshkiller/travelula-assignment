import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const BookingForm = () => {
const navigate = useNavigate();
const [formData, setFormData] = useState({
fullName: "",
email: "",
phone: "",
destination: "",
guests: 1,
travelDate: "",
notes: "",
});

const [error, setError] = useState("");

const handleChange = (e) => {
const { name, value } = e.target;
setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e) => {
e.preventDefault();

if (!formData.fullName || !formData.email || !formData.phone || !formData.destination || !formData.travelDate) {
setError("Please fill in all required fields.");
return;
}

alert(`Booking Successful! \n\nDetails:\n${JSON.stringify(formData, null, 2)}`);
navigate("/"); // ✅ Redirect to home after booking
};

return (
<div className="booking-container">
<div className="booking-card">
<h2>Complete Your Booking</h2>
{error && <p className="error-message">{error}</p>}
<form className="booking-form" onSubmit={handleSubmit}>
<input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" required />
<input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
<input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required />

<select name="destination" value={formData.destination} onChange={handleChange} required>
<option value="">Select a Destination</option>
<option value="south-africa">South Africa</option>
<option value="kenya">Kenya</option>
<option value="tanzania">Tanzania</option>
<option value="india">India</option>
</select>

<input type="number" name="guests" value={formData.guests} onChange={handleChange} min="1" placeholder="Number of Guests" required />
<input type="date" name="travelDate" value={formData.travelDate} onChange={handleChange} required />
<textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="Special Requests"></textarea>

<button type="submit" className="checkout-btn">Confirm Booking</button>
<button type="button" className="cancel-btn" onClick={() => navigate("/")}>Cancel</button>
</form>
</div>
</div>
);
};

export default BookingForm;