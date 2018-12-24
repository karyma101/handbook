import React, { Component } from 'react'
import './App.css'
import { Switch, Route, Link } from 'react-router-dom'
import { Home, About, Photography, Contact } from './components'

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <span className="navbar-brand">
            {/* <img src="./img/logo.jpg" width="40" height="40" class="d-inline-block align-top" alt=""/> */}
            <span>M. Photography</span>
          </span>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

        <div className = "collapse navbar-collapse d-md-flex flex-md-row-reverse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/"><span className="nav-link active">Home</span></Link>
            </li>
            <li className="nav-item">
              <Link to="/about"><span className="nav-link active">About</span></Link>
            </li>
            <li className="nav-item">
              <Link to="/photography"><span className="nav-link active">Photography</span></Link>
            </li>
            <li className="nav-item">
              <Link to="/contact"><span className="nav-link active">Contact</span></Link>
            </li>
          </ul>
        </div>
        </nav>

        <div>
          <Switch>
            <Route
              path="/" exact
              component={Home}
            ></Route>

            <Route
              path="/about"
              component={About}
            ></Route>

            <Route
              path="/photography"
              component={Photography}
            ></Route>

            <Route
              path="/contact" 
              component={Contact}
            ></Route>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
