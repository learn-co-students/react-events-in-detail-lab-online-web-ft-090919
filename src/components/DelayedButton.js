import React from 'react'

class DelayedButton extends React.Component {

    handleDelayedClick = (e) => {
        e.persist()
        window.setTimeout(() => {
            this.props.onDelayedClick(e)
        }, this.props.delay)
    }

    render() {
        return(
            <button onClick={this.handleDelayedClick}>Later</button>
        )
    }
}

export default DelayedButton