import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <NavLink to="/home" activeClassName="active">Home</NavLink>
        <NavLink to="/examples" activeClassName="active">Examples</NavLink>
      </div >
    )
  }
}

export default Navbar