import React from 'react'

export default class CoordinatesButton extends React.Component {
  render(){
    return <button onClick={this.timeOut}/>
  }

  timeOut = (event) => {
    event.persist()
    window.setTimeout(()=>{this.props.onDelayedClick(event)}, this.props.delay)
  }
}