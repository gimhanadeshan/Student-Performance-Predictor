import React, { useState } from "react";
import axios from "axios";
import "./css/PredictorForm.css"; // Import the CSS file

const PredictorForm = ({ setResult }) => {
  const [formData, setFormData] = useState({
    attendance: "",
    study_hours: "",
    assignment_scores: "",
  });
  const [loading, setLoading] = useState(false); // To manage loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state
    try {
      const response = await axios.post(
        `${process.env.API_BASE_URL}/predict`,
        formData
      );
      setResult(response.data.prediction);
    } catch (error) {
      console.error("Error making prediction:", error);
    } finally {
      setLoading(false); // Hide loading state after prediction
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Student Performance Predictor</h2>
      <div>
        <label>Attendance (%):</label>
        <input
          type="number"
          name="attendance"
          value={formData.attendance}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Study Hours:</label>
        <input
          type="number"
          name="study_hours"
          value={formData.study_hours}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Assignment Scores:</label>
        <input
          type="number"
          name="assignment_scores"
          value={formData.assignment_scores}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? "Predicting..." : "Predict"}
      </button>
    </form>
  );
};

export default PredictorForm;
