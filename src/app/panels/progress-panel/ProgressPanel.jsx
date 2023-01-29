import React, { Component } from "react";
import ProgressBar from "../../components/progress-bar/ProgressBar";
import ProjectTimeline from "../../components/project-timeline/ProjectTimeline";
import "./styles.css";

function ProgressPanel({ stage, total, current }) {
  return (
    <div className="progress-panel-container">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          marginBottom: "50px",
        }}
      >
        <div className="progress-panel-title">تمويل المشروع</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <div className="progress-panel-funding-container">
            <div className="progress-panel-funding-percentage">20%</div>
            <div className="progress-panel-funding-title">تمويل حكومي</div>
          </div>
          <div className="progress-panel-funding-container">
            <div className="progress-panel-funding-percentage">30%</div>
            <div className="progress-panel-funding-title">الشركات</div>
          </div>
          <div className="progress-panel-funding-container">
            <div className="progress-panel-funding-percentage">50%</div>
            <div className="progress-panel-funding-title">تبرعات أهلية</div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "50px", width: "100%" }}>
        <ProjectTimeline stage={stage} title="مراحل المشروع" />
      </div>
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
