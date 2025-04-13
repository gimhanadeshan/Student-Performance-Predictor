import React, { useState } from "react";
import axios from "axios";

const PredictorForm = ({ setResult }) => {
  const [formData, setFormData] = useState({
    attendance: "",
    study_hours: "",
    assignment_scores: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://127.0.0.1:5000/api/predict", formData);
      setResult(response.data.prediction);
    } catch (error) {
      console.error("Error making prediction:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <div className="card">
        <form onSubmit={handleSubmit}>
          <h2>Student Performance Predictor</h2>
          <p className="form-subtitle">
            Enter student metrics to generate a performance prediction
          </p>

          <div className="form-group">
            <label htmlFor="attendance">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Attendance (%)
            </label>
            <input
              type="number"
              id="attendance"
              name="attendance"
              min="0"
              max="100"
              value={formData.attendance}
              onChange={handleChange}
              required
              placeholder="Enter class attendance percentage"
            />
            <span className="input-hint">
              Regular attendance is strongly correlated with academic success
            </span>
          </div>

          <div className="form-group">
            <label htmlFor="study_hours">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              Study Hours (per week)
            </label>
            <input
              type="number"
              id="study_hours"
              name="study_hours"
              min="0"
              value={formData.study_hours}
              onChange={handleChange}
              required
              placeholder="Enter average weekly study hours"
            />
            <span className="input-hint">
              Time spent in focused study outside class
            </span>
          </div>

          <div className="form-group">
            <label htmlFor="assignment_scores">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              Assignment Scores (average %)
            </label>
            <input
              type="number"
              id="assignment_scores"
              name="assignment_scores"
              min="0"
              max="100"
              value={formData.assignment_scores}
              onChange={handleChange}
              required
              placeholder="Enter average assignment score (0-100)"
            />
            <span className="input-hint">
              Assignment performance is a key predictor of exam success
            </span>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner"></span>
                Processing Prediction...
              </>
            ) : (
              <>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
                Generate Prediction
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PredictorForm;
