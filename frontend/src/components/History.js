import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/History.css";

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/history`);
        setHistory(response.data.history);
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="history-container">
      <h2>Prediction History</h2>
      {history.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Attendance (%)</th>
              <th>Study Hours</th>
              <th>Assignment Scores</th>
              <th>Prediction</th>
            </tr>
          </thead>
          <tbody>
            {history.map((entry, index) => (
              <tr key={index}>
                <td>{entry.created_at}</td>
                <td>{entry.attendance}</td>
                <td>{entry.study_hours}</td>
                <td>{entry.assignment_scores}</td>
                <td
                  style={{
                    color: entry.prediction === "Fail" ? "red" : "green",
                  }}
                >
                  {entry.prediction}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No predictions found.</p>
      )}
    </div>
  );
};

export default History;
