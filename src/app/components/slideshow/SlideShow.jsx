import React, { Component } from "react";
import "./styles.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "85vh",
};
const slideImages = [
  {
    url: require("../../../assets/dam1.jpeg"),
  },
  {
    url: require("../../../assets/dam2.jpeg"),
  },
  {
    url: require("../../../assets/dam3.jpeg"),
  },
  {
    url: require("../../../assets/dam.png"),
  },
];

function SlideShow() {
  return (
    <div className="slide-container">
      <div className="slideshow-title">صور للمشروع</div>
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default SlideShow;
