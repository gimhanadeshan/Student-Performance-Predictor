import React, { useEffect, useState } from "react";
import axios from "axios";

const History = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/history");
        setHistory(response.data.history);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching history:", error);
        setError("Unable to load prediction history. Please try again later.");
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  // Format date for better readability
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  if (loading) {
    return (
      <div className="card history-container">
        <h2>Prediction History</h2>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card history-container">
        <h2>Prediction History</h2>
        <p className="error-message">{error}</p>
      </div>
    );
  }

  return (
    <div className="history-container">
      {history.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Attendance (%)</th>
              <th>Study Hours</th>
              <th>Assignments</th>
              <th>Prediction</th>
            </tr>
          </thead>
          <tbody>
            {history.map((entry, index) => (
              <tr key={index}>
                <td>{formatDate(entry.created_at)}</td>
                <td>{entry.attendance}%</td>
                <td>{entry.study_hours}</td>
                <td>{entry.assignment_scores}/100</td>
                <td>
                  <span
                    className={entry.prediction === "Fail" ? "fail" : "pass"}
                  >
                    {entry.prediction}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-data">
          No predictions found. Try making some predictions first.
        </p>
      )}
    </div>
  );
};

export default History;
