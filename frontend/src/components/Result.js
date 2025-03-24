import React from "react";

const Result = ({ result }) => {
  if (!result) {
    return null;
  }

  const resultClass = result === "Fail" ? "fail" : "pass";

  // Additional feedback based on the result
  const getFeedback = () => {
    if (result === "Pass") {
      return {
        icon: (
          <svg
            className="result-icon pass"
            width="64"
            height="64"
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
        ),
        title: "On Track for Success!",
        message:
          "Current performance metrics indicate this student is likely to succeed. Continue monitoring progress and providing support.",
      };
    } else {
      return {
        icon: (
          <svg
            className="result-icon fail"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        ),
        title: "Intervention Recommended",
        message:
          "This student may need additional support to improve their academic performance. Consider scheduling a one-on-one meeting to discuss strategies for improvement.",
      };
    }
  };

  const feedback = getFeedback();

  return (
    <div className={`card result-container ${resultClass}-container`}>
      <div className="result">
        {feedback.icon}
        <h2>{feedback.title}</h2>
        <div className="prediction-badge">
          Prediction: <span className={resultClass}>{result}</span>
        </div>
        <p>{feedback.message}</p>

        <div className="action-recommendations">
          <h3>Recommended Actions:</h3>
          <ul>
            {result === "Pass" ? (
              <>
                <li>Continue with current support strategy</li>
                <li>Provide positive reinforcement</li>
                <li>Consider opportunities for academic enrichment</li>
              </>
            ) : (
              <>
                <li>Schedule a student conference</li>
                <li>Develop an improvement plan</li>
                <li>Consider tutoring or additional resources</li>
                <li>Follow up weekly to track progress</li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Result;
