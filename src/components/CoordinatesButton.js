// Code CoordinatesButton Component Here
import React from "react";

class CoordinatesButton extends React.Component {
    
    handleClick = e => {
        return this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }

    render(){
        <button onClick= { this.handleClick()}
    }
}

export default CoordinatesButton;


