import React, { useState } from "react";
import PredictorForm from "./components/PredictorForm";
import Result from "./components/Result";
import History from "./components/History";

const App = () => {
  const [result, setResult] = useState("");
  const [showHistory, setShowHistory] = useState(false);

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  return (
    <div className="app-container">
      <PredictorForm setResult={setResult} />
      <Result result={result} />
      <button onClick={toggleHistory}>
        {showHistory ? "Hide History" : "View History"}
      </button>
      {showHistory && <History />}
    </div>
  );
};

export default App;
