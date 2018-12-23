import React, { Component } from 'react'
import './App.css'
import { Switch, Route, Link } from 'react-router-dom'
import { Home, About, Photography, Contact } from './components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="left">
          <div class="brand">
            <img src="./img/logo.jpg" alt=""/>
            <h1 class="brand_title">M. Photography</h1>
          </div>

          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/photography">Photography</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        <div class="right">
          <Switch>
            <Route
              path="/" exact
              component={<Home />}
            ></Route>

            <Route
              path="/about"
              component={<About />}
            ></Route>

            <Route
              path="/photography"
              component={<Photography />}
            ></Route>

            <Route
              path="/contact" 
              component={<Contact />}
            ></Route>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
