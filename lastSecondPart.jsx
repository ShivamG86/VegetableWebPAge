import React, { Component } from "react";

class LastSecondPart extends Component {
    render(){
        let {array} =  this.props
        return(
            <div className="row" style={{ backgroundColor: "lightgray" }}>
        <div className="col-3"></div>
        <div className="col-8">
          <div className="row">
            {array.map((pr) => (
              <div className="col-3 border m-4 bg-white ">
                <div style={{color:"lightgreen"}}>
                <i class={pr.font}></i>
                </div>
                <h6 className="mt-1">{pr.name}</h6>
                <p>{pr.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
        )
    }
}
export default LastSecondPart