import React, { Component } from "react";
import ProgressBar from "../../components/progress-bar/ProgressBar";
import ProjectTimeline from "../../components/project-timeline/ProjectTimeline";
import "./styles.css";

function ProgressPanel({ stage, total, current }) {
  return (
    <div className="progress-panel-container">
      <ProjectTimeline stage={stage} title="مراحل المشروع" />
      <div className="progress-panel-title">التبرعات للمرحلة الحالية</div>
      <ProgressBar total={total} current={current} />
      <div style={{ display: "flex", marginTop: "50px", marginBottom: "30px" }}>
        <div className="progress-panel-subtitle">
          قيمة السهم
          <span className="focused"> 2 ريال </span>
        </div>
        <div className="progress-panel-subtitle">
          الهدف
          <span className="focused"> 4600 سهم</span>
        </div>
      </div>
      <div className="progress-panel-title">للتبرع</div>
      <div className="progress-panel-subtitle focused">
        بنك مسقط 0384062236630018
      </div>
    </div>
  );
}

export default ProgressPanel;
