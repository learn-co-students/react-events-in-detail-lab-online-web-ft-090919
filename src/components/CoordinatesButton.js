// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component{


    handleOnClick = (e) => {
        let arr = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(arr)
    }

    render(){
        return(
            <button onClick={this.handleOnClick}></button>
        )
    }
}