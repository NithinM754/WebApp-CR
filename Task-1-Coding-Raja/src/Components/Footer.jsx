import React from 'react';
import { Link } from 'react-router-dom';
import "../Assets/css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
          <ul className="footer-links">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms and Conditions</Link></li>
            <li><Link to="/contact">FAQ</Link></li>
            <div className="footer-logo1">
              <a href='https://www.facebook.com/'><li><img width="30px" height="30px" src={"https://res.cloudinary.com/dfrc94azr/image/upload/v1695617282/facebook_w2haxu.png"} alt="/" /></li></a>
            </div>
            <div className="footer-logo2">
              <a href='https://in.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F'><li><img width="32px" height="32px" src={"https://res.cloudinary.com/dfrc94azr/image/upload/v1695617699/linkedin_pksewv.png"} alt="/" /></li></a>
            </div>
            <div className="footer-logo3">
            <a href='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D'><li><img width="30px" height="30px" src={"https://res.cloudinary.com/dfrc94azr/image/upload/v1695617883/twitter_oxcowh.png"} alt="/" /></li></a>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;