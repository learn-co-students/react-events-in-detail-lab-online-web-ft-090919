// Code DelayedButton Component Here

import React, { Component } from 'react'


class DelayedButton extends Component {

    persistEvent = (event) => {

        event.persist()

        let delay = this.props.delay
        let onDelayedClickCallback = this.props.onDelayedClick

        window.setTimeout(() => {onDelayedClickCallback(event)}, delay)

    }


    render() {
        return (
            <div>
                <button onClick={this.persistEvent} >
                </button>
            </div>
        )
    }
}




export default DelayedButton