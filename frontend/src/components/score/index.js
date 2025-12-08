import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CreditResult = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const finalScore = state?.score || 300;

  const [animatedScore, setAnimatedScore] = useState(300);
  const [angle, setAngle] = useState(-90); // -90deg = left side of gauge

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

      const roundedScore = Math.round(current);
      setAnimatedScore(roundedScore);

      const newAngle = -90 + ((finalScore - 300) / 586.74) * 180;
      console.log("Angle:", newAngle);

      setAngle(newAngle);
    }, duration / steps);

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
        <div className="needle" style={{ transform: `rotate(${angle}deg)` }} />
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
