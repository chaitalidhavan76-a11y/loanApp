import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CreditResult = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const finalScore = state?.score || 300;

  const [animatedScore, setAnimatedScore] = useState(300);
  const [angle, setAngle] = useState(-90); // -90deg = left side

  // ANIMATE SCORE + NEEDLE
  useEffect(() => {
    const start = 300;
    const end = finalScore;
    const duration = 1000;
    const steps = 60;
    const increment = (end - start) / steps;

    let current = start;
    let stepCount = 0;

    const counter = setInterval(() => {
      current += increment;
      stepCount++;

      if (stepCount >= steps) {
        current = end;
        clearInterval(counter);
      }

      setAnimatedScore(Math.round(current));
    }, duration / steps);

    // Convert score → angle (-90deg to +90deg)
    const newAngle = -90 + ((finalScore - 300) / 600) * 180;

    setTimeout(() => setAngle(newAngle), 300);

    return () => clearInterval(counter);
  }, [finalScore]);

  const getLabel = () => {
    if (animatedScore >= 750) return "Excellent";
    if (animatedScore >= 650) return "Good";
    if (animatedScore >= 550) return "Fair";
    return "Poor";
  };

  return (
    <div className="result-wrapper">

      <h1>Your Credit Score</h1>

      <div className="gauge">
        <div
          className="needle"
          style={{ transform: `rotate(${angle}deg)` }}
        ></div>
      </div>

      <div className="score-value">{animatedScore}</div>
      <div className="score-label">{getLabel()}</div>

      <button className="back-btn" onClick={() => navigate("/check-credit-score")}>
        Check Again
      </button>
    </div>
  );
};

export default CreditResult;
