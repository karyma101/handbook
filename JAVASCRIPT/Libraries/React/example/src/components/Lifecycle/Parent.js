import React from 'react'
import Child from './Child'

class Parent extends React.Component {

  constructor() {
    super()
    console.log('Parent Constructor')
  }

  //mounting

  componentDidCatch() {
    console.log('Parent Component Did Catch')
  }

  componentDidMount() {
    console.log('Parent Component Did Mount')
  }

  //Updating

  shouldComponentUpdate() {
    console.log('Parent Should Component Update')
  }

  componentDidUpdate() {
    console.log('Parent Component Did Update')
  }

  //Unmounting

  componentWillUnmount() {
    console.log('Parent Component Will Unmount')
  }

  getSnapshotBeforeUpdate() {
    console.log('Parent Get Snapshot Before Update')
  }

  render() {
    return (
      <React.Fragment>
        <h1>Parent</h1>
        <Child />
      </React.Fragment>
    )
  }
}

export default Parent