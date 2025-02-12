import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Questions? Call 1-800-123-4567</p>
      <div className="footer-links">
        <a href="#faq">FAQ</a>
        <a href="#help-center">Help Center</a>
        <a href="#terms">Terms of Use</a>
        <a href="#privacy">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
