import React, { Component } from 'react'

export default class ChildComponent extends Component {
  render() {
    let {name , age} = this.props

    return (
      <div>ChildComponent: {name} - {age}</div>
    )
  }
}
