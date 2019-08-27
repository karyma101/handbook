import React, { Component, Fragment } from 'react'
import Props from './Props'

class Classes extends Component {
  constructor() {
    console.log('Classes Constructor')
    super()
    this.state = {
      fullscreen: true
    }
  }

  render() {
    console.log('Classes Render')
    return (
      <Fragment>
        <h1>Classes Component</h1>
        <Props fullscreen={this.state.fullscreen} />
      </Fragment>
    )
  }
}

export default Classes