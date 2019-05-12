import React, { Component } from 'react'
import SeasonDisplay from './SeasonDisplay'
import Loader from './Loader'

class App extends Component {
  state = {
    lat: null,
    errorMessage: ''
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    )
  }

  //helper method, to avoid conditional rendering
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }
    if (!this.state.errorMessage && !this.state.lat) {
      return <Loader />
    }
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>
  }
}

export default App
