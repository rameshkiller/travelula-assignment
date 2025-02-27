import React from "react";
import { useLocation } from "react-router-dom";
import { FaCar, FaSun, FaBinoculars, FaCampground } from "react-icons/fa";
import "./index.css";

// Define itinerary data
const itinerary = [
  {
    day: "Day 1 - Nov 14th, 2023",
    title: "Arrival & First Game Drive",
    activities: [
      " Pick-up from JKIA Airport at 7 AM by our 4x4 Landcruisers.",
      " Drive through Nairobi National Park – spot lions, rhinos & giraffes.",
      " Scenic stop at The Great Rift Valley viewpoint.",
      " Check-in at Maasai Mara camp & lunch.",
      " Afternoon game drive to the Topi Plains, home to the famous Topi Pride of Lions.",
      " Campfire gathering & dinner at the lodge.",
    ],
    icon: <FaCar />,
  },
  {
    day: "Day 2 - Nov 15th, 2023",
    title: "Full Day Safari & Bush Breakfast",
    activities: [
      " Early morning game drive – watch the breathtaking sunrise.",
      " Bush breakfast in the wild, surrounded by grazing wildlife.",
      " Search for cheetahs & hyenas as Topis give birth.",
      " Return to camp for lunch & rest.",
      " Afternoon drive to track leopards in hidden spots.",
      " Sunset photography & return to camp.",
    ],
    icon: <FaSun />,
  },
  {
    day: "Day 3 - Nov 16th, 2023",
    title: "The Ultimate Safari - Sand River & Big Cats",
    activities: [
      " Full-day game drive to Sand River – witness the Tanzania-Kenya border.",
      " Encounter lion prides and search for the elusive black rhino.",
      " Picnic lunch in the wild.",
      " Leisure time at camp before a special Maasai cultural experience.",
    ],
    icon: <FaBinoculars />,
  },
  {
    day: "Day 4 - Nov 17th, 2023",
    title: "Farewell & Return to Nairobi",
    activities: [
      " Leisure breakfast at the camp.",
      " Drive back to Nairobi with a heart full of memories.",
      " Drop-off at JKIA Airport.",
    ],
    icon: <FaCampground />,
  },
];

const ItinerarySection = () => {
  const location = useLocation(); // Get current route

  return (
    <div>
      {/* Show Image Section Only on /itinerary Page */}
      {location.pathname === "/itinerary" && <div className="image-section"></div>}

      {/* Itinerary Section */}
      <section className="itinerary1">
        <div>
          <h2> Itinerary - Big Cats Week at Maasai Mara</h2>
          <div className="itinerary-container1">
            {itinerary.map((day, index) => (
              <div className="itinerary-day" key={index}>
               
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
    </div>
  );
};

export default ItinerarySection;
