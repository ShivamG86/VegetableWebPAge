import React, { Component } from "react";
import "./main.css";

class MiddlePart extends Component {
  render() {
    return (
      <div style={{ position: "relative" }}>
        <img
          src="https://png.pngtree.com/background/20210710/original/pngtree-healthy-fruits-and-vegetables-green-leaves-literary-green-banner-picture-image_1035930.jpg"
          width="100%"
          height="300px"
          alt="Healthy Fruits and Vegetables"
        />
        <div style={textStyle}>FRESH & NON-GMO PRODUCTS</div>
      </div>
    );
  }
}

const textStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "white",
  fontSize: "50px",
  fontWeight: "bold",
  textAlign: "center",
  backgroundColor: "transparent",
  padding: "10px",
};

export default MiddlePart;
