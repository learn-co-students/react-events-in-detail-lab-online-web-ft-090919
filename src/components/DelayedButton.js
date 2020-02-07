import React, { Component } from 'react'

export default class DelayedButton extends Component {
    
    handleClick = (event) => {
        console.log("Button Clicked")
        event.persist()
        window.setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
    }
    
    render() {
        return < button onClick={this.handleClick} >Start Countdown</button>
    }
}
