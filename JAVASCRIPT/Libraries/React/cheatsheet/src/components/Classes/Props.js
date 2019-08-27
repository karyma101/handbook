import React, { Component } from 'react'

class Props extends Component {
  constructor() {
    super()
    console.log('Props Constructor')
  }

  render() {
    console.log('Props Render')
    return (
      <h1>Fullscreen: {String(this.props.fullscreen)}</h1>
    )
  }
}

export default Props