import React, { Component } from "react";
import "./main.css";
class FirstPart extends Component {
    render(){
        return(
            <div className="image-container">
          <img
            src="https://pbs.twimg.com/media/D7vU-BDVUAAWHgM?format=jpg&name=900x900"
            alt="Sample Image"
            height="800px"
            width="100%"
          />
          <div className="centered-text">
            100% ORGANIC
            <br />
          </div>
          <div className="centered">WE DELIVER ORGANIC VEGETABLES & FRUITS</div>
          <div className="centered2">
            <button className="custom-button">Get This</button>
          </div>
        </div>
        )
    }
}

export default FirstPart;