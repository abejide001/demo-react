import React, { Component } from 'react'

export default class like extends Component {
  render() {
    let output = '';
    if (!this.props.liked) output += 'like'
    else output+= 'liked'
    return (<button className="btn btn-primary" onClick={this.props.onClick}>{output}</button>)
  }
}
