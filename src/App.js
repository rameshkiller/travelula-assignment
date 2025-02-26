import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import ItinerarySection from "./components/ItinerarySection";
import BookingForm from "./components/BookingForm";
import CostSection from "./components/CostSection";
import ContactSection from './components/ContactSection';
import AboutSection from "./components/AboutSection"; // Import AboutUs component


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutSection />} /> {/* Ensure correct route */}
          <Route path="/itinerary" element={<ItinerarySection />} />
          <Route path="/booking-form" element={<BookingForm />} />
          <Route path="/costs" element={<CostSection />} />
          <Route path="/contact-us" element={<ContactSection />} /> {/* Ensure correct route */}
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
