import React, { Component } from "react";
import "./styles.css";

function ProgressBar({ total, current }) {
  const calculatePercentage = () => Math.round((current / total) * 100);
  return (
    <div className="progress-bar-container">
      <div className="progress-bar-text">
        <div>
          {current} / {total}
        </div>
      </div>
      <div className="progress-bar-base">
        <div
          className="progress-bar-progress"
          style={{ width: `${calculatePercentage()}%` }}
        >
          <div className="progress-bar-progress-percentage">
            {calculatePercentage()}%
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
