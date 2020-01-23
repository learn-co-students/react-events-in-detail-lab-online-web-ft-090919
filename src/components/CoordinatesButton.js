// Code CoordinatesButton Component Here
import React, { Component } from "react";

export class CoordinatesButton extends Component {
  handleOnClick = e => {
    const cordArray = [e.clientX, e.clientY];

    this.props.onReceiveCoordinates(cordArray);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleOnClick}></button>
      </div>
    );
  }
}

export default CoordinatesButton;
