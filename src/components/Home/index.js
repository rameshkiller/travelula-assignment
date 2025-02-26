import React, { useState } from "react";
import { FaCar, FaSun, FaBinoculars, FaCampground } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./index.css";

const itinerary = [
  {
    day: "Day 1 - Nov 14th, 2023",
    title: "Arrival & First Game Drive",
    activities: [
      "🚗 Pick-up from JKIA Airport at 7 AM by our 4x4 Landcruisers.",
      "🌍 Drive through Nairobi National Park – spot lions, rhinos & giraffes.",
      "🏞️ Scenic stop at The Great Rift Valley viewpoint.",
      "🏕️ Check-in at Maasai Mara camp & lunch.",
      "🦁 Afternoon game drive to the Topi Plains, home to the famous Topi Pride of Lions.",
      "🔥 Campfire gathering & dinner at the lodge.",
    ],
    icon: <FaCar />,
  },
  {
    day: "Day 2 - Nov 15th, 2023",
    title: "Full Day Safari & Bush Breakfast",
    activities: [
      "🌅 Early morning game drive – watch the breathtaking sunrise.",
      "☕ Bush breakfast in the wild, surrounded by grazing wildlife.",
      "🐆 Search for cheetahs & hyenas as Topis give birth.",
      "🍽️ Return to camp for lunch & rest.",
      "🐆 Afternoon drive to track leopards in hidden spots.",
      "🌇 Sunset photography & return to camp.",
    ],
    icon: <FaSun />,
  },
  {
    day: "Day 3 - Nov 16th, 2023",
    title: "The Ultimate Safari - Sand River & Big Cats",
    activities: [
      "🚙 Full-day game drive to Sand River – witness the Tanzania-Kenya border.",
      "🦁 Encounter lion prides and search for the elusive black rhino.",
      "🍽️ Picnic lunch in the wild.",
      "🌞 Leisure time at camp before a special Maasai cultural experience.",
    ],
    icon: <FaBinoculars />,
  },
  {
    day: "Day 4 - Nov 17th, 2023",
    title: "Farewell & Return to Nairobi",
    activities: [
      "🥞 Leisure breakfast at the camp.",
      "🚗 Drive back to Nairobi with a heart full of memories.",
      "✈️ Drop-off at JKIA Airport.",
    ],
    icon: <FaCampground />,
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [showItinerary, setShowItinerary] = useState(false);

  const handleBookingClick = () => {
    navigate("/booking-form");
  };

  const handleBooking = () => {
    navigate("/booking-form");
  };
  return (
    <section className="home-container">
      {/* Show Home Section Only When showItinerary is false */}
      {!showItinerary && (
        <>
          {/* Hero Section */}
          <section className="hero">
            <div className="hero-content">
              <h1>Big Cats Week at Maasai Mara - Diwali 2023 Special</h1>
              <p>
                Experience the wild beauty of Maasai Mara this November! Witness
                breathtaking sunrises, lush green plains, and the majestic Big
                Cats in action.
              </p>
              <button className="btn" onClick={handleBookingClick}>
                Book Now
              </button>
            </div>
          </section>

          {/* Overview Section */}
          <section className="overview">
            <div className="overview-content">
              <h2>"November Magic in Maasai Mara: A Diwali Special"</h2>
              <p>
                November is one of the best times to visit Kenya, especially its
                prime park, Maasai Mara. The large migratory herds would have
                returned to Tanzania, and now the Big Cats must venture long
                distances to hunt their prey.November is also the season of
                short rains, making the plains of Maasai Mara lush green. The
                skies turn dramatic and colorful, offering breathtaking sunrises
                and sunsets.This is also a time for holidaying and family
                gatherings. To commemorate our first anniversary of operations
                in Nairobi, we have curated this itinerary at an affordable cost
                without compromising on any services.
              </p>
            </div>
          </section>
        </>
      )}

      {/* Show Itinerary Section Only When showItinerary is true 
      {showItinerary && (
        <section className="itinerary">
          <h2>Safari Itinerary</h2>
          {itinerary.map((day, index) => (
            <div key={index} className="itinerary-day">
              <h3>{day.day}</h3>
              <h4>{day.title}</h4>
              <ul>
                {day.activities.map((activity, idx) => (
                  <li key={idx}>{activity}</li>
                ))}
              </ul>
              <span>{day.icon}</span>
            </div>
          ))}
          <button
            className="btn secondary"
            onClick={() => setShowItinerary(false)}
          >
            Back to Home
          </button>
        </section>
      )}
      <div className="itinerary50">
        <h2>🗓️ Itinerary - Big Cats Week at Maasai Mara</h2>
        <div className="itinerary-container90">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
          >
            <path d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z"></path>
          </svg>
          <h2>Day 1 - Nov 14th, 2023</h2>
          <p className="description">Arrival & First Game Drive</p>
          <ul>
            <li>
              🚗 Pick-up from JKIA Airport at 7 AM by our 4x4 Landcruisers.
            </li>
            <li>
              🌍 Drive through Nairobi National Park – spot lions, rhinos &
              giraffes.
            </li>
            <li>🏞️ Scenic stop at The Great Rift Valley viewpoint.</li>
            <li>🏕️ Check-in at Maasai Mara camp & lunch.</li>
            <li>
              🦁 Afternoon game drive to the Topi Plains, home to the famous
              Topi Pride of Lions.
            </li>
            <li>🔥 Campfire gathering & dinner at the lodge.</li>
          </ul>
        </div>
      </div>*/}
      <section className="itinerary">
        <div>
          <h2>🗓️ Itinerary - Big Cats Week at Maasai Mara</h2>
          <div className="itinerary-container">
            {itinerary.map((day, index) => (
              <div className="itinerary-day" key={index}>
                <div className="icon">{day.icon}</div>
                <h3>{day.day}</h3>
                <h4>{day.title}</h4>
                <ul>
                  {day.activities.map((activity, i) => (
                    <li key={i}>{activity}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*cost Section*/}
      <div className="main">
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
      {/*footer Section*/}
      <div className="footer-section">
        <h1>Logo</h1>
        <p>
          Having Queries ? Call <strong>000-154-5247</strong>
        </p>
        <div className="get-section">
          <h2 className="get">Know About Us</h2>
          <p className="p">About Us</p>
          <p className="p">Itinerary</p>
          <p className="p">Cost</p>
          <p className="p">Contact Us</p>
           <p className="copyrights">© Copyrights reserved</p>
        </div>
       
      </div>
    </section>
  );
};

export default Home;
