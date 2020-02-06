// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component{

    handleOnclick = (event) => {
        event.persist()
        const e = event
        const delay = this.props.delay
        
        setTimeout(()=>{this.props.onDelayedClick(e)}, delay)
    }

    render(){
        return(
            <button onClick={this.handleOnclick}></button>
        )
    }
}