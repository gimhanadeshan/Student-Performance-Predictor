import React from "react";
import noResultImage from "../assets/no-result.png";

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="card about-card">
          <div className="about-image">
            <img src={noResultImage} alt="Student studying" />
          </div>

          <div className="about-content">
            <h2>About this Project</h2>
            <p>
              The Academic Performance Predictor is an AI-powered tool designed
              to help educators identify students who may need additional
              support based on key performance indicators.
            </p>
            <p>
              By analyzing attendance records, study hours, and assignment
              scores, our prediction model can identify patterns that correlate
              with successful academic outcomes.
            </p>

            <div className="feature-list">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <span>High Accuracy Predictions</span>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="23 4 23 10 17 10"></polyline>
                    <polyline points="1 20 1 14 7 14"></polyline>
                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                  </svg>
                </div>
                <span>Real-time Analysis</span>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <span>Easy Data Input</span>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                </div>
                <span>Comprehensive History</span>
              </div>
            </div>

            <p>
              Our model is based on research in educational data mining and
              machine learning, providing educators with a powerful tool to
              support student success strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
