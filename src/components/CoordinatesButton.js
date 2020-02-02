// Code CoordinatesButton Component Here
import React, { Component } from 'react'

class CoordinatesButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

 handleClick = (event) => {
     this.props.onReceiveCoordinates([event.clientX , event.clientY])
 }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Mouse Coordinates Button</button>
            </div>
        )
    }
}

export default CoordinatesButton
