// Code CoordinatesButton Component Here

import React, { Component } from 'react'
//  import React from 'react'

//  class CoordinatesButton extends React.Component {
class CoordinatesButton extends Component {

    createArray = (event) => {
        let arr = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(arr)
    }

    render() {
        return (
            <div>
                <button onClick={ this.createArray } >
                </button>
            </div>
        )
    }

}



export default CoordinatesButton


