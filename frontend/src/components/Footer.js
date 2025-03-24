import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Academic Performance Predictor</h3>
            <p>
              Helping students achieve academic success through data-driven
              insights
            </p>
          </div>

          <div className="footer-links">
            <a href="#predictor">Predictor</a>
            <a href="#history">History</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
        </div>

        <div className="footer-copyright">
          <p>
            &copy; {currentYear} Academic Performance Predictor. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
