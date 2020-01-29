import React, { Component } from 'react';

class CoordinatesButton extends Component {
    render(){
        return <button onClick={this.handleClick}>Coords</button>
    }

    handleClick = (e) => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY]);
    }
} 

export default CoordinatesButton;