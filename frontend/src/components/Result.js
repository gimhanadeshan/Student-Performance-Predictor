import React from "react";
import "./css/Result.css";

const Result = ({ result }) => {
  const resultClass = result === "Fail" ? "fail" : result === "Pass" ? "pass" : "";  // Conditional class based on prediction

  return (
    <div className="result-container">
      {result ? (
        <h2 className={resultClass}>Prediction: {result}</h2>  // Apply class dynamically
      ) : (
        <p>Submit the form to get a prediction.</p>
      )}
    </div>
  );
};

export default Result;
