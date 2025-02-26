import React from "react";
import { Link } from "react-router-dom";
import "./index.css"; // For styling

const Header = () => {
  return (
    <header className="header">
      {/* Make the logo clickable by wrapping it with a Link */}
      <Link to="/" className="logo-section">
        BigCatz
      </Link>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us" smooth={true} duration={500}>
              About Us
            </Link>
          </li>

          <li>
            <Link to="/itinerary" smooth={true} duration={500}>
              Itinerary
            </Link>
          </li>
          <li>
            <Link to="/costs" smooth={true} duration={500}>
              Costs
            </Link>
          </li>
          <li>
            <Link to="/contact-us" smooth={true} duration={500}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
