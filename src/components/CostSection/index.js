import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Index = () => {
  const navigate = useNavigate();
  const [showBooking, setShowBooking] = useState(false);

  const handleBooking = () => {
    setShowBooking(true); // ✅ Show Booking Form within the page
    navigate("/booking-form"); // ✅ Navigate to booking form route
  };

  return (
    <div>
      <img
        className="costs-image"
        src="https://images.ctfassets.net/hrltx12pl8hq/1D85eAdM0IhXrEYsoOt7Ut/107424ea3e7e10ab3203446dae175cf7/3_jungle_animals.webp"
        alt="Banner"
      />

      <div className="main1">
        <h1>Best-selling packages</h1>

        {[
          "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/WildlifePackageTemplate%2FRiver%20Crossing%20(2).jpg?alt=media&token=336bcd8f-6436-4b68-93fd-3b988e45c006",
          "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/corbett%2Fcorbett-4.webp?alt=media&token=d6cb6842-a766-4c16-bc36-77b442583dd9",
          "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/kenyaKids%2Fk-3.jpg?alt=media&token=e2ad2963-58a0-4e13-9f86-1041101f6fbe",
          "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/corbett%2Fcorbett-1.webp?alt=media&token=a495277c-ae8d-4680-9ed8-38c35b09e367",
          "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/LPackages%2FSambhar%20corbett_copy.webp?alt=media&token=187ca14d-7f54-4261-b2c8-0e9257d978bd",
          "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/kenyaKids%2Fk-2.webp?alt=media&token=d8038cc3-1116-405b-885e-ecc026b4d34f",
          "https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/TU-Africa%2Fa-1-new.jpeg?alt=media&token=92be02a0-855b-48b9-beb5-49c607d9b026",
        ].map((image, index) => (
          <div key={index} className="main-card1">
            <img src={image} alt="Package" />
            <p>INR 68,500/-</p>
            <p>75,000/-</p>
            <p>For 6N/7D</p>
            <button onClick={handleBooking}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
