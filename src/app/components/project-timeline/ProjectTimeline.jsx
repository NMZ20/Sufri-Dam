import React, { Component } from "react";
import "./styles.css";

function ProjectTimeline({ stage, title }) {
  const lineClasses = "project-timeline-line stage";
  const nodeClasses = "project-timeline-node";

  const setStageClass = () => {
    return lineClasses + stage.toString();
  };

  return (
    <div className="project-timeline-container">
      <div className="project-timeline-title">{title}</div>
      <div className={setStageClass()}>
        <div className={stage >= 1 ? nodeClasses + " active" : nodeClasses}>
          1
        </div>
        <div className={stage >= 2 ? nodeClasses + " active" : nodeClasses}>
          2
        </div>
        <div className={stage >= 3 ? nodeClasses + " active" : nodeClasses}>
          3
        </div>
      </div>
    </div>
  );
}

export default ProjectTimeline;
