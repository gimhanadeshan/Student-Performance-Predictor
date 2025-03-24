import React, { useState } from "react";
import PredictorForm from "./components/PredictorForm";
import Result from "./components/Result";
import History from "./components/History";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [result, setResult] = useState("");
  const [activeTab, setActiveTab] = useState("predictor");

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Academic Performance Predictor</h1>
        <p>Predict student success based on key performance indicators</p>
      </header>

      <main>
        <div className="nav-tabs">
          <button
            className={`tab-btn ${activeTab === "predictor" ? "active" : ""}`}
            onClick={() => setActiveTab("predictor")}
          >
            <i className="fas fa-chart-line"></i>
            <span className="tab-text">Predictor</span>
          </button>
          <button
            className={`tab-btn ${activeTab === "history" ? "active" : ""}`}
            onClick={() => setActiveTab("history")}
          >
            <i className="fas fa-history"></i>
            <span className="tab-text">History</span>
          </button>
          <button
            className={`tab-btn ${activeTab === "about" ? "active" : ""}`}
            onClick={() => setActiveTab("about")}
          >
            <i className="fas fa-info-circle"></i>
            <span className="tab-text">About</span>
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "predictor" && (
            <div className="app-content">
              <PredictorForm setResult={setResult} />
              <div className="right-side-content">
                {result ? (
                  <div className="result-container">
                    <Result result={result} />
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          )}

          {activeTab === "history" && <History />}

          {activeTab === "about" && <About />}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
