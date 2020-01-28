import React from 'react'

export default class DelayedButton extends React.Component {

  handleClick = (e) => {
    e.persist()

   const delay = this.props.delay
   const delayCallback = this.props.onDelayedClick

   window.setTimeout(() => {
    delayCallback(e)
   }, delay)
}

  render() {
    return <button onClick={this.handleClick}></button>
  }
}
