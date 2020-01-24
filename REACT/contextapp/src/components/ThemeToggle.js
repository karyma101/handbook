import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

class ThemeToggle extends Component {
  render(){
    return (
      <ThemeContext.Consumer>{({toggleTheme})=>{
        return (
          <button onClick={toggleTheme}>Toggle the theme</button>
        )
      }}
      </ThemeContext.Consumer>
    )
  }
}

export default ThemeToggle