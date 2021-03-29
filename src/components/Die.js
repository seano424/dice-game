import React, { Component } from 'react'
import './Die.css'

export default class Die extends Component {
  render() {
    const { face } = this.props
    return (
      <div className={`Die ${this.props.rolling && 'rolling'}`}>
        <i className={`fas fa-dice-${face}`}></i>
      </div>
    )
  }
}
