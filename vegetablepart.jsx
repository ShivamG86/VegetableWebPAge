import React, { Component } from "react";
import "./VegetablePart.css"; 

class VegetablePart extends Component {
  render() {
    let { vegetables } = this.props;
    return (
      <div className="row" style={{ backgroundColor: "lightgray" }}>
        <div className="col-3"></div>
        <div className="col-8">
          <div className="row">
            {vegetables.map((pr) => (
              <div className="col-3 border m-4 bg-white hover-img" key={pr.id}>
                <img
                  src={pr.img}
                  style={{
                    width: "100%",
                    height: "200px",
                    display: "block",
                  }}
                  alt={pr.name}
                />
                <br />
                <h6 className="mt-1">{pr.name}</h6>
                <p>{pr.desc}</p>
                <button className="btn btn-success mt-auto mb-2" style={{ borderRadius: "50px" }}>
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default VegetablePart;
